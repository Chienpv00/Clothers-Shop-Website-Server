const { sign } = require("jsonwebtoken");

function setTokens(user) {
  const sevenDays = 60 * 60 * 24 * 7 * 1000;
  const fifteenMins = 60 * 15 * 1000;
  const accessUser = {
    id: user._id.valueOf()
  };
  const accessToken = sign(
    { user: accessUser },
    "<your secret key for access token>",
    {
      expiresIn: fifteenMins
    }
  );
  const refreshUser = {
    id: user._id.valueOf(),
    count: user.tokenCount
  };
  const refreshToken = sign(
    { user: refreshUser },
    "<your secret key for refresh token>",
    {
      expiresIn: sevenDays
    }
  );

  return { accessToken, refreshToken };
}

module.exports = setTokens