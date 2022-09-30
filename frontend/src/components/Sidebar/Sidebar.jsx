import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem ">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="/assets/sidebarimg.jpg"
          alt="about me"
          className="aboutmepic"
        />
        <p className="description">
          Lorem ipsum, dolor sit amet Autem consectetur adipisicing elit.  ratione nostrum suscipit cum.
        </p>
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="list">
          <li className="listItem">Life</li>
          <li className="listItem">Health</li>
          <li className="listItem">Diet</li>
          <li className="listItem">Sports</li>
          <li className="listItem">Tech</li>
          <li className="listItem">movies</li>
        </ul>
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="socialIcons">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i class="sidebarIcon fa-brands fa-linkedin-in"></i>
          <i class="sidebarIcon fa-brands fa-github"></i>
        </div>
      </div>
    </div>
  );
}
