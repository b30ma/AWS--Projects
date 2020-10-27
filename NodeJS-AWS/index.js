
var AWS = require('aws-sdk');


AWS.config.region = 'us-east-2';

var sqs = new AWS.SQS();

var queueUrl;
var params = {
    QueueName: 'Test-lab',
    Attributes: {
        ReceiveMassageWaitTimeSeconds: '20',
        VisibilityTime: '60'
    }
};

sqs.createQueue(params, function(err, data) {
    if (err) console.log(err, err.stack);
     else {
      console.log("Success", data.QueueUrl);
    }
  });

