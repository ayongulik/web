const linkSelector = "[data-link-search]";
const buttonShareId = "button-share";
const popupShareId = "popup-share";

const buttonTanyaId = "button-tanya";
const popupTanyaId = "popup-tanya";

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

  window.addEventListener("click", dropdownClick(buttonShareId, popupShareId));
  window.addEventListener("click", dropdownClick(buttonTanyaId, popupTanyaId));
}

function dropdownClick(buttonDropdownId: string, dropdownId: string) {
  return (e: Event) => {
    const button = document.getElementById(buttonDropdownId);
    const popup = document.getElementById(dropdownId);
    const target = e.target as HTMLElement;

    if (button && target) {
      const isButtonClicked = button?.contains(target);

      if (isButtonClicked) {
        popup?.classList.toggle("hidden");
      } else {
        const popupActive = !popup?.classList.contains("hidden");
        const isClickOutside = !popup?.contains(target);

        if (popupActive && isClickOutside) {
          popup?.classList.add("hidden");
        }
      }
    }
  };
}
