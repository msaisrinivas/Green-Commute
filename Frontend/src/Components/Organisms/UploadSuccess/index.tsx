import { theme } from "../../../Theme/index";
import { Icons } from "../../Atoms/IconsAtom";
import close from "../../../images/icons/close.svg";
import vector from "../../../images/icons/Vector.svg";
import "./UploadSuccess.css";
import { ButtonComponent } from "../../Atoms/Buttons/Button";
import { Box, Grid, Modal, Typography } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

interface Props {
  handleApply?: () => void;
  handleSuccess?: () => void;
}

export const UploadSuccess = (props: Props) => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid className="box" sx={style}>
          <Box onClick={props.handleApply} className="close">
            <Box onClick={props.handleSuccess}>
              <Icons
                source={close}
                height={"24px"}
                width={"24px"}
                onClick={() => {
                  setOpen(false);
                }}
              />
            </Box>
          </Box>
          <div className="contents">
            <div style={{ justifyContent: "center" }}>
              <Icons source={vector} height={"83px"} width={"83px"} />
            </div>
            <Typography variant="h2">
              <span style={{ fontWeight: "bold" }}>Hi Mahesh! </span>Your Resume
              got Uploaded Successfully !
            </Typography>
            <Box onClick={props.handleApply}>
            <Box onClick={props.handleSuccess}>
              <ButtonComponent
                label={"okay"}
                classing={"next"}
                onClick={() => {
                  setOpen(false);
                }}
                style={{
                  maxWidth: "156px",
                  borderRadius: "8px",
                  fontSize: "12px",
                  lineHeight: "16px",
                  textTransform: "uppercase",
                  fontFamily: theme.typography.body1.fontFamily,
                  color: theme.palette.light?.four,
                  background: theme.palette.green?.six,
                }}
              />
            </Box>
            </Box>
          </div>
        </Grid>
      </Modal>
    </>
  );
};
