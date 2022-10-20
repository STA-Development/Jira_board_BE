import express from 'express';
import ItemController from '../controller/itemController';

const router = express.Router();

router.use(express.json());
router.post('',ItemController.create);
router.delete('/:id', ItemController.delete);
router.get('', ItemController.read);


export {router}