import axios from "axios";

var CONTACT_API_BASE_URL = "http://localhost:7072/api/project";

class ApiContactService{

    addContactUs(data)
    {
        return axios.post(CONTACT_API_BASE_URL+"/addcontactus",data);
    }
    
}

export default new ApiContactService();