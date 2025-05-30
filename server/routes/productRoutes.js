import express from 'express';
//import loginUser from '../controllers/authController.js'; 
import productController from '../controllers/productController.js'
import authenticate from '../middleware/authMiddleware.js';  
import authorize from '../middleware/roleMiddleware.js';  


const router = express.Router();

// get all products
router.get('/all', productController.getProducts);


// get specific production
router.get('/product/:product', productController.getProduct);


//create product
router.post(
    '/product/:product',
    authenticate,
    authorize('admin'),
    productController.createProduct
  );

  //update prroduct 

  router.patch(
    '/update/:productCode',
    authenticate,
    authorize('admin'),
    productController.updateProduct

  )

  router.delete(
    '/delete/:productCode',
    authenticate,
    authorize('admin'),
    productController.deleteProduct
  )




export default router;

//PROD-001