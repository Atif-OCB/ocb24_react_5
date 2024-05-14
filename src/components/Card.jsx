import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      borderRadius: '0.5rem',
      border: '1px solid #666',
      padding: '1rem',
    }}>
      <label htmlFor={props.id} style={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.325rem',
        textDecoration: props.checked ? 'line-through' : 'none',
      }}>
        <h2 style={{
          fontSize: '1rem',
        }}>{props.title}</h2>
        <p style={{
          fontSize: '0.725rem',
        }}>{props.description}</p>
      </label>
      <input
        type="checkbox"
        name={props.id}
        id={props.id}
        checked={props.checked}
        onChange={props.toggleDone}
      />
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number || PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  checked: PropTypes.bool,
  toggleDone: PropTypes.func,
}

export default Card;