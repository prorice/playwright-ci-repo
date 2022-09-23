import { ListProps as MuiListProps } from '@mui/material';
import { IListItems } from './list-item.interface';

export interface IListProps extends MuiListProps {
  header?: string | string[];
  itemList: IListItems[];
}
