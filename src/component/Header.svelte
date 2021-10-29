<script>
    import tokenStore from "../stores/token";
    import router from "page";

    function logout() {
        $tokenStore.token = undefined;
        router.redirect('/login');
    }
</script>

<header>
    <a on:click={() => router.redirect('/')}><img src="assets/logo.ico" class="logo"></a>
    <a on:click={() => router.redirect('/')}>Home</a>
    <a on:click={() => router.redirect('/About')}>About</a>

    {#if $tokenStore.token}
        <a on:click={logout} class="login">logout</a>
    {:else}
        <a on:click={() => router.redirect('/login')} class="login">Login</a>
    {/if}
</header>

<style>
    header{
        display: flex;
        background-color: #333333;
        color: white;
        padding: 0.5rem;
        font-family: Calibri;
        font-weight: bold;
        font-size: larger;
    }
    a{
        margin: 1rem;
        color: inherit;
        cursor: pointer;
    }
    .logo{
        width: 50px;
        height: 50px;
    }
    .login{
        margin-left: auto;
        font-family: Calibri;
        font-weight: bold;
    }
</style>