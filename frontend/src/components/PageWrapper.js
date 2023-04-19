import { useRoutes } from 'react-router-dom'

import FormNewPost from '../pages/FormNewPost'
import PageHeader from './PageHeader'

const PageWrapper = () => {
  return (
    <>
      <PageHeader />
      {useRoutes([
        {path: '/create-post', element: <FormNewPost /> },
        { path: '*', element: <div>ERROR</div> },
      ])}
    </>
  )
}

export default PageWrapper