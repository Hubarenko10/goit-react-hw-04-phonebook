import { useEffect, useState } from 'react';
import { PhoneBook } from './PhoneBookForm/PhoneBook';
import { Section } from './Section/Section';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';


const useLocalStorage = (key,defaultValue)=> {
const [state,setState] = useState(() => {
return JSON.parse(window.localStorage.getItem(key) ?? defaultValue)
})

useEffect(() => {
window.localStorage.setItem(key, JSON.stringify(state));
},[key,state]);

return [state,setState];
};


export const App = () => {

const [contacts,setContacts] = useLocalStorage('contacts',[]);
const [filter,setFilter] = useState('');

const addContacts = ({ name, number }) => {
  
  const newContact = {
    id: nanoid(),
    name,
    number,
  };
  contacts.find(contact => contact.name === name)
    ? alert(name + '  - duplicate contact')
    : setContacts([newContact,...contacts]);
};
const changeFilter = e => {
  setFilter(e.currentTarget.value);
  }
  const searchContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };
  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId))
    } 
    return (
      <>
        <Section title="Phonebook">
          <PhoneBook  onSubmit={addContacts}/>
        </Section>
        <Section title="Contacts">
        <Filter 
        value={filter}
        onChange={changeFilter}
        />
        <ContactList contacts={searchContact()}
        onDelete={deleteContact}
        />
          
        </Section>
      </>
    );
};

