
// Wait 15 Seconds To Activate CountDown Timer
function waitIn15Seconds(mins, strCounDown, button){
    arrCountPlatform.push(strCounDown);
    var count = 0;
    var tempInterval = setInterval(function(){
        count++;
        if(count == 10){
            clearInterval(tempInterval);
            startCountDown(mins, strCounDown, button);
        }
    }, 1000);
}

// To Set How many minutes to wait to claim BTC Satoshi
function startCountDown(minutes, sCountDown, button){
    let date = new Date();
    var countDownDate = date.setMinutes(date.getMinutes() + minutes);
    countdown(sCountDown, countDownDate, button);
}

// Setup Timer To Start Counting
function countdown(element, countDownDate, button) {
            
    // Fetch the display element
    var el = document.getElementById(element);

    // Set the timer
    var interval = setInterval(function() {

        var now = new Date().getTime();
        var distance = countDownDate - now;
        var inMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var days = Math.floor(distance / (1000 * 60 * 60 * 24))
        var hours = Math.floor((distance %(1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if(minutes > 0) {
            var minute_text = minutes + (minutes > 1 ? ' minutes' : ' minute');
        } else {
            var minute_text = '';
        }

        if(hours > 0) {
            var hour_text = hours + (hours > 1 ? ' hours' : ' hour');
        } else {
            var hour_text = ''
        }

        var second_text = seconds > 1 ? '' : '';
        el.value = hour_text + ' ' + minute_text + ' ' + seconds + ' ' + second_text + 'seconds';

        if(minute_text == '' && hour_text == ''){
            if(seconds < 0){
                seconds = 0;
            }
        }

        if(seconds == 0) {
            if(minute_text == '' && hour_text == '') {
                (el.value = "STOP!");  
                
                el.style.backgroundColor = 'greenyellow';
                clearInterval(interval);
                
                count = 0;
                for(x = 0; x <= arrCountPlatform.length - 1; x++){
                    if(arrCountPlatform[x] == element){
                        count++;
                    }
                }

                /*
                if(['countdown4', 'countdown5', 'countdown6', 'countdown7', 'countdown8', 
                    'countdown9', 'countdown10', 'countdown11', 'countdown12', 'countdown13', 'countdown14'].includes(element)){
                    el.style.backgroundColor = 'aqua';
                }
                */




                if(element == 'countdown15'){
                 //   playMusic(el, wedd, 'Weedd.mp3');
                 //   el.style.backgroundColor = 'aqua';
                }

                /*
                
                switch(element){
                    case 'countdown1':
                        //playMusic(el, burning, 'Burning.mp3');
                        el.style.backgroundColor = 'aqua';
                        break;
                    case 'countdown3':
                        //playMusic(el, wedd, 'Weedd.mp3');
                        el.style.backgroundColor = 'aqua';
                        break;
                    case 'countdown2':
                        //playMusic(el, gohan, 'gohan.mp3');
                        el.style.backgroundColor = 'aqua';
                        break;
                    case 'countdown30':
                        //playMusic(el, saliva, 'Saliva.mp3');
                        el.style.backgroundColor = 'aqua';
                        break; 
                    case 'countdown31':
                        playMusic(el, pod, 'Pod.mp3');
                        break;  
                }
                */

                el.value = "STOP! --> " + count;
                let index = 1;
                
                /*
                let priority1 = ['countdown1', 'countdown2', 'countdown3', 'countdown4', 'countdown5',
                                 'countdown6', 'countdown7', 'countdown8', 'countdown9', 'countdown10', 
                                 'countdown11', 'countdown12', 'countdown13', 'countdown14',  'countdown27', 'countdown28'];
                                 
                let priority2 = [15, 16];
                let priority3 = [17, 18, 19, 20];
                let priority4 = [21, 22, 23, 24, 25, 26];
                let priority5 = [22, 23, 24, 25, 26, 27, 28, 29];

                
                if((checkColorGreen(index, inputs, priority2)) && (checkDisableButton(index, priority2))){
                    enableButton(index, priority2); 
                } else if((checkColorGreen(index, inputs, priority3)) && (checkDisableButton(index, priority3))){
                    enableButton(index, priority3);
                } else if((checkColorGreen(index, inputs, priority4)) && (checkDisableButton(index, priority4))){
                    enableButton(index, priority4);
                } else if((checkColorGreen(index, inputs, priority5)) && (checkDisableButton(index, priority5))){
                    enableButton(index, priority5);  
                }

                if(priority1.includes(element)){
                    button.disabled = false;  
                }
                */
                
                button.disabled = false;
                return
            }
        } else {
            el.style.backgroundColor = "blanchedalmond";
        }
        
    }, 1000);
}

function checkColorGreen(idColor, getElColor, colorNumbers){
    let countColor = 0;
    for(let color of colorNumbers){
        if(getElColor[color - idColor].style.backgroundColor == 'greenyellow'){
            countColor++;
        }
    }
    return countTrue(countColor, colorNumbers.length);
}

function checkDisableButton(idButton, arrButtons){
    let countButton = 0;
    let getButton = document.querySelectorAll('button');
    for(let arrButton of arrButtons){
        if(getButton[arrButton - idButton].disabled == true){
            countButton++;
        }
    }
    return countTrue(countButton, arrButtons.length);
}

function enableButton(idEnableButton, AllButtonNumbers){
    let getButton = document.querySelectorAll('button');
    for(let AllButton of AllButtonNumbers){
        getButton[AllButton - idEnableButton].disabled = false;
    }
}

function countTrue(counts, numLen){
    if(counts == numLen){
        return true;
    } else {
        return false;
    }
}

// To to play a music in prioritize Selected Faucets
function playMusic(element, audioSession, song){
    element.style.backgroundColor = 'aqua';
    audioSession.loop = true;
    audioSession.src = song;
    audioSession.play();
}

// to stop a music if a countdown is stop
function pauseMusic(song){
    song.pause();
    song.startTime = 0;
    song.loop = false;
}

// To Get the Value of Satoshi in Each Platform and to Compute All Totals
function setTimer(duration, setUrl, setPoints, setCountDown, input){
    countLimit++;
    countPoints += setPoints; 
    //earnperHour += setPoints;
    window.open(setUrl);
    waitIn15Seconds(duration, setCountDown, input);    
}


