/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        minecraft: {
          green: '#55FF55',
          dark: '#1a1a1a',
          gray: '#2a2a2a',
        }
      },
      fontFamily: {
        minecraftia: ['Minecraftia', 'monospace'],
      },
    },
  },
  plugins: [],
}
