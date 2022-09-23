import React, { useState, useCallback } from 'react';

import { Box, Card, CardContent, Tab, Tabs, Grid } from '@mui/material';

import { DataGrid } from '@/container/data-grid';
import { RowType } from '@/container/data-grid/types/data-grid-props.interface';

import { Button } from '@/components/button';

import { TabPanel } from '../sample-page-tab-panel';
import { rows, columns, manyRows } from './sample-data';

interface IEditableContainer {
  rows: RowType[];
  delRows: RowType[];
  rowSetter: unknown;
}

function EditableRow(props: IEditableContainer) {
  const { rows: editData, delRows, rowSetter } = props;

  const setter = rowSetter as React.Dispatch<React.SetStateAction<RowType[]>>;
  const changedRows = editData.filter((item: RowType) => item?.isChange);

  const onClickSave = useCallback(() => {}, []);

  const onClickCancel = useCallback(() => {
    setter(rows);
  }, [setter]);

  return (
    <>
      <Grid container justifyContent="flex-end" style={{ marginTop: 20 }}>
        <Button
          variant="contained"
          color="success"
          style={{ marginRight: 10 }}
          onClick={onClickSave}
        >
          save
        </Button>
        <Button variant="contained" color="error" onClick={onClickCancel}>
          cancel
        </Button>
      </Grid>
      <pre style={{ marginBottom: 30 }}>
        changed row : {JSON.stringify(changedRows, null, 4)}
      </pre>
      <pre>delete row : {JSON.stringify(delRows, null, 4)}</pre>
    </>
  );
}

function SampleGrid() {
  const [tabId, setTabId] = useState(0);
  const [data, setData] = useState(rows);
  const [delRows, setDelRow] = useState([] as RowType[]);

  const onChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setTabId(newValue);
  };

  const onChangeDelRow = (delRow: RowType[]) => {
    setDelRow([...delRows, ...delRow]);
  };

  const onChangeRowData = (rowData: RowType[]) => {
    setData(rowData);
  };

  return (
    <div>
      <Box
        sx={{
          bgColor: 'background.paper',
          display: 'flex',
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={tabId}
          onChange={onChangeTab}
          sx={{ borderColor: 'divider' }}
        >
          <Tab label="General" />
          <Tab label="Editable" />
          <Tab label="Selection" />
          <Tab label="Inner Search" />
        </Tabs>
        <TabPanel value={tabId} index={0}>
          <Card>
            <CardContent>
              <h3>Basic Data Grid</h3>
              <DataGrid columns={columns} rows={data} />
            </CardContent>
            <CardContent>
              <h3>No Data Grid</h3>
              <DataGrid columns={columns} rows={[]} />
            </CardContent>
            <CardContent>
              <h3>100,000 Row Data Grid</h3>
              <DataGrid columns={columns} rows={manyRows} />
            </CardContent>
            <CardContent>
              <h3>Custom Size Grid</h3>
              <DataGrid
                style={{ width: 500, height: 1500 }}
                columns={columns}
                rows={manyRows}
              />
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={tabId} index={1}>
          <Card>
            <CardContent>
              <h3>Editable Data Grid</h3>
              <DataGrid
                isRole
                columns={columns}
                rows={data}
                setRows={onChangeRowData}
                setDelRows={onChangeDelRow}
              />
              <EditableRow rows={data} delRows={delRows} rowSetter={setData} />
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={tabId} index={2}>
          <Card>
            <CardContent>
              <h3>Selection Data Grid</h3>
              <DataGrid
                checkboxSelection
                columns={columns}
                rows={data}
                setRows={onChangeRowData}
              />
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={tabId} index={3}>
          <Card>
            <CardContent>
              <h3>Search Data Grid for Inner Layout</h3>
              <DataGrid
                isSearch
                columns={columns}
                rows={data}
                setRows={onChangeRowData}
              />
            </CardContent>
          </Card>
        </TabPanel>
      </Box>
    </div>
  );
}

export default SampleGrid;
