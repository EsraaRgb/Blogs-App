import './blog.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import SingleBlog from '../../components/SingleBlog/SingleBlog'
export default function Blog() {
  return (
    <div className='blog'>
      <SingleBlog/>
      <Sidebar/>
    </div>
  )
}
