import { Box, Typography } from "@mui/material";
import { theme } from "../../../Theme/index";

interface MyProps {
  src: string;
  height: number;
  width: number;
  text?: string;
}

const AqiImage = (props: MyProps) => {
  const styles = {
    height: props.height,
    maxWidth: props.width,
    width: "100%",
    borderRadius: "8px",
    background: theme.palette.light?.linearOne,
  };

  const innerStyles = {
    backgroundImage: `url(` + props.src + `)`,
    height: props.height,
    width: props.width,
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const typoStyles={
    fontSize: "48px",
    color: theme.palette.green?.one
  }

  return (
    <Box style={styles}>
      <Box style={innerStyles} data-testid="image-box">
        <Typography variant="h1" style={typoStyles}>
          {props.text}
        </Typography>
      </Box>
    </Box>
  );
};
export default AqiImage;
