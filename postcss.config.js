module.exports = {
	plugins: [
		"tailwindcss",
		[
			"@fullhuman/postcss-purgecss",
			{
				// Required to avoid purgecss from removing global styles
				whitelist: ["html", "body"],
				content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
				defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
			},
		],
		"postcss-preset-env",
	],
};
