<script>
    import {BASE_URL, myUsername} from "../../stores/golablStore.js"
    let username = "";

    async function registerUser() {
        console.log(username);
        fetch($BASE_URL + "/register", {
            method: "POST",
            credentials:"include",
            body: JSON.stringify({username}),
            headers: {
                "Content-Type":"application/json"
            },
        });
        myUsername.set(username);
    }
</script>
<h1>Register Page</h1>

<input placeholder="username..." bind:value={username}>
<button on:click={registerUser}>Register Now</button>