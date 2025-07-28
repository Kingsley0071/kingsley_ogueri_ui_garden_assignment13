import React from 'react';
import HeroImage from './HeroImage';

const story = {
  title: 'Components/HeroImage',
  component: HeroImage,
};
export default story;

export const Default = () => (
  <HeroImage src="https://via.placeholder.com/800x300" alt="Hero">
    <h1>Hero Title</h1>
  </HeroImage>
);
