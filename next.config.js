/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	async rewrites() {
		return [
			{
				source: '/termsandconditions',
				destination: '/html/index.html',
			},
		];
	},
};

module.exports = nextConfig;
