import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import rupee from "../../../images/icons/rupee.svg";
import {theme} from "../../../Theme/index";
import { Icons } from '../../Atoms/IconsAtom';

interface MyProps {
    Icon: string;
}

const useStyles = makeStyles({
    felxClass:{
        display:"flex",
        backgroundColor:theme.palette.light?.four,
    },
    mainBox:{
        maxWidth:"357px",
        boxShadow: "0px 2px 8px rgba(125, 125, 125, 0.12)",
        width:"100%",
        height:"60px",
        justifyContent:"space-between",
        alignItems:"center",
    },

    bookNow:{
        alignItems:"center",
        paddingRight:"8px",
        color:theme.palette.green?.six
    }

})

export const OlaCard = (props:MyProps) =>{
    const classes = useStyles();
        return(
                <Box className= {classes.felxClass + " " + classes.mainBox}>
                    <Box className= {classes.felxClass}>
                        <Box sx={{paddingTop:'8px',paddingLeft:'8px'}}><Icons source={props.Icon} height={'40px'} width={'40px'} /></Box>
                        <Box>
                            <Box sx={{paddingLeft:'5px'}}>
                            <Typography variant='caption'>Ola</Typography>
                            </Box>
                            <Box className= {classes.felxClass}>
                            <Typography variant='caption2' sx={{color:'#656e66',width:'89px',paddingLeft:'5px'}}>Approximately  </Typography>
                            <div><Icons source={rupee} height={'9px'} width={'10px'} style={{padding:'0px 2px 9px 27px'}} /> </div><Typography variant='caption2'>45</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box className= {classes.felxClass + " " + classes.bookNow}>
                    <Typography variant='caption'>Book Now</Typography>
                    </Box>
                </Box>
        )
}  