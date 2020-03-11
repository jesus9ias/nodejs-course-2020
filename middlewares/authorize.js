import { validateToken } from "../hasher";

export default (req, res, next) => {
  try {
    if (validateToken(req.token)) {
      next();
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    res.status(401).json({ status: 'error', msg: err.message });
  }
};
