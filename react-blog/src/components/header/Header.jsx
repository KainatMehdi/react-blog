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
        src="https://th.bing.com/th/id/OIP.mhEcWSvMXEwwgBIkK5fF4wHaGQ?pid=ImgDet&rs=1" alt="" />
    </div>
  );
}

