const express = require ('express');
const jobs = require ('../models/jobs');

const router = express.Router();


// find all te jobs  acplication
router.get ('/', (req, res, next) =>{
Job.find({}, (err, jobs) =>{
  if (err) { return next (err) }

  res.render('jobs/index', {
    jobs:jobs
  });
 });
});
 // end of find all the jobs aplication


// render a new job form
router.get('/new', (req , res, next) => {
  res.render('jobs/new');
});
// end a new job form

// saving new jobs aplications
router.post('/', (req, res, next) => {
  const jobInfo = {
    company:req.body.company,
    url:req.body.url,
    location:req.body.location,
    personOfContact:req.body.personOfContact,
    personOfContact2:req.body.personOfContact2,
    email:req.body.email,
    notes:req.body.notes,
    phone:req.body.phone,
  };
  const newJob = new Job(jobInfo);

  newJob.save( (err) => {
    if (err) { return next(err) }
    return res.redirect('/jobs');

  });
});
// end of saving jobs aplications


module.exports = router;
