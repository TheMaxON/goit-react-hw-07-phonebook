import Input from './Form/Form';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/selectors';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import Loader from './Loader/Loader';
import { fetchContacts } from 'redux/operations';

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (error) return console.log('Error message: ', error);

  return (
    <>
      <Section>
        <h1>Phonebook</h1>
        <Input />
      </Section>
      <Section>
        <h2>Contacts</h2>
        <Filter />
        {!isLoading && error && (
          <p>
            An error has occurred. Try reloading the page or read more in
            console.
          </p>
        )}
        {isLoading && <Loader />}
        {!error && <ContactsList />}
      </Section>
    </>
  );
};

export default App;
