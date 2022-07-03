// const bodyParser = require("body-parser");
const express = require("express");
const server = express();

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
let posts = [];

// to enable parsing of json bodies for post requests
server.use(express.json());//middleware para q lea el req.body

// TODO: your code to handle requests

const STATUS_USER_ERROR = 422;
let prevId = 0;
//*************************************************************
server.post("/posts", (req, res) => {
  const { author, title, contents } = req.body;
  if (!author || !title || !contents)
    return res.status(422).json({
      error: "No se recibieron los parámetros necesarios para crear el Post",
    });
  const post = {
    author,
    title,
    contents,
    id: ++prevId,
  };
  posts.push(post);
  res.json(post);
});
//*************************************************************
server.post("/posts/author/:author", (req, res) => {
  const { title, contents } = req.body;
  if (!title || !contents)
    return res.status(422).json({
      error: "No se recibieron los parámetros necesarios para crear el Post",
    });
  const post = {
    author: req.params.author,
    title,
    contents,
    id: ++prevId,
  };
  posts.push(post);
  res.json(post);
});
//*************************************************************
server.get("/posts", (req, res) => {
  if (req.query.term) {
    return res.json(
      posts.filter(
        (e) =>
          e.title.includes(req.query.term) ||
          e.contents.includes(req.query.term)
      )
    );
  } else res.json(posts);
});
//*************************************************************
server.get("/posts/:author", (req, res) => {
  const myArray = posts.filter((e) => e.author === req.params.author);
  myArray.length > 0
    ? res.json(myArray)
    : res.status(422).json({
        error: "No existe ningun post con el autor indicado",
      });
});
//*************************************************************
server.get("/posts/:author/:title", (req, res) => {
  const myArray = posts.filter(
    (e) => e.author === req.params.author && e.title === req.params.title
  );
  myArray.length > 0
    ? res.json(myArray)
    : res.status(422).json({
        error: "No existe ningun post con dicho titulo y autor indicado",
      });
});
//*************************************************************
server.put("/posts", (req, res) => {
  const { id, title, contents } = req.body;
  if (!id || !title || !contents)
    return res.status(422).json({
      error:
        "No se recibieron los parámetros necesarios para modificar el Post",
    });
  let post = posts.find((e) => e.id === id);
  if (!post)
    return res.status(422).json({
      error: "El id no corresponde a ningun Post",
    });
  post.title = title;
  post.contents = contents;
  res.json(post);
});
//*************************************************************
server.delete("/posts", (req, res) => {
  const { id } = req.body;
  if (!id)
    return res.status(422).json({
      error: "Mensaje de error",
    });
  let post = posts.find((e) => e.id === id);
  if (!post)
    return res.status(422).json({
      error: "El id no corresponde a ningun Post",
    });
  posts = posts.filter((e) => e.id !== id);
  res.json({ success: true });
});
//*************************************************************
server.delete("/author", (req, res) => {
  const { author } = req.body;
  if (!author)
    return res.status(422).json({
      error: "Mensaje de error",
    });
  let postsDeleted = posts.filter((e) => e.author === author);
  if (!postsDeleted.length)
    return res.status(422).json({
      error: "No existe el autor indicado",
    });
  posts = posts.filter((e) => e.author !== author);
  res.json(postsDeleted);
});
//*************************************************************
module.exports = { posts, server };
