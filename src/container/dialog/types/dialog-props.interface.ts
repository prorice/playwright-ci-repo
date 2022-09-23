import { DialogProps, ModalProps } from '@mui/material';

export interface DefaultDialogProps extends DialogProps {
  open: boolean;
  onClose: ModalProps['onClose'];
  scroll?: 'body' | 'paper';
  dialogTitle?: string;
  dialogContent?: React.ReactNode;
  dialogAction?: React.ReactNode;
  confirmButtonText?: string;
  confirmButtonAction?: React.MouseEventHandler<HTMLButtonElement>;
  fullScreen?: boolean;
}
