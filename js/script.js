// CLICK EVENT FOR BELL 
const popUp = document.getElementsByClassName("bell")[0];
popUp.addEventListener("click", () => {
  const alertBox = document.getElementById("pop");
  const pop = document.getElementById("iconNotification");
  if ( alertBox.style.display === "none") {
    alertBox.style.display = "block";
    pop.style.display = "none";
  } else {
    alertBox.style.display = "none";
    pop.style.display = "block";
  }
})


// CREATE ALERT BAR 
const alertBannar = document.getElementById("alert");
alertBannar.innerHTML =
`<strong>Alert </strong>This is an alert box.
<span class="close-btn" onclick="this.parentElement.style.display='none';">&times;</span>`;


// CHART CREATION 
const trafficCanvas = document.getElementById("traffic-chart");
let trafficData1 = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
  "4-10", "11-17", "18-24", "25-31"],
  datasets: [{
    data: [7, 12, 10, 20, 15, 17, 12, 18, 22, 15,
    25],
    backgroundColor: "rgb(20,20,110, .5)",
    borderWidth: 1,
    borderColor:"rgb(255,165,0, .1)",
  }]
  };

let trafficData2 = {
  labels: ["1-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
  "4-10", "11-17", "18-24", "25-31"],
  datasets: [{
    data: [130, 158, 240, 480, 390,470, 430, 320, 400, 400,
    600],
    backgroundColor: "rgb(20,20,110, .5)",
    borderWidth: 1,
    borderColor:"rgb(255,165,0, .1)",
  }]
  };  

  let trafficData3 = {
    labels: ["1-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
      data: [700, 750, 700, 1200, 1300, 1750, 950, 1350, 950, 1500,
      1300],
      backgroundColor: "rgb(20,20,110, .5)",
      borderWidth: 1,
      borderColor:"rgb(255,165,0, .1)",
    }]
  };  
  
  let trafficData4 = {
    labels: ["1-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
      data: [3500, 4400, 2500, 5000, 4800, 6100, 3500, 5000, 4200, 6500,
      5200],
      backgroundColor: "rgb(20,20,110, .5)",
      borderWidth: 1,
      borderColor:"rgb(255,165,0, .1)",
    }]
  };  

  let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
      duration: 1000,
      easing:"linear"
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true,
        }
      }]
    },
    legend : {
      display: false
    }
    };

let trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: trafficData1,
  options: trafficOptions
  });

// CHART LOADING 
let trafficTerm = document.getElementsByClassName("time-wrap")[0];
trafficTerm.addEventListener("click", (e) => {
 let selectedTerm = e.target.innerHTML;
  if ( selectedTerm === "Hourly") {
    let trafficChart = new Chart(trafficCanvas, {
      type: 'line',
      data: trafficData1,
      options: trafficOptions
      });
  } else if (selectedTerm === "Daily") {
    let trafficChart = new Chart(trafficCanvas, {
      type: 'line',
      data: trafficData2,
      options: trafficOptions
      });
  } else if (selectedTerm === "Weekly") {
    let trafficChart = new Chart(trafficCanvas, {
      type: 'line',
      data: trafficData3,
      options: trafficOptions
      });
  } else if (selectedTerm === "Monthly") {
    let trafficChart = new Chart(trafficCanvas, {
      type: 'line',
      data: trafficData4,
      options: trafficOptions
      });
 }
});


// DAILY CHART 
const dailyCanvas = document.getElementById("daily-chart");

const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: "rgb(20,20,110, .5)",
    borderWidth: 1
  }]
  };

const dailyOptions = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  },
  cornerRadius:10,
  legend : {
  display: false
  }
};

let dailyChart = new Chart(dailyCanvas, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});


// DONUT CHART 
const mobileCanvas = document.getElementById("mobile-chart");
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
      label: '# of Users',
      data: [2000, 550, 500],
      borderWidth: 0,
      backgroundColor: [
      "#7477bf",
      "#81c98f",
      "#51b6c8"
      ]
    }]
  };

const mobileOptions = {
  legend: {
    position: 'right',
    labels: {
      boxWidth: 20,
      fontStyle: 'bold'
    }
  }
};

let mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});


// FORM 
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
  if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
  } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
  } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
  } else {
    alert(`Message successfully sent to: ${user.value}`);
  }
  });


// SEARCH BAR FOR USER 
let namesList = document.getElementById("names").getElementsByTagName("option");

user.addEventListener("keyup", (e)=> {
  let userString = e.target.value;
  userString.toLowerCase();
  for (i = 0; i < namesList.length; i ++) {
    if ( userString.includes(namesList[i].innerHTML.toLowerCase() === false)) {
      namesList[i].style.display = "";
    }
  }
});

// LOCAL STORAGE 
let onOff1 = localStorage.getItem("onOff1");
let switchNumber1 =Number(onOff1);

let onOff2 = localStorage.getItem("onOff2");
let switchNumber2 =Number(onOff2);

let option = localStorage.getItem("option");
let optionsValue = option;


// TOGGLE 
let switch1 = document.getElementsByClassName("switch1")[0];
let switch1Area = switch1.getElementsByTagName("span")[0];
let switch1Input = switch1.getElementsByTagName("input")[0];

switch1Area.addEventListener("click", () => {
  switchNumber1 = switchNumber1 + 1 ;  
})

let switch2 = document.getElementsByClassName("switch2")[0];
let switch2Area = switch2.getElementsByTagName("span")[0];
let switch2Input = switch2.getElementsByTagName("input")[0];

  switch2Area.addEventListener("click", () => {
  switchNumber2 = switchNumber2 + 1 ;  
})


// OPTION TEXT 
let select= document.getElementById("select");
let options = select.getElementsByTagName("option");

select.addEventListener("change", (e) => {
  optionsValue = e.target.value;
  console.log("didit");
})


// SAVE SETTINGS 
let save = document.getElementById("save");
save.addEventListener("click", () => {
  localStorage.setItem("onOff1",JSON.stringify(switchNumber1));
  localStorage.setItem("onOff2",JSON.stringify(switchNumber2));
  localStorage.setItem("option",optionsValue);
})


// CLEAR SETTINGS 
let cancel =  document.getElementById("cancel");
cancel.addEventListener("click", () => {
  localStorage.removeItem("onOff1");
  localStorage.removeItem("onOff2");
  localStorage.removeItem("option");
})


// SETTINGS VISTED 
if ( onOff1 %2 !== 0) {
  switch1Input.setAttribute("checked", "false");
}else {
  switch1Input.removeAttribute("checked");
}

if ( onOff2 %2 !== 0) {
  switch2Input.setAttribute("checked", "false");
}else {
  switch2Input.removeAttribute("checked");
}

for (let i = 1; i < options.length; i++) {
  if (options[i].value === option) {
    select.selectedIndex = i;
  }
}