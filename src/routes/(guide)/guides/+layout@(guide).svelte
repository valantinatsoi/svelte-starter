<script>
  import Title from '$lib/title.svelte'
  import '../../../styles/global.css'
</script>

<header>
  <Title title="Fugly Sea Lion" />
  <div class="links">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/guides">Guides</a>
  </div>
</header>

<main>
  <!-- page content -->
  <slot></slot>
</main>

<footer>
  <p>Copyright 2022 Fugly Sea Lion</p>
</footer>

<style>
  header {
    display: flex;
    justify-content: center;
  }

  main {
    max-width: 960px;
    margin: 20px auto;
  }

  footer {
    text-align: center;
  }

  .links {
    text-align: center;
    display: block;
    margin: 20px auto;
  }

  a {
    margin-left: auto;
  }
</style>
