import { getContacts, getFilter } from 'components/redux/selectors';
import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { ItemList, Info } from './ContactList.styled';

export const Contactlist = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(normalizedFilter);
  });

  return contacts.length === 0 ? (
    <Info>Your Phonebook is empty now</Info>
  ) : (
    <ItemList>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id}>
            <ContactItem contact={contact} />
          </li>
        );
      })}
    </ItemList>
  );
};
