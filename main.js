function startClassification()
{
    navigator.mediaDevices.getUserMedia();
    navigator.mediaDevices.getUserMedia({ audio: true});
    ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/zKe7uKRGY/model.json",modelReady) 
}

function modelReady(){
    classifier.classify( gotResults());
}

function gotResults(error, results) {
 console.log(gotresult)
}