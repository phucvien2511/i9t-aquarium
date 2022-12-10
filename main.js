//Display real-time clock
function zeroFill(string, length) {
	for (var i=0, l=length-string.length; i<l; i++) {
		string = '0' + string;
	}
	return string;
}

var getTime;
function getClock() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    if (s == 60) s = 0;
    getTime = zeroFill(h.toString(), 2) + ":" + zeroFill(m.toString(), 2) + ":" + zeroFill(s.toString(), 2);
    document.getElementById("clock").innerHTML = getTime;
    document.getElementById("date-clock").innerHTML = d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear();
}

//Counter to test if the page refreshed or not
// var cnt = 0;
// function count() {
//     document.getElementById("counter").innerHTML = "Counter: " + cnt;
//     cnt++;
// }
//


var temp;
var tempState = 1;

function changeTemp() {
    document.getElementById("low-temp-btn").onclick = function() {
        tempState = 0;
        document.getElementById("low-temp-btn").style.backgroundColor = "blue";
        document.getElementById("nor-temp-btn").style.backgroundColor = "black";
        document.getElementById("high-temp-btn").style.backgroundColor = "black";
    }
    document.getElementById("nor-temp-btn").onclick = function() {
        tempState = 1;
        document.getElementById("low-temp-btn").style.backgroundColor = "black";
        document.getElementById("nor-temp-btn").style.backgroundColor = "rgb(21, 116, 111)";
        document.getElementById("high-temp-btn").style.backgroundColor = "black";
    }
    document.getElementById("high-temp-btn").onclick = function() {
        tempState = 2;
        document.getElementById("low-temp-btn").style.backgroundColor = "black";
        document.getElementById("nor-temp-btn").style.backgroundColor = "black";
        document.getElementById("high-temp-btn").style.backgroundColor = "orange";
    }
}
function changeOxy() {
    document.getElementById("low-oxy-btn").onclick = function() {
        oxyState = 0;
        document.getElementById("low-oxy-btn").style.backgroundColor = "blue";
        document.getElementById("nor-oxy-btn").style.backgroundColor = "black";
        document.getElementById("high-oxy-btn").style.backgroundColor = "black";

    }
    document.getElementById("nor-oxy-btn").onclick = function() {
        oxyState = 1;
        document.getElementById("low-oxy-btn").style.backgroundColor = "black";
        document.getElementById("nor-oxy-btn").style.backgroundColor = "rgb(21, 116, 111)";
        document.getElementById("high-oxy-btn").style.backgroundColor = "black";

    }
    document.getElementById("high-oxy-btn").onclick = function() {
        oxyState = 2;
        document.getElementById("low-oxy-btn").style.backgroundColor = "black";
        document.getElementById("nor-oxy-btn").style.backgroundColor = "black";
        document.getElementById("high-oxy-btn").style.backgroundColor = "orange";
    }
}
function changePh() {
    document.getElementById("low-ph-btn").onclick = function() {
        phState = 0;
        document.getElementById("low-ph-btn").style.backgroundColor = "blue";
        document.getElementById("nor-ph-btn").style.backgroundColor = "black";
        document.getElementById("high-ph-btn").style.backgroundColor = "black";

    }
    document.getElementById("nor-ph-btn").onclick = function() {
        phState = 1;
        document.getElementById("low-ph-btn").style.backgroundColor = "black";
        document.getElementById("nor-ph-btn").style.backgroundColor = "rgb(21, 116, 111)";
        document.getElementById("high-ph-btn").style.backgroundColor = "black";
    }
    document.getElementById("high-ph-btn").onclick = function() {
        phState = 2;
        document.getElementById("low-ph-btn").style.backgroundColor = "black";
        document.getElementById("nor-ph-btn").style.backgroundColor = "black";
        document.getElementById("high-ph-btn").style.backgroundColor = "orange";
    }
}
function getTemp() {
    if (tempState == 0) temp = Math.floor(Math.random() * 20) + 230;    //Low temp
    else if (tempState == 1) temp = Math.floor(Math.random() * 20) + 250;    //Normal temp
    else temp = Math.floor(Math.random() * 21) + 270;    //High temp
    temp = temp/10;
    document.getElementById("get-temp").innerHTML = temp + "°C\n";
    if (temp > 27) {
        document.getElementById("check-temp").innerHTML = "Temperature is high.";
        document.getElementById("temp-box").style.backgroundColor = "orange";
    }
    else if (temp < 25) {
        document.getElementById("check-temp").innerHTML = "Temperature is low.";
        document.getElementById("temp-box").style.backgroundColor = "blue";
    }
    else {
        document.getElementById("check-temp").innerHTML = "Temperature is normal.";
        document.getElementById("temp-box").style.backgroundColor = "aquamarine";
    }
}


var oxyRate;
var oxyState = 1;

function getOxy() {
    if (oxyState == 0) oxyRate = Math.floor(Math.random() * 30) + 30;    //Low oxy
    else if (oxyState == 1) oxyRate = Math.floor(Math.random() * 21) + 60;  //Normal oxy
    else oxyRate = Math.floor(Math.random() * 21) + 81;    //High oxy
    oxyRate = oxyRate/10;
    document.getElementById("get-oxy").innerHTML = oxyRate + "‰\n";
    if (oxyRate >= 6 && oxyRate <= 8) {
        document.getElementById("check-oxy").innerHTML = "Oxygen rate is normal.";
        document.getElementById("oxy-box").style.backgroundColor = "aquamarine";
    }
    else if (oxyRate < 6) {
        document.getElementById("check-oxy").innerHTML = "Oxygen rate is low.";
        document.getElementById("oxy-box").style.backgroundColor = "orange";
    }
    else {
        document.getElementById("check-oxy").innerHTML = "Oxygen rate is high.";
        document.getElementById("oxy-box").style.backgroundColor = "orange";
    }
}

var ph;
var phState = 1;
function getpH() {
    if (phState == 0) ph = Math.floor(Math.random() * 21) + 45;    //Low pH
    else if (phState == 1) ph = Math.floor(Math.random() * 11) + 68;  //Normal pH
    else ph = Math.floor(Math.random() * 21) + 79;    //High pH
    ph = ph / 10;
    document.getElementById("get-ph").innerHTML = ph + "\n";
    if (ph >= 6.8 && ph <= 7.8) {
        document.getElementById("check-ph").innerHTML = "pH is normal.";
        document.getElementById("ph-box").style.backgroundColor = "aquamarine";
    }
    else {
        document.getElementById("check-ph").innerHTML = "pH is not good for fishes.";
        document.getElementById("ph-box").style.backgroundColor = "orange";
    }
}

//Generate and check new temperature value every 1000ms
var intervalPeriod = 2000;
setInterval(getTemp, intervalPeriod);
setInterval(getOxy, intervalPeriod);
setInterval(getpH, intervalPeriod);
setInterval(regLog, intervalPeriod);
setInterval(domloaded, intervalPeriod);
setInterval(getClock, 1000);
// setInterval(count, 1000);
//Log array
const tempLog = [];
const oxyLog = [];
const phLog = [];
const timeLog = [];
function regLog() {
    for (let i = 19; i >= 1; i--) {
        tempLog[i] = tempLog[i-1];
        oxyLog[i] = oxyLog[i-1];
        phLog[i] = phLog[i-1];
        timeLog[i] = timeLog[i-1];
    }
    tempLog[0] = temp;
    oxyLog[0] = oxyRate;
    phLog[0] = ph;
    timeLog[0] = getTime;
    document.getElementById("log-1").innerHTML = "T: " + tempLog[0] + "°C - %O: " + oxyLog[0] + "‰ - pH: " + phLog[0] + " - At " + timeLog[0];
    document.getElementById("log-2").innerHTML = "T: " + tempLog[1] + "°C - %O: " + oxyLog[1] + "‰ - pH: " + phLog[1] + " - At " + timeLog[1];
    document.getElementById("log-3").innerHTML = "T: " + tempLog[2] + "°C - %O: " + oxyLog[2] + "‰ - pH: " + phLog[2] + " - At " + timeLog[2];
    document.getElementById("log-4").innerHTML = "T: " + tempLog[3] + "°C - %O: " + oxyLog[3] + "‰ - pH: " + phLog[3] + " - At " + timeLog[3];
    document.getElementById("log-5").innerHTML = "T: " + tempLog[4] + "°C - %O: " + oxyLog[4] + "‰ - pH: " + phLog[4] + " - At " + timeLog[4];
    document.getElementById("log-6").innerHTML = "T: " + tempLog[5] + "°C - %O: " + oxyLog[5] + "‰ - pH: " + phLog[5] + " - At " + timeLog[5];
    document.getElementById("log-7").innerHTML = "T: " + tempLog[6] + "°C - %O: " + oxyLog[6] + "‰ - pH: " + phLog[6] + " - At " + timeLog[6];
    document.getElementById("log-8").innerHTML = "T: " + tempLog[7] + "°C - %O: " + oxyLog[7] + "‰ - pH: " + phLog[7] + " - At " + timeLog[7];
    document.getElementById("log-9").innerHTML = "T: " + tempLog[8] + "°C - %O: " + oxyLog[8] + "‰ - pH: " + phLog[8] + " - At " + timeLog[8];
    document.getElementById("log-10").innerHTML = "T: " + tempLog[9] + "°C - %O: " + oxyLog[9] + "‰ - pH: " + phLog[9] + " - At " + timeLog[9];
}

//Display chart
var xValues = [];
var yValues = [];
document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){
    if (canvasEnable == 0) {
        for (let i = 0, j = 19; i < 20, j >= 0; i++, j--) {
            xValues[j] = timeLog[i];
            yValues[j] = tempLog[i];
        }
        new Chart("tempChart", {
            type: "line",
            data: {
            labels: xValues,
            datasets: [{
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(0,0,255,1.0)",
                borderColor: "rgba(0,0,255,0.1)",
                data: yValues
            }]
            },
            options: {
            legend: {display: false},
            scales: {
                yAxes: [{ticks: {min: 20, max:30, stepSize: 0.5}}],
            },
            animation: {duration: 0},
            title: {
                display: true,
                text: 'Temperature graph'
            }
            }
        });
    }
    else if (canvasEnable == 1) {
        for (let i = 0, j = 19; i < 20, j >= 0; i++, j--) {
            xValues[j] = timeLog[i];
            yValues[j] = oxyLog[i];
        }
        new Chart("oxyChart", {
            type: "line",
            data: {
            labels: xValues,
            datasets: [{
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(0,0,255,1.0)",
                borderColor: "rgba(0,0,255,0.1)",
                data: yValues
            }]
            },
            options: {
            legend: {display: false},
            scales: {
                yAxes: [{ticks: {min: 0, max:10, stepSize: 1}}],
            },
            animation: {duration: 0},
            title: {
                display: true,
                text: 'Oxygen rate graph'
            }
            }
        });
    }
    else {
        for (let i = 0, j = 19; i < 20, j >= 0; i++, j--) {
            xValues[j] = timeLog[i];
            yValues[j] = phLog[i];
        }
        new Chart("phChart", {
            type: "line",
            data: {
            labels: xValues,
            datasets: [{
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(0,0,255,1.0)",
                borderColor: "rgba(0,0,255,0.1)",
                data: yValues
            }]
            },
            options: {
            legend: {display: false},
            scales: {
                yAxes: [{ticks: {min: 0, max:10, stepSize: 1}}],
            },
            animation: {duration: 0},
            title: {
                display: true,
                text: 'pH graph'
            }
            }
        });
    }
}

var canvasEnable = 0;
function swapCanvases(){
  if(canvasEnable == 0){
    canvasEnable = 1;
    tempChart.style.visibility='hidden';
    oxyChart.style.visibility='visible';
    phChart.style.visibility='hidden';
  }
  else if (canvasEnable == 1) {
    canvasEnable = 2;
    tempChart.style.visibility='hidden';
    oxyChart.style.visibility='hidden';
    phChart.style.visibility='visible';
  }
  else {
    canvasEnable = 0;
    tempChart.style.visibility='visible';
    oxyChart.style.visibility='hidden';
    phChart.style.visibility='hidden';
  }
}        
// function stopTemp() {
//     clearInterval(interval);
// }

// function contTemp() {
//     if (stopped == true) {
//         interval = setInterval(checkTemp, 1000);
//         stopped = false;
//     }
// }

function viewLog() {
    //document.getElementById("log-begin").scrollIntoView();
    document.getElementById("log-btn").style.backgroundColor = "rgb(20, 116, 111)";
    document.getElementById("log-btn").style.color = "white";
    document.getElementById("data-btn").style.backgroundColor = "transparent";
    document.getElementById("data-btn").style.color = "black";
    document.getElementById("graph-btn").style.backgroundColor = "transparent";
    document.getElementById("graph-btn").style.color = "black";
    $(document).ready(function () {
        $("#log-btn").click(function() {
            $("#data-begin").load("/log.html");
        });
    });
}

function viewData() {
    //document.getElementById("data-begin").scrollIntoView();
    document.getElementById("data-btn").style.backgroundColor = "rgb(20, 116, 111)";
    document.getElementById("data-btn").style.color = "white";
    document.getElementById("log-btn").style.backgroundColor = "transparent";
    document.getElementById("log-btn").style.color = "black";
    document.getElementById("graph-btn").style.backgroundColor = "transparent";
    document.getElementById("graph-btn").style.color = "black";
    $(document).ready(function () {
        $("#data-btn").click(function() {
            $("#data-begin").load("/data.html");
        });
    });
}

function viewGraph() {
    //document.getElementById("graph-begin").scrollIntoView();
    document.getElementById("graph-btn").style.backgroundColor = "rgb(20, 116, 111)";
    document.getElementById("graph-btn").style.color = "white";
    document.getElementById("log-btn").style.backgroundColor = "transparent";
    document.getElementById("log-btn").style.color = "black";
    document.getElementById("data-btn").style.backgroundColor = "transparent";
    document.getElementById("data-btn").style.color = "black";
    $(document).ready(function () {
        $("#graph-btn").click(function() {
            $("#data-begin").load("/graph.html");
        });
    });
}
var username;
var userToken;
function getToken() {
    username = document.getElementById("username-box").value;
    userToken = "I9T_" + CryptoJS.MD5(username).toString();
    document.getElementById("token-box").value = userToken;
    document.getElementById("show-username").innerHTML = "Device 1: " + username; 
}
var copyBtn = document.getElementById("copy-btn");
var tempClipboard = document.getElementById("clipboard");
document.copyBtn.addEventListener('click', copyToken);

//lowTemp function

