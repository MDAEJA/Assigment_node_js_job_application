// controller we can build our logic and function;
const jobModel = require("../model/job_model") // import jobmodel file

const createJobProfile = async (req,res)=>{

    try{
        const jobData = req.body;
    const newJobData = new jobModel(jobData);
    const savedData = await newJobData.save();
     console.log(savedData);

  res.json({
    status :true,
    content : 'new job profile added successfully'
  })

    }
    catch(err){
        res.json({
            status :false,
            message : "Somethings went wrong, please try again but later"
        })
    }
    
}

const listJobProfile = async (req,res)=>{
    try{
        const jobList = await jobModel.find()

        res.json({
          status :true,
          jobList,
        })
    }
    catch(err){
        res.json({
            status :false,
            message : "Somethings went wrong, please try again but later"
        })
    }
    
   
  }

  const updateJobProfile = async (req,res)=>{
    try{
        const jod_id = req.params.id;
        console.log(jod_id);
        const updateData = req.body;
       await jobModel.findByIdAndUpdate(jod_id,req.body)
    
        res.json({
          status :true,
          content : 'update success'
        })
    }
    catch(err){
        res.json({
            status :false,
            message : "Somethings went wrong, please try again but later"
        })
    }
    
  }

  const deleteJobProfile = async(req,res)=>{
    try{
        const jod_id = req.params.id;
        await jobModel.findByIdAndDelete(jod_id);
     
         res.json({
           status :true,
           content :"Delete Success"
         })
    }
    catch(err){
        res.json({
            status :false,
            message : "Somethings went wrong, please try again but later"
        })
    }
   
  }



const job_application_function = {
    createJobProfile,
    listJobProfile,
    updateJobProfile,
    deleteJobProfile
}

module.exports = job_application_function;