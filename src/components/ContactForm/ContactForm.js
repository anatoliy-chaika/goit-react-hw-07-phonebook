import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'components/redux/operations';
import { selectContacts } from 'components/redux/selectors';
import Notiflix from 'notiflix';

import PropTypes from 'prop-types';
import { Formik } from 'formik';

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
  const contacts = useSelector(selectContacts);

  const handleSubmit = values => {
    const isAlreadyInContacts = contacts.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (isAlreadyInContacts) {
      Notiflix.Report.failure(`${values.name}: is already in your contacts`);
      return;
    }
    dispatch(addContact({ name: values.name, phone: values.number }));
  };

  return (
    <Formik
      initialValues={startValues}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        handleSubmit({
          ...values,
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
