import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import Text from './Text';

const story = {
  title: 'Components/Text',
  component: Text,
};
export default story;

const Template: StoryFn<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'This is a default text.',
  style: {},
};
