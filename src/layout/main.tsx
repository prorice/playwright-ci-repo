import { useRoutes } from 'react-router-dom';

import MainRouter from '@routers/main';

export const MainLayout = () => {
  return useRoutes(MainRouter);
};
