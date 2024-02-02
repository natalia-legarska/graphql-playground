import {Backdrop, CircularProgress} from "@mui/material";

interface LoadingBackdropProps {
    open: boolean;
    handleClose: () => void;
}

export const LoadingBackdrop: React.FC<LoadingBackdropProps> = ({open, handleClose}) => (
    <Backdrop
        sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
        open={open}
        onClick={handleClose}
    >
        <CircularProgress color="inherit"/>
    </Backdrop>
)