import { Request, Response } from 'express';
import prisma from '../config/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { successResponse, errorResponse } from '../utils/response';

const generateToken = (userId: string, role: string) => {
  return jwt.sign({ userId, role }, process.env.JWT_SECRET!, {
    expiresIn: '7d',
  });
};

const sanitizeUser = (user: any) => {
  const { password, ...rest } = user;
  return rest;
};

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return errorResponse(res, 'All fields are required', 400);
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return errorResponse(res, 'Email already exists', 409);
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: role?.toLowerCase(),
      },
    });

    const token = generateToken(user.id, user.role);

    return successResponse(res, 'User registered', {
      user: sanitizeUser(user),
      token,
    }, 201);
  } catch (error) {
    console.error('[Register Error]', error);
    return errorResponse(res, 'Server error', 500);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return errorResponse(res, 'Email and password are required', 400);
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return errorResponse(res, 'Invalid credentials', 401);
    }

    const token = generateToken(user.id, user.role);

    return successResponse(res, 'Login successful', {
      user: sanitizeUser(user),
      token,
    });
  } catch (error) {
    console.error('[Login Error]', error);
    return errorResponse(res, 'Server error', 500);
  }
};
