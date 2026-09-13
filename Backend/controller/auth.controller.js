import { logger } from "../logs/logger.js";
import User from "../models/User.js"

const syncUser = async (req  , res) =>{

    try{
      
        const { uid , email , name , picture } = req.user;

        if(!uid || !email){
            return res.status(400).json({
                success:false,
                message:"Invalid Firebase user data" ,

            })
        }

        
        let user = await User.findOne({
            firebaseUid:uid ,
        });

        if( !user){

            user = await User.create({

                firebaseUid:uid ,
                email,
                name:name|| null,
                photoURL:picture ||null,
                provider:"other" ,
                lastLoginAt: new Date() ,
            })
        }else {

            user.lastLoginAt = new Date();

            if(name){
                user.name = name ;

            }
            if(picture){
                user.photoURL= picture;
            }

            await user.save() ;
        }



        return res.status(200).json({
            sucess:true ,
            message:"User synced sucessfully" ,
            data : {
                id :user._id ,
                firebaseUid: user.firebaseUid,
                email: user.email,
                name :user.name,
                photoURL : user.photoURL,
                role : user.role,
            },
        });
    }
    catch(err){
       
        console.error("sync user error :" , err);

        return res.status(500).json({
            sucess:false,
            message:"Failed to sync  user" ,
        });
    }
};