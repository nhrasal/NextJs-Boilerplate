/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
	// enabled: process.env.ANALYZE === "true"
	enabled: false,
});

module.exports = withBundleAnalyzer({
	env: {
		appName: process.env.REACT_APP_ENV,
	},
	eslint: {
		dirs: ["."],
	},
	poweredByHeader: false,
	trailingSlash: false,
	basePath: "",
	// The starter code load resources from `public` folder with `router.basePath` in React components.
	// So, the source code is "basePath-ready".
	// You can remove `basePath` if you don't need it.
	output: "standalone",
	i18n: {
		defaultLocale: "en",
		locales: ["en", "bn"],
	},
	reactStrictMode: !!(process.env.REACT_APP_ENV === "production"),
	output: "standalone",
});
