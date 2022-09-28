import blogModel from "../../../DB/Models/Blog.js";

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogModel.find({}).populate([
      {
        path: "createdBy",
        match: { age: { $gte: 20 } }, // we could use match property to populate only when the user's age is greater than or equal to 20 years 
        select: "firstName lastName email age",
      },
    ]);
    res.json({ blogs });
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};


export const addBlog = async (req, res) => {
  try {
    const { title, description } = req.body;
    const createdBy = req.authUser._id;
    const newBlog = new blogModel({ title, description, createdBy });
    const savedBlog = await newBlog.save();
    res.json({ message: "Done", savedBlog });
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};


export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const createdBy = req.authUser._id;
    const blog = await blogModel.findOneAndUpdate(
      { _id: id, createdBy }, 
      { title, description },
      { new: true }
    );
    res.json({ message: "Done", blog });
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};


export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const createdBy = req.authUser._id;
    const blog = await blogModel.deleteOne(
      { _id: id, createdBy }
    );
    res.json({ message: "Done", blog });
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};
