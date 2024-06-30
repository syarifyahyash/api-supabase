const { getAllCultures, getCultureById, addCulture, updateCulture, deleteCulture, updateCultureImage } = require('../controller/cultures');
const router = require('express').Router();
const multer = require('multer');

const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'image')
  },
  filename: function (req, file, cb) {
    cb(null, `${new Date().getTime()}-${file.originalname}`);
  }
});

const upload = multer({ storage: diskStorage });

router.post('/cultures', addCulture);
router.get('/cultures', getAllCultures);
router.get('/cultures/:id', getCultureById);
router.put('/cultures/:id', updateCulture);
router.put('/cultures/image/:id', upload.single('image'), updateCultureImage);
router.get('/cultures/image/:image', (req, res) => {
  res.sendFile(`${process.cwd()}/image/${req.params.image}`);
});
router.delete('/cultures/:id', deleteCulture);

module.exports = router;
