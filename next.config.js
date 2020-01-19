module.exports = {
	exportTrailingSlash: true,
	exportPathMap: () => ({
		"/": { page: "/" },
	}),
	target: "serverless",
};
