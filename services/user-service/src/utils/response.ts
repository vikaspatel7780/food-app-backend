import { Response } from 'express';

export const successResponse = (
  res: Response,
  message: string,
  data: any,
  statusCode = 200
) => res.status(statusCode).json({ success: true, message, data });

export const errorResponse = (
  res: Response,
  message: string,
  statusCode = 500
) => res.status(statusCode).json({ success: false, message });
