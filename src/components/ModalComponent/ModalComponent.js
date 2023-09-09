import React, { useState, useEffect } from 'react';
import {
  Modal,
  Paper,
  Backdrop,
  Fade,
  Typography,
  IconButton,
  Box,
  Tooltip,
  LinearProgress,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
};

const centerText = {
  textAlign: 'center', 
};

const colorButton = {
  color: '#A3B18A',
};

function ModalComponent({ open, onClose, title, content }) {
  const [loading, setLoading] = useState(true);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setLoading(false);
        setShowText(true);
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setLoading(true); 
      setShowText(false);
    }
  }, [open]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Paper>
          <Box p={3} sx={style}>
            {loading ? (
              <LinearProgress color="success" />
            ) : (
              <>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="success.main"
                >
                  <CheckIcon fontSize="large" sx={colorButton} />
                </Box>
                {showText && (
                  <>
                    <Typography variant="h5" color="primary" gutterBottom sx={centerText}>
                      {title}
                    </Typography>
                    <Typography variant="body1" sx={centerText}>
                      {content}
                    </Typography>
                  </>
                )}
              </>
            )}
            <Tooltip title="Close">
              <IconButton
                onClick={onClose}
                color="primary"
                sx={{ position: 'absolute', top: 0, right: 0 }}
              >
                <CloseIcon sx={colorButton} />
              </IconButton>
            </Tooltip>
          </Box>
        </Paper>
      </Fade>
    </Modal>
  );
}

export default ModalComponent;
