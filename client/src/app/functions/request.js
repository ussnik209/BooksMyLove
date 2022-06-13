const request = async (url, method = 'GET', body = null, headers = {}) => {
    if (body) {
      body = JSON.stringify(body)
      headers['Content-type'] = 'application/json'
    }

    const response = await fetch(url, { method, body, headers })
    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Something goes wrong!')
    }

    return data
}

export default request