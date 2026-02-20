<script>
	import ButtonGroup from './ButtonGroup.svelte';
	import Button from './Button.svelte';

	export let config;
	export let view;
</script>

<ButtonGroup>
	<Button
		active={view === 'absolute'}
		label={config.absolute_button_label
			? config.absolute_button_label
			: 'Total amount <span class="text-xs font-normal">(EUR)</span>'}
		on:click={() => (view = 'absolute')}
	/>
	<Button
		active={view === 'relative'}
		label={config.share_button_label
			? config.share_button_label
			: 'Share <span class="text-xs font-normal">(%)</span>'}
		on:click={() => (view = 'relative')}
	/>
</ButtonGroup>
