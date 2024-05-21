// controller we can build our logic and function;
const jobModel = require("../model/job_model") // import jobmodel file

const createJobProfile = async (req,res)=>{
    const jobData = req.body;
    const newJobData = new jobModel(jobData);
    const savedData = await newJobData.save();
     console.log(savedData);

  res.json({
    status :true,
    content : 'new job profile added successfully'
  })
}

const listJobProfile = async (req,res)=>{
   const jobList = await jobModel.find()

    res.json({
      status :true,
      jobList,
    })
  }

  const updateJobProfile = async (req,res)=>{
    const jod_id = req.params.id;
    console.log(jod_id);
    const updateData = req.body;
   await jobModel.findByIdAndUpdate(jod_id,req.body)

    res.json({
      status :true,
      content : 'update success'
    })
  }

  const deleteJobProfile = async(req,res)=>{
   const jod_id = req.params.id;
   await jobModel.findByIdAndDelete(jod_id);

    res.json({
      status :true,
      content :"Delete Success"
    })
  }



const job_application_function = {
    createJobProfile,
    listJobProfile,
    updateJobProfile,
    deleteJobProfile
}

module.exports = job_application_function;