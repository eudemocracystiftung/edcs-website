<script>
	import { getContext } from 'svelte';

	const { width, height } = getContext('LayerCake');
</script>

<text x={$width / 2} y={$height / 2} style="text-anchor: middle; dominant-baseline: central;">
	no data
</text>
