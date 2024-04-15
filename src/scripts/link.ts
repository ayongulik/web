const linkSelector = "[data-link-search]";
const buttonShareId = "button-share";
const popupShareId = "popup-share";

initLink();

function initLink() {
  const currentUrl = new URL(window.location.href);
  const links = document.querySelectorAll(linkSelector);
  for (const link of links) {
    link.setAttribute("href", link.getAttribute("href") + currentUrl.search);
  }

  window._goodshare?.reNewAllInstance();

  window._goodshare?.setShareCallback(() => {
    const popupShare = document.getElementById(popupShareId);
    popupShare?.classList.add("hidden");
  });

  window.addEventListener("click", (e) => {
    const buttonShare = document.getElementById(buttonShareId);
    const popupShare = document.getElementById(popupShareId);
    const target = e.target as HTMLElement;

    const isButtonClicked = buttonShare?.contains(target);

    if (isButtonClicked) {
      popupShare?.classList.toggle("hidden");
    } else {
      const popupActive = !popupShare?.classList.contains("hidden");
      const isClickOutside = !popupShare?.contains(target);

      if (popupActive && isClickOutside) {
        popupShare?.classList.add("hidden");
      }
    }
  });
}
