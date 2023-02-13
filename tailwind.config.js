/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // spacing: {
    //   default from: https://tailwindcss.com/docs/customizing-spacing
    // }
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        primary: "rgb(245 241 239)",
        highlight: "rgb(82 115 232)",
        "highlight-muted": "rgb(236 240 254)",
        hover: "rgb(59 86 186)",
        success: "rgb(26 137 100)",
        error: "rgb(148 27 16)",
        info: {
          DEFAULT: "rgb(13 134 171)",
          light: "rgb(235 250 255)",
        },
        heading: {
          DEFAULT: "rgb(30 30 31)",
          primary: "rgb(30 30 31)",
          secondary: "rgb(115 112 110)",
        },
        body: {
          secondary: "rgb(115 112 110)",
          tertiary: "rgb(179 175 171)",
        },
        warning: {
          DEFAULT: "rgb(233 130 12)",
          light: "rgba(255 250 235)",
        },
        brdr: "rgb(217 212 208)",
        // variables for the redesigned stuff
        redi: {
          placeholder: "rgb(181, 187, 196);",
          borders: "rgb(201, 207, 216)",
          dark: "rgb(30, 30, 31)",
          medium: "rgb(114, 122, 141)",
          light: "rgb(173, 177, 183)",
          "primary-dark": "rgb(29, 52, 134)",
          primary: "rgb(82, 115, 232)",
          "primary-toggle": "rgb(63, 97, 218)",
          "primary-50": "rgb(168, 184, 243)",
          secondary: "rgb(97, 218, 253)",
          "light-bg": "rgb(243, 248, 255)",
          "danger-bg": "rgb(248, 236, 237)",
          danger: "rgb(240, 45, 90)",
          "danger-dark": "rgb(179, 17, 55)",
        },
      },
      fontFamily: {
        "sans": ["var(--font-qanelas)", "sans-serif"],
      },
      fontSize: {
        body: "16px",
        "body-s": ["12px", "16px"],
        "body-m": ["14px", "20px"],
        "body-l": ["16px", "24px"],
        "heading-s": ["20px", "24px"],
        "heading-m": ["24px", "32px"],
        // redesign sizes
        "redisize-xs": ["13px", "1.25"],
        "redisize-s": ["14px", "1.4"],
        "redisize-ss": ["15px", "1.4"],
        "redisize-m": ["16px", "1.4"],
        "redisize-mm": ["18px", "1.4"],
        "redisize-heading-s": ["18px", "1.1"],
        "redisize-heading-m": ["20px", "1.1"],
        "redisize-heading-mm": ["22px", "1.1"],
        "redisize-heading-l": ["24px", "1.1"],
      },
      gridTemplateColumns: {
        // redesign: sidebar full width for large screens
        sidebar: "minmax(225px, 20%) 1fr",
        "sidebar-xl": "minmax(250px, 25%) 1fr",
        options: "minmax(150px, 200px) 1fr",
        "options-xl": "minmax(175px, 235px) 1fr",
      },
      dropShadow: {
        "floating-blue": [
          "0 10px 15px rgba(82, 115, 232 , 0.14)",
          "0 4px 3px rgba(82, 115, 232 , 0.3)",
        ],
        "floating-grey": [
          "0 10px 12px rgba(201, 207, 216 , 0.14)",
          "0 4px 3px rgba(201, 207, 216 , 0.2)",
        ],
      },
      boxShadow: {
        "control-grey": [
          "0 3px 3px rgba(180, 177, 186 , 0.6)",
          "0 8px 20px rgba(201, 207, 216 , 0.34)",
        ],
        "control-blue": [
          "0 3px 3px rgba(29, 52, 134 , 0.8)",
          "0 8px 20px rgba(82, 115, 232 , 0.4)",
        ],
        "control-light-blue": [
          "0 5px 8px rgba(29, 52, 134 , 0.4)",
          "0 8px 20px rgba(82, 115, 232 , 0.2)",
        ],
        "control-red": [
          "0 3px 3px rgba(195, 31, 69, 0.8)",
          "0 8px 20px rgba(240, 45, 90, 0.4)",
        ],
        "control-light-red": [
          "0 5px 8px rgba(195, 31, 69, 0.4)",
          "0 8px 20px rgba(240, 45, 90, 0.2)",
        ],
      },
    },
    container: {
      padding: "1rem",
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    function ({ addVariant }) {
      addVariant("child", "& > *")
      addVariant("child-hover", "& > *:hover")
      addVariant("sibling", "& + *")
    },
  ],
}
