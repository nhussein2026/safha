module.exports = {
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx}",
    "node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "sans-serif"], // Arial as a fallback sans font
        Noto: ["Noto Sans Gunjala Gondi", "sans-serif"], // Adding your custom font
        Amiri: ["Amiri", "serif"],
        Marhey: ["Marhey", "sans-serif"],
      },
      colors: {
        "snow-white": "#F8FAFC", // Light background
        "dark-navy": "#0F172A", // Dark background
        "deep-ocean": "#1E293B", // Dark text
        "mountain-mist": "#64748B", // Secondary text
        "morning-fog": "#E2E8F0", // Borders
        "sky-blue": "#0EA5E9", // Links/Headings
        "royal-periwinkle": "#4F46E5", // CTAs
        "emerald-growth": "#10B981", // Positive
        "amber-glow": "#F59E0B", // Highlights
      },

      // hero section background settings
      animation: {
        morph: "morph 8s ease-in-out infinite",
        float: "float 12s ease-in-out infinite",
        gradient: "gradient 8s linear infinite",
        reveal: "reveal 1.5s cubic-bezier(0.2, 1, 0.3, 1)",
        slide: "slide 1s cubic-bezier(0.2, 1, 0.3, 1)",
        scale: "scale 1s cubic-bezier(0.2, 1, 0.3, 1)",
      },
      keyframes: {
        morph: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-20px) scale(1.05)" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        reveal: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slide: {
          "0%": { transform: "translateX(-20px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        scale: {
          "0%": { transform: "scale(0.95)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
  corePlugins: {
    preflight: false, // Disable Tailwind's default styles if there's a conflict
  },
};
