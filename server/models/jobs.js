import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({

    company_name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 255
    },
    job_title:{
      type:String,
    },
    description: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 255
    },
    url: {
        type: String,
    },
    deadline: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 255
    },
    referee: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    selected_students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
});

const Job = mongoose.model("Job", jobSchema);

export default Job;
