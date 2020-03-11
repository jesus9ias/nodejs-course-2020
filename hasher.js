
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

dotenv.config();

const SALT_ROUNDS = 12;
const TOKEN_EXPIRATION = 60;
const { TOKEN_SECRET } = process.env;

export const validateToken = token => jwt.verify(token, TOKEN_SECRET);

export const matchHash = (plain, hashed) => bcrypt.compareSync(plain, hashed);

export const createToken = payload => jwt.sign(payload, TOKEN_SECRET, {
  expiresIn: TOKEN_EXPIRATION
});
