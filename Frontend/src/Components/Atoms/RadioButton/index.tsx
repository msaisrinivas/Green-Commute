import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { ThemeProvider } from '@mui/styles';
import { theme } from '../../../Theme';

const BpRadio = (props: any) => {
  return (
    <ThemeProvider theme={theme}>
      <Radio
        disableRipple
        sx={{ color: theme.palette.green?.three }}
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        {...props}
      />
    </ThemeProvider>
  );
}

export default function CustomizedRadiosAtom() {
  return (
    <FormControl data-testid="CheckBox1">
      <RadioGroup
        defaultValue="female"
        aria-labelledby="demo-customized-radios"
        name="customized-radios" >
        <FormControlLabel sx={{ fontFamily: theme.typography.body1.fontFamily }} value="yes" control={<BpRadio />} label="" />
        <FormControlLabel sx={{ fontFamily: theme.typography.body1.fontFamily }} value="no" control={<BpRadio />} label="" />
      </RadioGroup>
    </FormControl>
  );
}

const BpIcon = styled('span')({
  borderRadius: '50%',
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgba(74, 186, 173, 1)'
      : 'inset 0 0 0 1px rgba(16,22,26,.1), inset 0 -1px 0 rgba(16,22,26,.0)',
    backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',

  'input:disabled ~ &': 
      {
        boxShadow: 'none',
        background:
          theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(74, 186, 173, 1)',
      },
})

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#4ABAAD',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    padding: 0,
    marginTop: -8,
    width: 16,
    height: 16,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },

});