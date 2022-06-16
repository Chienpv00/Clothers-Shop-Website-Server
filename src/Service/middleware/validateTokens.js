const { verify } = require("jsonwebtoken");

function validateAccessToken(token) {
  try {
    return verify(token, "<your secret key for access token>");
  } catch {
    return null;
  }
}

function validateRefreshToken(token) {
  try {
    return verify(token, "<your secret key for refresh token>");
  } catch {
    return null;
  }
}

module.exports = {validateAccessToken, validateRefreshToken}
