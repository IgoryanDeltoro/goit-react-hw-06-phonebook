import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import ContactForm from './form/ContactForm';

import css from './App.module.css';
import Header from './header/Header';

const App = () => {
  return (
    <>
      <Header title={'Phonebook'} />
      <div className={css.container}>
        <ContactForm />
        <h2 className={css.title}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};

export default App;
