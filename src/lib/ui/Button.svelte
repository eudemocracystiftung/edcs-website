<script>
	export let label;
	export let active = false;
</script>

<button
	on:click
	class:active
	class=" px-4 py-2 first:rounded-l last:rounded-r text-slate-600 font-light text-sm border border-slate-200 hover:bg-slate-300/50 bg-slate-100 table-cell border-collaps"
	>{@html label}</button
>

<style>
	.unit {
		font-size: 0.6em;
	}
	.active {
		color: white;
		background-color: var(--primary-color);
		font-weight: 600;
		cursor: default;
	}

	.active:hover {
		background-color: var(--primary-color);
	}
</style>
