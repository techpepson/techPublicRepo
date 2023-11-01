// vite.config.js
import { resolve } from 'path'
export default {
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'index.html'),
          menPage: resolve(__dirname, 'menPage.html')
        },
      },
    },
    
  };
  