const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Finance Logic');
    // TODO tbd
    res.status(200).json({message: "Welcome to the CAIT finance logic section!"});
})

//router.post('/createTransaction')

// dynamic parameter url based on user ID
router.get('/calculateBudget/:userId', (req, res) => {
    console.log('Calculating Budget');
    
    // TODO add budgeting logic here, maybe this is a call instead to a middleware function, TBD
    
    //res.json({userId: req.params.userId, message: "Budget", budget: int})
    res.send('Returning user with id:' + req.params.userId);
})

module.exports = router