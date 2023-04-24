import { useRoutes } from 'react-router-dom'

import NewPost from '../pages/NewPost'
import PageHeader from './PageHeader'
import PostDetails from '../pages/PostDetails'

const PageWrapper = () => {
  return (
    <>
      <PageHeader />
      {useRoutes([
        { path: '/create-post', element: <NewPost /> },
        { path: '/posts/:id', element: <PostDetails />},
        { path: '*', element: <h2>🤔 Where do you think you were going?</h2> },
      ])}
    </>
  )
}

export default PageWrapper