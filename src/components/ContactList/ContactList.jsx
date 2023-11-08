import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/slice';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';
import css from './ContactList.module.css';

export function ContactList() {
  const savedContacts = useSelector(getContacts);
  const savedFilter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getFilteredContacts = useMemo(
    () => () => {
      const normalizedFilter = savedFilter.toLowerCase();
      return savedContacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      );
    },
    [savedContacts, savedFilter]
  );
  const filteredContacts = getFilteredContacts();
  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.contactItem} key={id}>
          {name} : {number}
          <button
            className={css.deleteBtn}
            onClick={() => dispatch(deleteContact(id))}
            name="delete"
            value={savedFilter}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}