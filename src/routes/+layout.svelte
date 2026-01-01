<script lang="ts">
	import './layout.css';
	import { ModeWatcher } from "mode-watcher";

	const { children } = $props();
</script>

<svelte:head>
	<title>AsagiFi</title>
</svelte:head>

<ModeWatcher />
{@render children()}
