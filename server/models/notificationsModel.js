import mongoose from 'mongoose'

const notificationSchema=mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String},
    author:{type:String}
});

const notificationModel=mongoose.models.notification || mongoose.model("notification",notificationSchema);

export default notificationModel;