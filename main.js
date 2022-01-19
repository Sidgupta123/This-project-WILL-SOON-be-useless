
function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/D4e4IMQmL/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}