import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';

const authRouter = express.Router();

authRouter.post('/signup', async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  if (email && password) {
    try {
      const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: {
          password: await bcrypt.hash(password, 10),
          firstName,
          lastName,
        },
      });
      if (created) {
        const sessionUser = JSON.parse(JSON.stringify(user));
        delete sessionUser.password;
        req.session.user = sessionUser;
        return res.sendStatus(200);
      }
      return res.sendStatus(401);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(401);
});

authRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const user = await User.findOne({
        where: { email },
      });
      if (await bcrypt.compare(password, user.password)) {
        const sessionUser = JSON.parse(JSON.stringify(user));
        delete sessionUser.password;
        req.session.user = sessionUser;
        return res.sendStatus(200);
      }
      return res.sendStatus(401);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(401);
});

authRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid').redirect('/');
});

export default authRouter;
