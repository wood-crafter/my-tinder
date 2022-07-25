export const postData = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data)
  })
  return response.json()
}