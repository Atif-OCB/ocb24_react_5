export const getTodoList = async () => {
  try {
    const token = window.localStorage.getItem('token');

    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/todos`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}