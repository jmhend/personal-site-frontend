/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { },
    fontFamily: {
      'sans': ['Segoe UI', 'Roboto', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'],
      'serif': ['Lora', 'ui-serif', 'serif'],
    },
  },
  plugins: [],
}
