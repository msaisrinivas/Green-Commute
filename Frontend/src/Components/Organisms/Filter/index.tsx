import { Box, Button, Fade, Grid, Modal, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import "./index.css"
import closeIcon from "../../../images/icons/close.svg"
import { theme } from '../../../Theme'
import React, { useState } from 'react'
import { ReactComponent as FilterIcon } from "../../../images/icons/filter.svg"
import { CustomizedRadios } from '../../Molecules/RadioButtonText';
import { datePosted, distance, experienceLevel, jobType, transport } from '../../../Data/Cities';
import { ButtonComponent } from '../../Atoms/Buttons/Button';
import { FilterList } from '../../Molecules/FilterList';
import Chips from '../../Atoms/Chips';
import { Icons } from '../../Atoms/IconsAtom';

export let arrayValue: string[] = [];
arrayValue.push("Green Commute Routes")
const storeLabel = (e: React.SyntheticEvent) => {

  if ((e.target as HTMLInputElement).checked) {
    if ((e.target as HTMLInputElement).value === "yes") {
      if (arrayValue.map(each => each !== "Green Commute Routes")) {
        arrayValue.push("Green Commute Routes")
      }
    }
    else if ((e.target as HTMLInputElement).value === "no") {
      arrayValue = arrayValue.filter(val => val !== "Green Commute Routes");
    }
    else {
      arrayValue.push((e.target as HTMLInputElement).value)
    }
  }
  else {
    arrayValue = arrayValue.filter(val => val !== (e.target as HTMLInputElement).value);
  }
}
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
}

export const Filter = () => {
  const [open, setOpen] = React.useState<boolean>(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [fooKey, setFooKey] = useState<number>(1)
  const [chipValue,setChipValue] = useState<boolean>(true)
  const resetFilter = () => { 
    setFooKey(fooKey + 1);
    arrayValue = []
  }

  return (
    <Box data-testid="FilterTestId" sx={{width: '0px'}}>
      <ButtonComponent variant="contained" startIcon={<FilterIcon />} onClick={handleOpen} label="Filter" style={{
        width: '137px',
        height: '56px',
        fontWeight: '500px',
        fontSize: '14px',
        color: "black",
        lineHeight: '22px',
        marginLeft:'2vh',
        boxShadow:'none',
        marginTop:"6px",
        backgroundColor: theme.palette.light?.four,
        borderRadius: '32px',
        textTransform: 'none',
        fontFamily: theme.typography.body1.fontFamily
      }}></ButtonComponent>

      <Box className='filterBox ' sx={{position:'absolute',left:'43vh',top:'220px',height:"120px"}}>
        <ChipBox data-testid="ChipBox" sx={{}}>
          {arrayValue.map((item, key) => <Chips onDelete={()=>{arrayValue.splice(key,1);setChipValue(!chipValue)}} key={key} label={item} 
                    size="small" sx={{ backgroundColor: "white", borderRadius: "8px", marginLeft: "8px", height: "32px", marginTop: "8px",
                    transform: 'translate(0px, 86px)', }} />)}
        </ChipBox>
        { (arrayValue[0] != null && arrayValue.length !== 0) &&  <Typography className='clearText' onClick={resetFilter} sx={{
          maxWidth: "70px",width:'100%', height: "22px", paddingTop: "1%",transform: 'translate(19px, 88px)',
          fontWeight: theme.typography.body1.fontWeight,
          fontFamily: theme.typography.body1.fontFamily, cursor: "pointer", color: theme.palette.green?.three
        }}>{"Clear All"}
        </Typography>}
      </Box>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <form key={fooKey} style={{width:"71vh"}}>

            <Box className="innerBox" sx={style}>
              <div style={{ display: "flex", justifyContent: "end",marginTop:"-15px" }}><Icons onClick={handleClose} style={{ cursor: "pointer",transform:" translate(-1px, 11px)"}} source={closeIcon} height={"25px"} /></div>


              <Grid style={{ maxWidth: '546px',marginLeft:"26px",marginTop:"5%" }} container >

                <FilterList title={distance[0]} onChange={storeLabel} labelArray={distance.slice(1)} />
                <FilterList title={datePosted[0]} onChange={storeLabel} labelArray={datePosted.slice(1)} />

                <Grid className="tableDimensions">
                  <Typography variant="body1" fontFamily={theme.typography.body1.fontFamily} fontWeight={theme.typography.body1.fontWeight}>{"Green Commute"}</Typography>
                  <div style={{ marginLeft: "5px" }}>
                    <CustomizedRadios onChange={storeLabel} label1={"Yes"} label2={"No"} />
                  </div>
                </Grid>

                <FilterList title={jobType[0]} onChange={storeLabel} labelArray={jobType.slice(1)} />
                <FilterList title={experienceLevel[0]} onChange={storeLabel} labelArray={experienceLevel.slice(1)} />
                <FilterList title={transport[0]} onChange={storeLabel} labelArray={transport.slice(1)} />

              </Grid>
              <div style={{ display: "flex", justifyContent: "end",marginRight:"1vh",position:'absolute',top:'50vh',right:'4vh' }}>

                <Typography onClick={resetFilter} sx={{
                  fontWeight: theme.typography.body1.fontWeight,position:'absolute',left:'-24vh',top:'3vh',
                  fontFamily: theme.typography.body1.fontFamily, cursor: "pointer", color: theme.palette.green?.three
                }}>{"Clear All"}
                </Typography>

                <Button onClick={handleClose} sx={{backgroundColor: theme.palette.green?.six,textTransform: "none",position:'absolute',top:'2vh',
                                                 width: "101px",height: "32px",boxShadow:'none','&:hover':{backgroundColor: theme.palette.green?.six,boxShadow:'none'}}}
                                 variant='contained' >
                  <Typography variant="caption" sx={{ fontFamily: theme.typography.body1.fontFamily,paddingBottom:'2px', borderRadius:'8px',fontWeight: theme.typography.caption.fontWeight }}>{"Apply"}</Typography>
                </Button>
              </div>
            </Box>
          </form>
        </Fade>
      </Modal>
    </Box>
  );
}

const ChipBox = styled(Box)({
  maxWidth: "469px",
  maxHeight:'72px'
});
