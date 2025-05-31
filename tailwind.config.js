// tailwind.config.js
module.exports = {
  // Include all HTML files in root or subfolders
  content: ["./*.html", "./**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#6B21A8",        // morado profundo
        secondary: "#E11D74",      // magenta eléctrico
        accent: "#00F0FF",         // azul turquesa neón
        backgroundDark: "#1F1B2E", // gris azulado oscuro
        textLight: "#EDEDED",      // blanco roto
      },
    },
  },
  plugins: [],
};

// Rebuild command (ensure config is picked up):
// npx tailwindcss -c ./tailwind.config.js -i ./input.css -o ./styles.css --minify
