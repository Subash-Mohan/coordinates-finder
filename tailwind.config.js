/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				mdl: "900px", // Custom breakpoint between md (768px) and lg (1024px)
			},
		},
		plugins: [],
	},
};
