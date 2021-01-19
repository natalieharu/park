const tailwind = require('tailwindcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const postcssShortSize = require('postcss-short-size');
const postcssHexRgba = require('postcss-hexrgba'); 

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    plugins: [
        tailwind('./tailwind.config.js'),
        isProd
			? cssnano({ preset: 'default' })
			: null,
		isProd
			? autoprefixer()
			: null,
        postcssShortSize(),
        postcssHexRgba(),
    ],
};