/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}', // For App Router (Next.js 13+)
      './pages/**/*.{js,ts,jsx,tsx,mdx}', // For Pages Router
      './components/**/*.{js,ts,jsx,tsx,mdx}', // For components
      './src/**/*.{js,ts,jsx,tsx,mdx}' // If using a src folder
    ],
    theme: {
      extend: {
        colors: {
            lightHover:'#fcf4ff',
            darkHover:'#2a004a',
            darkTheme:'#11001f',
        },
        fontFamily: {
           Outfit: ['Outfit', 'sans-serif'],
           Ovo: ['Ovo', 'serif'],
        },
        boxShadow:{
          'black':'4px 4px 0 #000',
          'white':'4px 4px 0 #fff',
        },
        gridTemplateColumns:{
          'auto': 'repeat(auto-fit,minmax(200px,1fr))'

        }
      },

    },
    plugins: [],
  }