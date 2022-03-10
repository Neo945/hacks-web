export default async function lookup(method, data, endpoint, headers) {
  if (method === "GET") {
    console.log("lookup", method, data, endpoint);
    const response = await fetch(`/api${endpoint}`, {
      method: method,
      credentials: "include",
      mode: "cors",
      headers
    });
    return [await response.json(), response.status];
    // return response
  }
  const response = await fetch(`http://localhost:5000/api${endpoint}`, {
    method: method,
    body: data,
    credentials: "include",
    mode: "cors",
    headers
  });
  return [await response.json(), response.status];
}
