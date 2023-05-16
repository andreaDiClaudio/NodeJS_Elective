<script>
    import io from "socket.io-client";
    import {colorsList} from "../../stores/golablStore.js";

    const socket = io("localhost:8080");

    let choosenColor = "#000000";
  
    function handleColorChoosen() {
      socket.emit("a client choose a color", { data: choosenColor });
      colorsList.update(list => {
        list.push()
      });
    }

    socket.on("a new color just dropped", (data) => {
        // don't do this... do it the Svelte way 
        // by adding it to a store and let App.svelte subscribe to it
        document.body.style.backgroundColor = data.data;
    });
</script>
  
  
<input type="color" bind:value={choosenColor}>
<button on:click={handleColorChoosen}>Send Color</button>
