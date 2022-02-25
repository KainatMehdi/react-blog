import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
  const user = false;
  return (
    <div className='top'>
      <div className="topLeft">
          <i className="topIcon fa-brands fa-facebook-square"></i>
          <i className="topIcon fa-brands fa-twitter-square"></i>
          <i className="topIcon fa-brands fa-pinterest-square"></i>
          <i className="topIcon fa-brands fa-instagram-square"></i>
    </div>
      <div className="topCenter">
          <ul className="topList">
              <li className="topListItems"><Link to="/" style={{textDecoration:"none", color:"inherit"}}>HOME</Link></li>
              <li className="topListItems"><Link to="/about" style={{textDecoration:"none", color:"inherit"}}>ABOUT</Link></li>
              <li className="topListItems"><Link to="/write" style={{textDecoration:"none", color:"inherit"}}>WRITE</Link></li>
              <li className="topListItems">LOGOUT</li>
              
          </ul>
      </div>
      <div className="topRight">
        {
          user?(
            <img className = "topImg"
          src="https://www.bing.com/th?id=OIP.V1iHyCRxOq-FLxKhMURGQQHaKk&w=67&h=96&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" />
          ): (
            <ul className="topList">
              <li className="topListItems">
              <Link to="/login" style={{textDecoration:"none", color:"inherit"}}>LOGIN</Link>
              </li>
             <li className="topListItems">
             <Link to="/register" style={{textDecoration:"none", color:"inherit"}}>REGISTER</Link>
               </li> 
            </ul>     
          )
        }
          
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
