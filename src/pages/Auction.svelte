<script>
    import Auctionlist from "../component/Auctionlist.svelte";
    // import {onMount} from 'svelte';
    //
    // export let params = {};
    //
    // let auctionid;
    //
    // onMount(() => {
    //    auctionid = params.id;
    // });

    // link to resource : http://localhost:3000/auctions/:id

    async function getAuction () {
        const resp = await fetch('http://localhost:3000/')
    }
</script>

<style>

</style>