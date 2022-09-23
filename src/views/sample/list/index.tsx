import React, { useState } from 'react';
import { Box, Card, CardContent, Tab, Tabs } from '@mui/material';

import { Checkbox } from '@/components/checkbox';
import { IconHome } from '@/components/icon';
import { List } from '@/components/list';
import { IListItems } from '@/components/list/types/list-item.interface';

import { TabPanel } from '../sample-page-tab-panel';

function SampleList() {
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(0); // onClick 예시를 위한 useState

  const onChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const upCount = () => {
    setCount(count + 1);
  };

  const itemList: IListItems[] = [
    {
      label: `item1  -> count action ${count}`,
      onClick: upCount,
    },
    {
      label: 'item2',
      divider: true,
      subHeader: '룰루 랄라',
      prefixElement: <IconHome />,
      nestedItems: [
        {
          label: 'depth1 nested item1',
          nestedItems: [
            {
              label: `depth2 nested item1`,
              nestedItems: [
                {
                  label: 'depth3 nested item1',
                  nestedItems: [
                    {
                      label: `depth4 nested item1`,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: 'item3',
    },
    { label: 'item4', suffixElement: <Checkbox /> },
    {
      label: 'item5',
      nestedItems: [
        {
          label: 'depth1 nested item1',
          nestedItems: [
            {
              label: 'depth2 nested item1',
            },
          ],
        },
      ],
    },
    { label: 'item6' },
    { label: 'item7' },
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
          onChange={onChangeTab}
          sx={{ borderColor: 'divider' }}
        >
          <Tab label="기본 클릭 List" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Card>
            <CardContent>
              <List
                header="List Sub header"
                itemList={itemList}
                sx={{ width: '100%', maxWidth: 360, boxShadow: 2 }}
              />
              <pre>
                {`
header prop을 활용해 먼저 전체 리스트 헤더를 표기할 수 있다.

itemList prop
: 리스트를 구성할 아이템을 object배열로 구성하여 설정해 줄 수 있다.

itemList prop의 subHeader를 사용
: 다섯번째 리스트 아이템 처럼 부분부분의 header를 설정해줄 수 있다.

itemList prop의 onClick을 사용
: 첫번째 리스트 아이템 처럼 onClick에 작동시킬 이벤트를 넣어주면 리스트 아이템 하나하나 이벤트를 간단하게 넘겨줄 수 있다.

itemList props의 openNested와 nestedItems을 사용해 중첩 리스트 만들기
: nestedItems는 itemList 데이터를 그대로 다시 활용할 수 있어서 리스트 아이템에 Collapse를 사용해 중첩으로 새로운 리스트를 넣어줄 수 있다.
  openNested를 true로 설정해 준 뒤 nestedItems에 리스트 데이터들을 넣어주면 완성.

itemList prop의 divider을 사용
: 구분짓고 싶은 리스트 아이템에 true값을 넣어주면 해당 아이템 끝에 divider를 적용시킬 수 있다.

itemList prop의 prefixElement 사용
: 두번째 리스트 아이템처럼 리스트 아이템 앞에 아이콘 또는 컴포넌트를 추가해줄 수 있다.

itemList prop의 suffixElement 사용
: 세번째 리스트 아이템처럼 리스트 아이템 끝에 아이콘 또는 컴포넌트를 추가해줄 수 있다.

추가로 disabled, selected 등을 활용하여 아이템을 설정할 수 있다.`}
              </pre>
            </CardContent>
          </Card>
        </TabPanel>
      </Box>
    </div>
  );
}

export default SampleList;
