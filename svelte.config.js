// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		paths: {
			// base: dev ? '' : '/eu-observatory'
		},
		adapter: adapter(),
		alias: { $data: 'src/data' }
		//vite: {
      	//	optimizeDeps: {
      	//	include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
      	//	}
      		// plugins: []
    	//}
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;