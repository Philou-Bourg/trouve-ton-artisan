// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,ts,scss}', // Inclut tous les fichiers HTML, TypeScript et SCSS dans le répertoire src
    '!./src/**/*header.scss', // Exclut les fichiers header.scss
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Couleur personnalisée
        secondary: '#6EE7B7',
        dark: '#0F172A',
        textPrimary: '#00497C', // Couleur du texte
        ellipseBlue: '#0074C7', // Couleur de l'ellipse
        bgLight: '#F1F8FC', // Background des rectangles
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Famille de polices
      },
      fontSize: {
        'step-lg': '24px',
        'step-md': '16px',
        'step-sm': '12px',
        'step-normal': '11px', // Taille plus petite pour les très petits écrans (390px)
      },
      spacing: {
        'step-ellipse': '50px',
        'step-box': '337px',
      },
      screens: {
        normal: '390px', // Breakpoint spécifique pour les mobiles normaux
        sm: '640px',
        md: '768px',
        lg: '1024px',
        custom: '1127px', // Ajout d'un breakpoint personnalisé
        xl: '1280px',
      },
    },
  },
  plugins: [],
};