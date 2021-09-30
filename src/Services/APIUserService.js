import axios from "axios";
const USER_API_BASE_URL = 'http://localhost:7072/user';
 
 class APIUserService{
    login(logindata) {
        return axios.post(USER_API_BASE_URL+'/login',logindata);
    }
    register(registerdata) {
        return axios.post(USER_API_BASE_URL+'/signup',registerdata);
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    editUser(user) {
        console.log(user.email);
        return axios.put(USER_API_BASE_URL+'/'+ user.email, user);
    }
 
    logout(){
       return localStorage.removeItem("user");
    }
    
}

export default new APIUserService()
