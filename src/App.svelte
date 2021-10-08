<script>
	import HomePage from '../src/component/homepage.svelte';

	const homePage = new HomePage({
		target: document.body,
		props: {
			name: 'test'
		}
	});
</script>



	<homePage/>