const express = require('express');
const router = express.Router();

const bikes = [
    {
        id: 100,
        name: "Ducati",
        origin: "Italy",
        price: 1500000,
    },
    {
        id: 120,
        name: "Benali",
        origin: "Germany",
        price: 1200000,
    },
    {
        id: 140,
        name: "Bajaj",
        origin: "India",
        price: 120000,
    },
    {
        id: 160,
        name: "Royal Enfield",
        origin: "India",
        price: 200000
    },
];

// simply display the data
router.get('/', (req, res) =>{
    return res.send(bikes);
});

// displaying data dynamically
router.get('/:id', (req, res) => {
    const {id} = req.params;
    const bike = bikes.find(data => data.id === Number(id));
    if(!bike){
        return res.status(404).send("Bike not found");
    }

    return res.status(200).send(bike);
});



module.exports = router;