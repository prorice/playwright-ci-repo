import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import eslint from 'vite-plugin-eslint';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    eslint({
      exclude: ['**/node_modules/**'],
    }),
  ],
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@containers': path.resolve(__dirname, './src/containers'),
      '@gql': path.resolve(__dirname, './src/gql'),
      '@layout': path.resolve(__dirname, './src/layout'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@routers': path.resolve(__dirname, './src/routers'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@views': path.resolve(__dirname, './src/views'),
    },
  },
});
