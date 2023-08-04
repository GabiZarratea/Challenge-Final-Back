import express from 'express'
import audioVideo_router from './audiovideo.js';
let router = express.Router()

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/audiovideo', audioVideo_router)
export default router