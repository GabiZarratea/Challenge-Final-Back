import express from 'express'
import phoneTabs_router from './phoneTabs.js'
import audioVideo_router from './audiovideo.js';

let router = express.Router()

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/audiovideo', audioVideo_router)
router.use('/phoneTabs' , phoneTabs_router)
export default router