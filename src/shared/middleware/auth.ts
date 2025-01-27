import { NextFunction, Request, RequestHandler, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { AuthRequest } from '../types/express';

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      throw new Error();
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string; role: string };
    (req as AuthRequest).user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Please authenticate' });
  }
};

export const checkRole = (roles: string[]): RequestHandler => {
  return (req, res, next) => {
    if (!roles.includes((req as AuthRequest).user.role)) {
      return res.status(403).json({ message: 'Access denied' });
    }
    next();
  };
}; 