// src/themes/dark.ts
import { extend } from './utils';
import base from './base';
const colors = require('tailwindcss/colors');

export default extend(base, {
    backgroundPrimary: '#25283D',
    backgroundSecondary: '#363A59',
    textPrimary: '#E6E6EF',
    textSecondary: '#C1C1D7',
});
