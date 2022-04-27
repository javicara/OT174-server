const {RESPONSE_OK} = require('../enums/messages');

const {
  validateExistsToken,
  getUserIdByToken,
} = require("../services/tokenService");

async function validateToken(req, res,next) {
  const token = validateExistsToken(req, res);
  const id = getUserIdByToken(token);
  res.status(200).json({
    auth: RESPONSE_OK,
    id: id,
  });
  next();
}

module.exports = {  
  validateToken,
};