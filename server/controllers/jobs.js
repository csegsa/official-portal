import Job from "../models/jobs.js";

export const getJobs = (req, res) => {
    Job.find({}, (err, jobs) => {
        if (err) {
            res.send(err);
            console.log(`Error fetching job: ${err}`);
        }
        res.json(jobs);
    });

};

export const createJob = async (req, res) => {
    const job = new Job();
    job.company_name = req.body.company_name;
    job.job_title = req.body.job_title;
    job.description = req.body.description ;
    job.url = req.body.url ;
    job.deadline = new Date(req.body.deadline);
    job.location = req.body.location;
    try {
        const savedJob = await job.save();
        res.json(savedJob);
        console.log(`Job ${savedJob._id} created successfully`);
    } catch (err) {
        res.status(400).send(err);
        console.log(`Error creating job ${err}`);
    }
};
