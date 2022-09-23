camera = document.getElementById("Camera");
Webcam.attach ( 'Camera' ); 

  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90

  });


function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = ' <img id="captured_image" src="'+data_uri+'"></img> ';
        });

}

console.log('ml5 Version:', ml5.version);

classifier = ml5.imageclassifier('https://teachablemachine.withgoogle.com/models/p2yX1OUe5/')