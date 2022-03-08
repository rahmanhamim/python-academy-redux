import { Box, Modal, Typography } from "@mui/material";

const VideoModal = ({ open, handleClose, url }) => {
 const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "rgba(255,255,255, 0.1)",
  boxShadow: 24,
  padding: "0 1em 1em 1em",
  borderRadius: "5px",
 };
 return (
  <Modal
   open={open}
   onClose={handleClose}
   aria-labelledby="modal-modal-title"
   aria-describedby="modal-modal-description"
  >
   <Box sx={style}>
    <Typography
     onClick={handleClose}
     sx={{
      marginLeft: "auto",
      padding: "0px 16px 2px 16px ",
      my: 1,
      width: "fit-content",
      borderRadius: "50%",
      bgcolor: "#F8F8F8",
      cursor: "pointer",
      fontSize: "1.8rem",
     }}
    >
     x
    </Typography>
    <iframe
     width="854"
     height="480"
     style={{ maxWidth: "95vw" }}
     src={url}
     title="YouTube video player"
     frameBorder="0"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
     allowFullScreen
    ></iframe>
   </Box>
  </Modal>
 );
};

export default VideoModal;
