const rows = 7;
const columns = 12;
const graphContainer = document.getElementById("graph-container");

for (let i = 1; i <= rows * columns; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  graphContainer.appendChild(box);
}

function plotEvent(w, h, x, y, color, className) {
  const event = document.createElement("div");
  event.className = "event";
  event.style.width = w + "px";
  event.style.height = h + "px";
  event.style.left = x + "px";
  event.style.top = y + "px";
  event.style.backgroundColor = color;
  event.style.border = "0.01px black solid";

  const info = document.createElement("div");
  info.className = "info";
  info.innerHTML = className.split(' ').slice(0, 2).join(' ');;
  event.appendChild(info);

  graphContainer.appendChild(event);
}


const ClassSearch = [
  [
    "CS 135 - Computer Science I",
    [
      {
        Class: "24254",
        Section: "1001-LEC",
        "Days & Times": "TuTh 12:00PM - 1:15PM",
        Room: "SEM 101",
        Instructor: "Erin Keith",
      },
      {
        Class: "24255",
        Section: "1101-LAB",
        "Days & Times": "Mo 8:00AM - 8:50AM",
        Room: "WPEB 100",
        Instructor: "Erin Keith",
      },
      {
        Class: "24256",
        Section: "1102-LAB",
        "Days & Times": "Mo 9:00AM - 9:50AM",
        Room: "WPEB 100",
        Instructor: "Erin Keith",
      },
      {
        Class: "24262",
        Section: "1103-LAB",
        "Days & Times": "Mo 10:00AM - 10:50AM",
        Room: "WPEB 100",
        Instructor: "Erin Keith",
      },
      {
        Class: "24270",
        Section: "1104-LAB",
        "Days & Times": "Mo 11:00AM - 11:50AM",
        Room: "WPEB 100",
        Instructor: "Erin Keith",
      },
      {
        Class: "24369",
        Section: "1105-LAB",
        "Days & Times": "Mo 12:00PM - 12:50PM",
        Room: "WPEB 100",
        Instructor: "Erin Keith",
      },
      {
        Class: "24370",
        Section: "1106-LAB",
        "Days & Times": "Mo 1:00PM - 1:50PM",
        Room: "WPEB 100",
        Instructor: "Erin Keith",
      },
    ],
  ],
  [
    "CS 202 - Computer Science II",
    [
      {
        Class: "24257",
        Section: "1001-LEC",
        "Days & Times": "TuTh 12:00PM - 1:15PM",
        Room: "DMSC 110",
        Instructor: "Bashira Akter Anima",
      },
      {
        Class: "24259",
        Section: "1102-LAB",
        "Days & Times": "We 9:00AM - 9:50AM",
        Room: "WPEB 100",
        Instructor: "Bashira Akter Anima",
      },
      {
        Class: "24260",
        Section: "1103-LAB",
        "Days & Times": "We 10:00AM - 10:50AM",
        Room: "WPEB 100",
        Instructor: "Bashira Akter Anima",
      },
      {
        Class: "24261",
        Section: "1104-LAB",
        "Days & Times": "We 11:00AM - 11:50AM",
        Room: "WPEB 100",
        Instructor: "Bashira Akter Anima",
      },
      {
        Class: "24331",
        Section: "1105-LAB",
        "Days & Times": "We 12:00PM - 12:50PM",
        Room: "WPEB 100",
        Instructor: "Bashira Akter Anima",
      },
    ],
  ],
  [
    "CS 219 - Computer Organization",
    [
      {
        Class: "24299",
        Section: "1001-LEC",
        "Days & Times": "MoWe 4:00PM - 5:15PM",
        Room: "SLH 2",
        Instructor: "Bashira Akter Anima",
      },
    ],
  ],
  [
    "CS 252 - Digital Forensics Fundamentals",
    [
      {
        Class: "24296",
        Section: "1001-LEC",
        "Days & Times": "TuTh 10:30AM - 11:45AM",
        Room: "LME 321",
        Instructor: "Nancy Latourrette",
      },
    ],
  ],
  [
    "CS 302 - Data Structures",
    [
      {
        Class: "24251",
        Section: "1001-LEC",
        "Days & Times": "MoWe 1:00PM - 2:15PM",
        Room: "MS 215",
        Instructor: "Erin Keith",
      },
    ],
  ],
  [
    "CS 326 - Programming Languages, Concepts and Implementation",
    [
      {
        Class: "24288",
        Section: "1001-LEC",
        "Days & Times": "TuTh 9:00AM - 10:15AM",
        Room: "DMSC 105",
        Instructor: "Mircea Nicolescu",
      },
    ],
  ],
  [
    "CS 333 - Testing and DevOps",
    [
      {
        Class: "24414",
        Section: "1001-LEC",
        "Days & Times": "Tu 4:30PM - 7:15PM",
        Room: "WPEB 100",
        Instructor: "Erin Keith",
      },
    ],
  ],
  [
    "CS 365 - Mathematics of Computer Science",
    [
      {
        Class: "24252",
        Section: "1001-LEC",
        "Days & Times": "Fr 1:00PM - 3:45PM",
        Room: "DMSC 105",
        Instructor: "Diana Moss",
      },
    ],
  ],
  [
    "CS 381 - Game Engine Architecture",
    [
      {
        Class: "24312",
        Section: "1001-LEC",
        "Days & Times": "MoWe 2:30PM - 3:45PM",
        Room: "WPEB 100",
        Instructor: "Joshua Dahl",
      },
    ],
  ],
  [
    "CS 426 - Senior Projects in Computer Science",
    [
      {
        Class: "24264",
        Section: "1001-LEC",
        "Days & Times": "TuTh 10:30AM - 11:45AM",
        Room: "SEM 101",
        Instructor: "Dave Feil-Seifer,",
      },
      {
        Class: "32609",
        Section: "1002-LEC",
        "Days & Times": "TuTh 10:30AM - 11:45AM",
        Room: "SEM 101",
        Instructor: "Dave Feil-Seifer,",
      },
    ],
  ],
  [
    "CS 431 - Introduction to Big Data",
    [
      {
        Class: "24410",
        Section: "1001-LEC",
        "Days & Times": "TuTh 4:30PM - 5:45PM",
        Room: "DMSC 102",
        Instructor: "Lei Yang",
      },
    ],
  ],
  [
    "CS 445 - Internet Security",
    [
      {
        Class: "24297",
        Section: "1001-LEC",
        "Days & Times": "MoWe 1:00PM - 2:15PM",
        Room: "SLH 3",
        Instructor: "Shamik Sengupta",
      },
    ],
  ],
  [
    "CS 446 - Principles of Operating Systems",
    [
      {
        Class: "24253",
        Section: "1001-LEC",
        "Days & Times": "TuTh 3:00PM - 4:15PM",
        Room: "JTB 100",
        Instructor: "Sara Davis",
      },
    ],
  ],
  [
    "CS 453 - Mobile Computing Security and Privacy",
    [
      {
        Class: "24335",
        Section: "1001-LEC",
        "Days & Times": "TuTh 3:00PM - 4:15PM",
        Room: "WPEB 100",
        Instructor: "William Doherty",
      },
    ],
  ],
  [
    "CS 455 - Mobile Sensor Networks",
    [
      {
        Class: "24408",
        Section: "1001-LEC",
        "Days & Times": "TuTh 9:00AM - 10:15AM",
        Room: "WRB 2023",
        Instructor: "Hung La",
      },
    ],
  ],
  [
    "CS 456 - Automata and Formal Languages",
    [
      {
        Class: "24265",
        Section: "1001-LEC",
        "Days & Times": "TuTh 12:00PM - 1:15PM",
        Room: "SLH 2",
        Instructor: "Nancy Latourrette",
      },
    ],
  ],
  [
    "CS 457 - Database Management Systems",
    [
      {
        Class: "24337",
        Section: "1001-LEC",
        "Days & Times": "MoWe 2:30PM - 3:45PM",
        Room: "DMSC 104",
        Instructor: "Erin Keith",
      },
    ],
  ],
  [
    "CS 477 - Analysis of Algorithms",
    [
      {
        Class: "24267",
        Section: "1001-LEC",
        "Days & Times": "TuTh 1:30PM - 2:45PM",
        Room: "DMSC 110",
        Instructor: "Monica Nicolescu",
      },
    ],
  ],
  [
    "CS 479 - Pattern Recognition",
    [
      {
        Class: "24404",
        Section: "1001-LEC",
        "Days & Times": "MoWe 1:00PM - 2:15PM",
        Room: "WPEB 200",
        Instructor: "George Bebis",
      },
    ],
  ],
  [
    "CS 484 - Virtual Reality",
    [
      {
        Class: "24347",
        Section: "1001-LEC",
        "Days & Times": "TuTh 1:30PM - 2:45PM",
        Room: "AB 101",
        Instructor: "Eelke Folmer",
      },
    ],
  ],
  [
    "CS 485 - Computer Vision",
    [
      {
        Class: "24266",
        Section: "1001-LEC",
        "Days & Times": "TuTh 9:00AM - 10:15AM",
        Room: "WPEB 200",
        Instructor: "Emily Hand",
      },
    ],
  ],
  [
    "CS 487 - Fundamentals of Deep Learning",
    [
      {
        Class: "24385",
        Section: "1001-LEC",
        "Days & Times": "MoWe 4:00PM - 5:15PM",
        Room: "DMSC 102",
        Instructor: "Alireza Tavakkoli",
      },
    ],
  ],
  [
    "CS 491 - Topics",
    [
      {
        Class: "24382",
        Section: "1003-LEC",
        "Days & Times": "Fr 1:00PM - 3:45PM",
        Room: "PSAC 114",
        Instructor: "Jordan Hastings",
      },
      {
        Class: "24389",
        Section: "1006-LEC",
        "Days & Times": "TuTh 4:30PM - 5:45PM",
        Room: "PSAC 114",
        Instructor: "Christos Papachristos",
      },
    ],
  ],
  [
    "CS 493 - Directed Study in Computer Science",
    [
      {
        Class: "24395",
        Section: "1001-LEC",
        "Days & Times": "TBA",
        Room: "TBA",
        Instructor: "Monica Nicolescu",
      },
      {
        Class: "24417",
        Section: "1002-LEC",
        "Days & Times": "TBA",
        Room: "TBA",
        Instructor: "Frederick Harris",
      },
      {
        Class: "31835",
        Section: "1004-LEC",
        "Days & Times": "TBA",
        Room: "TBA",
        Instructor: "Nancy Latourrette",
      },
      {
        Class: "32297",
        Section: "1005-LEC",
        "Days & Times": "TBA",
        Room: "TBA",
        Instructor: "Rui Hu",
      },
      {
        Class: "32719",
        Section: "1006-LEC",
        "Days & Times": "TBA",
        Room: "TBA",
        Instructor: "Dave Feil-Seifer",
      },
    ],
  ],
  [
    "CS 494 - Internship in Computer Science",
    [
      {
        Class: "24250",
        Section: "1001-INT",
        "Days & Times": "TBA",
        Room: "TBA",
        Instructor: "Emily Hand",
      },
      {
        Class: "24268",
        Section: "1002-INT",
        "Days & Times": "TBA",
        Room: "TBA",
        Instructor: "Nancy Latourrette",
      },
      {
        Class: "24269",
        Section: "1003-INT",
        "Days & Times": "TBA",
        Room: "TBA",
        Instructor: "Shamik Sengupta",
      },
      {
        Class: "24274",
        Section: "1004-INT",
        "Days & Times": "TBA",
        Room: "TBA",
        Instructor: "Monica Nicolescu",
      },
      {
        Class: "24305",
        Section: "1005-INT",
        "Days & Times": "TBA",
        Room: "TBA",
        Instructor: "Frederick Harris",
      },
      {
        Class: "24308",
        Section: "1006-INT",
        "Days & Times": "TBA",
        Room: "TBA",
        Instructor: "Sushil Louis",
      },
      {
        Class: "24310",
        Section: "1007-INT",
        "Days & Times": "TBA",
        Room: "TBA",
        Instructor: "Dave Feil-Seifer",
      },
      {
        Class: "24329",
        Section: "1010-INT",
        "Days & Times": "TBA",
        Room: "TBA",
        Instructor: "Mircea Nicolescu",
      },
      {
        Class: "24420",
        Section: "1012-INT",
        "Days & Times": "TBA",
        Room: "TBA",
        Instructor: "Erin Keith",
      },
      {
        Class: "24421",
        Section: "1013-INT",
        "Days & Times": "TBA",
        Room: "TBA",
        Instructor: "Sara Davis",
      },
      {
        Class: "32317",
        Section: "1015-INT",
        "Days & Times": "TBA",
        Room: "TBA",
        Instructor: "Batyr Charyyev",
      },
      {
        Class: "32841",
        Section: "1016-INT",
        "Days & Times": "TBA",
        Room: "TBA",
        Instructor: "Eelke Folmer",
      },
    ],
  ],
];

const colors = ["#b8ace4", "#209cbc", "#b8f4fc", "#68ccd4", "#60841c", "#b0cc84", "#ffd46c", "#f8ac14", "#f88c34", "#ff6c0c", "#ff5434", "#ffc4c4"];


function FormatClass() {
  const restructureClassSearch = restructureClass(ClassSearch);
  const splitedObjects = splitObject(restructureClassSearch).flat();
  const filterData = useFilter(splitedObjects);
  const addPixelData = calculatePixelData(filterData);
  const overlaps = overlappingCondition(addPixelData);
  renderClasses(overlaps);
}

FormatClass();

function useFilter(splitedObjects) {
  const removeTBAs = splitedObjects.filter(obj => obj.Start !== undefined);

  // Add filters code here!!!


  return removeTBAs;
}

function calculatePixelData(splitedObjects) {
  return splitedObjects.map((obj) => {
    const height = obj.Start && calculateHeight(obj.Start, obj.End);
    const top = getTop(height, obj.Start);
    const left = getLeft(obj.Day); 
    const width = 113;
    const border = "0.3px black solid";
    return {
      ...obj,
      height,
      top,
      left,
      width,
      border,
    };
  });
}

function renderClasses(addPixelData) {
  addPixelData.forEach((data, i) => {
    // plotEvent(width, height, left(x-axis), top(y-axis), color, className)
    plotEvent(data.width, data.height, data.left, data.top, data.Color, data.ClassName);
  });
}

function overlappingCondition(data) {
  const overlapCheck = eventsOverlap(data);
  const compressData = overlapCheck.map((oc) => {
    if (oc.length > 1) {
      const compressedData = compressEvent(oc);
      return compressedData;
    } else return oc;
  });
  return compressData.flat();
}

function compressEvent(classData) {
  const sizeOfADay = 113; // Parameter Constant
  const leftOfFullClass = classData[0].left; 
  const numberOfOverlap = classData.length;
  const centerOfBox = sizeOfADay / numberOfOverlap / 2;
  const firstPoint = leftOfFullClass - sizeOfADay / 2;
  let odd = 0;

  for (let i = 0; i < numberOfOverlap; i++) {
    odd += 1;
    classData[i].width = sizeOfADay / numberOfOverlap;
    classData[i].left = firstPoint + centerOfBox * (odd + i);
  }
  return classData;
}

function getTop(height, startTime) {
  const durationFromStart = calculateDuration("8:00AM", startTime);
  const halfHeight = height/2;
  const tTop = durationFromStart * 57.68 / 60; // Formula to find the tTop
  const contant = 1.01;
  const top = (tTop + halfHeight) * contant; // Formula to calculate the y-axis
  return top;
}

function getLeft(day) {
  const leftOfMonday = 171;
  switch (day) {
    case "Mo":
      return leftOfMonday;
    case "Tu":
      return leftOfMonday + 115;
    case "We":
      return leftOfMonday + 115 * 2 - 1;
    case "Th":
      return leftOfMonday + 115 * 3 - 1;
    case "Fr":
      return leftOfMonday + 115 * 4 - 2;
    default:
      return null;
  }
}
function calculateHeight(start, end) {
  const classDuration = calculateDuration(start, end);
  const constant = 1.03;
  const height = classDuration * (56 / 60) * constant; // Formula to calculate the height
  return height;
}

function calculateDuration(start, end) {
  const startTime = parseTime(start);
  const endTime = parseTime(end);
  const durationMs = endTime?.getTime() - startTime?.getTime();
  const durationMinutes = durationMs / (1000 * 60);
  return durationMinutes;
}

function parseTime(timeString) {
  if(!timeString) return null;
  const [hourMinute, ampm] = timeString.split(/(?=[AP]M)/);
  const [hour, minute] = hourMinute.split(":");
  let hours = parseInt(hour);
  const minutes = parseInt(minute);
  if (ampm === "PM" && hours < 12) {
    hours += 12;
  }
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date;
}

function splitObject(restructureClassSearch) {
  return restructureClassSearch.map((originalObj) => {
    const daysTimes = originalObj.DaysTimes.split(" ");
    const days = daysTimes[0].match(/[A-Za-z]{2}/g);
    const startTime = daysTimes[1];
    const endTime = daysTimes[3];
    const colorIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[colorIndex];

    const splitObject = days.map((day) => {
      return {
        Day: day,
        Start: startTime,
        End: endTime,
        ClassName: originalObj.className,
        classNumber: originalObj.classNumber,
        Section: originalObj.Section,
        Instructor: originalObj.Instructor,
        Room: originalObj.Room,
        Color: randomColor,
      };
    });

    return splitObject;
  });
}

function restructureClass(ClassSearch) {
  const restructureClassSearch = [];
  ClassSearch.forEach(([className, classes]) => {
    classes.forEach(
      ({ Class, Section, "Days & Times": DaysTimes, Room, Instructor }) => {
        restructureClassSearch.push({
          className,
          classNumber: Class,
          Section,
          DaysTimes,
          Room,
          Instructor,
        });
      }
    );
  });
  return restructureClassSearch;
}

function eventsOverlap(data) {
  const overlappingClasses = [];

  for (let i = 0; i < data.length; i++) {
    let foundOverlap = false;
    for (let j = 0; j < overlappingClasses.length; j++) {
      const overlapGroup = overlappingClasses[j];
      const overlap = overlapGroup.find(
        (classObj) => classObj.Day === data[i].Day
      );
      if (overlap) {
        const start1 = convertToISO8601(overlap.Start);
        const end1 = convertToISO8601(overlap.End);
        const start2 = convertToISO8601(data[i].Start);
        const end2 = convertToISO8601(data[i].End);

        if (
          (start1 < end2 && end1 > start2) ||
          (start2 < end1 && end2 > start1)
        ) {
          overlapGroup.push(data[i]);
          foundOverlap = true;
          break;
        }
      }
    }
    if (!foundOverlap) {
      overlappingClasses.push([data[i]]);
    }
  }
  return overlappingClasses;
}

function convertToISO8601(timeString) {
  if(!timeString) return null;
  // Split the time string into hours, minutes, and AM/PM
  const splitedTime =
    timeString.length > 1
      ? timeString.slice(0, -2) + " " + timeString.slice(-2)
      : timeString;
  const [time, period] = splitedTime.split(" ");
  const [hours, minutes] = time.split(":").map(Number);

  // Handle case for 12-hour clock
  let adjustedHours = hours;
  if (period.toLowerCase() === "pm" && hours < 12) {
    adjustedHours += 12;
  } else if (period.toLowerCase() === "am" && hours === 12) {
    adjustedHours = 0;
  }

  // Create a new Date object and set the time
  const date = new Date();
  date.setUTCHours(adjustedHours); // Set hours in UTC
  date.setUTCMinutes(minutes); // Set minutes in UTC
  date.setUTCSeconds(0); // Set seconds in UTC

  // Return the ISO 8601 formatted string in UTC
  return date.toISOString();
}

