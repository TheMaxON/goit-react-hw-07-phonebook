import { ContactElem } from '../ContactElem/ContactElem';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors.js';
import { ContactsListStyle } from './ContactsList.styled.jsx';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {filteredContacts.length > 0 && (
        <ContactsListStyle>
          {filteredContacts.map(contact => {
            return (
              <ContactElem
                key={contact.id}
                id={contact.id}
                name={contact.name}
                number={contact.phone}
              />
            );
          })}
        </ContactsListStyle>
      )}
    </>
  );
};
