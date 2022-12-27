import PropTypes from 'prop-types';
import { Component } from 'react';
import { Form, Btn, Input, Label, Title } from './PhoneBookStyle';


export class PhoneBook extends Component{
  state = {
    name: '',
    number: '',
  };
  handleChange = e => {
    const { name,value } = e.currentTarget;
    this.setState({
      [name]:value,
    });
    };

 handleSubmit = event =>{
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset()
};
 
  reset = () =>{
  this.setState({
    name:'',
    number:'',
  });
  };
render(){
  const { name, number } = this.state;
  return (
    <>
      <Form onSubmit={this.handleSubmit}>
        <Label>
          <Title>Name</Title>
          <Input
            value={name}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        <Title>Number</Title>
        <Input
            value={number}
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          </Label>
          <Btn type='submit'>Add contacts</Btn>
      </Form>
    </>
  );
}
}

Form.propTypes={
  onSubmit: PropTypes.func.isRequired
}