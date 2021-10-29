<script>
    import router from "page";
    export let list = [];
</script>

<main>
    <div class="auctions">
        <ul>
            {#each list as Action, i}
                <li on:click={() => router.redirect('/Auction/${i}')}>{Action}</li>
            {/each}
        </ul>
    </div>
</main>

<style>
    /*.show-shops{*/
    /*    margin:  auto;*/
    /*}*/
    /*.companyLogo{*/
    /*    float: left;*/
    /*}*/
    /*.nieuwsitem{*/
    /*    padding: 10px;*/
    /*}*/
    /*.dashboardbutton{*/
    /*    float: right;*/
    /*}*/
    /*.single-shop{*/
    /*    padding: 20px;*/
    /*    margin: 20px;*/
    /*    box-sizing: border-box;*/
    /*    background: #d9d9d9;*/
    /*}*/
</style>