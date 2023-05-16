<script>
    import {BASE_URL, myUsername} from "./stores/golablStore.js";
    import Colors from "./pages/Colors/Colors.svelte";
    import RegisterPage from "./pages/register/RegisterPage.svelte";
    import { onMount } from "svelte";

    //We fetch in onMount becasue we want to do it only once. If we do it outside, every component change will fetch every time and can lead to memory leak
    onMount(async () => {
        const response = await fetch($BASE_URL + "/users/me", {credentials:"include"});
        const result = await response.json();
        myUsername.set(result.data);
    });
</script>

{#if $myUsername}
<Colors />
{:else}
<RegisterPage />
{/if}