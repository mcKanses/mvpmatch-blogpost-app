import { useNavigate } from 'react-router-dom'

const ButtonNewPost = () => {
  const navigateTo = useNavigate()
  return (
    <button
      id="btn-create-new-post"
      style={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: 'blue',
        position: 'fixed',
        right: '2em',
        bottom: '2em',
        cursor: 'pointer',
      }}
      onClick={() => navigateTo('/create-post')}
    >
      <svg viewBox="0 0 100 100">
        <line x1="50%" y1="20%" x2="50%" y2="80%" stroke="white" />
        <line x1="20%" y1="50%" x2="80%" y2="50%" stroke="white" />
      </svg>  
    </button>
  )
}

export default ButtonNewPost