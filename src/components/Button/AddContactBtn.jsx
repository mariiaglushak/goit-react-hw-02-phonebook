import PropTypes from 'prop-types';

import { ContactBtn } from './AddContactStyle';

const AddContactBtn = ({ text }) => {
  return <ContactBtn type="submit">{text}</ContactBtn>;
};

export default AddContactBtn;

AddContactBtn.propTypes = {
  text: PropTypes.string.isRequired,
};
