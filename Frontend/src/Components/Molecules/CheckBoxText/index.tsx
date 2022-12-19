import { FormControlLabel, FormGroup, Typography } from '@mui/material'
import { theme } from '../../../Theme'
import { CheckBox } from '../../Atoms/CheckBox';

export interface CheckBoxTextProps {
  label?: string,
  check?: boolean,
  onChange?: (e: React.SyntheticEvent) => void;
}

export const CheckBoxText = (props: CheckBoxTextProps) => {
  const { label, check, onChange } = props
  return (
    <div>
      <FormGroup>
        <FormControlLabel 
          value={label}
          control={<CheckBox value={label} onChange={onChange} />}
          checked={check}
          label={<Typography variant="body2" sx={{fontSize:"14px", fontFamily:theme.typography.body1.fontFamily ,height:'23px',
                    fontWeight:theme.typography.body2.fontFamily, color: theme.palette.black?.two }}>{label}
                </Typography>}
          labelPlacement="end"
        />
      </FormGroup>
    </div> 
  )
}

