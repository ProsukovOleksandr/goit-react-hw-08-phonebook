import { ContactListItem } from './ContactListItem/ContactListItem';
import { getError, getIsLoading, selectContacts, selectFilter } from 'redux/appReducer';

import { /*useDispatch,*/ useSelector } from 'react-redux';
//import { deleteContacts } from 'redux/operations';

export const ContactList = () => {
  const items = useSelector(selectContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filter = useSelector(selectFilter);

  const filterContacts = (items, filter) => {
    if (filter === '') {
      return items;
    } else {
      return items.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };
  return (
    <div>
    {isLoading && <p>Loading contacts...</p>}
    {error && <p>{error}</p>}
      {filterContacts(items, filter).map(contact => {
        const { id } = contact;
        return (
          <ContactListItem
            key={id}
            contact={contact}
          />
        );
      })}
    </div>
  );
};
