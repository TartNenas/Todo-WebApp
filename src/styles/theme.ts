export const theme = {
  colors: {
    primary: '#2196f3',
    secondary: '#f50057',
    background: '#f5f5f5',
    text: '#333333',
    white: '#ffffff',
    weeklyGreen: '#4CAF50',
    morningRed: '#FF6B6B',
    nightPurple: '#845EC2',
    gray: {
      light: '#e0e0e0',
      medium: '#9e9e9e',
      dark: '#616161'
    }
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px'
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px'
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: {
      small: '0.875rem',
      medium: '1rem',
      large: '1.25rem',
      xlarge: '1.5rem'
    }
  },
  borderRadius: {
    md: '4px',
    lg: '8px'
  },
  shadows: {
    small: '0 2px 4px rgba(0,0,0,0.1)',
    medium: '0 4px 8px rgba(0,0,0,0.1)',
    large: '0 8px 16px rgba(0,0,0,0.1)'
  }
}

export type Theme = typeof theme; 