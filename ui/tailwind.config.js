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
				prefix + "pt-{padding}",
				prefix + "pb-{padding}",
				prefix + "px-{padding}",
				prefix + "py-{padding}",
				prefix + "m-{margin}",
				prefix + "w-{width}",
				prefix + "h-{height}",
				prefix + "z-{zIndex}",
				prefix + "rounded-{borderRadius}",
				prefix + "border-{color}",
				prefix + "border-{borderWidth}",
				prefix + "shadow-{boxShadow}",
				prefix + "font-{fontWeight}",
				prefix + "font-{fontFamily}",
				prefix + "leading-{lineHeight}",
				prefix + "tracking-{letterSpacing}",
				prefix + "cursor-{cursor}",
				prefix + "opacity-{opacity}",
				prefix + "justify-{justifyContent}",
			],
		}),
	],
};
