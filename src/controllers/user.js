const addUserCase = require('../use_cases/add_user');

module.exports = class User{

    constructor(dependencies){
        this.database = dependencies.DatabaseService,
        this.http = dependencies.HTTPService
    }

    async add(req, res, next){
        const headers = {
            Authorization: req.get('authorization'),
        }

        const webService = new this.http(process.env.AUTH_PROVIDER, headers);

        webService.post()
        .then((response) => {
            addUserCase.addUser(response, this.database).then(() => res.json({Sucess: 'User added'})).catch((e) => {throw (e)});
        }).catch((e) => {
            next(e);
        })
    }
}