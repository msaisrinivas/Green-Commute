import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { ThemeProvider } from '@mui/styles';
import { theme } from '../../../Theme';
import { Typography } from '@mui/material';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },

  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#30A193',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },

});

const BpRadio = (props: any) => {
  return (
    <ThemeProvider theme={theme}>
      <Radio
        sx={{ color: theme.palette.green?.three }}
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        {...props}
      />
    </ThemeProvider>
  );
}

export interface RadioProps {
  label1?: string,
  label2?: string,
}

export interface RadioProps{
  onChange?: (e: React.SyntheticEvent) => any,
}

export const CustomizedRadios = (props: RadioProps) => {
  const { onChange } = props

  return (
    <FormControl data-testid="radioButton">
      <RadioGroup
      defaultValue="yes"
      aria-labelledby="demo-customized-radios"
      name="customized-radios">

        <FormControlLabel id="YesId" onChange={onChange}  sx={{ paddingTop: "5px", paddingBottom: "-9px" }}  className='firstRadioButton' value="yes" control={<BpRadio />} label={<Typography variant="body2"
            style={{ color: theme.palette.black?.two, fontFamily: theme.typography.h1.fontFamily, fontSize: "15px", fontWeight: theme.typography.body2.fontWeight }}>{props.label1}</Typography>} />
        <FormControlLabel id="NoId" onChange={onChange} className='secondRadioButton' value="no" control={<BpRadio />} label={<Typography variant="body2" sx={{ color: theme.palette.black?.two,
            fontFamily: theme.typography.h1.fontFamily, fontSize: "15px", fontWeight: theme.typography.body2.fontWeight }}>{props.label2}</Typography>} />

      </RadioGroup>
    </FormControl>
  );
}
