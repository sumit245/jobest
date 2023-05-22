const express = require('express');
const router = express.Router();
const Job = require('../models/jobs.model');
const Fuse = require('fuse.js');

//1. Create a job
router.post('/create-new/:empID', async (req, res) => {
    const { empID } = req.params;
    try {
        const count = await Job.countDocuments();
        const jobId = `JOB${(count + 1).toString().padStart(4, "0")}`;
        const newJob = await Job.create({ job_id: jobId, emp_id: empID, ...req.body });
        res.status(201).json(newJob);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 2. Get all jobs
router.get('/', async (req, res) => {
    const jobs = await Job.find().exec();
    res.json(jobs);
});

//3. Get a single job by ID
router.get('/:id', async (req, res) => {
    const job = await Job.findById(req.params.id);
    return job ? res.json(job) : res.status(404).json({ message: 'Job not found' });
});

//4. Update a job
router.put('/:id', async (req, res) => {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedJob || { message: 'Job not found' });
});

//5. Delete a job by ID
router.delete('/:id', async (req, res) => {
    const deletedJob = await Job.findByIdAndDelete(req.params.id);
    res.status(deletedJob ? 200 : 404).json({ message: deletedJob ? 'Job deleted successfully' : 'Job not found' });
});

//6. Get all jobs by empID
router.get('/emp/:empID', async (req, res) => {
    const jobs = await Job.find({ emp_id: req.params.empID }).exec();
    return jobs ? res.json(jobs) : res.status(404).json({ message: 'Jobs not found' });
});
//7. Filter jobs by location
router.get('/filter-by-location/:location', async (req, res) => {
    const jobs = await Job.find({ location: req.params.location }).exec();
    return jobs ? res.json(jobs) : res.status(404).json({ message: 'Jobs not found' });
});

//8. Filter jobs by skill
router.get('/search-by-skills/:search', async (req, res) => {
    try {
        const searchSkill = req.params.search.toLowerCase();
        const jobs = await Job.find({ skills: { $regex: searchSkill, $options: 'i' } });
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//8. Filter jobs by skill
router.get('/filter-by-skill/:skill', async (req, res) => {
    const jobs = await Job.find({ skills: req.params.skill }).exec();
    return jobs ? res.json(jobs) : res.status(404).json({ message: 'Jobs not found' });
});
module.exports = router;
