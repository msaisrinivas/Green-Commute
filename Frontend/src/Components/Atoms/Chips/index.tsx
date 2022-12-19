import { Chip, SxProps, ThemeProvider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { ElementType, ReactElement, ReactNode } from "react";
import {ReactComponent as ClearIcon} from "../../../images/icons/close.svg";
import { theme } from "../../../Theme";

interface ChipProps{
  avatar?:ReactElement,
  classes?:Object,
  clickable?:boolean,
  color?:'default'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning',
  component?:ElementType,
  deleteIcon?: ReactElement,  
  disabled?: boolean,
  icon?: ReactElement,
  label?: ReactNode,
  onDelete?: (event: React.SyntheticEvent) => void,
  size?: 'medium'
  | 'small',
  sx?: SxProps,
  variant?: 'filled'
  | 'outlined',
}

function Chips(props:ChipProps) {
  const classes = useStyles(); 
  return (
    <ThemeProvider theme={theme}>
    <Chip
    className={classes.chipStyle}
    {...props}
    deleteIcon={<ClearIcon/>}
    />
    </ThemeProvider>
  );
}

const useStyles = makeStyles({
  chipStyle: {
    "& .MuiChip-label":{
      fontFamily: theme.typography.caption2?.fontFamily,
      fontWeight: theme.typography.caption2?.fontWeight,
      fontSize: theme.typography.caption2?.fontSize,
      lineHeight: theme.typography.caption2?.lineHeight,
      color: theme.palette.black?.two
    }
  },
});

export default Chips;
