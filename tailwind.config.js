/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                negative: 'var(--color-negative)',
                positive: 'var(--color-positive)',
                'primary-background': 'var(--background-primary)',
                'sec-background': 'var(--background-sec)',
                'primary-text': 'var(--color-text-primary)',
                'secondary-text': 'var(--color-text-secondary)',
            },
        },
        backgroundColor: (theme) => ({
            ...theme('colors'),
        }),
    },
    plugins: [],
};