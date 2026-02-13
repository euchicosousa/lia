import type { Config } from "tailwindcss";

export default {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],

	theme: {
		extend: {
			colors: {
				"lia-blue": "#8394A8",
				"lia-rose": "#FABCB5",
				"lia-tomato": "#F59A93",
				"lia-neutral": "#5A6061",
				"lia-green": "#86CBB7",
			},
		},
	},
	plugins: [],
} satisfies Config;
