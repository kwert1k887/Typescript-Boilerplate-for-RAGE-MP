import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    base: './',
    plugins: [vue()],
    root: resolve('src/cef'),
    build: {
        outDir: resolve('../client_packages/cef'),
        sourcemap: false,
    }
});