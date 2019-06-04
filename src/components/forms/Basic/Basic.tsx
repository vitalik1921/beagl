import { Input, InputNumber, Select, Row, Col, Slider, Checkbox } from 'antd';
import { useFormatMessage } from "@comparaonline/react-intl-hooks";
import React, { ReactChildren } from 'react';

import { Form, InputField } from 'beagl/components/elements/Form/Form';
import { isInteger, isRequired } from 'beagl/utils/validators';
import useValidator from 'beagl/components/hooks/useValidator/useValidator';

type props = {
  children: ReactChildren | String,
  onComplete: Function,
}

const CheckboxGroup = Checkbox.Group;

export const Profile = (props: props) => {
  const i18n = useFormatMessage();
  const valIsRequired = useValidator(isRequired);
  const valIsInteger = useValidator(isInteger);

  return (
    <div>
      <Form>
        <InputField
          id="position"
          prefixCls="wizard"
          validators={[valIsRequired]}
          label={i18n('profile.work.position.label')}
          help={i18n('profile.work.position.help')}
        />
        <InputField
          id="salary"
          prefixCls="wizard"
          component={InputNumber}
          validators={[valIsRequired, valIsInteger]}
          label={i18n('profile.work.salary.label')}
          help={i18n('profile.work.salary.help')}
          min={1}
          formatter={(val: number) => `$ ${val}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        />
        <InputField
          id="country"
          prefixCls="wizard"
          component={Select}
          validators={[valIsRequired]}
          label={i18n('profile.work.country.label')}
          help={i18n('profile.work.country.help')}
        />
        <InputField
          id="experience"
          prefixCls="wizard"
          component={Slider}
          validators={[valIsRequired]}
          label={i18n('profile.work.experience.label')}
          help={i18n('profile.work.experience.help')}
          min={0}
          max={5}
        />
        <InputField
          id="englishLevel"
          prefixCls="wizard"
          component={Slider}
          validators={[valIsRequired]}
          label={i18n('profile.work.englishLevel.label')}
          help={i18n('profile.work.englishLevel.help')}
          min={0}
          max={5}
        />
        <InputField
          id="typesOfEmployment"
          prefixCls="wizard"
          component={CheckboxGroup}
          label={i18n('profile.work.typesOfEmployment.label')}
          options={[
            { label: 'Apple', value: 'Apple' },
            { label: 'Pear', value: 'Pear' },
            { label: 'Orange', value: 'Orange' },
          ]}
        />
      </Form>
    </div>
  );
}

export default Profile;
