// src/themes/dark.ts
import { extend } from './utils';
import base from './base';
const colors = require('tailwindcss/colors');

export default extend(base, {
    backgroundPrimary: '#0A0B0A',
    backgroundSecondary: '#7b7b7b',
    textPrimary: '#fff',
    textSecondary: '#d6d3d1',
});
