import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://employerschoicescreening.com/wp-content/uploads/AdobeStock_235931235-scaled.jpeg" alt="" />
    </div>
  );
}

