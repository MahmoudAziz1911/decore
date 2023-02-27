import { useContext } from 'react';
import { DataContext } from '@/store/GlobalState';
import { useRouter } from 'next/router';
import { Box, Button, Modal, Typography} from '@mui/material';
import { deleteCart } from '@/store/Actions';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid grey',
  boxShadow: 24,
  p: 4,
};

const Modals = ({ open, handleClose}) => {
  const { state, dispatch } = useContext(DataContext);
  const { modal } = state;
  const router = useRouter()

  const handleDelete = () => {
    dispatch(deleteCart(modal.data, modal.id, "ADD_CART"));
    dispatch({ type: "ADD_MODAL", payload: {} });
    
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modal.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Do you want to delete this product?
          </Typography>
          <Typography sx={{ display: "flex", my: 3, }}>
            <Button variant="contained" color="success" onClick={handleDelete}>Yes</Button>
            <Button variant="outlined" color="error" onClick={handleClose}>Cancel</Button>
        </Typography>
        </Box>
        
      </Modal>
    </div>
  );
}

export default Modals;