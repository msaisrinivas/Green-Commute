import { Box, Grid, Modal } from "@mui/material";
import { theme } from "../../../Theme/index";
import { Icons } from "../../Atoms/IconsAtom";
import closeIcon from "../../../images/icons/close.svg";
import "./index.css"
import { ButtonComponent } from "../../Atoms/Buttons/Button";
import { useState } from "react";
import { UploadSuccess } from "../UploadSuccess";
import { fileUpload } from "../../../Data/Cities";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
}

interface Props{
    applystr?: string,
    handleApply?: () => void,
}

export const Upload = (props: Props) => {
    const [open, setOpen] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false);
    const handleClick = () => {
        setOpen(false)
        setSuccess(true)
    }
    const successFalse = () =>{
        setSuccess(false);
    }
    return (
        <>
            {success && <UploadSuccess handleApply={props.handleApply} handleSuccess = {successFalse}/>}
            <ButtonComponent label={props.applystr} variant={'contained'} classing={'next'} onClick={() => {props.applystr === "Apply" && setOpen(true)}} style={{
                fontSize: '12px', fontWeight: '700px',
                lineHeight: '16px', fontFamily: theme.typography.body1.fontFamily,
                fontStyle: 'normal', textTransform: 'none',
                width: '92px', backgroundColor: theme.palette.green?.six,
                height: '32px', borderRadius: '8px', boxShadow: 'none',
            }} />
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description" >
                <Grid item className="boxresume" sx={style}>
                    <Box className="fileText" sx={{ fontFamily: theme.typography.fontFamily }}> {fileUpload} </Box>
                    <div className="closer" >
                        <Icons source={closeIcon} height={"24px"} width={"24px"} onClick={() => setOpen(false)} data-testid="icon" />
                    </div>
                    <Box className="greenBox">
                        <Box>
                            <ButtonComponent label={'Click Here to Upload Files'} classing='next' variant='contained'
                                onClick={() => { document?.getElementById('getFile')?.click() }}
                                style={{
                                    backgroundColor: theme.palette.green?.six,
                                    fontSize: "12px", fontWeight: 700,
                                    lineHeight: "16px", width: "281px",
                                    height: "40px", borderRadius: "8px",
                                    color: "white", textTransform: 'none',
                                }} />
                            <input type="file" id="getFile" data-testid="file" style={{ display: 'none' }} onChange={handleClick} />
                        </Box>
                    </Box>
                </Grid >
            </Modal> </>
    )
}