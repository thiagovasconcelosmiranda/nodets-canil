import { Router } from "express";
import * as PageController from '../controllers/pageControllher';
import * as SearchControllher from '../controllers/searchControllher';

const router = Router();

router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);

router.get('/search', SearchControllher.search);




export default router;

