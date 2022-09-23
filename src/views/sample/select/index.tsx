import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  MenuItem,
  OutlinedInput,
  SelectChangeEvent,
  Tab,
  Tabs,
} from '@mui/material';

import { Select, SelectNative } from '@/components/select';
import { MenuItemProps } from '@/components/select/types/select-props.interface';
import { Chip } from '@/components/chip';

import { TabPanel } from '../sample-page-tab-panel';

function SampleSelect() {
  const [page, setPage] = useState(0);
  const [age, setAge] = useState('');
  const [personName, setPersonName] = useState<string[]>([]);
  const [menu, setMenu] = useState('');

  const menuList = [
    {
      text: 'Cake',
      value: 1,
      subheader: 'Dessert',
    },
    {
      text: 'Cookie',
      value: 2,
      subheader: 'Dessert',
    },
    {
      text: 'Milk',
      value: 3,
      subheader: 'Drink',
    },
    {
      text: 'Juice',
      value: 4,
      subheader: 'Drink',
    },
  ];

  const nameList = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ].map((i: string) => {
    return {
      text: i,
      value: i,
    };
  });

  const ageList = [
    {
      text: 'Ten',
      value: 10,
    },
    {
      text: 'Twenty',
      value: 20,
    },
    {
      text: 'Thirty',
      value: 30,
    },
    {
      text: 'Forty to hundred',
      value: 40,
    },
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setPage(newValue);
  };

  const ageChange = (event: SelectChangeEvent<unknown>) => {
    setAge(event.target.value as string);
  };

  const multipleAgeChange = (event: SelectChangeEvent<unknown>) => {
    const { value } = event.target;
    setPersonName(
      typeof value === 'string' ? value.split(',') : (value as string[]),
    );
  };

  const menuChange = (event: SelectChangeEvent<unknown>) => {
    setMenu(event.target.value as string);
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
          <Tab label="Basic select" />
          <Tab label="Native select" />
        </Tabs>
        <TabPanel value={page} index={0}>
          <Card>
            <CardContent>
              <Box>
                <h2>Basic Select</h2>
                <h2>age = {age}</h2>
                <h3>MenuItem</h3>
                <Select
                  id="select"
                  formControlProps={{
                    sx: { m: 1, minWidth: 150 },
                  }}
                  formHelperTextProps={{
                    text: 'Child Select',
                  }}
                  onChange={ageChange}
                  value={age}
                  placeholder="placeholder입니다"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                  <MenuItem value={40}>Forty to hundred</MenuItem>
                </Select>
                <Select
                  formControlProps={{
                    sx: { m: 1, minWidth: 150 },
                  }}
                  onChange={ageChange}
                  menuItems={ageList}
                  value={age}
                  placeholder="placeholder입니다."
                />
                <Select
                  formControlProps={{
                    variant: 'standard',
                    sx: { m: 1, minWidth: 150 },
                  }}
                  inputLabelProps={{
                    id: 'demo-simple-select-label',
                    text: 'Age',
                  }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  onChange={ageChange}
                  value={age}
                  formHelperTextProps={{
                    text: 'Child Select',
                  }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                  <MenuItem value={40}>Forty to hundred</MenuItem>
                </Select>
                <Select
                  formControlProps={{
                    variant: 'filled',
                    sx: { m: 1, minWidth: 150 },
                  }}
                  inputLabelProps={{
                    id: 'demo-simple-select-label',
                    text: 'Age',
                  }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  onChange={ageChange}
                  menuItems={ageList}
                  value={age}
                />
                <h3>Size</h3>
                <Select
                  formControlProps={{
                    sx: { m: 1, minWidth: 80 },
                  }}
                  inputLabelProps={{
                    id: 'demo-simple-select-autowidth-label',
                    text: 'Age',
                  }}
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={age}
                  onChange={ageChange}
                  autoWidth
                  menuItems={ageList}
                  label="Age"
                />
                <Select
                  formControlProps={{
                    sx: { m: 1, minWidth: 80 },
                    size: 'small',
                  }}
                  inputLabelProps={{
                    id: 'demo-select-small',
                    text: 'Age',
                  }}
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={age}
                  onChange={ageChange}
                  menuItems={ageList}
                  label="Age"
                />
                <h3>Other props</h3>
                <Select
                  formControlProps={{
                    error: true,
                    sx: { m: 1, minWidth: 150 },
                  }}
                  inputLabelProps={{
                    id: 'demo-simple-select-error-label',
                    text: 'Age',
                  }}
                  formHelperTextProps={{
                    text: 'Error',
                  }}
                  labelId="demo-simple-select-error-label"
                  id="demo-simple-select-error"
                  label="Age"
                  onChange={ageChange}
                  menuItems={ageList}
                  value={age}
                />
                <Select
                  formControlProps={{
                    disabled: true,
                    sx: { m: 1, minWidth: 150 },
                  }}
                  inputLabelProps={{
                    id: 'demo-simple-select-disabled-label',
                    text: 'Age',
                  }}
                  formHelperTextProps={{
                    text: 'Disabled',
                  }}
                  labelId="demo-simple-select-disabled-label"
                  id="demo-simple-select-disabled"
                  label="Age"
                  onChange={ageChange}
                  menuItems={ageList}
                  value={age}
                />
                <Select
                  formControlProps={{
                    sx: { m: 1, minWidth: 150 },
                  }}
                  inputLabelProps={{
                    id: 'demo-simple-select-readonly-label',
                    text: 'Age',
                  }}
                  formHelperTextProps={{
                    text: 'Read only',
                  }}
                  inputProps={{ readOnly: true }}
                  labelId="demo-simple-select-readonly-label"
                  id="demo-simple-select-readonly"
                  label="Age"
                  onChange={ageChange}
                  menuItems={ageList}
                  value={age}
                />
                <h3>Other items</h3>
                <Select
                  checkbox
                  formControlProps={{
                    sx: { m: 1, minWidth: 150 },
                  }}
                  inputLabelProps={{
                    id: 'demo-checkbox-label',
                    text: 'Age',
                  }}
                  formHelperTextProps={{
                    text: 'Checkbox select',
                  }}
                  labelId="demo-checkbox-label"
                  id="demo-checkbox"
                  label="Age"
                  onChange={ageChange}
                  value={age}
                  input={<OutlinedInput label="Tag" />}
                  menuItems={ageList}
                  renderValue={(selected: unknown) => {
                    return ageList.find(
                      (item: MenuItemProps) => item.value === selected,
                    )?.text;
                  }}
                />
                <Select
                  formControlProps={{
                    sx: { m: 1, minWidth: 150 },
                  }}
                  inputLabelProps={{
                    id: 'demo-checkbox-label',
                    text: 'Age',
                  }}
                  formHelperTextProps={{
                    text: 'Chip select',
                  }}
                  labelId="demo-checkbox-label"
                  id="demo-checkbox"
                  label="Age"
                  onChange={ageChange}
                  value={age}
                  input={<OutlinedInput label="Tag" />}
                  menuItems={ageList}
                  renderValue={(selected: unknown) => {
                    const ageItem = ageList.find(
                      (item: MenuItemProps) => item.value === selected,
                    );
                    return (
                      <Box>
                        <Chip key={ageItem?.value} label={ageItem?.text} />
                      </Box>
                    );
                  }}
                />
                <h3>Multiple select</h3>
                <Select
                  formControlProps={{
                    variant: 'filled',
                    sx: { m: 1, width: 300 },
                  }}
                  inputLabelProps={{
                    id: 'demo-simple-select-label',
                    text: 'Name',
                  }}
                  formHelperTextProps={{
                    text: 'Basic multiple select',
                  }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Name"
                  multiple
                  onChange={multipleAgeChange}
                  menuItems={nameList}
                  value={personName}
                />
                <Select
                  checkbox
                  formControlProps={{
                    sx: { m: 1, width: 300 },
                  }}
                  inputLabelProps={{
                    id: 'demo-multiple-checkbox-label',
                    text: 'Name',
                  }}
                  formHelperTextProps={{
                    text: 'Checkbox multiple select',
                  }}
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  label="Name"
                  multiple
                  onChange={multipleAgeChange}
                  value={personName}
                  input={<OutlinedInput label="Tag" />}
                  menuItems={nameList}
                  renderValue={(selected: unknown) =>
                    (selected as string[]).join(', ')
                  }
                />
                <Select
                  formControlProps={{
                    sx: { m: 1, minWidth: 150 },
                  }}
                  formHelperTextProps={{
                    text: 'Chip multiple select',
                  }}
                  placeholder="placeholder입니다."
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  onChange={multipleAgeChange}
                  value={personName}
                  menuItems={nameList}
                  renderValue={(selected: unknown) => {
                    return (
                      <Box>
                        {(selected as string[]).map((value: unknown) => (
                          <Chip key={value as string} label={value as string} />
                        ))}
                      </Box>
                    );
                  }}
                />
                <h3> </h3>
                <Select
                  formControlProps={{
                    sx: { m: 1, minWidth: 150 },
                  }}
                  formHelperTextProps={{
                    text: 'Placeholder Chip multiple select',
                  }}
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  onChange={multipleAgeChange}
                  value={personName}
                  menuItems={nameList}
                  placeholder="select names"
                />
                <Select
                  checkbox
                  formControlProps={{
                    sx: { m: 1, width: 300 },
                  }}
                  formHelperTextProps={{
                    text: 'Placeholder Checkbox multiple select',
                  }}
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  onChange={multipleAgeChange}
                  value={personName}
                  menuItems={nameList}
                  renderValue={(selected: unknown) =>
                    (selected as string[]).join(', ')
                  }
                  placeholder="select names"
                />
                <h3>Grouping select</h3>
                <Select
                  formControlProps={{
                    sx: { m: 1, minWidth: 150 },
                  }}
                  inputLabelProps={{
                    id: 'grouped-native-select',
                    text: 'Grouping',
                  }}
                  formHelperTextProps={{
                    text: 'Grouping Basic select',
                  }}
                  labelId="grouped-native-select-label"
                  id="grouped-native-select"
                  label="Grouping"
                  onChange={menuChange}
                  menuItems={menuList}
                  value={menu}
                />
                <Select
                  checkbox
                  formControlProps={{
                    sx: { m: 1, minWidth: 150 },
                  }}
                  inputLabelProps={{
                    id: 'demo-checkbox-label',
                    text: 'Grouping',
                  }}
                  formHelperTextProps={{
                    text: 'Grouping Checkbox select',
                  }}
                  labelId="demo-checkbox-label"
                  id="demo-checkbox"
                  label="Grouping"
                  onChange={menuChange}
                  value={menu}
                  menuItems={menuList}
                  renderValue={(selected: unknown) => {
                    return menuList.find(
                      (item: MenuItemProps) => item.value === selected,
                    )?.text;
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={page} index={1}>
          <Card>
            <CardContent>
              <Box>
                <h2>Native Select</h2>
                <h3>MenuItem</h3>
                <SelectNative
                  formControlProps={{
                    sx: { m: 1, minWidth: 150 },
                  }}
                  inputLabelProps={{
                    variant: 'standard',
                    text: 'Age',
                  }}
                  defaultValue={30}
                  inputProps={{
                    name: 'age',
                    id: 'uncontrolled-native',
                  }}
                >
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </SelectNative>
                <SelectNative
                  formControlProps={{
                    sx: { m: 1, minWidth: 150 },
                  }}
                  inputLabelProps={{
                    variant: 'standard',
                    text: 'Age',
                  }}
                  defaultValue={30}
                  inputProps={{
                    name: 'age',
                    id: 'uncontrolled-native',
                  }}
                  options={ageList}
                />
              </Box>
            </CardContent>
          </Card>
        </TabPanel>
      </Box>
    </div>
  );
}

export default SampleSelect;
