//import PropTypes from 'prop-types';
import { deleteContacts } from "redux/operations";
import { useDispatch /*, useSelector*/ } from "react-redux";
//import { selectContacts, selectFilter } from "redux/appReducer";
export const ContactListItem = ({contact}) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContacts(contact.id));
  return (
    <div>
      <span>{contact.name}</span>
      <span> {contact.numbers}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

//ContactListItem.propTypes = {
 // contact: PropTypes.shape({
 //   id: PropTypes.string,
 //   name: PropTypes.string,
 //  number: PropTypes.string,
 //}).isRequired,
//};
