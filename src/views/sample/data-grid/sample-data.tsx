import React from 'react';
import { GridRenderCellParams, useGridApiContext } from '@mui/x-data-grid';
import {
  RowType,
  ColumnType,
  ColumnValueType,
} from '@/container/data-grid/types/data-grid-props.interface';

import { Switch } from '@/components/switch';

interface IVirtualRowData {
  id: number;
  lastName: string;
  firstName: string;
  age: number;
}

function BooleanEditCell({ id, field, value }: GridRenderCellParams<boolean>) {
  const apiRef = useGridApiContext();
  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    await apiRef.current.setEditCellValue({
      id,
      field,
      value: event.target.checked,
    });
  };

  return <Switch checked={value} onChange={handleChange} />;
}

export const columns: ColumnType[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'isUse',
    headerName: 'isUse',
    width: 100,
    editable: true,
    renderCell: (params: GridRenderCellParams<boolean>) => (
      <Switch checked={params.value} />
    ),
    renderEditCell: (params: GridRenderCellParams<boolean>) => {
      return <BooleanEditCell {...params} />;
    },
    valueParser: (value: string | boolean) => {
      return typeof value === 'string' ? value === 'true' : value;
    },
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: ColumnValueType) => {
      const firstName = (params.row.firstName as string) || '';
      const lastName = (params.row.lastName as string) || '';

      return `${firstName} ${lastName}`;
    },
  },
];

export const rows: RowType[] = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, isUse: true },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, isUse: true },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, isUse: true },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, isUse: false },
  {
    id: 5,
    lastName: 'Targaryen',
    firstName: 'Daenerys',
    age: null,
    isUse: false,
  },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, isUse: true },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, isUse: true },
  { id: 8, lastName: 'Frances', age: 36, isUse: false },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, isUse: true },
];

const createManyRows = (count: number = 10000) => {
  const tempRows = [];

  for (let i = 0; i < count; i++) {
    const tempData = JSON.parse(JSON.stringify(rows[i % 9])) as IVirtualRowData;
    tempData.id = i + 1;
    tempRows.push(tempData);
  }

  return tempRows;
};

export const manyRows = createManyRows(100000);
