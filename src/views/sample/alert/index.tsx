import React, { useCallback, useState } from 'react';
import { Box, Card, CardContent, Stack, Tab, Tabs } from '@mui/material';

import {
  Alert,
  AlertConfirm,
  AlertConfirmSuccess,
  AlertDelete,
  AlertDeleteSuccess,
  AlertLoginSuccess,
  AlertLoginFail,
} from '@/components/alert';
import { Button } from '@/components/button';

import { TabPanel } from '../sample-page-tab-panel';

function SampleAlert() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const onClickAlertConfirm = useCallback(async () => {
    await AlertConfirm('계정 승인').then(async (result: unknown) => {
      if (result) {
        await AlertConfirmSuccess();
      }
    });
  }, []);

  const onClickAlertDelete = useCallback(async () => {
    await AlertDelete('계정').then(async (result: unknown) => {
      if (result) {
        await AlertDeleteSuccess();
      }
    });
  }, []);

  const onClickAlertLoginSuccess = useCallback(async () => {
    await AlertLoginSuccess();
  }, []);

  const onClickAlertLoginFail = useCallback(async () => {
    await AlertLoginFail();
  }, []);

  const onClickAlert = useCallback(async () => {
    await Alert({
      title: 'Custom Alert',
      footer: 'footer 텍스트',
      background:
        'url(https://img.freepik.com/free-vector/seamless-plaid-background-beige-checkered-pattern-design-vector_53876-156266.jpg)',
      imageUrl:
        'https://stickershop.line-scdn.net/stickershop/v1/product/15493/LINEStorePC/main.png;compress=true',
      confirmButtonText: '확인',
    });
  }, []);

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
          <Tab label="기본 alert" />
          <Tab label="승인 alert" />
          <Tab label="삭제 alert" />
          <Tab label="로그인 성공/실패 alert" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Card>
            <CardContent>
              <Button
                variant="contained"
                size="large"
                color="inherit"
                onClick={async () => onClickAlert()}
              >
                Alert
              </Button>
              <h3>
                모든 option을 사용할 수 있고, sample처럼 배경, 내용에 사진 넣기
                등 설정할 수 있다. 다른 option들은{' '}
                <a href="https://sweetalert2.github.io/#configuration">
                  sweatAlert 공식문서
                </a>
                에서 확인할 수 있다.
              </h3>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Card>
            <CardContent>
              <Button
                variant="contained"
                size="large"
                color="inherit"
                onClick={async () => onClickAlertConfirm()}
              >
                Confirm Alert
              </Button>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Card>
            <CardContent>
              <Button
                variant="contained"
                size="large"
                color="inherit"
                onClick={async () => onClickAlertDelete()}
              >
                Delete Alert
              </Button>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Card>
            <CardContent>
              <Stack spacing={2} direction="row">
                <Button
                  variant="contained"
                  size="large"
                  color="inherit"
                  onClick={onClickAlertLoginSuccess}
                >
                  Login Success Alert
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  color="inherit"
                  onClick={onClickAlertLoginFail}
                >
                  Login Fail Alert
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </TabPanel>
      </Box>
    </div>
  );
}

export default SampleAlert;
