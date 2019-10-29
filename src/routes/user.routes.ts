import { Router } from 'express'
const router = Router();

import { getUser, validateUser, SignUp, deleteUser } from '../controller/user.controller';

router.route('/')
      .get(getUser)
      .post(SignUp)
      .delete(deleteUser);

export default router;