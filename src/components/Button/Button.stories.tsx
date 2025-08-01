import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import Button from './Button';

const story = {
  title: 'Components/Button',
  component: Button,
};
export default story;

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
