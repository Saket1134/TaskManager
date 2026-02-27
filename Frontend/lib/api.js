const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiRequest(endpoint, method, body, token) {
  const res = await fetch(`${API_URL}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  return res.json();
}