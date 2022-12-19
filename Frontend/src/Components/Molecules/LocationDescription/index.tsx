import { Box, Grid, Typography } from '@mui/material'
import {ReactComponent as CurrentLocation} from "../../../images/icons/currentMapView.svg"
import {ReactComponent as LocationMapView} from "../../../images/icons/redlocation.svg"
import {ReactComponent as Swap} from "../../../images/icons/swap.svg"
import "./index.css"
import { theme } from '../../../Theme'

export const Location = () => {
  return (
    <Box className='outerBoxLoc' style={{display:"flex",justifyContent:"space-around"}}>
        <Grid sx={{display:"flex",flexDirection:"column",justifyContent:"center",marginLeft:'-10px'}}>
            <Grid style={{display:"flex",alignItems:"center"}}>
                <CurrentLocation style={{paddingLeft:"1px"}} data-testid='currentLoc' />
                <Typography variant="subtitle2" sx={{fontSize:"12px",lineHeight:"16px",color:theme.palette.black?.one,paddingLeft:"8px"}}>E Maredpally,Secundrabad</Typography>
            </Grid>
            <Grid className='dots' sx={{flexDirection:'column'}} >   
                <span className='dot'></span><span className='dot'></span><span className='dot'></span>
            </Grid>
            <Grid style={{display:"flex",alignItems:"center"}}>
                <LocationMapView data-testid='locationLogo' />
                <Typography variant="subtitle2" sx={{fontSize:"12px",lineHeight:"16px",color:theme.palette.black?.one,paddingLeft:"8px"}}>Hitech City, Telangana, Hyderabad</Typography> 
            </Grid>
         </Grid>
         <Grid sx={{display:"flex",flexDirection:"column",justifyContent:"center",fill:theme.palette.black?.two}}>
            <Swap data-testid='swap' />
         </Grid>
    </Box>
  )
}




