/** @type {import('tailwindcss').Config} */

const prefix = "";

module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
		"./safelist.txt",
	],
	prefix: prefix,
	theme: {
		extend: {},
	},
	plugins: [
		require("tailwind-safelist-generator")({
			path: "./safelist.txt",
			patterns: [
				prefix + "text-{textColor}",
				prefix + "text-{fontSize}",
				prefix + "bg-{backgroundColor}",
				prefix + "p-{padding}",
				prefix + "px-{padding}",
				prefix + "py-{padding}",
				prefix + "pt-{padding}",
				prefix + "pb-{padding}",
				prefix + "m-{margin}",
				prefix + "mx-{margin}",
				prefix + "my-{margin}",
				prefix + "mt-{margin}",
				prefix + "mb-{margin}",
				prefix + "w-{width}",
				prefix + "h-{height}",
				prefix + "z-{zIndex}",
				prefix + "rounded-{borderRadius}",
				prefix + "border-{borderColor}",
				prefix + "border-{borderWidth}",
				prefix + "shadow-{boxShadow}",
				prefix + "font-{fontWeight}",
				prefix + "font-{fontFamily}",
				prefix + "leading-{lineHeight}",
				prefix + "cursor-{cursor}",
				prefix + "opacity-{opacity}",
				prefix + "flex",
				prefix + "flex-{flex}",
				prefix + "justify-{objectPosition}", // wrong but gets some of them
				prefix + "items-{objectPosition}", // wrong but gets some of them
				prefix + "self-{objectPosition}", // wrong but gets some of them
				prefix + "text-{objectPosition}", // wrong but gets some of them
				prefix + "underline",
			],
		}),
	],
};
