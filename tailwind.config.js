/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ] ,
  theme: {
    container: {},
    extend: {
      fontFamily: {
        yekanBold: ["iranYekan-bold", "sans-serif"],
        yekanMedium: ["iranYekan-medium", "sans-serif"],
        yekanLight: ["iranYekan-light", "sans-serif"],
      },
      colors: {
        white: {
          1: "#FFFFFF",
        },
        black: {
          1: "#15171C",
        },
        orange: {
          1: "#F97535",
        },
        gray: {
          1: "#71788B",
          2:"#F6F7F9"
        },
      },
      backgroundImage: {},
      keyframes: {},
    },
  },
  plugins: [],
};

// const config = {
//   darkMode: ["class"],
//   content: [
//    "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   prefix: "",
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     extend: {
//       colors: {
//         white: {
//           1: "#FFFFFF",
//           2: "rgba(255, 255, 255, 0.72)",
//           3: "rgba(255, 255, 255, 0.4)",
//           4: "rgba(255, 255, 255, 0.64)",
//           5: "rgba(255, 255, 255, 0.80)",
//         },
//         black: {
//           1: "#15171C",
//           2: "#222429",
//           3: "#101114",
//           4: "#252525",
//           5: "#2E3036",
//           6: "#24272C",
//         },
//         orange: {
//           1: "#F97535",
//         },
//         gray: {
//           1: "#71788B",
//         },
//       },
//       backgroundImage: {},
//       keyframes: {},
//     },
//   },
// };

// export default config;
