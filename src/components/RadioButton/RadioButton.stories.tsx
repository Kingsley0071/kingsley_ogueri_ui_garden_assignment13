import React, { useState } from 'react';
import RadioButton from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
};

export const Default = () => {
  const [checked, setChecked] = useState(false);
  return (
    <RadioButton
      checked={checked}
      onChange={() => setChecked(!checked)}
      label="Radio Button"
      disabled={false}
    />
  );
};