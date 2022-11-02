import express from 'express';
import ThicketController from '../controller/ticketController';

const router = express.Router();

router.use(express.json());
router.post('', ThicketController.create);
router.delete('/:id', ThicketController.deleteItems);
router.get('', ThicketController.get);
router.put('/:id', ThicketController.update);

export { router };
