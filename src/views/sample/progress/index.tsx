import React, { useState, useEffect, useMemo } from 'react';
import { Box, Fab, Card, CardContent, Stack, Tab, Tabs } from '@mui/material';

// 예시 위한 컴포넌트 도구들
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';
import { green } from '@mui/material/colors';

import { ProgressCircular, ProgressLinear } from '@/components/progress';

import { TabPanel } from '../sample-page-tab-panel';

function SampleProgress() {
  const [value, setValue] = useState(0);
  const [progress, setProgress] = useState(0); // 선형 progress
  const [loading, setLoading] = useState(false); // 원형 progress
  const [success, setSuccess] = useState(false);

  // 저장 예시 버튼 색 변화
  const SUCCESS_BUTTON_COLOR = useMemo(
    () => ({
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
    [],
  );

  const buttonSx = success ? SUCCESS_BUTTON_COLOR : {};

  const onChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // circular progress 예시를 위한 함수
  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);

      setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  // linear progress 예시를 위한 함수
  useEffect(() => {
    const timers = setInterval(() => {
      if (progress > 100) {
        setProgress(0);
      } else {
        const diff = Math.random() * 10;
        setProgress(progress + diff);
      }
    }, 500);

    return () => {
      clearInterval(timers);
    };
  }, [progress]);

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
          onChange={onChangeTab}
          sx={{ borderColor: 'divider' }}
        >
          <Tab label="원형 progress" />
          <Tab label="선형 progress" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Card>
            <CardContent>
              <ProgressCircular />
              <h3>Color</h3>
              <Stack spacing={2} direction="row">
                <ProgressCircular color="primary" />
                <ProgressCircular color="secondary" />
                <ProgressCircular color="error" />
                <ProgressCircular color="info" />
                <ProgressCircular color="success" />
                <ProgressCircular color="warning" />
              </Stack>
              <h3>Size</h3>
              <h4>
                : 정해져 있는 것이 아니라 20, 33, 50 등 원하는 수치대로 입력할
                수 있다. 추후 사이즈를 고정 시키는 작업이 필요할 수 있다.
              </h4>
              <Stack spacing={2} direction="row">
                <ProgressCircular size={20} />
                <ProgressCircular size={33} />
                <ProgressCircular size={50} />
              </Stack>
              <h3>Variant</h3>
              <h4>determinate, indeterminate</h4>
              <Stack spacing={2} direction="row">
                <ProgressCircular variant="determinate" value={progress} />
                <ProgressCircular variant="indeterminate" />
              </Stack>
              <h3>
                활용 예시: 이벤트 버튼 옆, 컴포넌트 주변 등 어디든 배치할 수
                있고, 아래와 같이 버튼 가장자리에 효과와 함께 넣어줄 수 있다.
              </h3>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ m: 1, position: 'relative' }}>
                  <Fab
                    aria-label="save"
                    color="primary"
                    sx={buttonSx}
                    onClick={handleButtonClick}
                  >
                    {success ? <CheckIcon /> : <SaveIcon /> || <CheckIcon />}
                  </Fab>
                  {loading && (
                    <ProgressCircular
                      size={68}
                      sx={{
                        color: green[500],
                        position: 'absolute',
                        top: -6,
                        left: -6,
                        zIndex: 1,
                      }}
                    />
                  )}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Card>
            <CardContent>
              <h3>
                추후 데이터 활용에 따라 label progress가 필요할 시 제작
                예정입니다.
              </h3>
              <ProgressLinear />
              <h3>Color</h3>
              <Stack spacing={2} direction="column">
                <ProgressLinear color="primary" />
                <ProgressLinear color="secondary" />
                <ProgressLinear color="error" />
                <ProgressLinear color="info" />
                <ProgressLinear color="success" />
                <ProgressLinear color="warning" />
                <ProgressLinear color="inherit" />
              </Stack>
              <h3>Variant: determinate, buffer</h3>
              <Stack spacing={2} direction="column">
                <ProgressLinear variant="determinate" value={progress} />
                <h3>
                  buffer variant 활용 시 value와 valueBuffer prop을 활용하여
                  buffer표기를 할 수 있음.
                </h3>
                <ProgressLinear
                  variant="buffer"
                  value={progress}
                  valueBuffer={progress + 10}
                />
              </Stack>
            </CardContent>
          </Card>
        </TabPanel>
      </Box>
    </div>
  );
}
export default SampleProgress;
