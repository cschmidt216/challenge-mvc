const router = require("express").Router();
const { Comments } = require("../../models");
const auth = require('../../helpers/auth');

router.get("/", async (req, res) => {
  try {
    const dbCommentData = await Comments.findAll({});
    res.json(dbCommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", auth, async (req, res) => {
  try {
    if (req.session) {
      const dbCommentData = await Comments.create({
        comment_text: req.body.comment_text,
        post_id: req.body.post_id,
        user_id: req.session.user_id,
      });
      res.json(dbCommentData);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const dbCommentData = await Comments.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!dbCommentData) {
      res.status(404).json({ message: "No comment found with this id" });
      return;
    }
    res.json(dbCommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;