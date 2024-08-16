/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'container-image': "url('./src/assets/images/app-bg.webp')"
      },
      colors: {
        "background-50": "var(--background-50)",
        "background-100": "var(--background-100)",
        "background-200": "var(--background-200)",
        "background-300": "var(--background-300)",
        "background-400": "var(--background-400)",
        "background-500": "var(--background-500)",
        "background-600": "var(--background-600)",
        "background-700": "var(--background-700)",
        "background-800": "var(--background-800)",
        "background-900": "var(--background-900)",
        
        "foreground-50": "var(--foreground-50)",
        "foreground-100": "var(--foreground-100)",
        "foreground-200": "var(--foreground-200)",
        "foreground-300": "var(--foreground-300)",
        "foreground-400": "var(--foreground-400)",
        "foreground-500": "var(--foreground-500)",
        "foreground-600": "var(--foreground-600)",
        "foreground-700": "var(--foreground-700)",
        "foreground-800": "var(--foreground-800)",
        "foreground-900": "var(--foreground-900)",
        
        "primary-50": "var(--primary-50)",
        "primary-100": "var(--primary-100)",
        "primary-200": "var(--primary-200)",
        "primary-300": "var(--primary-300)",
        "primary-400": "var(--primary-400)",
        "primary-500": "var(--primary-500)",
        "primary-600": "var(--primary-600)",
        "primary-700": "var(--primary-700)",
        "primary-800": "var(--primary-800)",
        "primary-900": "var(--primary-900)",
      },
    },
  },
  plugins: [],
};
