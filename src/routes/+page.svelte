<script>
  let title = "Hello"

  const updateTitle = () => {
    title = "Goodbye"
  }
</script>

<div class="index">
  <h2>{title}</h2>
  <button on:click={updateTitle}>Change Title</button>
  <input type="text" bind:value={title}>
</div>

<div class="index">
  <a href="/about">About</a>
  <a href="/guides">Guides</a>
</div>

<style>
  .index {
    text-align: center;
    display: block;
    margin: 20px auto;
  }
</style>
