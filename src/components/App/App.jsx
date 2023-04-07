import { Contactlist } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import { FilterContacts } from 'components/Filter/Filter';
import { GlobalStyles } from 'components/GlobalStyles/GlobalStyles.styled';
import { Container } from 'components/Container/Container.styled';
import { MainTitle, SecondTitle } from './App.styled';

export const App = () => {
  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <FilterContacts />
      <SecondTitle>Contacts</SecondTitle>
      <Contactlist />
      <GlobalStyles />
    </Container>
  );
};
