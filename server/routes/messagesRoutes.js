const {
  addMessage,
  getMessages,
} = require("../controllers/messagesController");
const router = require("express").Router();

router.post("/addmsg/", addMessage);
router.post("/getmsgs/", getMessages);

module.exports = router;
