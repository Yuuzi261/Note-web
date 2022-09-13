import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/Note-web/',
	pages:{
		index:{
			entry:'./src/main.js',
			template:'index.html'
		},
		install:{
			entry:'./pages/install/install.js',
			template:'./pages/install/install.html'
		},
		spiceip:{
			entry:'./pages/spiceup/spiceup.js',
			template:'./pages/spiceup/spiceup.html'
		},
		courses:{
			entry:'./pages/courses/courses.js',
			template:'./pages/courses/courses.html'
		}
	},
	plugins: [vue()]
})
