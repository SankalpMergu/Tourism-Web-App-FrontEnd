import axios from "axios";

const GUIDE_API_BASE_URL="http://localhost:7072/api";

class APIGuideService {
        
        getGuides(){
            return axios.get(GUIDE_API_BASE_URL+"/guides");
        }

        createGuide(guide){
            console.log(guide);
            return axios.post(GUIDE_API_BASE_URL+"/guide",guide);
        }
        

        deleteGuide(guideId){
            return axios.delete(GUIDE_API_BASE_URL + '/' + guideId);
        }
}

export default new APIGuideService() 