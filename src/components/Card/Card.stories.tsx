import React from 'react';
import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
};

export const Default = () => (
  <Card>
    <h3>Card Title</h3>
    <p>This is a card component.</p>
  </Card>
);
