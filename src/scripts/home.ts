const skillSelectId = "skill-select";

const skillCoursesSelector = "[data-skill-courses]";

initHome();

function initHome() {
  const skillSelect = document.getElementById(skillSelectId);
  skillSelect?.addEventListener("change", (e) => {
    document
      .querySelectorAll("[data-skill-courses]")
      .forEach((el) => el.classList.add("hidden"));

    document
      .querySelector(
        `[data-skill-courses="${(e.target as HTMLInputElement).value}"]`,
      )
      ?.classList.remove("hidden");
  });
}
