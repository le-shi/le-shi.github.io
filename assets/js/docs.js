(function () {
  const config = {
    linux: { file: "README.md", label: "LINUX MINT", title: "Linux Field Notes", accent: "var(--linux)" },
    windows: { file: "README-windows.md", label: "WINDOWS 11", title: "Windows Migration Log", accent: "var(--windows)" }
  };
  const requested = new URLSearchParams(location.search).get("doc");
  const key = Object.hasOwn(config, requested) ? requested : "linux";
  const current = config[key];
  const content = document.getElementById("document-content");
  const toc = document.getElementById("table-of-contents");
  let searchableSections = [];

  document.documentElement.style.setProperty("--doc-accent", current.accent);
  document.querySelector(`[data-doc-link="${key}"]`).classList.add("active");
  document.getElementById("sidebar-platform").textContent = current.label;
  document.getElementById("sidebar-title").textContent = current.title;
  document.getElementById("sidebar-file").textContent = current.file;
  document.getElementById("source-link").href = `https://github.com/le-shi/le-shi.github.io/blob/master/${current.file}`;
  document.title = `${current.title} / Le Shi`;

  const slugify = (text) => text.toLowerCase().trim()
    .replace(/<[^>]+>/g, "")
    .replace(/[^\p{Letter}\p{Number}\s-]/gu, "")
    .replace(/\s+/g, "-") || "section";

  async function loadDocument() {
    try {
      if (!window.marked || !window.DOMPurify) throw new Error("Markdown renderer unavailable");
      const response = await fetch(current.file);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const source = await response.text();
      const renderer = new marked.Renderer();
      const usedIds = new Map();
      renderer.heading = ({ tokens, depth }) => {
        const text = tokens.map((token) => token.raw || token.text || "").join("");
        const base = slugify(text);
        const count = usedIds.get(base) || 0;
        usedIds.set(base, count + 1);
        const id = count ? `${base}-${count + 1}` : base;
        return `<h${depth} id="${id}">${marked.parseInline(text)}</h${depth}>`;
      };
      const html = marked.parse(source, { renderer, gfm: true, breaks: false });
      const masthead = `<header class="document-masthead"><span>${current.label} / FIELD DOCUMENT</span><h1>${current.title}</h1><p>内容直接同步自 <code>${current.file}</code>，原始记录保持不变。</p></header>`;
      content.innerHTML = masthead + DOMPurify.sanitize(html, { ADD_ATTR: ["target"] });
      enhanceDocument();
    } catch (error) {
      content.innerHTML = `<div class="error-state"><strong>文档载入失败</strong><p>${escapeHtml(error.message)}。请通过本地服务器或 GitHub Pages 访问本站，并检查网络连接。</p></div>`;
    }
  }

  function enhanceDocument() {
    const headings = [...content.querySelectorAll("h2, h3")];
    toc.innerHTML = headings.map((heading) => `<a href="#${heading.id}" data-level="${heading.tagName.slice(1)}">${escapeHtml(heading.textContent)}</a>`).join("");
    searchableSections = headings.map((heading, index) => {
      const chunks = [];
      let node = heading.nextElementSibling;
      while (node && !/^H[23]$/.test(node.tagName)) { chunks.push(node.textContent); node = node.nextElementSibling; }
      return { id: heading.id, title: heading.textContent, text: chunks.join(" ").trim(), index };
    });

    content.querySelectorAll("pre").forEach((pre) => {
      const code = pre.querySelector("code");
      const language = [...(code?.classList || [])].find((name) => name.startsWith("language-"));
      pre.dataset.language = language ? language.replace("language-", "") : "command";
      const button = document.createElement("button");
      button.className = "copy-code";
      button.type = "button";
      button.textContent = "COPY";
      button.addEventListener("click", async () => {
        await navigator.clipboard.writeText(code?.textContent || pre.textContent);
        showToast();
      });
      pre.append(button);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        toc.querySelectorAll("a").forEach((link) => link.classList.toggle("active", link.hash === `#${entry.target.id}`));
      });
    }, { rootMargin: "-18% 0px -70%" });
    headings.forEach((heading) => observer.observe(heading));
  }

  function escapeHtml(value) {
    const span = document.createElement("span");
    span.textContent = value;
    return span.innerHTML;
  }

  function showToast() {
    const toast = document.getElementById("toast");
    toast.classList.add("visible");
    setTimeout(() => toast.classList.remove("visible"), 1600);
  }

  function updateProgress() {
    const max = document.documentElement.scrollHeight - innerHeight;
    const percent = max > 0 ? Math.min(100, Math.round(scrollY / max * 100)) : 0;
    document.getElementById("reading-progress").style.width = `${percent}%`;
    document.getElementById("reading-progress-label").textContent = `READING PROGRESS ${percent}%`;
  }
  addEventListener("scroll", updateProgress, { passive: true });

  const sidebar = document.querySelector(".docs-sidebar");
  const tocTrigger = document.querySelector(".toc-mobile-trigger");
  tocTrigger.addEventListener("click", () => {
    const open = sidebar.classList.toggle("open");
    tocTrigger.setAttribute("aria-expanded", String(open));
  });
  toc.addEventListener("click", () => { sidebar.classList.remove("open"); tocTrigger.setAttribute("aria-expanded", "false"); });

  const dialog = document.getElementById("search-dialog");
  const input = document.getElementById("search-input");
  const results = document.getElementById("search-results");
  document.querySelector(".search-trigger").addEventListener("click", () => { dialog.showModal(); setTimeout(() => input.focus(), 50); });
  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") { event.preventDefault(); dialog.showModal(); input.focus(); }
  });
  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    if (!query) { results.innerHTML = "<p>输入关键词开始搜索</p>"; return; }
    const matches = searchableSections.filter((section) => `${section.title} ${section.text}`.toLowerCase().includes(query)).slice(0, 20);
    results.innerHTML = matches.length ? matches.map((match) => `<button type="button" class="search-result" data-target="${match.id}"><strong>${escapeHtml(match.title)}</strong><span>${escapeHtml(match.text.slice(0, 110))}${match.text.length > 110 ? "…" : ""}</span></button>`).join("") : "<p>没有找到匹配内容</p>";
  });
  results.addEventListener("click", (event) => {
    const button = event.target.closest("[data-target]");
    if (!button) return;
    dialog.close();
    document.getElementById(button.dataset.target)?.scrollIntoView({ behavior: "smooth" });
  });

  loadDocument();
})();
