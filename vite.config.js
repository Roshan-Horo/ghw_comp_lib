import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/components/index.js'),
      name: 'test_component_lib',
      // the proper extensions will be added
      fileName: 'test_component_lib',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          "react-dom": 'ReactDOM'
        },
      },
    },
  },
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  }
})
