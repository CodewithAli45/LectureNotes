// HTTP response status code
// HTTP -> header, type, cookies, session
// HTTPS -> above all + secured -> encrypted

// Five group of status code
//1. Informational Response : 100 -199
//2. Successful Response : 200 -299
//3. Redirection message : 300 - 399
//4. Client Error : 400 - 499
//5. Server Error : 500 - 599

// 1. The Informational Response
/**
 *  100 -> Continue (client should continue the request or ignore the response if already requested)
 *  101 -> Switchable Protocols (This code is sent in response to an Upgrade request header from the client and indicates the protocol the server is switching to.)
 *  102 -> Processing (this said the request is in process but no response is availabe yer)
 *  103 -> Early hints (this tells that start preloading resources while server prepare the response)
 */


// 2. Successful Response
/**
 *  200 -> OK
 *  The request succeeded. The result meaning of "success" depends on the HTTP method:
    GET: The resource has been fetched and transmitted in the message body.
    HEAD: The representation headers are included in the response without any message body.
    PUT or POST: The resource describing the result of the action is transmitted in the message body.
    TRACE: The message body contains the request message as received by the server.

 *  201 -> Created 
    The request succeded and new response is created. This usually happend after POST

 *  202 -> Accepted
    The request has been received but not yet acted upon. 
    It is noncommittal, since there is no way in HTTP to later send an asynchronous response 
    indicating the outcome of the request. 
    It is intended for cases where another process or server handles the request, or for batch processing.

 * 204 -> No Content
    There is no content to send for this request, but the headers may be useful. 
    The user agent may update its cached headers for this resource with the new ones.
 */


// Redirection messages
/**
 * 300 -> Multiple Choice
 * 301 -> Moved Permanently
 * 307 -> Temporary Redirect
 * 308 -> Permanent redirect
 */


// Client Side Error
/**
 * 400 -> Bad Request
 * The server cannot or will not process the request due to something that is perceived to be a client error 
 * (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
 * 
 * 401 -> Unauthorized
 * 
 * 403 -> Forbidden
 * 
 * 404 -> Not found.
 * The server cannot find the requested resource. In the browser, 
 * this means the URL is not recognized. In an API, 
 * this can also mean that the endpoint is valid but the resource itself does not exist.
 * 
 * 408 -> Request timeout
 * 
 * 413 -> Payload too heavy
 * 
 * 429 -> Too many request
 * 
 */


// Server side error
/**
 * 500 -> Internal Server Error
 * 501 -> not implemented
 * 502 -> Bad gateway
 * 503 -> Service unavailable
 * 504 -> Gateway timeout
 * 507 -> Insufficient Storage
 */


// HTTP method

// GET -> no body (query string or param) + data are exposed in url
// POST -> body + to create the data (for signup) + signin
// PUT -> replace entire data on basis of (id)
// DELETE -> delete the data from server
// PATCH -> replace specific data

