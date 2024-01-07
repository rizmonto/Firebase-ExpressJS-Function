/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require("firebase-functions");
const express = require("express");
const app = express();
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const financeRouter = require("./routes/financeTransactions");
// mounting the financeRouter to the /finance url path
app.use("/finance", financeRouter);

// test endpoints
/*
app.get("/", (req, res) => {
    console.log("Getting");
    res.status(200).json({message: "Hello"});
    //res.json({message: "Hello"})
}) 

exports.helloWorld = onRequest((request, response) => {
   logger.info("Hello logs!", {structuredData: true});
   response.send("Hello from Firebase!");
 });
*/

exports.app = functions.https.onRequest(app); // exporting the Express app as a Firebase Function
