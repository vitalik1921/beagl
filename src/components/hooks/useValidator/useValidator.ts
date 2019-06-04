import { curry } from 'ramda';
import { useFormatMessage } from "@comparaonline/react-intl-hooks";

const useValidator = (validator: (m: string, value: any) => any) => {
  const i18n = useFormatMessage();
  const translation = i18n(`validator.${validator.name}`);
  const curriedValidator = curry(validator);
  return curriedValidator(translation);
}

export default useValidator;
