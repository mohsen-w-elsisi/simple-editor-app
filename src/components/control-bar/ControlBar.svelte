<script>
  import controlBarItems from "./controlBarItems";
</script>

<aside class="bg-base-200 fixed top-0 bottom-0 left-o w-16 pt-1">
  {#each controlBarItems as { name, icon, menu }}
    <div class="dropdown dropdown-hover dropdown-right">
      <label class="btn btn-square bg-base-300 m-1" for="">
        <img src={icon} alt={name} class="invert scale-75" />
      </label>
      
      <ul class="dropdown-content z-[1] pl-3">
        <menu class="menu p-2 shadow bg-base-200 rounded-box w-52">
          {#each menu as { text, action }}
            <button class="btn" on:click={action}>
              <span class="text-left mr-auto">{text}</span>
            </button>
          {/each}
        </menu>
      </ul>
    </div>
  {/each}
</aside>
