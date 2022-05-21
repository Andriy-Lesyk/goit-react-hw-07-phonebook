import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuId } from 'uuid';
import { Input, Formm, Btn } from './Forms.styles';
import { addContacts } from '../../redux/contacts/contactsOperations';

export default function Form() {
  const dispatch = useDispatch();
  const contactsSelect = useSelector(state => state.contacts.entities);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => {
    setName(e.currentTarget.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.currentTarget.value);
  };

  const handleNameSubmit = e => {
    e.preventDefault();
    const id = uuId();

    const contCheck = contactsSelect.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    contCheck
      ? alert(`${name} is olready in contacts`)
      : dispatch(addContacts({ id, name, number }));
    resetForm();
  };
  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <Formm onSubmit={handleNameSubmit}>
        <label>Name</label>
        <Input
          value={name}
          onChange={handleChangeName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <label>Number</label>
        <Input
          value={number}
          onChange={handleChangeNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <Btn type="submit">Add contact</Btn>
      </Formm>
    </div>
  );
}
