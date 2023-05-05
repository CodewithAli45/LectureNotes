const mongoose = require('mongoose');

//collection
mongoose
    .connect("mongodb://127.0.0.1:27017/mechanical")
    .then(() => console.log("Connected to Mongodb.."))
    .catch((err) => {
        console.log("Error while connecting Mongodb", err);
    });


// schema
const mechSchema = new mongoose.Schema({
    semester: {type: Number, required: true},
    subject: [String],
    lab: [String],
    totalMarks: Number,
    sgpa: Number,
    topSubject: String,
    isTopper: Boolean,
    date : {type: Date, default: Date.now},
})

// modal creation

const mech = mongoose.model("mech", mechSchema);

// function to provide data

async function createSemster(){
    const semesterName = new mech({
        semester: 3,
        subject: ['Material Science', 'MOS', 'thermodynamics', 'CAD'],
        lab: ['thermo', 'workshop', 'drafting', ],
        totalMarks: 750,
        sgpa: 8.4,
        topSubject: 'MOS',
        isTopper: true,
    })
    try {
        const result = await semesterName.save();
        console.log(result);
    } catch(err){
        console.log(`Error while creating db -- ${err}`);
    }
    
}

// createSemster();

async function getAllSemester(){
    const sem = await mech.find();
    console.log(sem);
}
getAllSemester();