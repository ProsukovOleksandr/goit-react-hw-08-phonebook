import { useDispatch, useSelector } from 'react-redux';
import  {fetchContacts} from '../redux/operations';
import { useEffect } from 'react';
import { Container } from '@mui/material';
const { ContactList } = require("components/ContactList/ContactList");
const { Filter } = require("components/Filter/Filter");
const { ContactForm } = require("components/Form/Form");
const { getIsLoading, getError } = require("redux/appReducer");

const ContactsPage = () => {
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
      }, [dispatch]);

    return (
        <Container maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h1>Phonebook</h1>
          <ContactForm />
        { isLoading && !error && <b>Request in progress...</b>}
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </Container>
      );
}
export default ContactsPage;