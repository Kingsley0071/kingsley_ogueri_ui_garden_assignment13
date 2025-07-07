import React from 'react';
import { TableRowProps } from './Table.types';

const TableRow: React.FC<TableRowProps> = ({ children, ...rest }) => (
  <tr {...rest}>{children}</tr>
);

export default TableRow;