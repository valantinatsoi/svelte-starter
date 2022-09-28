import { error } from '@sveltejs/kit';
// import { json } from '@sveltejs/kit';

// export const load = ({ fetch }) => {
//   const guides = fetch ('https://jsonplaceholder.typicode.com/posts')
//   return json(guides)
// }

export async function load({ fetch }) {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  );
  // console.log(res);
  const guides = await res.json();
  // console.log(res.ok);
  // console.log(guides[0]);

  if (res.ok) {
    return {
      guides
      };
    }
  throw error (404, 'Not Found');
  }


// let response = fetch ('https://jsonplaceholder.typicode.com/posts');

  // if (res.ok) {
  //   return {
  //       guides
  //     };
  //   }
  // }
  // return {
  //   status: res.status,
  //   error: new Error('Cannot fetch the guides')
  // }
