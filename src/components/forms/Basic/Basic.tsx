import {
  Form as AntdForm,
  InputNumber,
  Select,
  Row,
  Col,
  Slider,
  Checkbox
} from "antd";
import { useFormatMessage } from "@comparaonline/react-intl-hooks";
import React, { ReactChildren } from "react";

import { Form, InputField } from "beagl/components/elements/Form/Form";
import { isInteger, isRequired } from "beagl/utils/validators";
import useValidator from "beagl/components/hooks/useValidator/useValidator";

type props = {
  children: ReactChildren | String;
  onComplete: Function;
};

const CheckboxGroup = Checkbox.Group;
const formLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
};
const checkboxesLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 }
  }
};
const experienceMarks = {
  1: "1",
  3: "3",
  5: "5",
  7: "7",
  9: "9+"
};

export const Profile = (props: props) => {
  const i18n = useFormatMessage();
  const valIsRequired = useValidator(isRequired);
  const valIsInteger = useValidator(isInteger);

  return (
    <div>
      <Form {...formLayout}>
        <InputField
          id="position"
          validators={[valIsRequired]}
          label={i18n("profile.work.position.label")}
          help={i18n("profile.work.position.help")}
        />
        <InputField
          id="salary"
          component={InputNumber}
          validators={[valIsRequired, valIsInteger]}
          label={i18n("profile.work.salary.label")}
          help={i18n("profile.work.salary.help")}
          min={1}
          formatter={(val: number) =>
            `$ ${val}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
        />
        <AntdForm.Item label={i18n("education.location")}>
          <Row type="flex" gutter={10}>
            <Col span={12}>
              <InputField
                id="country"
                component={Select}
                validators={[valIsRequired]}
                help={i18n("profile.work.country.help")}
              />
            </Col>
            <Col span={12}>
              <InputField
                id="city"
                component={Select}
                validators={[valIsRequired]}
                help={i18n("profile.work.city.help")}
              />
            </Col>
          </Row>
        </AntdForm.Item>
        <InputField
          id="experience"
          component={Slider}
          validators={[valIsRequired]}
          label={i18n("profile.work.experience.label")}
          help={i18n("profile.work.experience.help")}
          min={1}
          max={9}
          marks={experienceMarks}
          value={1}
        />
        <InputField
          id="englishLevel"
          component={Slider}
          validators={[valIsRequired]}
          label={i18n("profile.work.englishLevel.label")}
          help={i18n("profile.work.englishLevel.help")}
          min={1}
          max={5}
          value={1}
        />
        <InputField
          id="typesOfEmployment"
          component={CheckboxGroup}
          label={i18n("profile.work.typesOfEmployment.label")}
          options={[
            { label: "Apple", value: "Apple" },
            { label: "Pear", value: "Pear" },
            { label: "Orange", value: "Orange" }
          ]}
        />
      </Form>
    </div>
  );
};

export default Profile;
