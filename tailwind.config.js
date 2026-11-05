/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				brand: {
					DEFAULT: '#FF6B00',
					light: '#F97316',
					dark: '#EA580C',
				},
			},
			backdropBlur: {
				sm: '4px',
			},
		},
	},
	plugins: [],
}
