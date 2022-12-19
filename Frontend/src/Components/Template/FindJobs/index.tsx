import { Box , styled} from "@mui/material";

interface FindProps {
  header?: JSX.Element;
  sidepane?: JSX.Element;
}

const HeaderDiv = styled(Box)({
  width:"100%",
  height: "80px",
  position: "fixed",
});

function FindJobs(props: FindProps) {
  return (
    <Box>
      <HeaderDiv sx={{ zIndex: (theme: { zIndex: { drawer: number; }; }) => theme.zIndex.drawer + 1,}}>
        {props.header}
      </HeaderDiv>
      {props.sidepane}
      
    </Box>
  );
}

export default FindJobs;