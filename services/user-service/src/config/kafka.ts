import { Request, Response } from 'express';
import * as userService from '../services/user.service';
import { successResponse, errorResponse } from '../utils/response';

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body);
    return successResponse(res, 'User created', user, 201);
  } catch (err) {
    return errorResponse(res, 'User creation failed', 500);
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) return errorResponse(res, 'User not found', 404);
    return successResponse(res, 'User fetched', user, 200);
  } catch (err) {
    return errorResponse(res, 'Error fetching user', 500);
  }
};
