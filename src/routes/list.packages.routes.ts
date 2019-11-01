/*
      Configurando mis rutas para poder hacer queries de mi tabla order_pack
*/
import { Router } from 'express'
const router = Router();

import { saveList } from '../controller/list.packages.controller';

router.route('/saveList')
      .post(saveList);

export default router;