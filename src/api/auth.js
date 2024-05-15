export const register = async ({
  username,
  email,
  password,
}) => {
  try {
    // Call API secara optimistik
    const response = await fetch({
      url: `${import.meta.env.API_URL}/api/auth/register`,
      method: "POST",
      body: {
        username: username,
        email: email,
        password: password,
      },
    });

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};