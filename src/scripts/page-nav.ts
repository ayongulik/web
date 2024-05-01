import { LEARNING_TRACKS, BASE_PATH } from "../config";
import type { Course, TrackCourse, Track } from "../config";
import { linkTo } from "../utils/url";

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

  // add prev and next course menus based on track
  if (track && track.length > 1) {
    const currentLevel = getLevelFromUrl(currentUrl.pathname);
    const currentCourses =
      track.find((item) => item.level === currentLevel)?.courses ?? [];
    const currentCourseIndex =
      currentCourses.findIndex((course) =>
        currentUrl.pathname.includes(course.path),
      ) ?? 0;

    // level starts from 1
    const prevLevelIndex = currentLevel > 1 ? currentLevel - 2 : null;
    const nextLevelIndex = currentLevel <= track.length ? currentLevel : null;

    let prevCourse, nextCourse;
    if (currentCourseIndex > 0) {
      prevCourse = currentCourses[currentCourseIndex - 1];
    } else if (prevLevelIndex != null) {
      prevCourse = track[prevLevelIndex].courses.at(-1);
    }

    if (currentCourseIndex < currentCourses.length - 1) {
      nextCourse = currentCourses[currentCourseIndex + 1];
    } else if (nextLevelIndex != null) {
      nextCourse = track[nextLevelIndex].courses[0];
    }

    if (prevCourse) {
      sideNavbar.innerHTML =
        `<div class="mb-6">${navTemplate(prevCourse, track)}</div>` +
        sideNavbar.innerHTML;
    }

    if (nextCourse) {
      sideNavbar.innerHTML += `<div class="mt-6">${navTemplate(nextCourse, track)}</div>`;
    }
  }

  sideNavbar.innerHTML += `<p class="text-xs pt-2">*course dengan tanda lock belum tersedia</p>`;

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

function navTemplate(course: Course, track: TrackCourse[]) {
  const navLinkClass =
    "p-4 text-sm block border-b-2 border-b-slate-200 overflow-hidden whitespace-nowrap text-ellipsis";
  const searchParam = window.location.search;
  const level = track.find((item) =>
    item.courses.map((course) => course.path).includes(course.path),
  )?.level as number;

  return `<nav class="bg-slate-50 shadow rounded-lg">
    <div class="p-4 rounded-t-lg bg-slate-200">
      <p class="text-xs capitalize mb-1">Level ${level}</p>
    </div>
    <ol class="rounded-b-lg">
    ${
      course.available
        ? `<li><a href=${linkTo(course.path + searchParam)} class="${joinClass([navLinkClass, "hover:underline"])}">${course.title}</a></li>`
        : `<li><p class="${joinClass([navLinkClass, "flex gap-2 items-center text-slate-500"])}">${iconLock}${course.title}</p></li>`
    }
    </ol>
  </nav>
  `;
}

function joinClass(classes: Array<any>) {
  return classes.reduce((acc, curr) => acc + " " + (curr ?? ""), "");
}

function getLevelFromUrl(pathname: string) {
  const levelSlug = pathname.replace(BASE_PATH, "").split("/")[1] as string;
  return Number(levelSlug.replace("level-", ""));
}
