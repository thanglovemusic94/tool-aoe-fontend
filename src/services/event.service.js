import {API} from "../util/ApiUtils";

const URL_ADMIN = '/auth/admin'
const EventService = {
    register: function (data) {
        return API.post(URL_ADMIN + "/event", data)
    },

    getEventNew: function () {
        return API.get("/home/event-new")
    },

    getPageEvent: function (params){
        return API.get(URL_ADMIN + "/event", {
            params: params
        })
    },

    deleteEvent: function (id) {
        return API.delete(URL_ADMIN + "/event/" + id)
    },

    registerGiaiDau: function (eventCode) {
        return API.post( "/home/event-register/" + eventCode)
    },

    getAllRegisterGiaiDau: function (eventId){
        return API.get( "/home/event-register/" + eventId)
    }

}

export default EventService