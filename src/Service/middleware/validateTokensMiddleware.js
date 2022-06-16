const { validateAccessToken, validateRefreshToken } = require('./validateTokens');
const setTokens = require('./setTokens');
const UserModel = require('../../db/models/user');

async function validateTokensMiddleware(req, res, next) {
    // get refreshtoken
    const refreshToken = req.headers.refreshtoken;

    // get accesstoken
    const accessToken = req.headers.accesstoken;

    // if does not exists any token -> doesn't change req
    if (!accessToken && !refreshToken) return next();

    // if have access token -> req.user = payload token
    const decodedAccessToken = validateAccessToken(accessToken);
    if (decodedAccessToken && decodedAccessToken.user) {
        req.user = decodedAccessToken.user;
        return next();
    }

    // if does not have access token but have refresh token -> create access token
    const decodedRefreshToken = validateRefreshToken(refreshToken);
    if (decodedRefreshToken && decodedRefreshToken.user) {
        // valid refresh token
        const user = await UserModel.findById(decodedRefreshToken.user.id);
        // valid user and user token not invalidated
        if (!user) return next();
        req.user = decodedRefreshToken.user;
        // refresh the tokens
        const userTokens = setTokens(user);
        res.set({
            'Access-Control-Expose-Headers': 'accesstoken,refreshtoken',
            accesstoken: userTokens.accessToken,
            refreshtoken: userTokens.refreshToken,
        });
        return next();
    }
    next();
}

module.exports = validateTokensMiddleware;
