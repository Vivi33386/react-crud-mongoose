import express from "express";
//import AllUsers from "../../crud-application/src/components/AllUsers.js";
import { addUser, getUsers } from "../controller/user-controller.js";

const router = express.Router();

router.post("/add", addUser);
router.get("/all", getUsers);

/*router.post('/add', () => {
  console.log("Hello");
});*/

export default router;
