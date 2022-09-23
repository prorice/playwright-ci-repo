import React from 'react';
import { Navigate } from 'react-router-dom';

import ViewAlert from '@/views/sample/alert';
import ViewButton from '@/views/sample/button';
import ViewCheckbox from '@/views/sample/checkbox';
import ViewDataGrid from '@/views/sample/data-grid';
import ViewDialog from '@/views/sample/dialog';
import ViewInput from '@/views/sample/input';
import ViewSwitch from '@/views/sample/switch';
import ViewRadio from '@/views/sample/radio';
import ViewTooltip from '@/views/sample/tooltip';
import ViewChip from '@/views/sample/chip';
import ViewProgress from '@/views/sample/progress';
import ViewList from '@/views/sample/list';
import ViewSelect from '@/views/sample/select';
import ViewSnackbar from '@/views/sample/snackbar';
import ViewPicker from '@/views/sample/picker';

import { IRouter } from './types/router.interface';

const RouterSample: IRouter = {
  path: '/sample',
  children: [
    { path: '', element: <Navigate to="/sample/button" replace /> },
    { path: 'alert', element: <ViewAlert /> },
    { path: 'button', element: <ViewButton /> },
    { path: 'checkbox', element: <ViewCheckbox /> },
    { path: 'input', element: <ViewInput /> },
    { path: 'switch', element: <ViewSwitch /> },
    { path: 'radio', element: <ViewRadio /> },
    { path: 'tooltip', element: <ViewTooltip /> },
    { path: 'chip', element: <ViewChip /> },
    { path: 'data-grid', element: <ViewDataGrid /> },
    { path: 'dialog', element: <ViewDialog /> },
    { path: 'progress', element: <ViewProgress /> },
    { path: 'list', element: <ViewList /> },
    { path: 'select', element: <ViewSelect /> },
    { path: 'snackbar', element: <ViewSnackbar /> },
    { path: 'picker', element: <ViewPicker /> },
  ],
};

export default RouterSample;
