<script>
	import Nav from '$lib/ui/Nav.svelte';
	import { Hamburger } from 'svelte-hamburgers';
	import MenuContent from '$lib/ui/MenuContent.svelte';

	let open = $state(0);
</script>

<header class="bg-primary-color shadow-xl border-b border-black/40">
	<div class="container mx-auto p-4" style="display: flex; justify-content: space-between">
		<Nav />
		<Hamburger type="elastic" bind:open --color="white" />
	</div>
	<MenuContent bind:open />
</header>
