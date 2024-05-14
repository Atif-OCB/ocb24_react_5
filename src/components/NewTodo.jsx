import PropTypes from 'prop-types';

const NewTodo = (props) => {
  /**
   * ✅ 1. Buat form
   * ✅ 2. ada 2 input - title, description
   * ✅ 3. ada 1 button - submit
   * 4. ketika button di klik, maka akan memanggil function onSubmit
   * 5. extract input daripada form
   * 6. panggil api
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    const formContent = event.target.elements;
    const title = formContent.title.value;
    const description = formContent.description.value;

    props.addNewTodo({
      title,
      description,
    });

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
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" style={{
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
        <label htmlFor="description">Description</label>
        <input type="text" id="description" name="description" style={{
          padding: '0.5rem 0.75rem',
          borderRadius: '0.25rem',
          border: 'none',
          backgroundColor: '#ffffff',
          color: '#000000',
          outline: 'none',
        }} />
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  )
}

NewTodo.propTypes = {
  addNewTodo: PropTypes.func,
}

export default NewTodo;