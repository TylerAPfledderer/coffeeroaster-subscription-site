import {extendTheme} from '@chakra-ui/react';

export default extendTheme({
  colors: {
    brand: {
      500: '#0E8784',
      600: '#66D2CF',
      700: '#0c7471',
    },
    'accent-primary': {
      500: '#fdd6ba',
    },
    'accent-secondary': {
      500: '#F4F1EB',
    },
    gray: {500: '#83888f'},
    darkGray: {500: '#333d4b'},
  },
  fonts: {
    heading:
      'Fraunces,"Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif',
    body: 'Barlow, "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  layerStyles: {
    navOpened: {
      maxHeight: 'full',
      opacity: '1',
    },
    navClosed: {
      maxHeight: '0',
      opacity: '0',
    },
  },
  components: {
    Heading: {
      sizes: {
        '4xl': {
          fontSize: 'clamp(2.488rem, 2.6vw + 1.9rem, 4.209rem)',
          lineHeight: 'clamp(3rem, 4.5vw + 1.9rem, 6rem)',
        },
        '3xl': {
          fontSize: 'clamp(2.074rem, 1.6vw + 1.7rem, 3.157rem)',
          lineHeight: 'clamp(3rem, 2.3vw + 2.5rem, 4.5rem)',
        },
        '2xl': {
          fontSize: 'clamp(1.728rem, 1vw + 1.5rem, 2.369rem)',
          lineHeight: '3rem',
        },
        xl: {
          fontSize: 'clamp(1.44rem, 0.5vw + 1.3rem, 1.777rem)',
          lineHeight: '3rem',
        },
      },
      defaultProps: {
        size: '3xl',
      },
    },
    Button: {
      baseStyle: {
        fontFamily: 'heading',
      },
    },
  },
});
