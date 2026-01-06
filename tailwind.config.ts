import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Enterprise SaaS Color Palette
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
          950: '#0a1929',
        },
        accent: {
          blue: '#3b82f6',
          teal: '#14b8a6',
          purple: '#8b5cf6',
          soft: '#60a5fa',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-enterprise': 'linear-gradient(135deg, #102a43 0%, #243b53 50%, #334e68 100%)',
        'gradient-hero': 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)',
        'gradient-subtle': 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
