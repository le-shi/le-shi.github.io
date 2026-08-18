(function () {
  const root = document.documentElement;
  const storedTheme = localStorage.getItem("field-guide-theme");
  if (storedTheme) root.dataset.theme = storedTheme;

  document.querySelectorAll(".theme-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const next = root.dataset.theme === "light" ? "dark" : "light";
      root.dataset.theme = next;
      localStorage.setItem("field-guide-theme", next);
    });
  });

  const year = document.getElementById("footer-year");
  if (year) year.textContent = `© ${new Date().getFullYear()} LE SHI`;
})();
