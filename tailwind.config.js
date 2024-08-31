/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fg: ["Founders Grotesk"],
        icm: ["Icomoon"],
        nm: ["Neue Montreal"],
      },
      screens: {
        xs: "480px", // Custom screen size for extra small devices
        sm: "640px", // Small devices
        md: "768px", // Medium devices
        lg: "1024px", // Large devices
        xl: "1280px", // Extra large devices
        "2xl": "1536px", // 2x extra large devices
      },
    },
  },
  plugins: [],
};
