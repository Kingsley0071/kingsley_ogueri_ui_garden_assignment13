import React from 'react';
import { StoryFn, Meta } from '@storybook/react-webpack5';
import Label from './Label';

export default {
  title: 'Components/Label',
  component: Label,
};

const Template: StoryFn<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Default Label',
  htmlFor: 'input-id',
};

export const CustomText = Template.bind({});
CustomText.args = {
  text: 'Custom Label Text',
  htmlFor: 'custom-input-id',
};
