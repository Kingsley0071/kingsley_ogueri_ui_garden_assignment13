import React from 'react';
import { TableHeaderProps } from './Table.types';

const TableHeader: React.FC<TableHeaderProps> = ({ children, ...rest }) => (
  <thead {...rest}>{children}</thead>
);

export default TableHeader;
