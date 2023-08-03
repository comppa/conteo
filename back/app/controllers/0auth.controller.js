import qs from "querystring"


function auth() {
    
    const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth"

    const options = {
        redirect_uri: "http://localhost:8080/api/oauth/google",
        client_id: "144010087483-h1dpr3vchq9sl6a4k9mhqg2ls4s8ihns.apps.googleusercontent.com",
        acess_type: "offline",
        response_type: "code",
        prompt: "consent",
        scopes: [

        ].join("")
    }

    console.log({options})

    const qs = new URLSearchParams(options)

    return "${rootUrl}?${qs.toString()}";

}

export default auth