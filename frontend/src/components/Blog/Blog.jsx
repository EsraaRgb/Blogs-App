import "./blog.css";

export default function Blog() {
  return (
    <div className="post">
      <img className="postImg" src="./assets/postphoto.webp" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">tech</span>
          <span className="postCat">life</span>
        </div>
        <div className="userInfo">
        <img
            className="profilePic"
            src="/assets/profile.jpg"
            alt="profile pic"
          />
          <h5 className="userName">Esraa Ragab Ali</h5>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
}
