/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
        },
        colors: {
            background: '#000000',
		    grey_level_1: '#131417',
            grey_level_2: '#18191D',
            primary_text_selection: '#FFFFFF',
            grey_level_3: '#282A31',
            unselected_state: '#666666',
            success: '#0AC18E',
            grey_level_4: '#808287',
            grey_level_5: '#46474A',
            grey_level_6: '#424345',
            grey_level_7: '#89898B'
        },

        extend: {
            colors: {
                cyan: '#9cdbff',
            },
            spacing: {
                '96': '24rem',
                '128': '32rem',
            }
        },
    },
    plugins: [],
}

