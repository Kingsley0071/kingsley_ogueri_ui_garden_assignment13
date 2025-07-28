import React from 'react';
import Card from './Card';

const story = {
  title: 'Components/Card',
  component: Card,
};
export default story;

export const Default = () => (
  <Card>
    <h3>Card Title</h3>
    <p>This is a card component.</p>
  </Card>
);