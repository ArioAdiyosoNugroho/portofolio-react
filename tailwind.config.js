/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
      theme: {
        extend: {
          colors: {
            primary: {
              DEFAULT: '#1a7a8a',
              dark:    '#0f5c6b',
              darker:  '#0c4a5a',
              light:   '#e0f2f5',
            },
            brand: {
              dark:   '#111318',
              mid:    '#1e2228',
              grey:   '#6b7280',
              border: '#e5e7eb',
              light:  '#f9fafb',
            },
            accent: '#fdb213',
          },
          fontFamily: {
            display: ['"Syne"', 'sans-serif'],
            body:    ['"DM Sans"', 'sans-serif'],
          },
          boxShadow: {
            float:   '0 8px 32px rgba(0,0,0,0.12)',
            card:    '4px 8px 24px rgba(0,0,0,0.06)',
            primary: '0 8px 24px rgba(26,122,138,0.28)',
          },
          borderRadius: {
            card: '20px',
            xl2:  '24px',
          },
        },
      },
  plugins: [],
}
