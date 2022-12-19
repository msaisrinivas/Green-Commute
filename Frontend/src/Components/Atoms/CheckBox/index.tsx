import { Checkbox } from "@mui/material";
import './index.css';

export interface CheckBoxprops {
    checked?: boolean,
    onChange?: (e: React.SyntheticEvent) => void,
    value?: string
}

export const CheckBox = (props: CheckBoxprops) => {
    const { checked, onChange, value } = props
    return <Checkbox data-testid="CheckBox" checked={checked}
         onChange={onChange} value={value} className="css-ejr8v6-MuiButtonBase-root-MuiCheckbox-root" 
         sx={{
            color: "#D6D6D6",
            borderWidth:"1px !important",
            '&.Mui-checked': {
                color: "#30A193",
            },
            paddingRight:"6px",
            paddingTop:"0px",
            paddingBottom:"2px",

            }} />
}