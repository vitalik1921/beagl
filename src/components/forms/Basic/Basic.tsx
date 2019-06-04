import React, { ReactChildren } from 'react';
import { Form, InputField } from 'beagl/components/elements/Form/Form';

type props = {
  children: ReactChildren | String,
  onComplete: Function,
}

export const Profile = (props: props) => (
  <div>
    <Form>
      <InputField
        id="test"
        value="test"
        label="Hello"
        help="this is help"
      />
      <InputField
        id="test2"
        value="test"
        label="Hello"
        help="this is help"
      />
      <InputField
        id="test3"
        value="test"
        label="Hello"
        help="this is help"
      />
    </Form>
  </div>
);

export default Profile;
