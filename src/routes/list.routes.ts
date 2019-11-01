/*
      Configurando mis rutas para poder hacer queries de mi tabla orden
*/
import { Router } from 'express'
const router = Router();

import { findById, find, saveList, deleteList, updateList } from '../controller/list.controller';

router.route('/find')
      .get(find)
      .post(findById);

router.route('/saveList').post(saveList);

router.route('/deleteList').delete(deleteList);

router.route('/updateList').put(updateList);

export default router;