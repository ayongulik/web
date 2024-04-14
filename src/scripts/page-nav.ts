import { LEARNING_TRACKS, BASE_PATH } from "../config";
import { linkTo } from "../utils/url";

type Track = keyof typeof LEARNING_TRACKS;
type Level = (typeof LEARNING_TRACKS)["analisis-data"][0];

const sideNavbarId = "side-navbar";
const sideNavbarCurrentSelector = ".side-navbar-current";

const iconLock = `
<span class="flex-none">
  <svg
    class="w-6 h-6"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H7a1 1 0 0 1-1-1v-7c0-.6.4-1 1-1Z"
    />
  </svg>
</span>
`;

initPageNav();

function initPageNav() {
  const sideNavbar = document.getElementById(sideNavbarId) as HTMLElement;
  const currentUrl = new URL(window.location.href);
  const trackParams = currentUrl.searchParams.get("track") as Track;
  const track = LEARNING_TRACKS[trackParams];

  // add prev and next level menus based on track
  if (track && track.length > 1) {
    const currentLevel = getLevelFromUrl(currentUrl.pathname);

    const prevLevel = currentLevel > 0 ? track[currentLevel - 1] : null;
    const nextLevel =
      currentLevel < track.length ? track[currentLevel + 1] : null;

    if (prevLevel) {
      sideNavbar.innerHTML =
        `<div class="mb-6">${navTemplate(prevLevel)}</div>` +
        sideNavbar.innerHTML;
    }

    if (nextLevel) {
      sideNavbar.innerHTML += `<div class="mt-6">${navTemplate(nextLevel, !!nextLevel.courses.find((course) => !course.available))}</div>`;
    }
  }

  // set current active nav visible
  const currentActiveNav = document.querySelector(
    sideNavbarCurrentSelector,
  ) as HTMLElement;
  if (currentActiveNav) {
    currentActiveNav.scrollIntoView({
      block: "end",
      inline: "nearest",
    });
  }
}

function navTemplate(levelItem: Level, bottomNote = false) {
  const navLinkClass =
    "p-4 text-sm block border-b-2 border-b-slate-200 overflow-hidden whitespace-nowrap text-ellipsis";

  return `<nav class="bg-slate-50 shadow rounded-lg">
    <div class="p-4 rounded-t-lg bg-slate-200">
      <p class="text-xs capitalize mb-1">Level ${levelItem.level}</p>
    </div>
    <ol class="rounded-b-lg">
    ${levelItem.courses
      .map(({ title, path, available }) => {
        return available
          ? `<li><a href=${linkTo(path)} class="${navLinkClass}" data-link-search>${title}</a></li>`
          : `<li><p class="${joinClass([navLinkClass, "flex gap-2 items-center text-slate-500"])}">${iconLock}${title}</p></li>`;
      })
      .join("")}
    </ol>
  </nav>
  ${bottomNote ? '<p class="text-xs pt-2">*course dengan tanda lock belum tersedia</p>' : ""}
  `;
}

function joinClass(classes: Array<any>) {
  return classes.reduce((acc, curr) => acc + " " + (curr ?? ""), "");
}

function getLevelFromUrl(pathname: string) {
  const levelSlug = pathname.replace(BASE_PATH, "").split("/")[1] as string;
  return Number(levelSlug.replace("level-", ""));
}
