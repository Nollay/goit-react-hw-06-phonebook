import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    if (filter) {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      );
    } else {
      return contacts;
    }
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul>
      {filteredContacts.map(cont => (
        <li key={cont.id}>
          {cont.name}: {cont.number}
          <button
            type="button"
            onClick={() => {
              dispatch(deleteContact(cont.id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
