<script>
	import { base } from '$app/paths';
	import { fly, slide } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';

	export let open;
</script>

{#if open}
	<div
		transition:slide={{ duration: 250, easing: quadOut, opacity: 1 }}
		class="container flex content-between py-8"
		style="margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr;"
	>
		<ul>
			{#each [{ path: 'about', label: 'About' }, { path: '#projects', label: 'Projects' }, { path: 'impressum', label: 'Impressum' }] as link, i}
				<li transition:fly={{ y: -15, delay: 50 * i }} style="text-align: right;">
					<a href="{base}/{link.path}">{link.label}</a>
				</li>
			{/each}
		</ul>

		<ul class="container">
			{#each [{ path: 'financial-transparency', label: 'Financial transparency' }, { path: 'privacy', label: 'Privacy & data policy' }, { path: 'support', label: 'Support us' }] as link, i}
				<li transition:fly={{ y: -15, delay: 50 * i }}>
					<a href="{base}/{link.path}">{link.label}</a>
				</li>
			{/each}
		</ul>
	</div>
	<!-- <hr transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} /> -->
{/if}

<style>
	:global(html) {
		background: #1d1d2f;
	}

	ul {
		list-style: none;
	}

	a {
		width: max-content;
		margin: 1rem auto;
		color: white;
		text-decoration: none;
		word-break: normal;
	}
	a:hover {
		text-decoration: underline;
	}
</style>
