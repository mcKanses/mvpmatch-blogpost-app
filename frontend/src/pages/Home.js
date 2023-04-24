import { useDispatch, useSelector } from 'react-redux'
import {
  fetchPosts,
  getPostsError,
  getPostsStatus,
  selectAllPosts
} from '../redux/slices/postsSlice'

import ButtonNewPost from '../components/ButtonNewPost'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Home = () => {

  const navigateTo = useNavigate()

  const dispatch = useDispatch()

  const posts = useSelector(selectAllPosts)
  const postsStatus = useSelector(getPostsStatus)
  const postsError = useSelector(getPostsError)
  
  const [ sortedPosts, setSortedPosts ] = useState()

  useEffect(() => {
    if (posts) setSortedPosts([ ...posts].sort((postA, postB) => postA.timestamp <= postB.timestamp))
  }, [ posts ])


  useEffect(() => {
    postsStatus === 'initialized' && dispatch(fetchPosts())
  }, [ dispatch, postsStatus ])
  
  return (
    <>
      <h1>mvpmatch blog</h1>
      <section>
        {posts?.length <= 0 && <p>😕 No posts yet. Do you want to <Link to="/create-post">write one</Link>?</p>}
        {sortedPosts?.map((post) => (
          <article key={post.id} className='blogpost preview' onClick={() => navigateTo(`/posts/${post.id}`, { state: { post } })}>
            <h2>{post.title}</h2>
            <h6>{(new Date(post.timestamp)).toUTCString()}</h6>
            <p style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>{post.text}</p>
          </article>
        ))}
        <ButtonNewPost />
      </section>
    </>
  )
}

export default Home