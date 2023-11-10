const router = require("express").Router();

const {
  register,
  setAvatar,
  login,
} = require("../controllers/usersController");

router.post("/register", register);
router.post("/login", login);
router.post("/setAvatar/:id", setAvatar);

module.exports = router;
