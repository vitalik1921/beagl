import React, { ChangeEventHandler, ReactElement, useState, ElementType, SyntheticEvent, ChangeEvent } from 'react';
import { curry } from 'ramda';
import { Input, Form as AntdForm } from 'antd';

type FieldValue = {
  value: any,
  isTouched?: boolean,
  isValid?: boolean | null,
  onChange?: (field: FieldValue) => void,
}

type FieldProps = {
  id: string,
  value?: any,
  label?: string,
  required?: boolean,
  help?: string,
  min?: string,
  max?: string,
  validator?: Function,
}

type FieldValues = {
  [id: string]: FieldValue,
}

const FormProvider = React.createContext<any>(() => ({}));
const { Item } = AntdForm;

export const InputField = (props: FieldProps) => {
  const updateField = (setField: (field: FieldValue) => void, ) => (event: any) => {
    setField({
      value: event.target.value,
      isTouched: true,
      isValid: props.validator
        ? props.validator(event.target.value)
        : true,
    });
  }

  return (
    <FormProvider.Consumer>
      {(getField) => {
        const field = getField(props.id, props.value);
        return (
          <Item
            label={props.label}
            required={props.required}
            help={props.help}
            validateStatus="warning"
          >
            <Input
              id={props.id}
              value={field.value === null ? props.value : field.value}
              onChange={updateField(field.onChange)}
            />
          </Item>
        );
      }}
    </FormProvider.Consumer>
  );
}

type FormProps = {
  children: JSX.Element[] | JSX.Element | string,
};

export const Form = ({ children }: FormProps) => {
  const [fields, setFields] = useState<FieldValues>({});

  const setField = curry((name: string, field: FieldValue) => {
    fields[name] = {...fields[name], ...field};
    setFields({ ...fields });
  });

  const createField = (name: string, value: any): FieldValue => {
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
    <FormProvider.Provider value={getField}>
      {children}
    </FormProvider.Provider>
  );
}

export default { InputField, Form };
