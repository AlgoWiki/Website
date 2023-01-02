/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.800"),
            a: {
              color: theme("colors.gray.900"),
              "text-underline-offset": "4px",
              "font-weight": "400",
              "&:hover": {
                color: theme("colors.gray.600"),
              },
            },
            strong: {
              "font-weight": "500",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
