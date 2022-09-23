/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

import { Box, Card, CardContent, Tab, Tabs } from '@mui/material';
import {
  PickerDateTime,
  PickerDate,
  PickerMobile,
  PickerTime,
} from '@/components/picker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TabPanel } from '../sample-page-tab-panel';

function SamplePicker() {
  const [value, setValue] = useState(0);
  const [dayValue, setDayValue] = useState<Dayjs | null>(
    dayjs('2022-09-15T21:11:54'),
  );

  const dayChange = (newValue: Dayjs | null) => {
    setDayValue(newValue);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
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
          value={value}
          onChange={handleChange}
          sx={{ borderColor: 'divider' }}
        >
          <Tab label="picker" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Card>
              <CardContent>
                <Box width={250}>
                  <h3>Desktop date picker</h3>
                  <PickerDate
                    label="date picker"
                    value={dayValue}
                    onChange={dayChange}
                  />
                </Box>
              </CardContent>
              <CardContent>
                <Box width={250}>
                  <h3>Mobile date picker</h3>
                  <PickerMobile
                    label="date picker"
                    value={dayValue}
                    onChange={dayChange}
                  />
                </Box>
              </CardContent>
              <CardContent>
                <Box width={250}>
                  <h3>time picker</h3>
                  <PickerTime
                    label="date picker"
                    value={dayValue}
                    onChange={dayChange}
                  />
                </Box>
              </CardContent>
              <CardContent>
                <Box width={250}>
                  <h3>date and time picker</h3>
                  <PickerDateTime
                    label="date picker"
                    value={dayValue}
                    onChange={dayChange}
                  />
                </Box>
              </CardContent>
            </Card>
          </LocalizationProvider>
        </TabPanel>
      </Box>
    </div>
  );
}

export default SamplePicker;
