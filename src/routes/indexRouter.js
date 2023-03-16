import express from 'express';
import { Post } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const recentPosts = await Post.findAll({
    order: [['createdAt', 'DESC']],
    limit: 3,
  });
  const initState = { recentPosts };
  res.render('Layout', initState);
});

// router.get()

router.get('*', (req, res) => {
  res.render('Layout');
});

// router.get('/signup', (req, res) => {
//   const initState = {};
//   res.render('Layout', initState);
// });

export default router;
