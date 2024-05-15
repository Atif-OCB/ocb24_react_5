import { registerUser } from "../api/auth";

const RegisterUser = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formContent = event.target.elements;
    const username = formContent.username.value;
    const email = formContent.email.value;
    const password = formContent.password.value;

    // Call API untuk register sini
    const data = await registerUser({
      username,
      email,
      password,
    });

    const token = data.token;
    if (token) window.localStorage.setItem('token', token);

    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '0.725rem',
      padding: '1rem',
      backgroundColor: '#444444',
      borderRadius: '0.5rem',
    }}>
      <fieldset style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" style={{
          padding: '0.5rem 0.75rem',
          borderRadius: '0.25rem',
          border: 'none',
          backgroundColor: '#ffffff',
          color: '#000000',
          outline: 'none',
        }} required />
      </fieldset>

      <fieldset style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" style={{
          padding: '0.5rem 0.75rem',
          borderRadius: '0.25rem',
          border: 'none',
          backgroundColor: '#ffffff',
          color: '#000000',
          outline: 'none',
        }} />
      </fieldset>

      <fieldset style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" style={{
          padding: '0.5rem 0.75rem',
          borderRadius: '0.25rem',
          border: 'none',
          backgroundColor: '#ffffff',
          color: '#000000',
          outline: 'none',
        }} />
      </fieldset>

      <button type="submit" className="submit">Submit</button>
    </form>
  )
}

export default RegisterUser;
