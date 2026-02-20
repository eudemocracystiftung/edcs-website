<script>
	import Popover from './Popover.svelte';

	export let config;

	let hover;
</script>

<div
	class="bg-white py-8 px-4 sm:px-8 rounded-lg shadow-lg shadow-slate-200 border border-slate-200 relative flex justify-around flex-col"
>
	{#if config.note}
		<div
			class="absolute right-2 top-2"
			on:mouseover={() => (hover = true)}
			on:mouseout={() => (hover = false)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="var(--primary-color)"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
				/>
			</svg>
		</div>
	{/if}
	<div>
		<div class="border-l-4 border-primary-color pl-2">
			<h1 class="font-serif text-xl font-bold text-primary-color">{@html config.title}</h1>
			<h2 class="font-serif text-l font-medium mb-2">{config.subtitle}</h2>
		</div>
		<p class="text-slate-500 text-xs py-1">Source: {config.source}</p>
	</div>
	<slot name="filters" />
	<slot name="chart" />
</div>

<Popover visible={hover === true}>
	<div class="text-sm w-48 p-4">{@html config.note}</div>
</Popover>
