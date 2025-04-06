import prisma from '../config/db';

export const getUserById = async (userId: string) => {
  return await prisma.user.findUnique({ where: { id: userId } });
};

export const createUser = async (name: string, email: string, password: string, avatar?: string) => {
  return await prisma.user.create({
    data: { name, email, password, avatar },
  });
};
