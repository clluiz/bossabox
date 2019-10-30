import * as Yup from 'yup';
import * as Messages from '../../messages';

export default Yup.object().shape({
  title: Yup.string().required(Messages.REQUIRED_FIELD),
  link: Yup.string().required(Messages.REQUIRED_FIELD),
  description: Yup.string().required(Messages.REQUIRED_FIELD),
  tags: Yup.string().required(Messages.REQUIRED_FIELD)
});
