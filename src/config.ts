export const SITE_URL = "https://ayongulik.github.io";
export const BASE_PATH = "/web";

export const LEARNING_TRACKS = {
  "analisis-data": [
    {
      level: 0,
      courses: [
        {
          title: "Algoritma Menggunakan Python",
          path: "level-0/algoritma-menggunakan-python",
          available: true,
          primary_course: true,
        },
      ],
    },
    {
      level: 1,
      courses: [
        {
          title: "Pengolahan & Visualisasi Data dengan Python",
          path: "level-1/pengolahan-dan-visualisasi-data-dengan-python",
          available: true,
          primary_course: true,
        },
        {
          title: "Relational Database & SQL",
          path: "",
          available: false,
          primary_course: false,
        },
      ],
    },
    {
      level: 2,
      courses: [
        {
          title: "Statistika & Machine Learning Dasar",
          path: "",
          available: false,
          primary_course: false,
        },
        {
          title: "Data Wrangling & Scraping",
          path: "",
          available: false,
          primary_course: false,
        },
      ],
    },
  ],
  "web-dev": [
    {
      level: 0,
      courses: [
        {
          title: "HTML, CSS & Javascript Dasar",
          path: "",
          available: false,
          primary_course: true,
        },
      ],
    },
    {
      level: 1,
      courses: [
        {
          title: "Pembuatan Web Service dengan Node.js",
          path: "",
          available: false,
          primary_course: true,
        },
        {
          title: "Relational Database & SQL",
          path: "",
          available: false,
          primary_course: false,
        },
      ],
    },
    {
      level: 2,
      courses: [
        {
          title: "Implementasi UI dengan React.js",
          path: "",
          available: false,
          primary_course: false,
        },
        {
          title: "Typescript Dasar",
          path: "",
          available: false,
          primary_course: false,
        },
      ],
    },
    {
      level: 3,
      courses: [
        {
          title: "Static Site Generator dengan Astro.js",
          path: "",
          available: false,
          primary_course: false,
        },
      ],
    },
  ],
};
