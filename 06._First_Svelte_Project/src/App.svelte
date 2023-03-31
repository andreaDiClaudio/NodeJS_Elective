<script>
  import Home from "./components/Home/Home.svelte";
    import Piblings from "./components/Piblings/Piblings.svelte";
  
  const piblings = ["John", "Mark"];
  const niblings = [
    {
      id:1,
      name: "Ann",
      isGirl : true,
      blackSheep: "not-a-black-sheep",
      cookies:[]
    },
    {
      id:2,
      name: "Amalie",
      isGirl: true,
      blackSheep: "medium-black-sheep",
      cookies:[]
    },
    {
      id:3,
      name: "Peter",
      blackSheep: "ultra-black-sheep",
      cookies:[]
    }
  ]

</script>

<Home>
  <h1>This is the home of the svelte family</h1>
  <Piblings name={piblings[0]} niblings={niblings}/>
  <Piblings name={piblings[1]} niblings={niblings}/>
</Home>