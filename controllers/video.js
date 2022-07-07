  /*
 * @file: user.js
 * @description: It Contain function layer for user controller.
 * @author: Jaswinder Kumar
 */

  import { successAction, failAction } from "../utilities/response";
  import { saveVideo  } from "../services/video";
  import Message from "../utilities/messages";
  import Video from "../collections/video";
  
  /**************** Add video ***********/
  export const addVideo = async (req, res, next) => {
    
    const payload = req.body;
    try { 
        const data = await saveVideo(payload);
        res.json(successAction(data, "Video added!"));
    } catch(error) {
        res.json(failAction(error.message));
    }
  };  

  export const getvideo = async (req,res)=>{
  const payload = req.body;
      try { 
          const data = await Video.find();
          res.json(successAction(data, "all videos"));
      } catch(error) {
          res.json(failAction(error.message));
      }
  }

  export const deletevideo = async (req,res)=>{
      const payload = req.params;
      try { 
          const data = await Video.remove({_id : payload.id });
          res.json(successAction(data, "Video deleted sucessfully!"));
      } catch(error) {
          res.json(failAction(error.message));
      }
  }
  
  export const updatevideo = async (req,res)=>{
    const payload = req.body;
    console.log(payload)
    try { 

        const data = await Video.update({_id : payload.id },{ $set : { title : payload.title , url : payload.url  }});
        res.json(successAction(data, "Video updated sucessfully!"));

    } catch(error) {
        res.json(failAction(error.message));
    }
  }

  export const getsinglevideo = async (req,res)=>{
    const payload = req.params;
    console.log(payload)
    try { 

        const data = await Video.findOne({_id : payload.id });
        res.json(successAction(data, `video details of ${payload.id}`));

    } catch(error) {
        res.json(failAction(error.message));
    }
  }
 
  
  