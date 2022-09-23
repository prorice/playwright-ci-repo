import React from 'react';

import { useSnackbar, VariantType } from 'notistack';
import { IconButton } from '@mui/material';
import { CloseIcon } from '../icon';

export const MAX_SNACK = 3;

export function Snackbar() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const enqueueSnackbarAction = (
    msg: string,
    variant: VariantType = 'default',
  ) => {
    const key = Date.now() + Math.random();
    const action = (
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => closeSnackbar(key)}
        sx={{ width: '100%' }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    );
    enqueueSnackbar(msg, { variant, key, action });
  };

  const toast = (msg: string, variant: VariantType = 'default') => {
    enqueueSnackbarAction(msg, variant);
  };

  const success = (msg: string) => {
    toast(msg, 'success');
  };

  const warning = (msg: string) => {
    toast(msg, 'warning');
  };

  const info = (msg: string) => {
    toast(msg, 'info');
  };

  const error = (msg: string) => {
    toast(msg, 'error');
  };

  return { toast, success, warning, info, error };
}
