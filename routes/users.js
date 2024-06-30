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

router.post('/users', addUser);
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
