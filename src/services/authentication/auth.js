const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const axios = require('axios').default;
const AuthenticationContract = require('../../contracts/authentication'); 
const UserInfo = require('../../models/userInfo');

module.exports = class Auth extends AuthenticationContract{

  constructor(){
    super();
  }

  checkJwt(){
     return jwt({
      // Dynamically provide a signing key based on the kid in the header and the signing keys provided by the JWKS endpoint
      secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://dev-75o6icsz.us.auth0.com/.well-known/jwks.json`
      }),
  
      getToken: function fromHeaderOrQuerystring (req) {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            return req.headers.authorization.split(' ')[1];
        } else if (req.query && req.query.token) {
          return req.query.token;
        }
        return null;
      },
    
      // Validate the audience and the issuer
      audience: 'https//iot-authentication-api.com', //replace with your API's audience, available at Dashboard > APIs
      issuer: 'https://dev-75o6icsz.us.auth0.com/',
      algorithms: [ 'RS256' ]
    });
  }

  async getUserInfo(jwt){ 
    try{
      const response = await axios({
        method: 'post',
        url: process.env.AUTH_PROVIDER,
        headers:{
          'Authorization': jwt
        },
      });
      const data = response.data;
      return new UserInfo(data.given_name, data.family_name, data.email, data.email_verified);
    }
    catch(e){
      throw e;
    }
  }
}
 
