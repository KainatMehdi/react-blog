import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'
export default function Settings() {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
          <div className="settingsTitle">
              <span className="settingsUpdateTitle">Update Your Account</span>
              <span className="settingsDeleteTitle">Delete Account</span>

          </div>
          <form className='settingsForm'>
              <label>Profile Picture </label>
              <div className="settingsPP">
                  <img
                   src="https://th.bing.com/th?q=Kids+Picnic+Clip+Art&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=PK&setlang=en&adlt=moderate&t=1&mw=247" alt="" />
                   <label htmlFor="fileInput">
                   <i className="settingsPPIcon fa-solid fa-user"></i>
                   </label>
                   <input type='file' id='fileInput' style={{display:'none'}}/>
              </div>
              <label>Username</label>
                <input type ='text' placeholder='someone'/>
                <label>Email</label>
                <input type ='text' placeholder='someone@gmail.com'/>
                <label>Password</label>
                <input type ='password' />
                <button className="settingsSubmit">Update</button>

















          </form>
      </div>
      <Sidebar/>
    </div>
  )
}
