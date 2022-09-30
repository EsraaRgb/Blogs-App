import style from "./style.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="left">
        <Link className="leftIcons logo">Blog</Link>
        <i className="leftIcons fa-brands fa-facebook"></i>
        <i class="leftIcons fa-brands fa-linkedin-in"></i>
        <i class="leftIcons fa-brands fa-github"></i>
      </div>
      <div className="center">
        <ul className="headerLinks">
          <Link className="pageLink" to="/">
            Home
          </Link>
          <Link className="pageLink" to="/add">
            Add Blog
          </Link>
          <li className="pageLink">About</li>
          <li className="pageLink">Contact</li>
        </ul>
      </div>
      <div className="right">
        <div className="loggedin">
          <Link to={"/settings"}>
            {" "}
            <img
              className="profilePic"
              src="/assets/profile.jpg"
              alt="profile pic"
            />
          </Link>
          <button className="logoutbtn btn btn-outline-dark bg-white text-dark">
            <i class="fa-solid fa-right-from-bracket "></i>
            Logout
          </button>
        </div>
        {/* <div className="loggedout">
<button className=" signup btn btn-outline-dark bg-white text-dark">
            <i class="fa-solid fa-right-from-bracket "></i>
            SignUp
          </button>
          <button className="btn btn-outline-dark bg-white text-dark">
            <i class="fa-solid fa-right-from-bracket "></i>
            Login
          </button>
</div> */}
      </div>
    </div>
  );
}
