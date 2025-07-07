import React from 'react';
import { ImgProps } from './Img.types';

const Img: React.FC<ImgProps> = ({ src, alt, ...rest }) => (
  <img src={src} alt={alt} {...rest} />
);

export default Img;