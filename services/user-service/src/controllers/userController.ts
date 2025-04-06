import { Request, Response } from 'express';
import cloudinary from '../config/cloudinary';
import { getUserById, createUser } from '../services/userService';
import { z } from 'zod';

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  avatar: z.string().optional(),
});

// Get user profile
export const getUser = async (req: Request, res: Response) => {
  const user = await getUserById(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });

  res.json(user);
};

// Register user
export const registerUser = async (req: Request, res: Response) => {
  try {
    const data = userSchema.parse(req.body);
    const user = await createUser(data.name, data.email, data.password, data.avatar);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const uploadProfilePic = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Cloudinary automatically uploads, and the URL is in req.file.path
    return res.status(200).json({
      message: 'Image uploaded successfully',
      imageUrl: req.file.path,
    });
  } catch (error) {
    return res.status(500).json({ message: 'Upload failed', error });
  }
};