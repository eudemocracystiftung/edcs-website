<script>
	import { format } from 'd3-format';

	export let orientation = 'horizontal';
	export let position = 'bottom';
	export let tick;
	export let x = 0;
	export let y = 0;
	export let formatString = '';
	export let rounded = false;

	let f = format(formatString);

	const f2 = new Intl.NumberFormat(undefined, {
		// style: 'currency',
		// currency: 'EUR',
		// currencyDisplay: 'code',
		notation: 'compact',
		maximumFractionDigits: 0
	});
</script>

{#if orientation === 'horizontal'}
	<text
		{x}
		{y}
		class="text-xs text-slate-500"
		style="text-anchor: middle; dominant-baseline: central;"
		dy={position === 'bottom' ? 10 : -10}
	>
		{#if formatString}
			{f(tick)}
		{:else if rounded}
			{Math.round(tick)}
		{:else}
			{tick}
		{/if}
	</text>
{:else if orientation === 'vertical'}
	<text
		{x}
		{y}
		class="text-xs text-slate-500"
		style="text-anchor: end; dominant-baseline: central;"
		dx={-10}
	>
		{#if formatString}
			{f(tick)}
			<!-- {f2.format(tick)} -->
		{:else}
			{tick}
		{/if}
	</text>
{:else}
	{console.error('only horizontal and vertical are supported')}
{/if}
