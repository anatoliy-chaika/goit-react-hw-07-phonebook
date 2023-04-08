import { Contactlist } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import { FilterContacts } from 'components/Filter/Filter';
import { GlobalStyles } from 'components/GlobalStyles/GlobalStyles.styled';
import { Container } from 'components/Container/Container.styled';
import { MainTitle, SecondTitle } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'components/redux/operations';
import { selectIsLoading, selectError } from 'components/redux/selectors';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <FilterContacts />
      <SecondTitle>Contacts</SecondTitle>
      <Contactlist />
      {isLoading && !error && <b>Request in progress...</b>}
      <GlobalStyles />
    </Container>
  );
};
