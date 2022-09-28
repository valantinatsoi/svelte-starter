<!-- <script>
  import Title from '$lib/title.svelte'
</script>

<Title title="Our Guides" /> -->

<!-- <script context="module">
  export async function load({ fetch }) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const guides = await res.json()

    if (res.ok) {
      return {
        props: {
          guides
        }
      }
    }
    return {
      status: res.status,
      error: new Error('Cannot fetch the guides')
    }
  }
</script> -->

<script>
  export let data;
  // console.log(guides)
</script>

<!-- <script>
	let guides = [
		{ id: 'J---aiyznGQ', title: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', title: 'Maru' },
		{ id: 'OUtn3pvWmpg', title: 'Henri The Existential Cat' }
	];
</script> -->

<div class="guides">
  <ul>
    {#each data.guides as guide}
      <li>
        <a href="/">{guide.title}</a></li>
    {/each}
    <li>Hello</li>
  </ul>
</div>

<div class="links">
  <a href="/about">About</a>
  <a href="/">Home</a>
</div>

<style>
  .guides {
    margin-top: 20px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  a {
    display: inline-block;
    margin-top: 10px;
    padding: 10px;
    border: 1px dotted rgba(255, 255, 255, 0.2);
  }

  .links {
    text-align: center;
    display: block;
    margin: 20px auto;
  }
</style>
