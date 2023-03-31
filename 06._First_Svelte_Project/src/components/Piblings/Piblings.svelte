<script>
    import Nibling from "../Nibling/Nibling.svelte";

    export let name;
    export let niblings = [];

    let cookies = ["🍪", "🍪", "🍪", "🍪", "🍪", "🍪",]

    function handleShowLove(message) {
        console.log(message);
    }

    function handleAskMoney(money) {
        console.log(`Sure here you have ${money} dkk`)
    }

    function handleEatCookie() {
        if (cookies.length === 0) {
            console.log("Awwww. No more cookies left.")
        } else {
            cookies.pop();
            cookies = cookies;
            console.log("There you go 🍪")
        }
    }
</script>

<h2>{name}</h2>
<p>Cookie Jar: {cookies}</p>

{#each niblings as nibling (nibling.id)}
    <Nibling 
    nibling={nibling} 
    onShowLove={handleShowLove} 
    piblingName={name}
    onAskMoney={handleAskMoney}
    onEatCookie={handleEatCookie}
    />
{/each}