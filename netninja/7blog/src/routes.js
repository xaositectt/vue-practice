import showBlogs from './components/showblogs'
import addBlog from './components/addblog'

export default [
  {
  path: '/', 
  component: showBlogs  
  },
  {
  path: '/add', 
  component: addBlog  
  },
]
