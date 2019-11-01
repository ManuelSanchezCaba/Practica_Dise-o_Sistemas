/*
      Configurando mis rutas para poder hacer queries de mi tabla orden
*/
import { Router } from 'express'
const router = Router();

import { find, saveList } from '../controller/list.controller';

router.route('/find')
      .get(find);

router.route('/saveList').post(saveList);

export default router;