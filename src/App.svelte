<script>
	import router from "page";
	import Home from "./pages/Home.svelte";
	import About from "./pages/About.svelte";
	import login from "./pages/login.svelte";
	import Auction from "./pages/Auction.svelte";
    import profile from "./pages/profile.svelte";
    import Admin from "./pages/Admin.svelte";
    import isLoggedin from "./middelware/isLoggedin";
    import isAdmin from "./middelware/isAdmin";
    import Header from "./component/Header.svelte";


	let page;
	let params;

	router('/',(ctx) => page = Home);
	router('/About',(ctx) => page = About);
	router('/login',(ctx) => page = login);
	router('/Auction/:id',(ctx) => {
		params = ctx.params;
		page = Auction
	});
    router('/profile', isLoggedin, (ctx) => page = profile);
    router('/Admin', isLoggedin, isAdmin, (ctx) => page = Admin);

	router.start();
</script>

<svelte:head>
    <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.7/css/all.css">
</svelte:head>

<Header/>
<svelte:component this="{page}" {params}/>

<style>

</style>