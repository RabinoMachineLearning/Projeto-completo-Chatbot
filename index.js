const functions = require('firebase-functions');
const cors =require('cors')({ origin:true });
const admin =require (' firebase-admin ');
const serviceAccount = require ( '.service-account.json ' );
const {Card, Sugestion} = require('dialogflow-fulfilment')


admin.initializeApp({
crendencial:admin.crendencial.cert(serviceAccount),
databaseURL:" https://memakerbot-ejdemd.firebaseio.com "
});

const { SessionClient } = require ('dialogflow ');
const { Query } = require('@google-cloud/firestore');

exports.dialogflowGateway = functions.https.onRequest((request, response)
=>  {
cors( request, response, async() => {
   const { queryInput,sessionId } = request.body;

   const SessionClient = new SessionsClient({ credentials: serviceAccount });
   const session = sessionClient.sessionPath ('fireship-lession', sessionId);


   const responses = await sesssionCliente.detectIntent({ session,queryInput });

   const result =  responses [0].queryResult;

   result.action
   
   response.send (result);
   });

   const {WebhookCliente} = require ('dialogflow-fulfilment');

      exports.dialogflowWebhook = functions.https.onRequest (async(request, response) => {
         const agent = new WebhookCliente ({ request, response});

         console.log(JSON.stringify(request.body));

         const result = request.body.queryResult;


         function Bem Vindo (agente) {
            agente.add(`Welcome to my agent !!`);
         }

         function fallback (agent) {
            agent.add (`Desculpe, mas não entendi, você poderia Repetir?`);
          }

          async function userOnBoaradringHandler(agente) {
            
            const db = admim.firestore();
            const profile = db.collection ('').doc('');

            const {name, color } = result.parameters;

            await profile.set({ name, color })
               agente.add (` Bem vindo ao meu Teclado amigo`);
          }
         
          let interMap = new map ();
          intentMap.set('Default Welcome Intent', welcome);
          intentMap.set('Default Fallback Intent', fallback);

          
         });

