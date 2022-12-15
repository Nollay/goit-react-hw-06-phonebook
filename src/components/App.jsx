import { ContactForm } from './phonebook/contactForm/ContactForm';
import { ContactList } from './phonebook/contactList/ContactList';
import { Filter } from './phonebook/filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { Container } from './phonebook/container';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 && (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}
    </Container>
  );
};
