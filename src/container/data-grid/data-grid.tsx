import React, { useState } from 'react';
import {
  DataGrid as MuiDataGrid,
  GridActionsCellItem,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowModes,
  GridRowModesModel,
  GridRowParams,
  GridToolbar,
  MuiEvent,
} from '@mui/x-data-grid';

import {
  Save as SaveIcon,
  Cancel as CancelIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';

import {
  RowType,
  ColumnType,
  ColumnValueType,
  GridProps,
} from './types/data-grid-props.interface';

const PAGE_SIZE = 25;
const WIDTH_ACTION = 100;

export function DataGrid(props: GridProps) {
  const {
    columns,
    rows,
    className,
    isRole,
    style,
    isSearch = false,
    setRows = () => {},
    setDelRows = () => {},
    ...other
  } = props;

  const [pageSize, setPageSize] = useState(PAGE_SIZE);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  const funcSetRows = setRows as (data: RowType[]) => void;
  const funcSetDelRows = setDelRows as (data: RowType[]) => void;

  const handleRowEditStart = (
    params: GridRowParams,
    event: MuiEvent<React.SyntheticEvent>,
  ) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (
    params: GridRowParams,
    event: MuiEvent,
  ) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    const delRow = rows.filter((row: RowType) => row.id === id);

    funcSetDelRows(delRow);
    funcSetRows(rows.filter((row: RowType) => row.id !== id));
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row: RowType) => row.id === id) as RowType;
    if (editedRow?.isNew) {
      funcSetRows(rows.filter((row: RowType) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false, isChange: true };

    funcSetRows(
      rows.map((row: RowType) => (row.id === newRow.id ? updatedRow : row)),
    );

    return updatedRow;
  };

  const actionsColumn: ColumnType = {
    field: 'actions',
    type: 'actions',
    headerName: 'Actions',
    width: WIDTH_ACTION,
    cellClassName: 'actions',
    getActions: (rowProps: ColumnValueType) => {
      const { id } = rowProps;
      const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

      if (isInEditMode) {
        return [
          <GridActionsCellItem
            key={id}
            icon={<SaveIcon />}
            label="Save"
            onClick={handleSaveClick(id)}
          />,
          <GridActionsCellItem
            key={id}
            icon={<CancelIcon />}
            label="Cancel"
            className="textPrimary"
            onClick={handleCancelClick(id)}
            color="inherit"
          />,
        ];
      }

      return [
        <GridActionsCellItem
          key={id}
          icon={<EditIcon />}
          label="Edit"
          className="textPrimary"
          onClick={handleEditClick(id)}
          color="inherit"
        />,
        <GridActionsCellItem
          key={id}
          icon={<DeleteIcon />}
          label="Delete"
          onClick={handleDeleteClick(id)}
          color="inherit"
        />,
      ];
    },
  };

  const customColumn = isRole ? [...columns, actionsColumn] : columns;

  return (
    <div
      className={['backoffice-component-grid', className].join(' ')}
      style={style}
    >
      <MuiDataGrid
        disableSelectionOnClick
        editMode="row"
        pageSize={pageSize}
        columns={customColumn}
        rows={rows}
        rowModesModel={rowModesModel}
        experimentalFeatures={{ newEditingApi: true }}
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          toolbar: { showQuickFilter: isSearch },
        }}
        onPageSizeChange={(newPageSize: number) => setPageSize(newPageSize)}
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        getRowClassName={(params: unknown) => {
          const param = params as ColumnValueType;
          return param.row?.isChange ? 'editable-success' : '';
        }}
        {...other}
      />
    </div>
  );
}
