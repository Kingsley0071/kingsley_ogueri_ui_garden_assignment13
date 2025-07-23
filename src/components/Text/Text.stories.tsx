import React from 'react';
import { StoryFn, Meta } from '@storybook/react-webpack5';
import Text from './Text';

export default {
  title: 'Components/Text',
  component: Text,
};

const Template: StoryFn<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'This is a default text.',
  style: {},
};

export const BoldText = Template.bind({});
BoldText.args = {
  content: 'This is bold text.',
  style: { fontWeight: 'bold' },
};

export const ItalicText = Template.bind({});
ItalicText.args = {
  content: 'This is italic text.',
  style: { fontStyle: 'italic' },
};
