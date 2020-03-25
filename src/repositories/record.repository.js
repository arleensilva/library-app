const recordModel =  require('../models/record.model')

const quantityPerPage = 50;


module.exports = {
    
    insertRecord: record => {
        return recordModel.insertMany([record]).catch(error => {
            throw error;
        })
    }
}

