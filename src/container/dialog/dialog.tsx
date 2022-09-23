import React from 'react';
import {
  Dialog as MuiDialog,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  DialogActions as MuiDialogActions,
} from '@mui/material';
import { Button } from '@/components/button';
import { DefaultDialogProps } from './types/dialog-props.interface';

export function Dialog(props: DefaultDialogProps) {
  const {
    open,
    onClose,
    dialogTitle,
    dialogContent,
    dialogAction,
    confirmButtonText,
    confirmButtonAction,
    ...dialogProps
  } = props;

  const action = dialogAction || (
    <Button onClick={confirmButtonAction}>{confirmButtonText || '확인'}</Button>
  );

  return (
    <MuiDialog open={open} onClose={onClose} {...dialogProps}>
      {dialogTitle ? <MuiDialogTitle>{dialogTitle}</MuiDialogTitle> : null}
      <MuiDialogContent>{dialogContent}</MuiDialogContent>
      <MuiDialogActions>{action}</MuiDialogActions>
    </MuiDialog>
  );
}
