import { ContactElem } from '../ContactElem/ContactElem';
import { useSelector } from 'react-redux';
import { selectFilteredContacts, selectIsLoading } from 'redux/selectors.js';
import { ContactsListStyle } from './ContactsList.styled.jsx';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {!isLoading && filteredContacts.length === 0 && (
        <h4
          style={{
            textAlign: 'center',
            color: 'var(--color-accent)',
            fontWeight: 700,
          }}
        >
          No contacts yet...
        </h4>
      )}
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
