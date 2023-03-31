<script>
    export let nibling;
    export let onShowLove;
    export let onAskMoney;
    export let piblingName;
    export let onEatCookie;

    import { fridgeMessages } from "../../store/fridgeMessage.js"

    let fridgeMessage = "";
    function handleWriteFridgeMessage() {
        // $fridgeMessages.push(fridgeMessage);
        // fridgeMessages.set($fridgeMessages);
        fridgeMessages.update((currentFridgeMessages) => {
            currentFridgeMessages.push(fridgeMessage);
            return currentFridgeMessages;
        });
        fridgeMessage = "";
    }

</script>

<div class:is-Girl={nibling.isGirl} class:is-Boy={!nibling.isGirl} class={nibling.blackSheep || "not ablack sheep"}>
{#if nibling.isGirl}
    <p>Niece: {nibling.name}</p>
{:else if !nibling.isGirl}
    <p>Nephew: {nibling.name}</p>
{/if}
</div>
<div>{nibling.cookies}</div>

<button on:click={() => onShowLove(`Hey ${piblingName}. It's me ${nibling.name} and I love you`)}>Show Love</button>

<button on:click={() => onAskMoney(100)}>Ask for money</button>

<button on:click={onEatCookie} >Eat a cookie</button>

<p>There are {$fridgeMessages.length} messages on the fridge.</p>
<input bind:value={fridgeMessage} >
<button on:click={handleWriteFridgeMessage}>Write a message on the fridge</button>

<style>
    .is-Girl{
        border: 2px solid orange;
    }

    .is-Boy {
        border: 2px solid blue;
    }

    .not-a-black-sheep {
        color: black;
        background-color: white;
    }

    .medium-black-sheep {
        color: black;
        background-color: bisque;
    }

    .ultra-black-sheep {
        background-color: brown;
    }
</style>