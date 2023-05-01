const express = require('express');
const log = require('debug')('app:startup');
const db = require('debug')('app:db');
const {validate} = require('../utils/validate')
const router = express.Router();

const mechanical = [
    {
        semester : 1,
        subjects : ['Mechanics', 'Basic Electrical', 'Maths-I', 'English', 'Chemistry', 'Physics-I'],
        laboratory : ['Workshop-I', 'Engg Graphics-I', 'Electrical', 'Physics lab', 'Chemistry lab', 'General Profeciency', 'Mechanics'],
        totalMarks : 750,
        sgpa: 8.64,
        topSubject: 'Physics-I'
    },
    {
        semester : 2,
        subjects : ['Electronics', 'Maths-II', 'Physics-II', 'Computer Science', 'Thermodynamics', 'Ecology'],
        laboratory : ['Basic Electronics', 'Workshop-II', 'Engg Graphics-II', 'C++', 'General Profeciency' ],
        totalMarks : 750,
        sgpa : 8.09,
        topSubject : 'Maths-II'
    },
    {
        semester : 3,
        subjects : ['NACP', "Maths-III", "Material Science", "MOS-I", 'Thermodynamics', 'Kinematics of Machine'],
        laboratory : ['Numerical', 'MOS-I lab', 'Thermod lab', 'KOM', 'GP'],
        totalMarks : 750,
        sgpa : 8.39,
        topSubject : 'NACP'
    },
];

router.get('/', (req, res) => {
    return res.status(200).send(mechanical);
});

// dynamics input
router.get('/:semester', (req, res) => {
    const {semester} = req.params;
    const mech = mechanical.find(data => data.semester === Number(semester));
    if(!mech){
        return res.status(404).send("Not found");
    }
    log("Sending details of semester");
    db("database sending");
    return res.status(200).send(JSON.stringify(mech));
});

router.post('/', (req, res) => {

    const {error} = validate(req.body);
    if(error){
        return res.status(403).send(error.details[0].message);
    }

    const {subjects, laboratory, topSubject,totalMarks, sgpa} = req.body;

    const newSemester = {
        semester : mechanical.length + 1,
        subjects, laboratory, topSubject,totalMarks, sgpa,
    };
    mechanical.push(newSemester);
    db("new data is creating -- ");
    return res.status(201).send(newSemester);

})


module.exports = router;