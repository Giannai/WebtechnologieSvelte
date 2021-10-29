<!-- Grabbed (and modified) from https://svelte.dev/repl/ca967b45a5aa47b2bb2f9118eb79eefe?version=3.43.1 -->
<script>
    import { useForm, validators, HintGroup, Hint, email, required } from "svelte-use-form";
    import router from "page";
    import tokenStore from "../stores/token"

    const form = useForm();

    let username = "";
    let password = "";

   async function login() {
        const resp = fetch('http://localhost:3000') => {

        }

        $tokenStore = ;
        router.redirect('/');
    }
</script>

<form use:form>
    <h1>Login</h1>

    <div>
        <input type="email" name="email" use:validators={[required, email]} bind:value={username} />
        <HintGroup for="email">
            <Hint on="required">This is a mandatory field</Hint>
            <Hint on="email" hideWhenRequired>Email is not valid</Hint>
        </HintGroup>
    </div>

    <div>
        <input type="password" name="password" use:validators={[required]} bind:value={password} />

        <Hint for="password" on="required">This is a mandatory field</Hint>
    </div>

    <button disabled={!$form.valid} on:click|preventDefault={login}>Login</button>
</form>

<style>
    :global(.touched:invalid) {
        border-color: red;
        outline-color: red;
    }
</style>