# firebase expressJS function test
 A test implementation of ExpressJS within a Firebase function

## Introduction
 Firebase Functions can run individual pieces of repetitive logic. However, instead of creating multiple functions, you can deploy an ExpressJS application with multiple routes. This makes it a bit easier to maintain, however, at the cost of obfuscation. The API endpoints within the ExpressJS app and any of those endpoints can be run via the Firebase Function. 

## Instructions For Installation
1. Install Node
2. Install Firebase Tools
3. Login to Firebase
4. Edit `routes.financeTransactions.js` as needed
5. Edit `.firebaserc` and change "default" project to your selected Firebase project (found in your Firebase Console)
5. Test locally using : `firebase emulators:start`
6. Deploy to Firebase project using: `firebase deploy`
