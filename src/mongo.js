const mongoose=require("mongoose")
// mongoose.connect("mongodb+srv://sainikhushi007:FEcIKbrGLe8FDZ33@clustervhg.sy34kax.mongodb.net/Virtual_Herbal_Garden")
mongoose.connect("mongodb+srv://Rishii:HerbalHerbal@herbalgarden.hzysmqf.mongodb.net/")

.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})
const plantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  botanicalName: { type: String, required: true },
  commonNames: { type: [String], required: true },
  category: { type: [String], required: true },
  habitat: {
    nativeRegion: { type: String, required: true },
    growingConditions: {
      soil: { type: String, required: true },
      sunlight: { type: String, required: true },
      water: { type: String, required: true }
    }
  },
  medicinalUses: [
    {
      use: { type: String, required: true },
      description: { type: String, required: true }
    }
  ],
  methodsOfCultivation: {
    propagation: { type: String, required: true },
    planting: {
      instructions: { type: String, required: true },
      spacing: { type: String, required: true }
    },
    watering: { type: String, required: true },
    fertilization: { type: String, required: true },
    pruning: { type: String, required: true },
    pestsAndDiseases: { type: String, required: true }
  },
  imageUrl: { type: String, required: true },
  modelUrl: { type: String, required: true }
});

const Plant = mongoose.model('Plant', plantSchema);
const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        
    },
    bookmarks: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Plant' }],
    default: []
},
    notes: [
      {
        text: {
          type: String,
          required: true,
        }
        
      }
    ],
})
const LogInCollection= mongoose.model('LogInCollection',logInSchema)
const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Contact = mongoose.model('Contact', contactSchema);


  module.exports = {
    LogInCollection,
    Plant,
    Contact  
  };


