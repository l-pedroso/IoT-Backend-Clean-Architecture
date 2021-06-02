const axios = require('axios').default;
const HttpContract = require('../../contracts/http')


module.exports = class HTTP extends HttpContract{

    constructor(){
        super();
    }

    async post(){
        try{
            const response = await axios({
                method: 'post',
                url: this._url,
                headers: this._headers.json()
              });

              return response;
        }
        catch(e){
            throw e;
        }
    }
}