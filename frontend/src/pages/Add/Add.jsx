import "./add.css";
export default function Add() {
  return (
    <div className="add">
      <img
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        className="blogImg"
      />
      <form className="addform">
        <div className="formGroup">
          <label htmlFor="fileInput">
            <i className="fas fa-plus addImgBtn"></i>
          </label>
          <input
            type="file"
            name="blogimg"
            id="fileInput"
            className="fileInput"
          />
          <input
            type="text"
            name="blogTitle"
            id="blogTitle"
            autoFocus={true}
            placeholder="Blog Title"
            className="input"

          />
        </div>
        <div className="formGroup">
        <textarea
            className="input writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="submit">Publish My Blog</button>
      </form>
    </div>
  );
}
