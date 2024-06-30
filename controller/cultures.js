const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllCultures = async (req, res, next) => {
  try {
    const cultures = await prisma.culture.findMany();
    res.json({
      status: 200,
      message: 'Semua budaya berhasil ditampilkan!',
      data: cultures
    });
  } catch (error) {
    next(error);
  }
};

const getCultureById = async (req, res, next) => {
  try {
    const culture = await prisma.culture.findFirst({
      where:{
        id: parseInt(req.params.id)
      }
    });
    if (culture) {
      res.json({
        status: 200,
        message: 'Budaya berhasil ditampilkan!',
        data: culture
      });
    } else {
      res.status(404).json({ error: 'Budaya tidak ditemukan' });
    }
  } catch (error) {
    next(error);
  }
};

const addCulture = async (req, res, next) => {
  try {
    const { name, description, province, address } = req.body;
    const newCulture = await prisma.culture.create({
      data: { name, description, province, address },
    });
    res.status(201).json({
      status: 201,
      message: 'Budaya berhasil ditambahkan!',
      data: newCulture
    });
  } catch (error) {
    next(error);
  }
};

const updateCulture = async (req, res, next) => {
  try {
    const { name, description, province, address, image } = req.body;

    const updatedCulture = await prisma.culture.update({
      where: { id: parseInt(req.params.id) },
      data: { name, description, province, address, image },
    });
    res.json({
      status: 200,
      message: 'Budaya berhasil diperbarui!',
      data: updatedCulture
    });
  } catch (error) {
    next(error);
  }
};

const updateCultureImage = async (req, res, next) => {
  try {
    const file = req.file;
    const updatedCulture = await prisma.culture.update({
      where: { id: parseInt(req.params.id)  },
      data: { image: file.path },
    });
    res.json({
      status: 200,
      message: 'Gambar budaya berhasil diupdate!',
      data: updatedCulture
    });
  } catch (error) {
    next(error);
  }
};

const deleteCulture = async (req, res, next) => {
  try {
    await prisma.culture.delete({
      where: { id: parseInt(req.params.id)  },
    });
    res.json({
      status: 200,
      message: 'Budaya berhasil dihapus!'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllCultures, getCultureById, addCulture, updateCulture, updateCultureImage, deleteCulture };
