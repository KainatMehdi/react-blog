import { Link } from 'react-router-dom'
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
          <span className='sidebarTitle'> ABOUT ME</span>
          <img src="https://th.bing.com/th/id/OIP.XfW7lfvDoHTE4o_kJZA5aAHaE8?pid=ImgDet&rs=1" alt="" />
          <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut veniam commodi illum.
               Mollitia quisquam nihil in repellat iste ullam beatae. 
        </p>
      </div>
      <div className="sidebarItem">
      <span className='sidebarTitle'> CATEGORIES  </span>
     <ul className="sidebarList">
         <li className="sidebarListItem">
         <Link className="link" to="/posts?cat=Life">Life</Link>
         </li>
         
         <li className="sidebarListItem">
         <Link className="link" to="/posts?cat=Tech">Tech</Link>
         </li>
         
         <li className="sidebarListItem">
         <Link className="link" to="/posts?cat=Music">Music</Link>
         </li>
         
         <li className="sidebarListItem">
         <Link className="link" to="/posts?cat=Cinema">Cinema</Link>
         </li>

         <li className="sidebarListItem">
         <Link className="link" to="/posts?cat=Style">Style</Link>
         </li>
         
         <li className="sidebarListItem">
         <Link className="link" to="/posts?cat=Sport">Sport</Link>
         </li>
         
     </ul> 
      </div>
      <div className="sidebarItem">
      <span className='sidebarTitle'> FOLLOW US  </span>
      <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-twitter-square"></i>
          <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
      </div>

      </div>
    </div>
  )
}
