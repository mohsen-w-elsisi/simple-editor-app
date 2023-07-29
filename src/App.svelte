<script>
  import Router from "svelte-spa-router";
  import routes from "./routes";
  import ControlBar from "$components/control-bar/ControlBar.svelte";
</script>

<ControlBar />

<Router {routes} />
