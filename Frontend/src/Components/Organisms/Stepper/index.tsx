import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { theme } from "../../../Theme";
import { makeStyles } from "@mui/styles";
import "./index.css";
import { inputbasehead, steps } from "../../../Data/Cities";
import { styled } from "@mui/material";

const StepBox = styled(Box)({
  paddingTop: "64px",
});

interface StepperProps {
  step1?: JSX.Element;
  step2?: JSX.Element;
  step3?: JSX.Element;
  activeStep?: number;
  handleNext?: () => void;
  handleBack?: () => void;
}

export default function HomePageStepper(props: StepperProps) {
  const styles = useStyles();
  const handleNext = props.handleNext;
  const handleBack = props.handleBack;
  const activeStep = props.activeStep;
  return (
    <>
      <Box sx={{ width: "100%", padding: "0px 8px 0px 8px" }}>
        <Stepper data-testid="stepper" connector={null} activeStep={activeStep}>
          {steps.map((label) => {
            const labelProps: {
              optional?: React.ReactNode;
            } = {};

            return (
              <Step
                key={label}
                sx={{
                  "& .MuiStepLabel-root .Mui-completed": {
                    color: theme.palette.green?.three, // circle color (COMPLETED)
                    fontWeight: theme.typography.subtitle1.fontWeight,
                    height: "40px",
                    
                  },

                  "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                    {
                      color: theme.palette.green?.three, // Just text label (COMPLETED)
                      fontFamily: theme.typography.subtitle1.fontFamily,
                      fontWeight: theme.typography.subtitle1.fontWeight,
                    },

                  "& .MuiStepLabel-root .Mui-active": {
                    color: theme.palette.green?.three,
                    fontFamily: theme.typography.subtitle1.fontFamily,
                    fontWeight: theme.typography.subtitle1.fontWeight, // circle color (ACTIVE)

                  },

                  "& .MuiStepLabel-label .Mui-active.MuiStepLabel-alternativeLabel":
                    {
                      color: theme.palette.green?.three, // Just text label (ACTIVE)
                      fontFamily: theme.typography.subtitle1.fontFamily,
                      fontWeight: theme.typography.subtitle1.fontWeight,

                    },

                  "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                    fill: "white", // circle's number (ACTIVE)
                    fontFamily: theme.typography.subtitle1.fontFamily,
                    fontWeight: theme.typography.subtitle1.fontWeight,
                    width: "7px",
                  },

                  "&  .Mui-disabled": {
                    fontFamily: theme.typography.subtitle1.fontFamily,
                    fontWeight: theme.typography.subtitle1.fontWeight,
                  },

                /* disable stepper label text color */
                "& .css-16ubnlw-MuiStepLabel-labelContainer":
                {
                  height:"21px",
                  color: theme.palette.black?.one
                },

                /*circle size */
                "& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root": {
                  fontSize: "40px",
                  paddingRight:"5px",
                  color:  theme.palette.gray?.three,
                  fontWeight: theme.typography.subtitle2.fontWeight,
                },

                /* disable stepper inner text color */
                "& .MuiStepIcon-text": {
                  fill: theme.palette.black?.one
                },

                "& .span.MuiStepLabel-label.Mui-completed.css-qivjh0-MuiStepLabel-label": {
                  width: "100px",
                  },

                  /* finished circle label dimensions */
                  "& .css-qivjh0-MuiStepLabel-label": {
                    fontFamily: theme.typography.subtitle1.fontFamily,
                    lineHeight: "2.9",
                   
                  }
                }}
              >
                <StepLabel sx={{paddingRight:"24px"}} {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        <Box data-testid="box1" sx={{ maxWidth: "540px", paddingTop: "80px" }}>
          <Typography variant={"h1"}>
            More than 2000 people are using Green Commute
          </Typography>
        </Box>

        <StepBox>
          {activeStep === 0 && (
            <Box data-testid="box1">
              <Typography variant="subtitle1" paddingRight={"8px"} paddingBottom={"8px"}>{inputbasehead.at(0)}</Typography>
              {props.step1}
            </Box>
          )}
          {activeStep === 1 && (
            <Box data-testid="box2">
              <Typography variant="subtitle1" paddingBottom={"8px"}>{inputbasehead.at(1)}</Typography>
              {props.step2}
            </Box>
          )}
          {activeStep === 2 && (
            <Box data-testid="box3">
              <Typography variant="subtitle1" paddingBottom={"8px"}>{inputbasehead.at(2)}</Typography>
              {props.step3}
            </Box>
          )}
        </StepBox>
        {activeStep === steps.length ? (
          <>
           </>)
         : (
          <React.Fragment>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                transform: "translateY(36px)",
              }}
            >
              {activeStep !== 0 && (
                <Button
                  data-testid="btnBack"
                  variant={"outlined"}
                  className={styles.backButton}
                  onClick={handleBack}
                  style={{ marginRight: "8px" }}
                  sx={{textTransform:"none"}}
                >
                  Back
                </Button>
              )}
            {/* <Link to={activeStep === 2 ? props.navigateUrl:''} style={{ textDecoration: 'none' }} > */}
              <Button data-testid="btnNext" variant={"contained"} className={styles.nextButton} onClick={handleNext} sx={{textTransform: 'none',boxShadow:'none'}}>
                Next
              </Button>
              {/* </Link> */}
            </Box>
          </React.Fragment>
        )}
        <Typography
          variant="subtitle1"
          className="skipText"
          sx={{
            color: theme.palette.green?.six,
            fontFamily: theme.typography.body1,
            transform: "translateY(46px)",
          }}
        >
          Skip
        </Typography>
      </Box>
    </>
  );
}

const useStyles = makeStyles({
  connector: {
    borderLeft: "red",
  },
  backButton: {
    fontFamily: theme.typography.body1.fontFamily +" !important",
    width: "140px",
    height: "46px",
    borderRadius: "8px !important",
    fontSize:'14px !important',
    fontWeight:"600 !important",
    border: "1px solid "+theme.palette.green?.six +" !important",
    color: theme.palette.green?.six +" !important",
    "&:hover": {
      borderColor: theme.palette.green?.six,
      color: theme.palette.green?.six,
    },
  },
  nextButton: {
    fontFamily: theme.typography.body1.fontFamily,
    width: "140px",
    height: "46px",
    fontSize:'14px !important',
    fontWeight:"600 !important",
    textTransform:'lowercase',
    borderRadius: "8px !important",
    backgroundColor: theme.palette.green?.six + " !important",
    borderColor: "1px solid "+theme.palette.green?.six +" !important",
    color: theme.palette.light?.four +" !important",
    "&:hover": {
      backgroundColor: theme.palette.green?.six + " !important",
      color: theme.palette.light?.four,
      boxShadow:'none'
    },
  },
});