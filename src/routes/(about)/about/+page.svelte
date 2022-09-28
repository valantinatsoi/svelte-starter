<script>
  import Title from '$lib/title.svelte'
</script>

<Title title="About Us" />

<div class="about">
  <h2>About Us</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>

<div class="links">
  <a href="/guides">Guides</a>
  <a href="/">Home</a>
</div>

<style>
  .about {
    text-align: center;
    display: block;
    margin: 20px auto;
  }
  .links {
    text-align: center;
    display: block;
    margin: 20px auto;
  }
</style>
