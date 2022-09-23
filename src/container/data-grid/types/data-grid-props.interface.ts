import {
  GridColDef,
  GridRowModel,
  GridValueGetterParams,
  DataGridProps,
} from '@mui/x-data-grid';

export interface RowType extends GridRowModel {}

export interface ColumnValueType extends GridValueGetterParams {}

export interface ColumnType extends GridColDef {
  getActions?(rowProps: ColumnValueType): void;
}

export interface GridProps extends DataGridProps {
  columns: ColumnType[];
  rows: RowType[];
  isRole?: boolean;
  isSearch?: boolean;
  setRows?: unknown;
  setDelRows?: unknown;
}
