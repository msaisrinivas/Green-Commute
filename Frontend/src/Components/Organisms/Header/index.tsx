import { Box, Typography } from '@mui/material'
import { ReactComponent as Avatar } from "../../../images/icons/Avatar.svg"
import { ReactComponent as Notification } from "../../../images/icons/notificationHeader.svg"
import { ReactComponent as Message } from "../../../images/icons/messageHeader.svg"
import { ReactComponent as Location } from "../../../images/icons/locationHeader.svg"
import { ReactComponent as Logo } from "../../../images/icons/logo.svg"
import "./index.css"
import { theme } from '../../../Theme'

export interface LocationProp {
  location?: string
}
export const Header = (props: LocationProp) => {
  const { location } = props
  return (

    <Box data-testid="header" className="mainBox" sx={{
      display: "flex",
      justifyContent: "space-between", maxWidth: "1366", width: "100%", height: "80",
      backgroundColor: theme.palette.green?.one
    }}>

      <Box style={{ display: "flex", justifyContent: "space-between", width: "678px" }}>

        <Box sx={{ marginTop: "24px", marginBottom: "24px", marginLeft: "40px" }}>
          <Logo data-testid="svgIcon" width={"205"} height={"40"} />
        </Box>

        <Box className='searchBarBox' style={{
          border: "solid 1px",
          borderLeftColor: theme.palette.green?.one, borderRightColor: theme.palette.green?.one,
          borderTopColor: theme.palette.green?.one, borderBottomColor: theme.palette.light?.four
        }}>

          <div>
            <Location data-testid="svgIcon" className='locationIcon' />
          </div>

          <Typography sx={{
            fontFamily: theme.typography.body1.fontFamily,
            height: "22px", marginLeft: "30px", color: theme.palette.light?.four,
            transform: 'translate(14px, 3px)'
          }}>{location}
          </Typography>

        </Box>
      </Box>

      <Box className='rightmenu'>

        <Message data-testid="svgIcon" style={{
          width: "22px",
          height: "24px",
          left: "1100px",
          top: "22px",
          paddingBottom: '22px',
          paddingRight: '30px'
        }} />

        <Notification data-testid="svgIcon" style={{
          width: "22px",
          height: "24px",
          left: "1200px",
          top: "22px",
          paddingBottom: '22px',
          paddingRight: '30px'
        }} />

        <Avatar data-testid="svgIcon" style={{
          width: "36px",
          height: "36px",
          left: "1290px",
          top: "22px",
          paddingBottom: '18px',
          paddingRight: '20px'
        }} />

      </Box>

    </Box>

  )
}
