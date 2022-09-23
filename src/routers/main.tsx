import React from 'react';

import ViewLogin from '@/views/login';
import ViewMain from '@/views/main';
import ViewVite from '@/views/vite';

import RouterSample from './sample';

import { IRouter } from './types/router.interface';

const RouterMain: IRouter[] = [
  { path: '/', element: <ViewMain /> },
  { path: '/login', element: <ViewLogin /> },
  { path: '/vite', element: <ViewVite /> },
  RouterSample,
];

export default RouterMain;
