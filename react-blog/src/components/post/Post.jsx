import { Link } from 'react-router-dom'
import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <img
        className='postImg' 
        src="https://th.bing.com/th/id/OIP.L4S3e8FB0MA4u6BxhWWrsgHaEK?pid=ImgDet&rs=1" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">
                  <Link className='link' to="/posts?cat=Music">Music</Link>
                </span>
                <span className="postCat">
                  <Link className='link' to="/posts?cat=Life">Life</Link>
                </span>
            </div>
            <span className="postTitle">
            <Link to="/post/abc" className="link">
            Lorem ipsum dolor sit amet
          </Link>
            </span>
            <hr  />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolores provident
             veniam rem possimus deleniti, architecto blanditiis, consectetur officia cum 
             beatae cupiditate.Quaerat autem tempore nostrum, pariatur explicabo cumque asperiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolores provident
             veniam rem possimus deleniti, architecto blanditiis, consectetur officia cum 
             beatae cupiditate.Quaerat autem tempore nostrum, pariatur explicabo cumque asperiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolores provident
             veniam rem possimus deleniti, architecto blanditiis, consectetur officia cum 
             beatae cupiditate.Quaerat autem tempore nostrum, pariatur explicabo cumque asperiores.</p>
    </div>
  )
}
