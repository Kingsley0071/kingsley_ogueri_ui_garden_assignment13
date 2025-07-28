import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import Label from './Label';

const story = {
  title: 'Components/Label',
  component: Label,
};
export default story;

const Template: StoryFn<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Default Label',
  htmlFor: 'input-id',
};
