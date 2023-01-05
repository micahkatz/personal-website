// src/themes/index.ts
import base from './base';
import dark from './dark';
import { IThemes } from './utils';

/**
 * The default theme to load
 */
export const DEFAULT_THEME: string = 'base';
export const DARK_THEME: string = 'dark';

export const themes: IThemes = {
    base,
    dark,
};
