const {Router} = require('express');
const { usersGetController, usersPutController, usersPostController, usersDeleteController } = require('../controllers/users.controller');

const router = Router();

    router.get('/', usersGetController)
        
    router.post('/', usersPostController)

    router.put('/:id', usersPutController)

    router.delete('/', usersDeleteController)


module.exports = router;