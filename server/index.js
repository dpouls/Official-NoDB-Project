const express = require('express'), 
pc = require('./controllers/puppyController'), axios = require('axios'),
lc = require('./controllers/leadsController'), gradient= require('gradient-string')

app = express()

app.use(express.json());
const PORT = 3030

app.listen(PORT, () =>
    console.log( gradient.fruit `I'm pup and running on port`, PORT)
)
//ENDPOINTS
//PUPPIES
app.get('/pup/puppers', pc.getPuppies)
app.post('/pup/puppers', pc.addPuppy)
app.put('/pup/puppers/:id', pc.editPuppy)
app.delete('/pup/puppers/:id', pc.sellPuppy)
//LEADS
app.get('/pup/leads', lc.getLeads)
app.post('/pup/leads', lc.addLead)
app.put('/pup/leads/:id', lc.editLead)
app.delete('/pup/leads/:id', lc.deleteLead)

