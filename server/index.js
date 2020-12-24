const express = require('express')
const bodyParser = require("body-parser")
const passport = require("passport")
const cors = require("cors")
const helmet = require("helmet")
const morgan = require("morgan")
const dbs = require('./api/mysql/dbs')
const http = require('http')
const fileUpload = require('express-fileupload'); // upload images
const CheckToken  = require('./api/mysql/tokencheck')
// const worker = require("./api/worker")
require("dotenv").config()
const port = process.env.PORT || 4040;

let httpServer
function initialize() {
  return new Promise((resolve, reject) => {
    const app = express()
    app.use(helmet())
    app.use(cors())
    app.use(morgan("dev"))
    app.use(bodyParser.json({ limit: '64mb' }))
    app.use(bodyParser.urlencoded({ limit: '64mb', extended: true }))
    app.use(passport.initialize())
    app.use(fileUpload());
    // app.use(CheckToken.auth)
    app.use("/api", require("./api/router"))
    app.use("/data", express.static("data"));
    
    httpServer = http.createServer(app)
    httpServer.listen(port, err => {
      if (err) {
        reject(err)
        return
      }
      resolve()
    })
    httpServer.setTimeout(60000)
  })
}

function close() {
  return new Promise((resolve, reject) => {
    // worker.quit()
    httpServer.close(err => {
      if (err) {
        reject(err)
        return
      }
      resolve()
    })
  })
}

async function startup() {
  try {
    if (dbs.initialize) {
      console.log("Initializing database")
      await dbs.initialize()
    }
  }
  catch (err) {
    console.error(err)
    process.exit(1)
  }
  try {
    console.log("Initializing application")
    await initialize()
  }
  catch (err) {
    console.error(err)
    process.exit(1)
  }
}

async function shutdown(err) {
  try {
    console.log("Closing application")
    await close()
  }
  catch (e) {
    console.error(e)
  }
  try {
    if (dbs.close) {
      console.log("Closing database")
      await dbs.close()
    }
  }
  catch (e) {
    console.error(e)
  }
  if (err) process.exit(1)
  else process.exit(0)
}
startup()

process.on("SIGTERM", () => {
  shutdown()
}).on("SIGINT", () => {
  shutdown()
}).on("unhandledRejection", (reason, promise) => {
  console.error("unhandledRejection at:", promise, "reason:", reason)
}).on("uncaughtException", err => {
  console.error(err)
  shutdown(err)
})