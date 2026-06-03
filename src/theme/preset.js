import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

// All visual styling for the site is described here as design tokens.
// No hand-written CSS rules are used for component look-and-feel.
export const CvPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{indigo.50}',
      100: '{indigo.100}',
      200: '{indigo.200}',
      300: '{indigo.300}',
      400: '{indigo.400}',
      500: '{indigo.500}',
      600: '{indigo.600}',
      700: '{indigo.700}',
      800: '{indigo.800}',
      900: '{indigo.900}',
      950: '{indigo.950}'
    },
    borderRadius: {
      none: '0',
      xs: '4px',
      sm: '6px',
      md: '10px',
      lg: '14px',
      xl: '20px'
    },
    focusRing: {
      width: '2px',
      style: 'solid',
      color: '{primary.color}',
      offset: '2px'
    },
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}'
        }
      },
      dark: {
        surface: {
          0: '#0b1120',
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}'
        }
      }
    }
  },
  components: {
    card: {
      root: {
        borderRadius: '{border.radius.xl}',
        shadow: '0 8px 24px -12px rgba(15, 23, 42, 0.25)'
      },
      title: {
        fontWeight: '700'
      },
      body: {
        padding: '1.5rem',
        gap: '1rem'
      }
    },
    tag: {
      root: {
        borderRadius: '{border.radius.lg}',
        fontWeight: '600',
        padding: '0.35rem 0.75rem'
      }
    },
    chip: {
      root: {
        borderRadius: '{border.radius.lg}'
      }
    },
    timeline: {
      eventMarker: {
        size: '1.25rem',
        borderRadius: '50%',
        borderWidth: '2px',
        background: '{primary.color}',
        borderColor: '{primary.color}'
      },
      eventConnector: {
        color: '{surface.300}',
        size: '2px'
      }
    },
    button: {
      root: {
        borderRadius: '{border.radius.lg}',
        paddingX: '1rem',
        paddingY: '0.55rem'
      }
    },
    selectbutton: {
      root: {
        borderRadius: '{border.radius.lg}'
      }
    },
    avatar: {
      root: {
        borderRadius: '{border.radius.xl}'
      }
    },
    divider: {
      root: {
        borderColor: '{surface.200}'
      }
    }
  }
});
