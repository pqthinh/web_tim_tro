// generate token using secret from process.env.JWT_SECRET
var jwt = require('jsonwebtoken');

// generate token and return it
function generateToken(user) {
    if (!user) return null;

    var u = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar
    };

    return jwt.sign(u, process.env.JWT_SECRET, {
      expiresIn: 60 * 60 * 24 // expires in 24 hours
    });
}

function getCleanUser(user) {
  if (!user) return null;
  // console.log(user)
  return {
    id: user.id,
    name: user.name,
    email: user.email ,
    avatar: user.avatar,
    role: user.role
  };
}

module.exports = {
  generateToken,
  getCleanUser
}
