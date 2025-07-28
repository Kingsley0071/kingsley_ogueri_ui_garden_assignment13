import React, { useState } from 'react';
import RadioButton from './RadioButton';

const story = {
  title: 'Components/RadioButton',
  component: RadioButton,
};
export default story;

export const Default = () => {
  const [checked, setChecked] = useState(false);
  return (
    <RadioButton
      checked={checked}
      onChange={() => setChecked(!checked)}
      label="Radio"
      disabled={false}
    />
  );
};