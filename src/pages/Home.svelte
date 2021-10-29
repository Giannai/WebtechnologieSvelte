<script>
    import auctions from "../component/auctions.svelte";

    // api call met get from auctions
    async function loadAuctions() {
        const apiCall = 'http://localhost:3000/auctions/';

        const resp = await fetch(apiCall);

        if(resp.ok){
            return await resp.json();
        }
        else{
            throw new Error (await resp.text());
        }
    }
    // login() {
    //     let email = document.getElementById("email").value;
    //     let password = document.getElementById("password").value;
    //
    //     let isApiFetch = false;
    //
    //     const data = { email : email, password : password };
    //
    //     fetch('http://localhost:8080/login', {
    //         method: 'POST', // or 'PUT'
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data),
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             isApiFetch = data.result
    //
    //             if (isApiFetch) {
    //                 this.isLoggingIn = true;
    //                 setTimeout(() => {
    //                     this.isLoggingIn = false;
    //                     this.isAlertShow = true;
    //                     setTimeout(() => this.redirect(), 1000)
    //                 }, 1000)
    //             } else {
    //                 alert("Login Failed!");
    //             }
    //
    //         })
    //         .catch((error) => {
    //             console.error('Error:', error);
    //         });
    // }
</script>

<!--
    Overzicht van veilingen zien
    Login&Register hamburger menu
    Zoekbalk
    Filters

-->
<div class="container">

    {#await loadAuctions()}
        <p>...waiting</p>
    {:then shops}
            {#each shops as shop}
                <div class="row">- <a target="_blank" href="{shop.link}">{shop.name}</a></div>
            {/each}
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}





</div>

<footer>Airsoft Inc ~ 2021</footer>



<style>


    .container{
        margin-top: 3em;
        border: 2px solid black; /*#8d8d8d*/
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        align-content: center;
    }

    .row{
        padding: 8px;
        font-weight: bold;
    }

    .row:nth-child(even) {background: #e8e8e8
    }
    .row:nth-child(odd) {background: #FBFCF8}

    a {
        color : black;
    }

    footer{
        margin-top: 100px;
        height: 20px;
        font-size: large;
        color: whitesmoke;
        background-color: #333333;
        text-align: center;
        width: 100%;
        font-family: Calibri;
        font-weight: bold;

    }
</style>

