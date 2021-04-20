import { DefaultTheme } from 'styled-components';

const myTheme: DefaultTheme = {
media: {
    tablet: "@media only screen and (min-width: 768px)",
    desktop: "@media only screen and (min-width: 1440px)",
},
colors: {
    blue: '#7C5DFA',
    medium_blue: '#9277FF',
    very_dark_blue: '#1E2139',
    dark_slate_blue: '#252945',
    lavender: '#DFE3FA',
    light_steel_blue: '#888EB0',
    cornflower_blue: '#7E88C3',
    black: '#0C0E16',
    tomato: '#EC5757',
    light_salmon: '#9277FF',
    light: '#F8F8FB',
    midnight: '#141625',
    white_lavender: '#F9FAFE'
},
};

export { myTheme };