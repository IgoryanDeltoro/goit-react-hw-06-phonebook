import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contactsSplice';
import Form from './form/Form';
import { getContacts } from 'redux/selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const hendleSubmit = event => {
    event.preventDefault();
    const index = contacts.findIndex(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (index === -1) {
      dispatch(addContacts({ name, number }));
      reset();
      return;
    }
    hendleCoincidence(name);
    reset();
  };

  const hendleCoincidence = name => {
    alert(`${name} is already in contacts`);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form
      submit={hendleSubmit}
      change={handleChange}
      name={name}
      number={number}
    ></Form>
  );
};

export default ContactForm;
