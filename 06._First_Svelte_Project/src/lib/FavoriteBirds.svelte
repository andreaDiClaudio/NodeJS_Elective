<script>
    import Bird from "./Bird.svelte";
    import Garden from "./Garden.svelte";
    import GardenGate from "./GardenGate.svelte";

    const birds = ["Pigeon", "Crow"];
    const birdsEmoji = ["emoji1", "emoji2"];

    let birdIndex = 0;
    let favoritBird = birds[birdIndex];
    let favoritBirdEmoji = birdsEmoji[birdIndex]

    function changeFavoriteBird() {
        birdIndex = (birdIndex + 1) % birds.length;
    }
</script>

<div on:click={changeFavoriteBird} on:keydown={changeFavoriteBird}>
    <Bird 
        name={favoritBird}
        emoji={favoritBirdEmoji}
    />
</div>
<GardenGate />
<Garden />