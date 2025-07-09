module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
      ],
    },
    extend: {
      colors: {
        primary: '#222',
        accent: '#FFD600',
        graybg: '#f6f7f4',
      },
      fontWeight: {
        extrabold: '900',
      },
    },
  },
  plugins: [],
};
