import React from 'react';
import { StoryFn, Meta } from '@storybook/react-webpack5';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Button',
  onClick: () => alert('Button clicked!'),
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  onClick: () => alert('Button clicked!'),
  disabled: true,
};

export const CustomLabel = Template.bind({});
CustomLabel.args = {
  label: 'Custom Label Button',
  onClick: () => alert('Button clicked!'),
  disabled: false,
};
