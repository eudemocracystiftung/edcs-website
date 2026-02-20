import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
		extend: {
			colors: {
				'primary-color': 'var(--primary-color)',
				'secondary-color': 'var(--secondary-color)'
			},
			fontFamily: {
				serif: ['Inria Sans', 'serif']
			}
		}
	},

  plugins: [require("@tailwindcss/typography")]
} as Config;
