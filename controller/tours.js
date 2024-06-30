const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllTours = async (req, res, next) => {
  try {
    const tours = await prisma.tour.findMany();
    res.json({
      status: 200,
      message: 'Semua pariwisata berhasil ditampilkan!',
      data: tours
    });
  } catch (error) {
    next(error);
  }
};

const getTourById = async (req, res, next) => {
  try {
    const tour = await prisma.tour.findFirst({
      where:{
        id: parseInt(req.params.id)
      }
    });
    if (tour) {
      res.json({
        status: 200,
        message: 'pariwisata berhasil ditampilkan!',
        data: tour
      });
    } else {
      res.status(404).json({ error: 'pariwisata tidak ditemukan' });
    }
  } catch (error) {
    next(error);
  }
};

const addTour = async (req, res, next) => {
  try {
    const { name, description, province, address, map } = req.body;
    const newTour = await prisma.tour.create({
      data: { name, description, province, address, map },
    });
    res.status(201).json({
      status: 201,
      message: 'pariwisata berhasil ditambahkan!',
      data: newTour
    });
  } catch (error) {
    next(error);
  }
};

const updateTour = async (req, res, next) => {
  try {
    const { name, description, province, address, image, map } = req.body;

    const updatedTour = await prisma.tour.update({
      where: { id: parseInt(req.params.id) },
      data: { name, description, province, address, image, map },
    });
    res.json({
      status: 200,
      message: 'pariwisata berhasil diperbarui!',
      data: updatedTour
    });
  } catch (error) {
    next(error);
  }
};

const updateTourImage = async (req, res, next) => {
  try {
    const file = req.file;
    const updatedTour = await prisma.tour.update({
      where: { id: parseInt(req.params.id)  },
      data: { image: file.path },
    });
    res.json({
      status: 200,
      message: 'Gambar pariwisata berhasil diupdate!',
      data: updatedTour
    });
  } catch (error) {
    next(error);
  }
};

const deleteTour = async (req, res, next) => {
  try {
    await prisma.tour.delete({
      where: { id: parseInt(req.params.id)  },
    });
    res.json({
      status: 200,
      message: 'pariwisata berhasil dihapus!'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllTours, getTourById, addTour, updateTour, updateTourImage, deleteTour};
