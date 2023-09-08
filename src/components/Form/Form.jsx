import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/appReducer';
import { addContacts } from 'redux/operations';
export const ContactForm = () => {
const items  = useSelector(selectContacts);
  const dispatch = useDispatch();
  let initContact = {
    name:'',
    numbers:'',

  };
  const onSubmit = e =>{
    e.preventDefault();
    const form = e.target;
     if (items.find(contact => contact.name === form[0].value)) {
     alert(`${form[0].value} is already in contacts`);
     form.reset();
     return;
     }
    dispatch(addContacts({
      name:form[0].value, 
      numbers:form[1].value}));
    form.reset();

  }
const onChange = e =>{
let id = nanoid(5);
if(e.target.name === "name"){
  initContact.name = e.target.value;
};
if(e.target.name === "number"){
  initContact.numbers = e.target.value;
};
initContact.id = id;
}
  
  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChange}
          defaultValue={initContact.name}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChange}
          defaultValue={initContact.numbers}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
