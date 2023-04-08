import { useDispatch } from 'react-redux';
import { deleteContact } from 'components/redux/operations';
import PropTypes from 'prop-types';
import { LiItem, ButtonDel } from './ContactItem.styled';
import { AiOutlineDelete } from 'react-icons/ai';

export const ContactItem = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <LiItem>
      <p>
        {name}: {phone}
      </p>
      <ButtonDel type="button" onClick={handleDelete}>
        Delete <AiOutlineDelete />
      </ButtonDel>
    </LiItem>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
