import { useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { getContacts } from 'redux/selectors';

//   APP
export const App = () => {
  const savedContacts = useSelector(getContacts);

  return (
    <div className="container">
      <h1 className="formTitle">Phonebook</h1>
      <ContactForm />
      <h2 className="contactsTitle">Contacts</h2>
      <Filter />
      {savedContacts.length !== 0 && <ContactList />}
    </div>
  );
};
