module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        navbackground: "#011b30",
        primary: '#022a4d',
        primaryLight: '#003969',
        headings: "#033159",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
