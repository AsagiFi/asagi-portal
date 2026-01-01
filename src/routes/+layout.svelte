<script lang="ts">
	import { page } from '$app/state';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	const { children } = $props();
</script>

<svelte:head>
	<title>AsagiFi</title>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
