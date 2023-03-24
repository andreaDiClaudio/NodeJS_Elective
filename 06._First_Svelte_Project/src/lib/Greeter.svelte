<script>
    export let name = "Default Martin";
    export let greeting = "Where is"
  
    function changeGreeting() {
      if (greeting === "Hello") {
        greeting = "Goodbye"
      } else {
        greeting = "Hello"
      }
    }
  </script>
  
<h1 on:click={changeGreeting} on:keydown={changeGreeting}>{greeting} {name} ?</h1>

<style>
    h1 {
      color: coral;
      user-select: none;
    }
  </style>