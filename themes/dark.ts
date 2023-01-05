// src/themes/dark.ts
import { extend } from './utils';
import base from './base';
const colors = require('tailwindcss/colors');

export default extend(base, {
    backgroundPrimary: 'rgb(37, 40, 61)',
    backgroundSecondary: 'rgb(54, 58, 89)',
    hoverBackground: 'rgb(54, 58, 89, 0.5)',
    textPrimary: '#E6E6EF',
    textSecondary: '#C1C1D7',
});
