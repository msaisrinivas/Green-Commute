import { Box, styled, TextField } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete';
import { ReactComponent as Work } from "../../../images/icons/work.svg"
import LocationIcon from "../../../images/icons/searchJobLocation.svg"
import { ReactComponent as SearchIcon } from "../../../images/icons/search.svg"
import { ButtonComponent } from '../../Atoms/Buttons/Button';
import "./index.css";
import { Icons } from '../../Atoms/IconsAtom';
import { theme } from '../../../Theme';

interface SearchProps {
  skills: readonly unknown[],
  locations: readonly unknown[];
  getLoc:(loc:any)=>void
  getRole:(role:any)=>void
}

let loc:string,role:string;
  export const SearchJob = (props: SearchProps) => {
  const searchLoc = (event: any | null) => {
    loc=(event.target.innerHTML)
    if(event.target.value==="") {
      loc=(event.target.value)
    }
  }
  const searchRole = (event: any | null) => {
    role=(event.target.innerHTML)
    if(event.target.value==="") {
      role=(event.target.value)
    }
  }
  
  return (
    <Box sx={{ paddingTop: '9px' }}>
      <OverallBox data-testid='searchJob' >
        <InnerBox>
          <Work style={{ marginLeft: "15px" }} />
          <Autocomplete fullWidth freeSolo
            options={props.skills} onChange={(event) => searchRole(event)}
            data-testid='skill'
            renderInput={(params) => <SearchField data-testid='search'  onChange={(event) => searchRole(event)} 
              sx={{ transform: 'translate(-1px,0px)' }} placeholder='Search Skills' {...params} />}
          />
        </InnerBox>
        <Icons source={LocationIcon} />
        <Autocomplete fullWidth freeSolo
          options={props.locations}
          disableClearable onChange={(event) => searchLoc(event)}
          data-testid='location'
          renderInput={(params) => <SearchField  onChange={(event) => searchLoc(event)}
            sx={{ transform: 'translate(-3px, 1px)' }} placeholder='Location' {...params} />}
        />
        <ButtonComponent  variant='contained' onClick={() => {props.getLoc(loc);props.getRole(role)}} style={{
          backgroundColor: theme.palette.green?.three,
          borderRadius: '60%', height: '44px', minWidth: '44px', marginRight: '3px', boxShadow: 'none', padding: '0px 0px'
        }}
          startIcon={<div style={{ paddingLeft: '10px', paddingTop: '10px' }}><SearchIcon /></div>} />    </OverallBox>
    </Box>
  )
}

const InnerBox = styled(Box)({
  width: '100%',
  borderRight: '1px solid',
  borderColor: "#D6D6D6",
  height: '36px',
  display: 'flex',
  alignItems: 'center',
  marginLeft: '15px',
  marginRight: '10px',
});
const OverallBox = styled(Box)({
  height: '50px',
  display: 'flex',
  width: '108vh',
  alignItems: 'center',
  borderRadius: "32px",
  backgroundColor: "white"
});
const SearchField = styled(TextField)({
  width: '100%',
  border: '0px',

  '& .MuiInput-underline:before': {
    borderBottom: '2px solid white',
    transition: 'none ',
  },
  '& .MuiInput-underline:hover': {
    borderBottom: 'none',
    transition: 'none ',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
    transition: 'none ',
  },
  //to change the border-color of textfield
  '& .MuiOutlinedInput-root': {
    '& > fieldset': { border: '0px' },
  },
  '& .MuiOutlinedInput-root.Mui-focused': {
    borderColor: "#D6D6D6",
    '& > fieldset': { border: '0px' },
  },
});