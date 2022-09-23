import React, { useState } from 'react';

import { Box, Card, CardContent, Stack, Tab, Tabs } from '@mui/material';

import { Button } from '@/components/button';
import { Snackbar } from '@/components/snackbar';

import { TabPanel } from '../sample-page-tab-panel';

function SampleSnackbar() {
  const { toast, success, info, warning, error } = Snackbar();
  const [page, setPage] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setPage(newValue);
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
          value={page}
          onChange={handleChange}
          sx={{ borderColor: 'divider' }}
        >
          <Tab label="Snackbar" />
        </Tabs>
        <TabPanel value={page} index={0}>
          <Card>
            <CardContent>
              <h3>Color</h3>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  onClick={() => toast('This is a default message')}
                >
                  Open default snackbar
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  color="success"
                  onClick={() => success('This is a success message')}
                >
                  Open success snackbar
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  color="info"
                  onClick={() => info('This is a info message')}
                >
                  Open info snackbar
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  color="warning"
                  onClick={() => warning('This is a warning message')}
                >
                  Open warning snackbar
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  color="error"
                  onClick={() => error('This is a error message')}
                >
                  Open error snackbar
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </TabPanel>
      </Box>
    </div>
  );
}

export default SampleSnackbar;
