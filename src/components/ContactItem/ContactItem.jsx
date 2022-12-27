import PropTypes from 'prop-types';
import {AiOutlineUser} from 'react-icons/ai'
import { ContactItemStyle,Btn,Text,Number } from './ContactItemStyle'

export const ContactItem = ({id,name,number,onDelete}) => {
return(
<ContactItemStyle>
<Text><AiOutlineUser fill='red'/> {name}: <Number>{number}</Number></Text>
<Btn type='button' onClick={()=>{onDelete(id)}}>Delete</Btn>
</ContactItemStyle>
);
};

ContactItem.propTypes = {
name: PropTypes.string.isRequired,
number: PropTypes.string.isRequired,
id: PropTypes.string.isRequired,
onDelete: PropTypes.func.isRequired,
};