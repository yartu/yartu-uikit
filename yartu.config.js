/* eslint-disable */
const defaultTheme = require('tailwindcss/defaultTheme')

const globalConfig = {
  mod: 'jit',
  content: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        'loading': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(150%)' },
        },
        'loading-v2': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        'loading': 'loading 1s ease-in-out infinite alternate',
        'loading-v2': 'loading-v2 1s ease-in-out infinite',
      },
      colors: {
        'BLACK-1': '#1f2938ff',
        'BLACK-2': '#394c66ff',
        'BLACK-3': '#161d27ff',
        'BLACKOVERLAY': '#394c6680',
        'BLUE': '#3663f2ff',
        'BLUE-2': '#546a7b',
        'BUD': '#b1cf5f',
        'HOVER-BLUE': '#0E3DD3ff',
        'HOVER-BLUE-0.2': '#0E3DD333',
        'BORDER': '#e5ebf5ff',
        'BROWN': '#b99488ff',
        'DARKBROWN': '#402c26ff',
        'FUCHSIA': '#d946efff',
        'GREEN': '#49ab5eff',
        'GREEN-2': '#6ED37Eff',
        'GREEN': '#c33149',
        'GREY-1': '#9aa1b4ff',
        'GREY-2': '#d0d3dcff',
        'GREY-3': '#f4f5f6ff',
        'GREY-4': '#f9fafaff',
        'GREY-5': '#d0d8e3ff',
        'GREY-6': '#7b849dff',
        'GREY-7': '#969db1ff',
        'GREY-8': '#0e0e0e33',
        'GREY-9': '#eeeeeeff',
        'GREY-10': '#969db180',
        'INDIGO': '#6467f2ff',
        'LIGHTBLUE-1': '#b2ccffff',
        'LIGHTBLUE-2': '#c1d5f5ff',
        'LIGHTBLUE-3': '#dae3f1ff',
        'LIGHTBLUE-4': '#e1eefbff',
        'LIGHTBLUE-5': '#ebf0feff',
        'LIGHTBLUE-6': '#f8fafdff',
        'LIGHTBLUE-7': '#ebeff5ff',
        'LIGHTBLUE-8': '#98aef6ff',
        'OCEAN': '#0ea5e9ff',
        'ORANGE': '#f97316ff',
        'PINK': '#ec4899ff',
        'RED': '#eb6363ff',
        'RED-2': '#ff6542',
        'TEAL': '#2dd4bfff',
        'KEPPEL': '#44bba4',
        'EMERALD': '#6ED37E',
        'VIOLET': '#8b5cf6ff',
        'WHITE': '#ffffffff',
        'YELLOW': '#f1ae04ff',
        'BLUE-20': 'rgba(54, 99, 242, 0.2)',
        'RED-20': 'rgba(235, 99, 99, 0.2)',
        'GREEN-20': 'rgba(73, 171, 94, 0.2)',
        'YELLOW-20': 'rgba(241, 174, 4, 0.2)',
        'ORANGE-20': 'rgba(249, 115, 22, 0.2)',
        'TEAL-20': 'rgba(45, 212, 191, 0.2)',
        'INDIGO-20': 'rgba(100, 103, 242, 0.2)',
        'DARKBROWN-20': 'rgba(64, 44, 38, 0.2)',
        'BROWN-20': 'rgba(185, 148, 136, 0.2)',
        'OCEAN-20': 'rgba(14, 165, 233, 0.2)',
        'VIOLET-20': 'rgba(139, 92, 246, 0.2)',
        'FUCHSIA-20': 'rgba(217, 70, 239, 0.2)',
        'PINK-20': 'rgba(236, 72, 153, 0.2)',
      },
      spacing: {
        '63': '268px',
        '17': '70px',
        '55': '216px',
      },
      width: {
        '1/2-2': 'calc(24.99% - 8px)'
      },
      fontSize: {
        '3xs': '0.5rem',
        '2xs': '0.625rem',
        '6.5xl': '4rem',
        'heading-1': ['32px', '40px'],
      },
      boxShadow: {
        '1': '0px 16px 40px rgba(13, 30, 91, 0.08)',
        '2': '0px 6px 12px rgba(13, 30, 91, 0.08)',
        '3': '0px 20px 80px rgba(13, 30, 91, 0.08)',
        '4': '0px 1px 2px 0px #00000033',
      },
      borderWidth: {
        '3': '3px',
      },
      backgroundSize: {
        '24': '24px 24px',
        '32': '32px 32px',
        '56': '56px 56px',
        '80': '80px 80px',
        '96': '96px 96px',
        '120': '120px 120px',
        '156': '156px 156px',
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24',
        '25': '25',
        '26': '26',
        '27': '27',
        '28': '28',
        '29': '29',
        '31': '31',
        '32': '32',
        '33': '33',
        '34': '34',
        '35': '35',
        '36': '36',
        '37': '37',
        '38': '38',
        '39': '39',
        '41': '41',
        '42': '42',
        '43': '43',
        '44': '44',
        '45': '45',
        '46': '46',
        '47': '47',
        '48': '48',
        '49': '49',
        '50': '50',
        '51': '51',
        '1000': '1000',
        '1001': '1001',
        '1002': '1002',
      },
      minWidth: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '80': '20rem',
      },
      maxWidth: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '80': '20rem',
      },
      minHeight: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
      },
      maxHeight: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
      }
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
      'sm': '639.98px',
      'md': '767.98px',
      'lg': '1023.98px',
      'xl': '1279.98px',
      '2xl': '1535.98px',
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked', 'active', 'before'],
      borderColor: ['checked', 'active', 'before'],
      ringColor: ['hover', 'active', 'before'],
    },
  },
  plugins: [

  ],
};

let projectConfig = {};

try {
  projectConfig = require('../../../yartu.config.js');
} catch {
  console.info('You can create yartu.config.js to override theme configs.');
}

const mergedConfig = { ...globalConfig, ...projectConfig };

mergedConfig.content.push('./node_modules/@yartu/ui-kit/components/**/*.{vue,js,ts,jsx,tsx}');
mergedConfig.plugins.concat([require('@tailwindcss/line-clamp'),
require('tailwind-scrollbar-hide')
]);

module.exports = mergedConfig