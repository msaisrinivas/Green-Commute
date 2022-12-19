import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { Icons } from "../../Atoms/IconsAtom";
import More from "../../../images/icons/more.svg";
import Bike from "../../../images/icons/bike.svg";
import Bus from "../../../images/icons/bus.svg";
import Car from "../../../images/icons/car.svg";
import Metro from "../../../images/icons/train.svg";
import { theme } from "../../../Theme";
import { makeStyles } from "@mui/styles";

interface Props {
  icons?: string;
  job?: string;
  company?: string;
  location?: string;
  bike?: boolean;
  bus?: boolean;
  car?: boolean;
  train?: boolean;
  postedTime?: string;
  state: boolean;
}



function Cards(props: Props) {
  const classes = useStyles();
  const [large, setLarge] = useState<boolean>(props.state);
  const [wholeBorder, setWholeBorder] = useState<string>(classes.largeCard);
  return (
    <Box
      className={large ? wholeBorder : classes.smallCard}
      data-testid="card-contain"
      sx={{backgroundColor:"white"}}
      onClick={() => {
        
        if (!large) {
          setLarge(!large);
          setWholeBorder(classes.largeCard);
        }
      }}
    >
      
      <Box className={classes.smallCardInner} >
        <Box className={classes.smalltopCon}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Icons source={props.icons} height="45px" width="45px" />
            {large ? (
              <Box sx={{ paddingLeft: "23px" }} data-testid="large-active">
                <Box paddingBottom={"4px"}>
                  <Typography variant="h2" color={theme.palette.black?.one}>
                    {props.job}
                  </Typography>
                </Box>
                <Box paddingBottom={"4px"}>
                  <Typography
                    variant="caption2"
                    color={theme.palette.accent?.two}
                  >
                    {props.company}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="caption2"
                    color={theme.palette.black?.two}
                  >
                    {props.location}
                  </Typography>
                </Box>
              </Box>
            ) : null}
          </Box>
          <Box>
            <Icons source={More} height="25px" width="25px" />
          </Box>
        </Box>
        {!large ? (
          <Box className={classes.smallmiddleCon} data-testid="small-active">
            <Box paddingBottom={"4px"}>
              <Typography variant="subtitle1" color={theme.palette.black?.one}>
                {props.job}
              </Typography>
            </Box>
            <Box paddingBottom={"4px"}>
              <Typography variant="caption2" color={theme.palette.accent?.two}>
                {props.company}
              </Typography>
            </Box>
            <Box>
              <Typography variant="caption2" color={theme.palette.black?.two}>
                {props.location}
              </Typography>
            </Box>
          </Box>
        ) : null}
        <Box 
          className={large ? classes.largebotttomCon : classes.smallbottomCon}
        >
          <Box className={large ? classes.largeBCFT : undefined}>
            {!large ? (
              <Box>
                <Typography variant="caption2" color={theme.palette.black?.one} width="167px" letterSpacing={"0"}>
                  Commute routes available :
                </Typography>
              </Box>
            ) : null}
            <Box className={classes.smallbottomConFirst} sx={{paddingTop:'10px'}}>
              {props.bike ? (
                <Icons source={Bike} height="21px" width="21px" />
              ) : null}
              {props.bus ? (
                <Icons source={Bus} height="21px" width="21px" />
              ) : null}
              {props.car ? (
                <Icons source={Car} height="21px" width="21px" />
              ) : null}
              {props.train ? (
                <Icons source={Metro} height="21px" width="21px" />
              ) : null}
            </Box>
          </Box>
          <Box
            className={
              large ? classes.largebottomConSec : classes.smallbottomConSec
            }
          >
            <Typography variant="caption2" color={theme.palette.black?.one}  letterSpacing={"0"} sx={{paddingTop:'18px'}}>
              {props.postedTime}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles({
  smallCard: {
    width: "320px",
    maxHeigth: "271px",
    minHeigth: "271px",
    height: "271px",
    borderRadius: "12px",
    backgroundColor:"white",
  },
  smallCardInner: {
    padding: "16px 17.5px",
  },
  smalltopCon: {
    display: "flex",
    justifyContent: "space-between",
  },
  smallmiddleCon: {
    paddingTop: "41px",
  },
  smallbottomCon: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "32px",
    width: "100%",
  },
  smallbottomConFirst: {
    width: "100%",
    maxWidth: "135.5px",
    display: "flex",
    justifyContent: "space-between",
  },
  smallbottomConSec: {
    paddingTop: "23px",
  },
  largeCard: {
    
    maxWidth: "571px",
    maxHeight: "159px",
    height: "100%",
    width: "100%",
    borderRadius: "12px",
    backgroundColor:"white",
  },
  largetopCon: {
    display: "flex",
    justifyContent: "space-between",
    width: "329px",
  },
  largebotttomCon: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "25px",
    paddingLeft: "68px",
  },
  largeBCFT: {
    width: "135.5px",
  },
  largebottomConSec: {
    textAlign: "end",
  },
});

export default Cards;