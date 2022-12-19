import { Box, Grid} from "@mui/material";
import { theme } from "../../../Theme";
import "./landingPage.css";
import { ReactElement } from "react";

interface LandingProps {
  homestepper?: JSX.Element;
  Logo?: ReactElement;
  sideImage?: JSX.Element;
}

export const LandingTemplate = (props: LandingProps) => {
  return (
    <Grid sx={{ display: "flex" }}>
      <Box
        width="55%"
        className="lpBox1"
        sx={{ backgroundColor: theme.palette.light?.four }}
      >
        <Box sx={{ paddingLeft: "100px" }}>
          <Box sx={{ paddingTop: "32px" }} data-testid="logo">
            {props.Logo}
          </Box>
          <Box
            data-testid="steppertemp"
            sx={{ paddingTop: "56px", transform: "translateX(-11px)" }}
          >
            {props.homestepper}
          </Box>
        </Box>
      </Box>
      <Box
        width="45%"
        className="lpBox2"
        sx={{
          background: theme.palette.light?.linearOne,
        }}
      >
        <Box>
          <Box>
            {props.sideImage}
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};
