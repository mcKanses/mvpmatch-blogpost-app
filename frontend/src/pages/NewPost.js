import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// import { fetchPosts } from '../redux/actions/postsActions'
import { addPost, submitPost } from '../redux/slices/postsSlice'

const NewPost = () => {

  const [requestStatus, setRequestStatus] = useState('ready')
  const [newPost, setNewPost] = useState()

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [formIsValid, setFormIsValid] = useState(false);

  const dispatch = useDispatch()

  const status = useSelector(state => state.posts.status)

  useEffect(() => {
    setFormIsValid(text?.length > 20 && title?.length > 2)
  }, [text, title])

  const handleSubmit = async ev => {
    ev.preventDefault()
    try {
      setRequestStatus('pending')
      const newPost = await dispatch(submitPost({ title, text })).unwrap()
      setRequestStatus('fulfilled')
      setNewPost(newPost)
      dispatch(addPost(newPost))
    } catch (error) {
      console.error(error)
    }
  }

  const resetForm = () => {
    setRequestStatus('ready')
    setNewPost(null)
    setTitle('')
    setText('')
    setFormIsValid(false)
  }

  return (
    requestStatus === 'fulfilled'
      ? <>
          <h2>🥳 Your post was successfully submitted!</h2>
          <p>Now you can</p>
          <ul>
          <p>→ <Link to={"/posts/" + newPost?.id} >view your new post</Link></p>
            <p>→ <Link to="/">go to posts overview</Link></p>
            <p>→ <Link onClick={() => resetForm()}>create another post</Link></p>
          </ul>
        </>
      : <>
          <h1>Create new post</h1>
          <form>
            <div>{status?.error?.message}</div>
            <input type="text" value={title} onChange={ev => setTitle(ev.target.value)} placeholder="title" minLength={2} required />
            <textarea value={text} placeholder='write here...' onChange={ev => setText(ev.target.value)} rows="10" />
            <input type="submit" value="Post It! 📫" onClick={handleSubmit} disabled={!formIsValid || requestStatus === 'pending'} />
          </form>
        </>
  )
}

export default NewPost