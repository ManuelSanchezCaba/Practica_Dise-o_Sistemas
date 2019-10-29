import { Router } from 'express'
const router = Router();

import { getList, createList } from '../controller/list.controller';

router.route('/')
      .get(getList)
      .post(createList);

export default router;