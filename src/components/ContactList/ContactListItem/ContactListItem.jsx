//import PropTypes from 'prop-types';
import { deleteContacts } from "redux/operations";
import { useDispatch /*, useSelector*/ } from "react-redux";
import { Box, Button, Typography } from "@mui/material";
//import { selectContacts, selectFilter } from "redux/appReducer";
export const ContactListItem = ({contact}) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContacts(contact.id));
  return (
    <Box sx={{mt: "5px"}}>
      <Typography sx={{fontWeight: "600"}} variant="p" gutterBottom>{contact.name}</Typography>
      <Typography sx={{fontStyle: "italic" }} variant="p" gutterBottom> {contact.number}</Typography>
      <Button sx={{width: "40px", height:"20px", padding: "0", paddingBottom: "3px"}} onClick={handleDelete}>Delete</Button>
    </Box>
  );
};

//ContactListItem.propTypes = {
 // contact: PropTypes.shape({
 //   id: PropTypes.string,
 //   name: PropTypes.string,
 //  number: PropTypes.string,
 //}).isRequired,
//};
