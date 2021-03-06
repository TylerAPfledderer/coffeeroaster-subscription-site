import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  colors: {
    brand: {
      500: '#0E8784',
      600: '#66D2CF',
      700: '#0c7471',
    },
    accentPrimary: {
      500: '#fdd6ba',
    },
    accentSecondary: {
      500: '#F4F1EB',
    },
    gray: { 500: '#83888f' },
    darkGray: { 500: '#333d4b' },
  },
  fonts: {
    heading: 'Fraunces,"Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif',
    body: 'Barlow, "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  layerStyles: {
    layoutBase: {
      paddingX: { base: '6', md: '42px', lg: '80px' },
      maxWidth: '1440px',
      marginX: 'auto',
    },
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
        size: '2xl',
      },
    },
    Text: {
      baseStyle: {
        maxWidth: '444px',
      },
    },
    Button: {
      baseStyle: {
        fontFamily: 'heading',
      },
    },
    Link: {
      variants: {
        primaryButton: {
          alignItems: 'center',
          backgroundColor: 'brand.500',
          borderRadius: 'md',
          color: 'white',
          display: 'inline-flex',
          fontFamily: 'heading',
          fontSize: 'lg',
          fontWeight: 'semiBold',
          height: 12,
          justifyContent: 'center',
          lineHeight: '1.2',
          minW: 12,
          px: 6,
          position: 'relative',
          whiteSpace: 'nowrap',
          width: 'auto',
          _hover: {
            textDecoration: 'none',
            backgroundColor: 'brand.600',
          },
          _active: {
            backgroundColor: 'brand.700',
          },
        },
      },
    },
    Accordion: {
      baseStyle: {
        button: {
          fontSize: 'clamp(1.44rem, 0.5vw + 1.3rem, 1.777rem)',
          fontFamily: 'heading',
        },
      },
    },
  },
});
