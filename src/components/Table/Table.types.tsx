import {
  ReactNode,
  TableHTMLAttributes,
  HTMLAttributes,
  TdHTMLAttributes,
} from 'react';

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  children: ReactNode;
}
export interface TableHeaderProps
  extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
}
export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode;
}
export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
}
export interface TableFooterProps
  extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
}
