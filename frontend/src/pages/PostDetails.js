import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom"

import apiRequest from "../axios/api.axios";

const PostDetails = () => {

  const params = useParams()

  const location = useLocation()
  const { state } = location

  const [post, setPost] = useState(state?.post)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (state?.post) setPost(state.post)
    if (!state?.post && params?.id) (async () => {
      try {
        const response = await apiRequest.get(`/posts/${params.id}`)
        setPost(response.data)
      } catch (error) {
        switch(error.response.status) {
          case 404:
            setError('🙈 post not found!')
            break;
          default:
            setError('😮 error while loading post!')
        }
        setPost(null)
      }
    })()
  }, [params, state])

  return (
    error
      ? <h2>{error}</h2>
      : post && (
          <>
            <h1>{post.title}</h1>
            <p style={{ fontSize: '1.2rem' }}>{post.text}</p>
            <p>{(new Date(post.timestamp)).toUTCString()}</p>
          </>
        )
  )
}

export default PostDetails