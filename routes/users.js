const { getAllUsers, getUserById, addUser, updateUser, deleteUser  } = require('../controller/users');
const router = require('express').Router();
// const multer = require('multer');

// const diskStorage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'image')
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${new Date().getTime()}-${file.originalname}`);
//   }
// });

// const upload = multer({ storage: diskStorage });

router.post('/user', addUser);
router.get('/user', getAllUsers);
router.get('/user/:id', getUserById);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

module.exports = router;
