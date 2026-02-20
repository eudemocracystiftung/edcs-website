<script>
	import Toc from 'svelte-toc';

	let innerWidth = $state(0);
</script>

{#if innerWidth >= 1024}
	<Toc
		--toc-desktop-max-width="400px"
		--toc-active-bg="var(--primary-color)"
		--toc-active-color="#FFFFFF"
		--toc-li-hover-color="var(--primary-color)"
		--toc-padding="150px 0 0 20px"
	/>
{/if}

<svelte:window bind:innerWidth />
