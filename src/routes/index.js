import express from 'express'
import shopController from '../controller/shop'
import categoryController from '../controller/category'
import snackController from '../controller/snack'
const route = express()

route.post('/shop',shopController.add)
route.put('/shop/:id',shopController.update)
route.get('/shop/:id',shopController.get)
route.get('/shops',shopController.getAll)

route.post('/category',categoryController.add)
route.put('/category/:id',categoryController.update)
route.get('/category/:id',categoryController.get)
route.get('/categorys',categoryController.getAll)

route.post('/snack',snackController.add)
route.put('/snack/:id',snackController.update)
route.get('/snack/:id',snackController.get)
route.get('/snacks',snackController.getAll)
route.delete('/snack/:id',snackController.remove)

route.get('/healthz', (req, res) => {
  res.send('OK')
})

route.get('/', (req, res) => {
    res.status(200).send('hello world');
});

export default route
