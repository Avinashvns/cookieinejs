import express from 'express'

// import controllers which creates routes
import studentController from '../controllers/studentController'

// router object
const router = express.Router();


// routes create for use contollers

// get cookie routes
router.get('/setcookie', studentController.set_cookie)

// get cookie routes
router.get('/getcookie', studentController.get_cookie)

// get cookie routes
router.get('/deletecookie', studentController.delete_cookie)


// export router
export default router