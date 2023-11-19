import Post from "../models/post";
import Category from "../models/category";
import slugify from "slugify";
import cloudinary from "cloudinary";
import Media from "../models/media";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const uploadImage = async (req, res) => {
  try {
    // console.log(req.body);
    const result = await cloudinary.uploader.upload(req.body.image);
    // console.log(result);
    res.json(result.secure_url);
  } catch (err) {
    console.log(err);
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, content, volumes, categories, coverImage } = req.body;

    if (!title || !content || !volumes || !categories || !coverImage) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const alreadyExist = await Post.findOne({ slug: slugify(title.toLowerCase()) });
    if (alreadyExist) return res.status(400).json({ error: "Title is taken" });

    const categoryIds = await Promise.all(
      categories.map(async (category) => {
        const existingCategory = await Category.findOne({ name: category });
        return existingCategory ? existingCategory._id : null;
      })
    );

    // Adjust the volumes and chapters data
    const formattedVolumes = volumes.map((volume) => ({
      volume: volume.volume,
      chapters: volume.chapters.map((chapter) => ({
        chapter: chapter.chapter,
        name: chapter.name,
        content: chapter.content, // Make sure to include content here
      })),
    }));

    const post = await new Post({
      title,
      content,
      volumes: formattedVolumes,
      categories: categoryIds.filter((categoryId) => categoryId),
      coverImage,
      postedBy: req.user._id,
      slug: slugify(title),
    }).save();

    return res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const singlePost = async (req, res) => {
  try {
    const { slug } = req.params;

    const post = await Post.findOne({ slug })
      .populate("postedBy", "name") 
      .populate("categories", "name slug") 
      .populate("coverImage", "url")
      .populate({
        path: "volumes",
        populate: {
          path: "chapters",
          select: "chapter name content",
        },
      });

    console.log("Fetched post data:", post);
    res.json(post);
  } catch (err) {
    console.error("Error fetching post data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


export const editPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { title, volumes, coverImage, categories } = req.body;

    // Get category ids based on category name
    const categoryIds = await Promise.all(
      categories.map(async (category) => {
        const existingCategory = await Category.findOne({ name: category });
        return existingCategory ? existingCategory._id : null;
      })
    );

    // Adjust the volumes and chapters data
    const formattedVolumes = volumes.map((volume) => ({
      volume: volume.volume,
      chapters: volume.chapters.map((chapter) => ({
        chapter: chapter.chapter,
        name: chapter.name,
        content: chapter.content,
      })),
    }));

    // Update post
    const post = await Post.findByIdAndUpdate(
      postId,
      {
        title,
        slug: slugify(title),
        volumes: formattedVolumes,
        categories: categoryIds.filter((categoryId) => categoryId),
        coverImage,
      },
      { new: true }
    )
      .populate("postedBy", "name")
      .populate("categories", "name slug")
      .populate("coverImage", "url")
      .populate({
        path: "volumes",
        populate: {
          path: "chapters",
          select: "chapter name content",
        },
      });

    res.json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const posts = async (req, res) => {
  try {
    const all = await Post.find()
      .populate('coverImage')
      .populate("postedBy", "name")
      .populate("categories", "name slug")
      .populate("volumes.chapters", "name content") 
      .sort({ createdAt: -1 });

    res.json(all);
  } catch (err) {
    console.log(err);
  }
};

export const uploadImageFile = async (req, res) => {
  try {
    //console.log(req.files);
    const result = await cloudinary.uploader.upload(req.files.file.path);
    // save to db
    const media = await new Media({
      url: result.secure_url,
      public_id: result.public_id,
      postedBy: req.user._id,
    }).save();
    res.json(media);
  } catch (err) {
    console.log(err);
  }
};

export const media = async (req, res) => {
  try {
    const media = await Media.find()
      .populate("postedBy", "_id")
      .sort({ createdAt: -1 });
    res.json(media);
  } catch (err) {
    console.log(err);
  }
};

export const removeMedia = async (req, res) => {
  try {
    const mediaId = req.params.id;
    const media = await Media.findByIdAndDelete(mediaId);
    if (!media) {
      return res.status(404).json({ error: "Media not found" });
    }
    res.json({ ok: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const removePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.postId);
    res.json({ ok: true });
  } catch (err) {
    console.log(err);
  }
};

export const postByAuthor = async (req, res) => {
  try {
    const posts = await Post.find({ postedBy: req.user._id })
      .populate("postedBy", "name")
      .populate("categories", "name slug")
      .populate("coverImage", "url")
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    console.log(err);
  }
};