let puppyData = require('../../puppyData')
let id = 12
// console.log(puppyData)

module.exports = {
    getPuppies: (req,res) => {
        res.status(200).send(puppyData)
    },
    addPuppy: (req,res) => {
        console.log(req.body)
        let {gender,collar,availability,imgUrl} = req.body;
        puppyData.push({id,gender,collar,availability,imgUrl});
        id++;
        res.status(200).send(puppyData)
    },
    editPuppy: (req,res) => {
        const {id} = req.params;
        const {changedAv} = req.body;
        // console.log(changedAv)
        const index = puppyData.findIndex(el => el.id === +id)
        puppyData[index].availability = changedAv
        res.status(200).send(puppyData)
    },
    sellPuppy: (req,res) => {
        const {id} = req.params;
        let puppyIndex = puppyData.findIndex(puppy => puppy.id === +id);
        puppyData.splice(puppyIndex, 1)
        res.status(200).send(puppyData)

    }

}