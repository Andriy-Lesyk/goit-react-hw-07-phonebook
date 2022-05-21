import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Contacts, Contac, Btn } from './Contacts.styles';
import {
  deleteContacts,
  fetchContacts,
} from '../../redux/contacts/contactsOperations';

function Contact() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contactsSelect = useSelector(state => state.contacts.entities);
  const filterSelect = useSelector(state => state.filter);

  let contacts =
    filterSelect === ''
      ? contactsSelect
      : contactsSelect.filter(cont =>
          cont.name.toLowerCase().includes(filterSelect.filter.toLowerCase())
        );

  return (
    <div>
      <Contacts>
        {contacts.length > 0 &&
          contacts.map(({ name, number, id }) => (
            <Contac key={id}>
              <span>
                {name} : {number}
              </span>
              <Btn
                onClick={async () => {
                  await dispatch(deleteContacts(id));
                  dispatch(fetchContacts());
                }}
              >
                Delete
              </Btn>
            </Contac>
          ))}
      </Contacts>
    </div>
  );
}

export default Contact;
