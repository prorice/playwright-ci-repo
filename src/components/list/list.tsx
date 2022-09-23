import React, { ReactNode, useState } from 'react';
import {
  List as MuiList,
  ListSubheader,
  ListItemButton,
  ListItemText,
  Collapse,
  Divider,
  ListItemIcon,
} from '@mui/material';

import { IListProps } from './types/list-props.interface';
import { IListItems } from './types/list-item.interface';
import { ExpandLess, ExpandMore } from '../icon';

const prefixElements = (addElement: ReactNode) => {
  return addElement ? <ListItemIcon>{addElement}</ListItemIcon> : null;
};

function BaseList(listItem: IListItems) {
  const [isOpen, setOpen] = useState(false);
  const {
    divider,
    nestedItems,
    subHeader,
    onClick,
    prefixElement,
    label,
    suffixElement,
  } = listItem;

  const dividers = divider ? <Divider /> : null;
  const extendIcon = (isExtend: boolean | undefined) => {
    return isExtend ? (
      <ExpandLess
        onClick={() => {
          setOpen(!isOpen);
        }}
        sx={{ pr: 1 }}
      />
    ) : (
      <ExpandMore
        onClick={() => {
          setOpen(!isOpen);
        }}
        sx={{ pr: 1 }}
      />
    );
  };

  return (
    <div>
      <ListSubheader component="div">{subHeader}</ListSubheader>
      <ListItemButton onClick={onClick}>
        {prefixElements(prefixElement)}
        <ListItemText primary={label} />
        {suffixElement || null}
        {nestedItems ? extendIcon(isOpen) : null}
      </ListItemButton>
      <Collapse
        in={isOpen}
        timeout="auto"
        unmountOnExit
        className="collapse-layout"
      >
        {nestedItems
          ? nestedItems.map((nestedItem: IListItems) => {
              return <BaseList key={nestedItem.label} {...nestedItem} />;
            })
          : null}
      </Collapse>
      {dividers}
    </div>
  );
}

export function List(props: IListProps) {
  const { itemList, header, ...others } = props;

  return (
    <MuiList
      component="nav"
      subheader={<ListSubheader component="div">{header}</ListSubheader>}
      className="backoffice-component-list"
      {...others}
    >
      {itemList.map((item: IListItems) => {
        return <BaseList key={item.label} {...item} />;
      })}
    </MuiList>
  );
}
