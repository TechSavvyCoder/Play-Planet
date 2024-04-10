//what sound play and what color shape draw on pressing particular keyboard key
//this dictionary contains all accoring data
var keyData={
    'a':{
        color: 'navy',
        sound: new Howl({urls: ['https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/bubbles.mp3']})	
    },
    'b':{
        color: 'blue',
        sound: new Howl({urls: ['https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/clay.mp3']})	
    },
    'c':{
        color: 'aqua',
        sound: new Howl({urls: ['https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/confetti.mp3']})	
    },
    'd':{
        color: 'teal',
        sound: new Howl({urls: ['https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/corona.mp3']})	
    },
    'e':{
        color: 'olive',
        sound: new Howl({urls: ['https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/dotted-spiral.mp3']})	
    },
    'f':{
        color: 'green',
        sound: new Howl({urls: ['https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/flash-1.mp3']})	
    },
    'g':{
        color: 'lime',
        sound: new Howl({urls: ['https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/flash-2.mp3']})	
    },
    'h':{
        color: 'yellow',
        sound: new Howl({urls: ['https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/flash-3.mp3']})	
    },
    'i':{
        color: 'orange',
        sound: new Howl({urls: ['https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/glimmer.mp3']})	
    },
    'j':{
        color: 'red',
        sound: new Howl({urls: ['https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/moon.mp3']})	
    },
    'k':{
        color: 'maroon',
        sound: new Howl({urls: ['https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/pinwheel.mp3']})	
    },
    'l':{
        color: 'fuchsia',
        sound: new Howl({urls: ['https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/piston-1.mp3']})	
    },
    'm':{
        color: 'purple',
        sound: new Howl({urls: ['https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/piston-2.mp3']})	
    },
    'n':{
        color: 'black',
        sound: new Howl({urls: ['https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/piston-3.mp3']})	
    },
    'o':{
        color: 'gray',
        sound: new Howl({urls: ['https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/prism-1.mp3']})	
    },
    'p':{
        color: 'silver',
        sound: new Howl({urls: ['https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/prism-2.mp3']})	
    },
    'q':{
        color: 'steelblue',
        sound: new Howl({urls: ['https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/prism-3.mp3']})	
    },
    'r':{
        color: '#101f3f',
        sound: new Howl({urls: ['https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/splits.mp3']})	
    },
    's':{
        color: '#1074d9',
        sound: new Howl({urls: ['https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/squiggle.mp3']})	
    },
    't':{
        color: '#8fdbff',
        sound: new Howl({urls: ['https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/strike.mp3']})	
    },
    'u':{
        color: '49ccff',
        sound: new Howl({urls: ['https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/suspension.mp3']})	
    },
    'v':{
        color: '#4D9970',
        sound: new Howl({urls: ['https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/timer.mp3']})	
    },
    'w':{
        color: '#3ECC40',
        sound: new Howl({urls: ['https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/ufo.mp3']})	
    },
    'x':{
        color: '#11FF70',
        sound: new Howl({urls: ['https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/veil.mp3']})	
    },
    'y':{
        color: '#FFDC10',
        sound: new Howl({urls: ['https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/wipe.mp3']})	
    },
    'z':{
        color: '#85234b',
        sound: new Howl({urls: ['https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/zig-zag.mp3']})	
    }		
};

//contains all circles
var circles=[];


//getting the size of the canvas
var height=view.size.height;
var width=view.size.width;	

//maxPoint of the random circle center
//most bottom right point
var maxPoint=new Point(width,height);

function onKeyDown(event) {					

    var key = event.key;
    if(keyData[key]!=undefined){
        event.preventDefault();			
        //Point.random() - getting number between 0 and 1(paperscript built in function)
        var randomPoint=Point.random()*maxPoint;
        var myCircle = new Path.Circle(randomPoint, 500);		
        myCircle.fillColor = keyData[key].color;			
        circles.push(myCircle);
        keyData[key].sound.play();
    }
}

function onFrame(event) {
    // Each frame, change the fill color of the path slightly by		
    // adding 1 to its hue:		
    // and scaling it down
    for(var i = circles.length -1; i >= 0 ; i--){
        //if the circle enough small - we remove it from the sceen and from array
        if(circles[i].bounds.width<2){
            circles[i].bounds.width=0;				
            circles.splice(i, 1);
            continue;
        }
        circles[i].fillColor.hue += 4;		
        circles[i].scale(0.9);							
    }		
}	
function onMouseDown(event){		
    var keyCode=Math.floor(Math.random() * (122 - 97 + 1)) + 97;		
    var keyChar=String.fromCharCode(keyCode);

    //Point.random() - getting number between 0 and 1(paperscript built in function)
    var randomPoint=Point.random()*maxPoint;
    var myCircle = new Path.Circle(randomPoint, 500);		
    myCircle.fillColor = keyData[keyChar].color;			
    circles.push(myCircle);
    keyData[keyChar].sound.play();
}