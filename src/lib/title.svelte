<script>
  export let title = "Ugly Sea Lion"
</script>

<div class="title">
  <img src="/sea-lion.svg" alt="sea lion">
  <h1>{title}</h1>
</div>

<style>
  .title {
    display: flex;
  }

  .title img {
    display: inline-block;
    width: 100px;
  }
  .title h1 {
    margin-left: 10px;
  }
</style>
