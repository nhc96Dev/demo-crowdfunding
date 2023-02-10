require("dotenv").config();
const jwt = require("jsonwebtoken");

// middleware function để verify token -> kiểm tra có đăng nhập hay chưa, và khi gửi request lên thì nó đã có header authorization bearer token chưa -> nếu chưa có thì trả về 401 (unauthorized) -> nếu có thì verify token xem có hợp lệ hay không, nếu không hợp lệ thì trả về 403 (forbidden)
const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  // [Bearers,token]
  const token = authHeader && authHeader.split(" ")[1];
  console.log("verifyToken ~ token", token);

  if (!token) return res.sendStatus(401);
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.userId = decoded.id;
    req.userEmail = decoded.email;
    next();
  } catch (err) {
    return res.sendStatus(403);
  }
};
module.exports = verifyToken;
