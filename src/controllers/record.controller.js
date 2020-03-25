const recordService = require('../services/record.service');

module.exports = {
    insertRecord: (req, res) => {
        const record = req.body;
        return recordService.insertRecord(record).then(response => {
            return res.json(response);
        }).catch(error => {
            if(error && error.statusCode){
                res.status(error.statusCode).json(error)
            } else {
                res.json(error);
            }
        })
    }
}