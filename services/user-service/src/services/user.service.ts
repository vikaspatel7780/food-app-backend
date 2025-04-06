import prisma from '../config/db';
import redis from '../config/redis';

export const createUser = async (data: any) => {
  const user = await prisma.user.create({ data });
  await redis.set(`user:${user.id}`, JSON.stringify(user));
  return user;
};

export const getUserById = async (id: string) => {
  const cached = await redis.get(`user:${id}`);
  if (cached) return JSON.parse(cached);

  const user = await prisma.user.findUnique({ where: { id } });
  if (user) await redis.set(`user:${id}`, JSON.stringify(user));
  return user;
};
