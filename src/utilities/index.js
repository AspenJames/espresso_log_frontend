const defaultHeaders = {
  "Accept": "application/json",
  "Content-Type": "application/json"
};

const headers = () => {
  const jwt = localStorage.getItem('phoenixAuthToken');
  return { ...defaultHeaders, jwt };
}

export const httpPost = (url, data) => {
  const body = JSON.stringify(data);

  return fetch(url, {
    method: "POST",
    headers: headers(),
    body: body
  }).then(resp => resp.json());
}

export const httpGet = url => {
  return fetch(url, {
    headers: headers()
  }).then(resp => resp.json());
}
