<script>
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

        function search() {
            alert('test')
        }



</script>
<!--
    Overzicht van veilingen zien
    Login&Register hamburger menu
    Zoekbalk
    Filters
-->






<div class="input-group">
    <div class="form-outline">

        <input type="search" id="form1" class="form-control" placeholder="Search"/>

        <button on:click|once={search} class="btn btn-primary">
            <i class="fas fa-search"></i>
        </button>
    </div>

</div>

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
        margin-top: 1em;
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
    .input-group{
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 1em;
    }

    .form-control{
        width: 97%;
    }

    .btn{
        width: 3%;
        float: right;
        display: inline;
    }
</style>

