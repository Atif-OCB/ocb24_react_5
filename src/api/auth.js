export const registerUser = async ({
  username,
  email,
  password,
}) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};