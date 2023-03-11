import express from 'express';

const router = express.Router();

router.get('*', (req, res) => {
  res.render('Layout');
});
// router.get('/replies', (req, res) => {
//   const initState = {};
//   res.render('Layout', initState);
// });
// router.get('/signup', (req, res) => {
//   const initState = {};
//   res.render('Layout', initState);
// });

export default router;
