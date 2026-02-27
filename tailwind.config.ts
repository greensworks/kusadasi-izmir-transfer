import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#F2C200",
        brandDark: "#111111",
        vipNavy: "#111111",
        pageBg: "#f4f4f4",
      },
      boxShadow: {
        soft: "0 12px 32px rgba(0,0,0,0.12)",
        cta: "0 10px 24px rgba(242,194,0,0.45)",
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at 12% 20%, rgba(242,194,0,0.22), transparent 36%), radial-gradient(circle at 88% 2%, rgba(0,0,0,0.12), transparent 40%)",
      },
    },
  },
};

export default config;
