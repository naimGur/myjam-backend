import { Router } from 'express';
 
const router = Router();
 
router.get('/', async (req, res) => {
    const users = await req.context.models.User.findAll();
    return res.send(users);
  });
   
  router.get('/:userId', async (req, res) => {
      console.log("i handle!")
      const user = await req.context.models.User.findByPk(
      req.params.userId,
      console.log(user)
    );
    return res.send(user);
});
 
export default router;