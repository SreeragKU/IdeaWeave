import Category from "../models/category";
import Post from "../models/post";
import slugify from "slugify";

export const create = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await new Category({
      name,
      slug: slugify(name),
    }).save();

    //console.log("saved", category);
    res.json(category);
  } catch (error) {
    console.log(error);
  }
};

export const category = async (req, res) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });
    res.json(categories);
  } catch (error) {
    console.log(error);
  }
};

export const removeCategory = async (req, res) => {
  try {
    const { slug } = req.params;
    const category = await Category.findOneAndDelete({ slug });
    res.json(category);
  } catch (error) {
    console.log(error);
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { slug } = req.params;
    const { name } = req.body;
    const category = await Category.findOneAndUpdate(
      { slug },
      { name, slug: slugify(name) },
      { new: true }
    );
    res.json(category);
  } catch (error) {
    console.log(error);
  }
};

export const postsByCategory = async (req, res) => {
  try {
    const { slug } = req.params;
    const category = await Category.findOne({ slug });

    const posts = await Post.find({ categories: category._id })
      .populate("coverImage postedBy")
      .limit(20);

      res.json({ posts, category });
  } catch (err) {
    console.log(err);
  }
};