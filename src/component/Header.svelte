<script>
    import tokenStore from "../stores/token";
    import router from "page";

    function logout() {
        $tokenStore.token = undefined;
        router.redirect('/login');
    }
</script>

<header>
    <img on:click={() => router.redirect('/')} src="../AIRSOFT-Gun.png" class="logo">
    <a on:click={() => router.redirect('/')}>Home</a>
    <a on:click={() => router.redirect('/Auction')}>Auction</a>
    <a on:click={() => router.redirect('/About')}>About</a>

    {#if $tokenStore.token}
        <a on:click={logout} class="loged">logout</a>
    {:else}
        <a on:click={() => router.redirect('/login')} class="loged">login</a>
    {/if}
</header>

<style>
    header{
        display: flex;
        background-color: #333333;
        color: white;
        padding: 0.5rem;
    }
    a{
        margin: 1rem;
        color: inherit;
        cursor: pointer;
    }
    .logo{
        width: 150px;
        height: 150px;
    }
    .loged{
        margin-left: auto;
    }
</style>