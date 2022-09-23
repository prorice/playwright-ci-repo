import React from 'react';
import { Box, Card, CardContent, Tab, Tabs } from '@mui/material';

import { IRadioLabel } from '@components/radio/types/radio-props.interface';
import { Radio, RadioLabel, RadioGroup } from '@/components/radio';

import { TabPanel } from '../sample-page-tab-panel';

function SampleRadio() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const radioGroupData: IRadioLabel[] = [
    { value: 'value1', label: 'label1' },
    { value: 'value2', label: 'label2', labelPlacement: 'start' },
    { value: 'value3', label: 'label3' },
  ];

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
          <Tab label="기본 radio" />
          <Tab label="라벨 radio" />
          <Tab label="radio 그룹" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Card>
            <CardContent>
              <Radio />
              <Radio checked disabled />
              <h3>Color</h3>
              <Radio checked color="primary" />
              <Radio checked color="secondary" />
              <Radio checked color="error" />
              <Radio checked color="info" />
              <Radio checked color="success" />
              <Radio checked color="warning" />
              <h3>Size</h3>
              <Radio checked size="small" />
              <Radio checked size="medium" />
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Card>
            <CardContent>
              <RadioLabel label="label" />
              <h3>Label Placement: labelPlacement prop 사용</h3>
              <RadioLabel label="end" labelPlacement="end" />
              <RadioLabel label="start" labelPlacement="start" />
              <RadioLabel label="top" labelPlacement="top" />
              <RadioLabel label="bottom" labelPlacement="bottom" />
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Card>
            <CardContent>
              <h3>
                radioValues Props 사용: IRadioFormControlLabelProps(value,
                label, labelPlacement) 타입
              </h3>
              <h4>
                ex)
                {` const radioGroupData: IRadioLabel[] = [
                    { value: 'value1', label: 'label1' },
                    { value: 'value2', label: 'label2', labelPlacement: 'start' },
                    { value: 'value3', label: 'label3' },
                  ];`}
              </h4>
              <RadioGroup
                title="radio group"
                radioValues={radioGroupData}
                color="secondary"
              />
            </CardContent>
          </Card>
        </TabPanel>
      </Box>
    </div>
  );
}

export default SampleRadio;
