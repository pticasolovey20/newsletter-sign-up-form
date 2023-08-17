/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			xs: "375px",
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1200px",
			xxl: "1440px",
		},

		extend: {
			colors: {
				primary: { tomato: "hsl(4, 100%, 67%)" },

				neutral: {
					"dark-slate-grey": "hsl(234, 29%, 20%)",
					"charcoal-grey": "hsl(235, 18%, 26%)",
					grey: "hsl(231, 7%, 60%)",
					white: "hsl(0, 0%, 100%)",
				},
			},
		},
	},
	plugins: [],
};
