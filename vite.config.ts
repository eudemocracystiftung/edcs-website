import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import dsv from '@rollup/plugin-dsv';

/** @type {import('vite').UserConfig} */
const config = {
	// alias: { data: 'src/data' },
	plugins: [sveltekit(), dsv()],
	optimizeDeps: {
    	include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
  	}
};

export default config;

/** 
export default defineConfig({
	plugins: [sveltekit()]
});
*/