import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
	base: '/Note-web/',
	plugins: [vue()]
	// build: {
	// 	rollupOptions: {
	// 		input: {
	// 			main: resolve(__dirname, 'public/index.html'),
	// 		}
	// 	}
	// }
})
