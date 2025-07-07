import React from 'react';
import { CardProps } from './Card.types';

const Card: React.FC<CardProps> = ({ children, ...rest }) => (
  <div style={{
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    background: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
  }} {...rest}>
    {children}
  </div>
);

export default Card;