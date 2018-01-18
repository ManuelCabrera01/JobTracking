const express = require ('express');
const Job = require ('../models/job-model.js');

const jobRouter = express.Router();


// find all te jobs  acplication
jobRouter.get ('/jobs', (req, res, next) =>{
Job.find({}, (err, jobList) =>{
  if (err) {
    next (err);
  return
 }

  res.render('jobs/jobs-list-view.ejs', {
    job:jobList
  });
 });
});
 // end of find all the jobs aplication



// render a new job form
jobRouter.get('/jobs/new', (req , res, next) => {
  res.render('jobs/new-job-view.ejs');
});
// end a new job form


// saving new jobs aplications
jobRouter.post('/jobs/new', (req, res, next) => {
  const theJob  =  new Job({
    company:req.body.jobCompany,
    url:req.body.jobUrl,
    location:req.body.jobLocation,
    personOfContact:req.body.jobPersonOfContact,
    personOfContact2:req.body.jobPersonOfContact2,
    email:req.body.jobEmail,
    notes:req.body.jobNotes,
    phone:req.body.jobPhone,
  });
  theJob.save((err) =>{
    if (err) {res.render('jobs/new-job-view.ejs',{
        validationErrors: theJob.errors
    });
    return;
  }
   res.redirect('/jobs');

  });
});
// end of saving jobs aplications

// show one particular job

jobRouter.get('/jobs/:id', (req,res,next)=>{
  const jobId= req.params.id;
  Job.findById(jobId,(err,theJob)=>{
    if(err){
      next(err);
      return;
    }
    res.render('jobs/jobs-details-view.ejs',{
      job:theJob
    });
  });
});

// end of find one particular jobRouter

jobRouter.get('/jobs/:id/edit', (req, res ,nex) => {
  const jobId = req.params.id;
  Job.findById(jobId, (err, theJob) => {
    if (err) {
      next(err);
      return;
    }

    res.render('jobs/edit-jobs-view.ejs', {
      job : theJob
    });
  });
});

jobRouter.post('/jobs/:id', (req, res, next) => {
  const jobId= req.params.id;

  const jobChanges = {
    company: req.body.jobCompany,
    url: req.body.jobUrl,
    location: req.body.jobLocation,
    personOfContact: req.body.jobPersonOfContact,
    personOfContact2: req.body.jobPersonOfContact2,
    email: req.body.jobEmail,
    notes: req.body.jobNotes,
    phone: req.body.jobPhone
  };

  Job.findByIdAndUpdate( jobId, jobChanges, (err, theJob) => {
    if (err) {
      next(err);
      return;
      }
      res.redirect('/jobs');

    }
  );
  });
jobRouter.post('/jobs/:id/delete', (req, res, next) =>{

  const jobId =req.params.id;
  Job.findByIdAndRemove(jobId, (err, theJob) => {

    if(err){
      next(err);
      return;

    }
    res.redirect('/jobs')
  });
});


module.exports = jobRouter;
