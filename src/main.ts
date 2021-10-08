import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'this is a testt'
	}
});

export default app;