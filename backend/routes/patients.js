const express = require('express')
const router = express.Router();
const Patient = require('../models/patient.model')
router.use(express.json())

router.post('/add', async(req, res) => {
    const name = req.body.name;
    const hr = req.body.hr;
    const min = req.body.min;
    const day = req.body.day;
    const month = req.body.month;
    const year = req.body.year;
    const docid = req.body.docid
    console.log('here is result')
    console.log(req.body)

    /*
    try {
        User.findOne({ user: user }, function(err, user) {
            console.log(user);
            console.log('we are here')
            if (user) console.log('fine one lol')

            if (user) {
                console.log('just stop it')
                console.log('This user is used')
                return
            }
        })
    } catch {
        console.log('user is used')
    }*/

    const newPatient = new Patient({ name, hr, min, day, month, year, docid });
    // console.log(newPatient);

    try {
        console.log(newPatient)
        await newPatient.save().then(async function(result) {
            res.status(200).send({ newPatient })
        }).catch((error) => {});


    } catch (e) {
        res.status(400).send(e);
    }
})

router.route('/').get((req, res) => {
    Patient.find()
        .then(patients => res.json(patients))
        .catch(err => res.status(400).json('Error: ' + err));
})


router.delete('/:id', async(req, res) => {
    try {
        const patient = await Patient.findByIdAndDelete(req.params.id)
        if (!patient)
            return res.status(404).send()
        res.status(200).send(patient)
    } catch (e) {
        res.status(500).send(e.message)
    }
})

router.get('/:id', async(req, res) => {
   
    try {
        console.log('here we are')
        console.log(req.params.id)
        const patient = await Patient.findById(req.params.id)
        if (!patient)
            return res.status(404).send()
        res.status(200).send(patient)
    } catch (e) {
        res.status(500).send(e.message)
    }
})

router.patch('/:id', async(req, res) => {
    try {
        const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!patient) res.status(404).send();
        res.status(200).send(patient);
    } catch (e) {
        res.status(500).send(e.message);
    }
})

module.exports = router;