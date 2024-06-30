const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllUsers = async (req, res, next) => {
  try {
    const user = await prisma.user.findMany();
    res.json({
      status: 200,
      message: 'All Users Successfully Retrieved!',
      data: user
    });
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const user = await prisma.user.findFirst({
      where:{
        id: parseInt(req.params.id)
      }
    });
    if (user) {
      res.json({
        status: 200,
        message: 'User Successfully Retrieved!',
        data: user
      });
    } else {
      res.status(404).json({ error: 'User not found!' });
    }
  } catch (error) {
    next(error);
  }
};

const addUser = async (req, res, next) => {
  try {
    const { name, gender, email } = req.body;
    const newuser = await prisma.user.create({
      data: { name, gender, email },
    });
    res.status(201).json({
      status: 201,
      message: 'User Successfully Retrieved!',
      data: newuser
    });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { name, gender, email } = req.body;

    const updateduser = await prisma.user.update({
      where: { id: parseInt(req.params.id) },
      data: { name, gender, email },
    });
    res.json({
      status: 200,
      message: 'User Successfully Updated!',
      data: updateduser
    });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    await prisma.user.delete({
      where: { id: parseInt(req.params.id)  },
    });
    res.json({
      status: 200,
      message: 'User Successfully Deleted!'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllUsers, getUserById, addUser, updateUser, deleteUser };
