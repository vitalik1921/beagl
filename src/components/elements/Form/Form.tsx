import React, { useState } from 'react';
import { curry, pathOr } from 'ramda';
import { Form as AntdForm, Input } from 'antd';

type FieldValue = {
  value: any,
  isTouched?: boolean,
  isValid?: boolean | null,
  onChange?: (field: FieldValue) => void,
}

type FieldProps = {
  id: string,
  component: any,
  value?: any,
  label?: string,
  help?: string,
  min?: number,
  max?: number,
  validators: Function[],
  prefixCls?: string,
  formatter?: Function,
  options?: any,
}

type FieldValues = {
  [id: string]: FieldValue,
}

const FormProvider = React.createContext<any>(() => ({}));
const { Item } = AntdForm;

export const InputField = (props: FieldProps) => {
  const [errorMessage, setErrorMessage] = useState('');

  const updateField = (setField: (field: FieldValue) => void, ) => (event: any) => {
    const eventValue = pathOr(event, ['target', 'value'], event);
    const errors = props.validators
      .map((validator) => validator(eventValue))
      .filter((val) => !!val);
    const isValid = errors.length === 0;

    if (!isValid) {
      setErrorMessage(errors[0]);
    }

    setField({
      value: eventValue,
      isTouched: true,
      isValid: isValid,
    });
  }

  return (
    <FormProvider.Consumer>
      {(getField) => {
        const field = getField(props.id, props.value);
        const InputComponent = props.component;
        const showHelpers = !field.isValid && field.isTouched;
        return (
          <Item
            prefixCls={props.prefixCls}
            label={props.label}
            help={showHelpers ? errorMessage || props.help : props.help}
            validateStatus={showHelpers ? 'error' : ''}
          >
            <InputComponent
              id={props.id}
              value={field.value === null ? props.value : field.value}
              onChange={updateField(field.onChange)}
              min={props.min}
              max={props.max}
              formatter={props.formatter}
              options={props.options}
            />
          </Item>
        );
      }}
    </FormProvider.Consumer>
  );
}

InputField.defaultProps = {
  validators: [],
  component: Input,
}

type FormProps = {
  layout: 'horizontal' | 'vertical' | 'inline',
  children: JSX.Element[] | JSX.Element | string,
};

export const Form = ({ layout, children }: FormProps) => {
  const [fields, setFields] = useState<FieldValues>({});

  const setField = curry((name: string, field: FieldValue) => {
    fields[name] = { ...fields[name], ...field };
    setFields({ ...fields });
  });

  const createField = (name: string, value: any = null): FieldValue => {
    return {
      value,
      onChange: setField(name),
      isTouched: false,
      isValid: null,
    };
  }

  const getField = (name: string, value: any): FieldValue => {
    if (!fields[name]) {
      setField(name, createField(name, value))
    }
    return fields[name];
  }

  return (
    <AntdForm
      layout={layout}
      labelCol={{
        xs: { span: 24 },
        sm: { span: 8 },
      }}
      wrapperCol={{
        xs: { span: 24 },
        sm: { span: 16 },
      }}
    >
      <FormProvider.Provider value={getField}>
        {children}
      </FormProvider.Provider>
    </AntdForm>
  );
}

Form.defaultProps = {
  layout: 'horizontal',
};

export default { InputField, Form };
