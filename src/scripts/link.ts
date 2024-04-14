const linkSelector = "[data-link-search]";

initLink();

function initLink() {
  const currentUrl = new URL(window.location.href);
  const links = document.querySelectorAll(linkSelector);

  for (const link of links) {
    link.setAttribute("href", link.getAttribute("href") + currentUrl.search);
  }
}
