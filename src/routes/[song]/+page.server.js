/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  return {
    song: params.song
  };
}
