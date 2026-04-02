<script lang="ts">
	import { onMount } from 'svelte';
	import { login, logout, handleRedirectResult, onAuthChange, type User } from '$lib/firebase';

	let user: User | null = $state(null);
	let loading = $state(true);

	onMount(() => {
		handleRedirectResult().catch(console.error);
		return onAuthChange((u) => {
			user = u;
			loading = false;
		});
	});
</script>

<div class="flex min-h-screen items-center justify-center bg-gray-50">
	{#if loading}
		<div class="text-gray-400">Loading...</div>
	{:else if user}
		<div class="text-center">
			<p class="mb-4 text-lg text-gray-700">Welcome, {user.displayName ?? user.email}</p>
			<button
				onclick={logout}
				class="rounded border border-black px-6 py-2 text-sm font-medium text-black hover:bg-black hover:text-white transition-colors"
			>
				Logout
			</button>
		</div>
	{:else}
		<button
			onclick={login}
			class="rounded border border-black px-6 py-2 text-sm font-medium text-black hover:bg-black hover:text-white transition-colors"
		>
			Login with Google
		</button>
	{/if}
</div>
