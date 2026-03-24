import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../features/posts/postsSlice'

const HomePage = () => {
  const dispatch = useDispatch()
  const { posts, status, error } = useSelector((state) => state.posts)

  useEffect(() => {
    dispatch(fetchPosts('popular'))
  }, [dispatch])

  if (status === 'loading') {
    return <p>Loading posts...</p>
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>
  }

  return (
    <div>
      <h2>Popular Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default HomePage