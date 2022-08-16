export async function graphqlQuery(query, { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' };

  const res = await fetch(process.env.API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables
    })
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}
