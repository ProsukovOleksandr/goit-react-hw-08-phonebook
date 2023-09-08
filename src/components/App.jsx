import { ContactForm } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import  {fetchContacts} from '../redux/operations'
import { useEffect } from 'react';
import { getError, getIsLoading } from "redux/appReducer";
export const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
