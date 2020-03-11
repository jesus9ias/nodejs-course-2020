
export default (req, res, next) => {
  req.currentDate = Date.now();
  console.log(req.currentDate);
  next();
}