/**
 * Created by Marek on 25.05.2016.
 */
module.exports = {
    "clientId":{
        type: String,
        required: true
    },
    "clientSecret":{
        type: String,
        required: true
    },
    "name":{
        type: String
    },
    "redirectUri":{
        type: String,
    },
    "grandTypes":{
        type: Array
    },
    "scopes":{
        type: Array
    }
   /* ,
    "responseTypes": {
        type : Array
    }
    */
}
