/* eslint-disable array-callback-return */

import { getContacts, getValueFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';
import ContactItems from './contactItems/ContactItems';
import css from '../contactList/ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getValueFilter);

  return (
    <table className={css.table}>
      <tbody>
        {contacts.map(({ id, name, number }) => {
          const lowerCase = name.toLowerCase();
          if (lowerCase.includes(filter)) {
            return (
              <ContactItems key={id} id={id} name={name} number={number} />
            );
          }
        })}
      </tbody>
    </table>
  );
};

export default ContactList;
