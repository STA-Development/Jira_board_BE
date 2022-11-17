import express from "express";
import ThicketController from "../controller/ticketController";

const router = express.Router();

router.use(express.json());
router.post("", ThicketController.create);
router.delete("/:id", ThicketController.deleteItems);
router.get("", ThicketController.get);
router.get("/:id", ThicketController.readById);
router.patch("/:id", ThicketController.update);

export { router };
