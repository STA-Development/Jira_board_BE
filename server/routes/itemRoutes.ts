import express from 'express';
import ItemController from '../controller/itemController';
import itemService from '../service/itemService';

const router = express.Router();

router.use(express.json());
router.post('',ItemController.create);
router.delete('/:id', ItemController.deleteItems);
router.get('', ItemController.read);
router.get('/:id',ItemController.readById);
router.put('/:id',itemService.updateItem );


export {router}