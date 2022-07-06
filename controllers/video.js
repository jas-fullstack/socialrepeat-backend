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
  
 
  
  