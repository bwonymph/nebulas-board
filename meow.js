var request = require('request');

function sydney(string question){

	input = {
	    "sessionID": {
	        "type": "string",
	        "format": "uuid",
	        "description": "The unique identifier of the conversation session the converse request belongs to.Note: this identifier pertains only to the UI session."
	    },
	    "question": {
	        "type": "string",
	        "description": question
	    },
	    "origin": {
	        "type": "string",
	        "enum": [
	            "Typed",
	            "Voice",
	            "Click",
	            "External",
	            "Internal",
	            "Deferred AppCall"
	        ],
	        "description": "The origin of the request"
	    },
	    "channel": {
	        "type": "string",
	        "enum": [
	            "Web",
	            "MobileApp",
	            "MobileWeb"
	        ],
	        "description": "The UI Channel that the request is being made from (e.g. \"Web\", \"MobileApp\", \"MobileWeb\").Defaults to \"Web\"."
	    },
	    "language": {
	        "type": "string",
	        "enum": [
	            "en-US",
	            "es-ES"
	        ],
	        "description": "The NLS Culture Name that identifies what language the requesting client is using and expecting (e.g. \"es-ES\").Defaults to \"en-US\""
	    }
	}

	request.post(
	    'https://api-stg.syf.com/m2020/sydney/v1/conversations',
	    { json: input },
	    function (error, response, body) {
	        if (!error && response.statusCode == 200) {
	            String response = ('body:', body); 
	    }
	);

	return response;
}


function aggregation(){
	request('https://developer.api.yodlee.com:443/ysl/transactions', function (error, response, body) {
	  console.log('error:', error); // Print the error if one occurred
	  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	  String stuff = ('body:', body); 
	});
	return stuff;

}
