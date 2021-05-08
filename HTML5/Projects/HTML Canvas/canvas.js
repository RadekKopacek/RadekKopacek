// 1 - get the object
// 2 - set properties/parameters
// 3 - actions (make shape or line)
function makeCanvas(){
    // Canvas 1  - TEXT
    // 1 - get object
    var canvas1 = document.getElementById('canvas1');
    var ctx1 = canvas1.getContext('2d');
    
    // 2 - set the properties
    ctx1.font = '32pt Arial';
    ctx1.fillStyle = 'DeepSkyBlue';
    ctx1.strokeStyle = 'black';

    // 3 - action
    ctx1.fillText('I Love HTML',80,150);
    ctx1.strokeText('I Love HTML',80,150);

    // Canvas 2  -  Squares
    // 1 - get object
    var canvas2 = document.getElementById('canvas2');
    var ctx2 = canvas2.getContext('2d');

    // 2 - set the properties
    ctx2.fillStyle = "#ff0000";
    ctx2.strokeStyle = "#000000";
    ctx2.lineWidth = 10;

    // 3 - action - make rect
    ctx2.fillRect(45,5,135,135);
    ctx2.strokeRect(45,5,135,135);

    ctx2.fillStyle = "#666666";
    ctx2.fillRect(200,0,135,135);

    ctx2.fillStyle = "#666666";
    ctx2.fillRect(45,150,135,135);

    ctx2.fillStyle = "#ff0000";
    ctx2.fillRect(200,150,135,135);
    ctx2.strokeRect(200,150,135,135);
}