import  "./homestyle.css";
import Blogs from '../../components/Blogs/Blogs'
import Sidebar from "../../components/Sidebar/Sidebar";
export default function Home() {
  return (
    <>
    <img className="headerImg" src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />

    <div className="home">
      <Blogs/>
      <Sidebar/>
    </div>
    </>
  );
}
