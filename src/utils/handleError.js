import { toast } from 'react-toastify';

const error_msg = {
  400: "Bad Request",
  401: "Unauthorized",
  402: "Payment Required",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  406: "Not Acceptable",
  407: "Proxy Authentication Required",
  408: "Request Timeout",
  409: "Conflict",
  410: "Gone",
  411: "Length Required",
  412: "Precondition Failed",
  413: "Payload Too Large",
  414: "URI Too Long",
  415: "Unsupported Media Type",
  416: "Range Not Satisfiable",
  417: "Expectation Failed",
  429: "Too Many Requests",


  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
  505: "HTTP Version Not Supported",
  506: "Variant Also Negotiates",
  507: "Insufficient Storage",
  508: "Loop Detected",
  510: "Not Extended",
  511: "Network Authentication Required"
}

// eslint-disable-next-line
export default (err) => {
  console.log(err)
  try{
    err && err.response && err.response.status >= 500 
    ? toast.error(`${err.response.status} - ${error_msg[err.response.status]}`)
    : toast.error(`${err.response.status} - ${error_msg[err.response.status]}`)
  } catch {
    toast.warn('Could not connect to the server.')
  }
}