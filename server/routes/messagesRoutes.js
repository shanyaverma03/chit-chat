const {
  addMessage,
  getMessages,
} = require("../controllers/messagesController");
const router = require("express").Router();

router.post("/addmsg/", addMessage);

router.get("/getmsgs/", getMessages);

module.exports = router;
