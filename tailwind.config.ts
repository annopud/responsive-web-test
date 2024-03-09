import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
        ['custom-purple']: {
          400: '#8F6BE8',
          500: '#5E3DB3',
          600: '#2F6FEB',
        },
        ['custom-white']: '#FFFFFF',
        ['custom-gray']: {
          300 : '#E7E7E7',
          400 : '#F5F4F9',
          500 : '#C2C2C2',
        },
        ['custom-dark-blue']: '#090C35',
      },
    },
  },
  plugins: [],
};
export default config;
