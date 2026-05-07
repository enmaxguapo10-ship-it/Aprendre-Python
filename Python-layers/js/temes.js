const current = location.pathname.split("/").pop(); // ex: index.html
document.querySelectorAll(".menu a").forEach(a => {
  const href = a.getAttribute("href");
  const file = href.split("/").pop();
  if (file === current || (current === "" && file === "index.html")) {
    a.setAttribute("aria-current", "page");
  }
});