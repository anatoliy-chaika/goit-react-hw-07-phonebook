import { useDispatch } from 'react-redux';
import { addContact } from 'components/redux/contactsSlice';

import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import {
  Field,
  Form,
  ErrorMessage,
  FormLable,
  ButtonSubmit,
} from './ContacctForm.styled';
import { BsFillBrushFill } from 'react-icons/bs';

const startValues = {
  name: '',
  number: '',
};

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(2, 'Too Short!')

    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, id) => {
    dispatch(addContact((id = nanoid()), value.name, value.number));
  };

  return (
    <Formik
      initialValues={startValues}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        handleSubmit({
          ...values,
          id: nanoid(),
        });
        actions.resetForm();
      }}
    >
      <Form autoComplete="off">
        <FormLable>
          Name
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="span" />
        </FormLable>

        <FormLable>
          Number
          <Field name="number" type="text" />
          <ErrorMessage name="number" component="span" />
        </FormLable>
        <ButtonSubmit type="submit">
          Add contact <BsFillBrushFill />
        </ButtonSubmit>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSave: PropTypes.func,
};
