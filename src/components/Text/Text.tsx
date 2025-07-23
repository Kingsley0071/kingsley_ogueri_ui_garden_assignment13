import React from 'react';

interface TextProps {
  content: string;
  style?: React.CSSProperties;
}

const Text: React.FC<TextProps> = ({ content, style }) => {
  return <span style={style}>{content}</span>;
};

export default Text;
