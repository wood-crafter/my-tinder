export const postData = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(data)
  })
  return response.json()
}

export const getDog = async () => {
  return await fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
}

export const updateProfile = async (data) => {
  return await postData('https://alpha-sneu.xyz/api/v1/profiles/', data)
}