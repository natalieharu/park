const plugin = require('tailwindcss/plugin');
const tailwindPseudoElements = require('tailwindcss-pseudo-elements');

const isProd = process.env.NODE_ENV === 'production';
const imgURL = '/img';

module.exports = {
	purge: [
		'./app/**/*.html',
		'./app/js/**/*.js',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
			},
		},
		fontFamily: {
			'fira-sans': ['Fira Sans', 'Arial', 'sans-serif']
		},
		extend: {
			colors: {
				'btn': '#62b1a0',
				'cta': '#92d7c8',
			},
			height: {
				'800': '750px',
				'600': '600px',
				'500': '500px',
			},
			width: {
				'130%': '130%',
				'150%': '150%',
			},
			fontSize: {
				'5xl': ['3rem', '1.35em'],
				'h1': ['calc(1.45rem + 2.5vw)', '1.35em'],
			},
			backgroundImage: theme => ({
				'offer': `url('${imgURL}/bg-header.jpg')`,
				'main': `url('${imgURL}/bg-main.jpg')`,
				'form': `url('${imgURL}/form-bg.jpg')`,
				'pro': `url('${imgURL}/bg-projects.jpg')`,
			}),
			borderWidth: {
				'16' : '16px'
			},
			scale: {
				'1000' : '10'
			},
		},
	},
	variants: {
		extend: {
			inset: ['before'],
			position: ['before'],
			backgroundColor: ['before'],
			backgroundOpacity: ['before'],
			padding: ['hover'],
			transform: ['before'],
			translate: ['before'],
			width: ['before'],
			zIndex: ['before'],
			scale: ['hover', 'group-hover'],
		},
	},
	plugins: [
		tailwindPseudoElements,
		plugin(function ({ addUtilities }) {
			addUtilities(
				{
					'.empty-content': {
						content: "''",
					},
				},
				['before'],
			);
		}),
	],
};
