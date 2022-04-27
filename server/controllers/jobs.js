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

// export const getEventById = (req, res) => {
//     // TODO: Implement
//     Event.findById(req.params.eventId, (err, event) => {
//         if (err) {
//             res.send(err);
//             console.log(`Error fetching event: ${err}`);
//         }
//         res.json(event);
//     });
// };
// export const getUpcomingEvents = (req, res) => {
//     // TODO: get upcoming events
//     Event.find({}, (err, events) => {
//         if (err) {
//             res.send(err);
//             console.log(`Error fetching events: ${err}`);
//         }
//         res.json(events);
//     });
// };

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
        res.send(err);
        console.log(`Error creating job ${err}`);
    }
};
