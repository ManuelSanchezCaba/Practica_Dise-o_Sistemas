/*
      Configurando mis rutas para poder hacer queries de mi tabla user
*/
import { Router } from 'express'
const router = Router();

import { find, findById, SignIn, saveUser, deleteUser } from '../controller/user.controller';

router.route('/find')
      .get(find)
      .post(findById);

router.route('/saveUser').post(saveUser);
router.route('/deleteUser').delete(deleteUser);

export default router;