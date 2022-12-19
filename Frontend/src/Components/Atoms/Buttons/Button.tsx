import { Button} from "@mui/material";
import React from "react";
import { makeStyles } from '@mui/styles';
import {theme} from '../../../Theme/index';

interface ButtonProps {
    startIcon?: React.ReactNode,
    endIcon?: React.ReactNode,
    variant?: "text" | "outlined" | "contained" ,
    style?: React.CSSProperties,
    label?: React.ReactNode,
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => void;
    disabled?: boolean;
    classing?:string;
    className?:string;
}

export const ButtonComponent = (props: ButtonProps) => {
    const classes = useStyles();
    let className;
    if(props.classing==='next')  {className = classes.next}
    if(props.classing==='save')  {className = classes.save}
    if(props.classing==='iconBtn')  {className = classes.iconBtn}
    
    return (
            <Button 
            startIcon={props.startIcon}
            endIcon={props.endIcon}
            variant={props.variant}
            style={props.style}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            onClick={props.onClick}
            disabled={props.disabled}
            className={className}>
                {props.label}
            </Button>
    )
} 

const useStyles = makeStyles({
    next:{
        fontSize: '12px',
        fontWeight: '700px',
        lineHeight: '16px',
        fontFamily: 'Montserrat !important',
        fontStyle: 'normal',
        textTransform: 'none',
        width: '150px',
        height: '40px',
        backgroundColor: theme.palette.green?.one,
        borderRadius: '8px',
        '&:hover':{
            backgroundColor: '#30A193;',
        },
        '&:active':{
            backgroundColor:theme.palette.green?.three,
        }
    },
    iconBtn:{
            height: '44px',
            padding:'0px 0px !important',
            minWidth:'44px ',
            backgroundColor: theme.palette.green?.one,
            borderRadius: '60%',
            '&:hover':{
                backgroundColor: '#30A193;',
            },
            '&:active':{
                backgroundColor:'#30A193',
            }
    },
    save: {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            textTransform: 'none',
            borderColor: theme.palette.green?.three,
            width: '92px',
            height: '32px',
            fontWeight: '700px',
            fontSize: '12px',
            lineHeight: '16px',
            color: theme.palette.green?.three,
    }
});
