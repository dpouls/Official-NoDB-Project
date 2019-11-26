let leadData = require('../../leadData')
let id = 3

module.exports = {
    getLeads: (req,res) => {
        res.status(200).send(leadData)
    },
    addLead: (req, res) => {
        let {name, phone} = req.body;
        leadData.push({id,name,phone})
        id++,
        res.status(200).send(leadData)
    },
    editLead: (req, res) => {
        let {id} = req.params;
        let {newName, newPhone} = req.body;
        console.log(req.body)
        console.log(newName)
        let index = leadData.findIndex( el => el.id === +id)
        console.log(index)
        leadData[index].name = newName;
        leadData[index].phone = newPhone;
        res.status(200).send(leadData) 
    },
    deleteLead: (req, res) => {
        const {id} = req.params;
        let leadIndex = leadData.findIndex( el => el.id === +id);
        leadData.splice(leadIndex,1)
        res.status(200).send(leadData)
    }

}