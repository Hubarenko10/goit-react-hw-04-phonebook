import PropTypes from 'prop-types';
import { Label,Input,Header } from "./FilterStyle"
export const Filter = ({value,onChange})=> {
return(
<Label>
<Header>Find contacts by name</Header>
<Input type="text" value={value} onChange={onChange}/>
</Label>)
}

Filter.propTypes = {
value: PropTypes.string.isRequired,
onChange: PropTypes.func.isRequired,
};