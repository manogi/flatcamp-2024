module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    extend: {
        colors: {
            'black': '#090617',
            'purple': '#2B295A',
            'green': '#3D4734',
            'brown': '#675F53',
            'ruddy': '#C65228',
            'tan': '#EBDAC0',
            'lace': '#FEF3E2',
            'tangerine': '#FFA688',
            'orange': '#FFC67D',
            'yellow': '#FFE78A',
            'yellow-light': '#FFEEC7',
        },
        fontFamily: {
            'hero': ['GrandsansRough', 'sans-serif'],
            'display': ['rift', 'sans-serif'],
            'sans': ['inter', 'sans-serif'],
        },
        fontSize: {
            'huge': '7rem ',
            'base': '17px',
        },
        screens: {
            'lg': '1120px'
        },
        typography: ({
            theme
        }) => ({
            green: {
                css: {
                    '--tw-prose-body': theme('colors.green'),
                    '--tw-prose-headings': theme('colors.green'),
                    '--tw-prose-links': theme('colors.ruddy'),
                    '--tw-prose-bold': theme('colors.green'),
                    '--tw-prose-counters': theme('colors.green'),
                    '--tw-prose-bullets': theme('colors.green'),
                    '--tw-prose-hr': theme('colors.green'),
                    '--tw-prose-quotes': theme('colors.green'),
                    '--tw-prose-quote-borders': theme('colors.green'),
                    '--tw-prose-captions': theme('colors.green'),
                    '--tw-prose-code': theme('colors.green'),
                    '--tw-prose-pre-code': theme('colors.green'),
                    '--tw-prose-pre-bg': theme('colors.green'),
                    '--tw-prose-th-borders': theme('colors.green'),
                    '--tw-prose-td-borders': theme('colors.green'),
                },
            },
        }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
