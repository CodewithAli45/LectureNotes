const express = require('express');
const router = express.Router();


const cars = [
    {
        id: 1,
        name: "Porsche",
        price: "$250 M",
        type: ["convertible", "sports", "luxury"],
        origin: "France",
    },
    {
        id: 2,
        name: "Rolls Royce",
        price: "$499 M",
        type: ["convertible", "luxury"],
        origin: "England",
    },
    {
        id: 3,
        name: "Bugatti",
        price: "$350 M",
        type: ["super sports", "luxury"],
        origin: "France",
    },
    {
        id: 4,
        name: "Lamborgini",
        price: "$300 M",
        type: ["convertible", "super sports", "luxury", "hyper"],
        origin: "Italy",
    },

]

router.get('/', (req, res) => {
    return res.send(cars);
});

// dynamic input 
// param & query 
router.get('/:id', (req, res) => {
    const {id} = req.params;
    // find the car by id using array method - best is array.find

    const car = cars.find((data) => data.id === Number(id));
    if(!car) return res.status(404).send("Car id is not found");
    // console.log("cars details are  - ", car);

    return res.status(200).send(JSON.stringify(car));

})


// now we are using post method
router.post('/', (req,res) => {
    // console.log("cars body-- ", req.body);
    const {name, price, type, origin}= req.body;

    // validating the request
    if(!name || !price || !type || !origin) {
        return res.status(400).send("Every field is required to post the data ");
    }
    const newCar = {
        id: cars.length + 1,
        name,
        price,
        type,
        origin,
    }

    cars.push(newCar);
    return res.status(201).send(newCar);
});


// now we are updating the data
router.put('/:id', (req, res) => {
    const {name, price, type, origin} = req.body;
    if(!name || !price || !type || !origin){
        return res.status(400).send("every filed is required");
    }

    const {id} = req.params;
    
    const car = cars.find(data => data.id === Number(id));
    if(!car){
        return res.status(404).send("car id is not available");
    }
    const carIndex = cars.indexOf(car);

    cars[carIndex] = {
        ...cars[carIndex],
        name, price, type, origin
    }
    // console.log("updated data is -- ", cars[carIndex]);
    return res.status(200).send(cars[carIndex]);
})

// now deleting the data
router.delete('/:id', (req,res) => {
    const {id} = req.params;
    const car = cars.find(data => data.id === Number(id));
    if(!car){
        return res.status(404).send("car not found");
    }

    const index = cars.indexOf(car);

    cars.splice(index, 1);

    return res.status(200).send(car);
})

module.exports = router;