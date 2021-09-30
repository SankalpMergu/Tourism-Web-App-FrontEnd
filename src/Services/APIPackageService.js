import axios from "axios";
const USER_API_BASE_URL = 'http://localhost:7072/api/tour';
//yyyy-MM-dd
 class APIPackageService{
    getAllPackages() {
        return axios.get(USER_API_BASE_URL+'/packages');
    }

    bookTourPackage(BookingDetails){
        console.log(JSON.stringify(BookingDetails));
        return axios.post(USER_API_BASE_URL+'/booking',BookingDetails);
    }

    getBookings(){
        return   axios.get(USER_API_BASE_URL+'/bookings');
    }

    updateBooking(updatedBookingdetails){
        return axios.put(USER_API_BASE_URL+"/updateBooking",updatedBookingdetails);
    }


    cancelBooking(bookingId){
        return axios.delete(USER_API_BASE_URL+"/"+bookingId);
    }
    
}

export default new APIPackageService()