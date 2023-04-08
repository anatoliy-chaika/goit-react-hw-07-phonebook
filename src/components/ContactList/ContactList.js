import { selectVisibleContacts } from 'components/redux/selectors';
import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { ItemList, Info } from './ContactList.styled';

export const Contactlist = () => {
  const contacts = useSelector(selectVisibleContacts);

  return contacts.length === 0 ? (
    <Info>Your Phonebook is empty now</Info>
  ) : (
    <ItemList>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <ContactItem contact={contact} />
          </li>
        );
      })}
    </ItemList>
  );
};
