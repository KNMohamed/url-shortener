import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import { TextField, TextFieldProps } from '@mui/material';

// ------------------- Type Definitions -------------------

// Define the custom props for the component
interface CustomTextInputProps {
  small?: boolean;
  tiny?: boolean;
}

// Combine MUI's TextFieldProps with our custom props
type TextInputProps = TextFieldProps & CustomTextInputProps;

// ------------------- Custom Styled Component with MUI's styled utility -------------------

const StyledTextField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== 'small' && prop !== 'tiny',
})<CustomTextInputProps>(({ theme, small, tiny }) => ({
  // Common styles
  '& .MuiOutlinedInput-root': {
    position: 'relative',
    width: 'auto',
    flex: '1 1 auto',
    height: '72px',
    padding: '0 84px 0 40px',
    fontSize: '20px',
    letterSpacing: '0.05em',
    color: '#444',
    backgroundColor: 'white',
    boxShadow: '0 10px 35px rgba(50, 50, 50, 0.1)',
    borderRadius: '100px',
    border: 'none',
    transition: 'all 0.5s ease-out',
    
    // Focus state
    '&.Mui-focused': {
      boxShadow: '0 20px 35px rgba(50, 50, 50, 0.2)',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent !important',
      },
    },

    // Placeholder
    '& .MuiInputBase-input::placeholder': {
      fontSize: '16px',
      letterSpacing: '0.1em',
      color: '#888',
    },
    
    // Mobile responsiveness
    [theme.breakpoints.down('sm')]: {
      height: '56px',
      padding: '0 48px 0 32px',
      fontSize: '14px',
      borderBottomWidth: '5px',
      '& .MuiInputBase-input::placeholder': {
        fontSize: '14px',
      },
    },
  },

  // Small variant
  ...(small && {
    '& .MuiOutlinedInput-root': {
      width: '240px',
      height: '54px',
      marginRight: '32px',
      padding: '0 24px 2px',
      fontSize: '18px',
      borderBottom: '4px solid #f5f5f5',
      
      '& .MuiInputBase-input::placeholder': {
        fontSize: '13px',
      },

      [theme.breakpoints.down('sm')]: {
        width: '200px',
        height: '40px',
        padding: '0 16px 2px',
        fontSize: '13px',
        borderBottomWidth: '3px',
      },
    },
  }),

  // Tiny variant
  ...(tiny && {
    '& .MuiOutlinedInput-root': {
      flex: '0 0 auto',
      width: '280px',
      height: '32px',
      margin: 0,
      padding: '0 16px 1px',
      fontSize: '13px',
      borderBottomWidth: '1px',
      borderRadius: '4px',
      boxShadow: '0 4px 10px rgba(100, 100, 100, 0.1)',
      
      '&.Mui-focused': {
        boxShadow: '0 10px 25px rgba(50, 50, 50, 0.1)',
      },

      '& .MuiInputBase-input::placeholder': {
        fontSize: '12px',
        letterSpacing: 0,
      },
      
      [theme.breakpoints.down('md')]: {
        width: '240px',
        height: '28px',
      },
      [theme.breakpoints.down('sm')]: {
        width: '180px',
        height: '24px',
        padding: '0 8px 1px',
        fontSize: '12px',
        borderBottomWidth: '3px',
      },
    },
  }),
}));

// ------------------- Functional Component -------------------

const ShortenerTextInput = forwardRef<HTMLDivElement, TextInputProps>((props, ref) => {
  const { small, tiny, ...rest } = props;
  
  return (
    <StyledTextField
      variant="outlined"
      slotProps={{
        input: { disableUnderline: true }
      }}
      inputRef={ref}
      {...rest}
      small={small}
      tiny={tiny}
    />
  );
});

ShortenerTextInput.displayName = 'TextInput';

export default ShortenerTextInput;