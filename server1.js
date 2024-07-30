// server.js
const webPush = require('web-push');

const vapidKeys = {
    publicKey: 'BCHMGCKs0hhj264ZyFPdUHZ0JvJheWW0VHNWGg63eKMjRKHPfIuPHcgFijKssz-PYM3ruyVAny8N6P7LUHXArvw',
    privateKey: 'GWFwAFnOGOHVW8ads1fwcIQAfj_F6QZx9zCSw5XGzRI'
};

webPush.setVapidDetails(
    'mailto:onyiakamsy74@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

const pushSubscription = {}; // Store subscription details

app.post('/subscribe', (req, res) => {
    pushSubscription = req.body;
    res.status(201).json({});
});

function sendNotification(subscription, dataToSend) {
    webPush.sendNotification(subscription, dataToSend)
        .then(response => console.log('Push notification sent.'))
        .catch(error => console.error('Error sending push notification', error));
}

// When a meal reminder is set
sendNotification(pushSubscription, JSON.stringify({
    title: 'Meal Reminder',
    body: 'It\'s time for your meal!',
    primaryKey: Date.now()
}));


