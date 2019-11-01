/*
      Configurando mis rutas para poder hacer queries de mi tabla order_pack
*/
import { Router } from 'express'
const router = Router();

import { find, findById, saveList, deleteList, updateList, getNameCollaborator } from '../controller/list.packages.controller';

router.route('/find')
      .get(find)
      .post(findById);

router.route('/saveList').post(saveList);

router.route('/deleteList').delete(deleteList);

router.route('/updateList').put(updateList);

router.route('/getNameCollaborator').post(getNameCollaborator);

export default router;