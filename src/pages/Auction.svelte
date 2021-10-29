<script>
    import Auctionlist from "../component/Auctionlist.svelte";
    import {onMount} from 'svelte';

    export let params = {};

    let auctionid;

    onMount(() => {
       auctionid = params.id;
    });

    async function getAuction () {
        const resp = await fetch('http://localhost:3000/auctions')

        if (resp.ok) {
            return await resp.json();
        }else {
            throw new Error(await resp.text());
        }
    }
</script>

{#await getAuction()}

{:then Auctions}
    <Auctionlist data="{Auctions}"/>
{:catch error}
    <p>{error.message}</p>

<style>

</style>