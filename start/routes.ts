/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import IndexController from '#controllers/IndexController'
import ChatGptController from '#controllers/ChatGptController'


router.get('/', async () => {
  return {
    hello: 'world',
  }
})
router.get('/index', [IndexController, 'index'])
router.post('/chat', [ChatGptController, 'generateResponse'])