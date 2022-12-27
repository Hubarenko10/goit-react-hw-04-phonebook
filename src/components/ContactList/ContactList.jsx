import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ItemList,Item } from './ContactListStyle';

export const ContactList = ({ contacts, onDelete }) => {
 return(
    <ItemList>
    {contacts.map(({name,number,id})=>{
    return(
        <Item key={id}>
        <ContactItem
        name={name}
        number={number}
        id={id}
        onDelete={onDelete}
        />
    </Item>
        )
        
    })}
    </ItemList>
    )
};

ContactList.propTypes ={
contacts: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired
    })
    ).isRequired,
};
