function plotEvent(w, h, x, y, color, className) {
  const event = document.createElement("div");
  event.className = "event";
  event.style.width = w + "px";
  event.style.height = h + "px";
  event.style.left = x + "px";
  event.style.top = y + "px";
  event.style.backgroundColor = color;
  // event.style.border = "0.01px black solid";
  
  const info = document.createElement("div");
  info.className = "info";
  info.innerHTML = className.split(' ').slice(0, 2).join(' ');
  event.appendChild(info);
  
  graphContainer.appendChild(event);
}

const rows = 7;
const columns = 12;
const graphContainer = document.getElementById("graph-container");

for (let i = 1; i <= rows * columns; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  graphContainer.appendChild(box);
}

let ClassSearch;

async function tryParseJson(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

(function ($) {
  let CheckboxDropdown = function (element) {
    let _this = this;
    this.isOpen = false;
    this.areAllChecked = false;
    this.$dropdownElement = $(element);
    this.$label = this.$dropdownElement.find('.dropdown-label');
    this.$checkAll = this.$dropdownElement.find('[data-toggle="check-all"]').first();
    this.$inputs = this.$dropdownElement.find('[type="checkbox"]');
    
    this.onCheckBox();
    
    this.$label.on('click', function (e) {
      e.preventDefault();
      _this.toggleOpen();
    });
    
    this.$checkAll.on('click', function (e) {
      e.preventDefault();
      _this.onCheckAll();
    });
    
    this.$inputs.on('change', function (e) {
      _this.onCheckBox();
    });
  };
  
  CheckboxDropdown.prototype.updateStatus = function () {
    let checked = this.$dropdownElement.find(':checked');
    
    // Reset label
    this.areAllChecked = false;
    this.$checkAll.html('Check All');
    
    // Count selected options and update label
    if (checked.length <= 0) {
      this.$label.html('Select Options');
    } else if (checked.length === 1) {
      this.$label.html(checked.parent('label').text());
    } else if (checked.length === this.$inputs.length) {
      this.$label.html('All Selected');
      this.areAllChecked = true;
      this.$checkAll.html('Uncheck All');
    } else {
      this.$label.html(checked.length + ' Selected');
    }
  };
  
  CheckboxDropdown.prototype.onCheckBox = function () {
    this.updateStatus();
  };
  
  CheckboxDropdown.prototype.onCheckAll = function (checkAll) {
    if (!this.areAllChecked || checkAll) {
      this.areAllChecked = true;
      this.$checkAll.html('Uncheck All');
      this.$inputs.prop('checked', true);
    } else {
      this.areAllChecked = false;
      this.$checkAll.html('Check All');
      this.$inputs.prop('checked', false);
    }
    
    this.updateStatus();
  };
  
  CheckboxDropdown.prototype.toggleOpen = function (forceOpen) {
    let _this = this;
    if (!this.isOpen || forceOpen) {
      this.isOpen = true;
      this.$dropdownElement.addClass('on');
      
      // Close dropdown when clicking outside
      $(document).on('click', function (e) {
        if (!$(e.target).closest('[data-control]').length) {
          _this.toggleOpen();
        }
      });
    } else {
      this.isOpen = false;
      this.$dropdownElement.removeClass('on');
      $(document).off('click');
    }
  };
  
  // Initialize checkbox dropdowns
  let checkboxesDropdowns = document.querySelectorAll('[data-control="checkbox-dropdown"]');
  for (let i = 0, length = checkboxesDropdowns.length; i < length; i++) {
    new CheckboxDropdown(checkboxesDropdowns[i]);
  }
})(jQuery);

async function initData() {
  const localUrl = 'data/CS-ClassSearch.json';
  const data = await tryParseJson(localUrl);
  if (data) {
    console.log('Local data loaded');
    return data;
  }
  
  const url = 'https://emerson-fleming.github.io/CS-ClassSearch.json';
  const remoteData = await tryParseJson(url);
  if (remoteData) {
    console.log('Remote data loaded');
    return remoteData;
  }
}

initData()
  .then(classes => ClassSearch = classes)
  .then(_ => FormatClass());

const colors = ["#b8ace4", "#209cbc", "#b8f4fc", "#68ccd4", "#60841c", "#b0cc84", "#ffd46c", "#f8ac14", "#f88c34", "#ff6c0c", "#ff5434", "#ffc4c4"];

function FormatClass() {
  const restructureClassSearch = restructureClass(ClassSearch);
  const splitObjects = splitObject(restructureClassSearch).flat();
  const filterData = useFilter(splitObjects);
  const addPixelData = calculatePixelData(filterData);
  const overlaps = overlappingCondition(addPixelData);
  renderClasses(overlaps);
}

function useFilter(splitObjects) {
  const removeTBAs = splitObjects.filter(obj => obj.Start !== undefined);
  
  // Add filters code here!!!
  
  
  return removeTBAs;
}

function calculatePixelData(splitObjects) {
  return splitObjects.map((obj) => {
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
      border
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
      return compressEvent(oc);
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
  const halfHeight = height / 2;
  const tTop = durationFromStart * 57.68 / 60; // Formula to find the tTop
  const constant = 1.01;
  // Formula to calculate the y-axis
  return (tTop + halfHeight) * constant;
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
  // Formula to calculate the height
  return classDuration * (56 / 60) * constant;
}

function calculateDuration(start, end) {
  const startTime = parseTime(start);
  const endTime = parseTime(end);
  const durationMs = endTime?.getTime() - startTime?.getTime();
  return durationMs / (1000 * 60);
}

function parseTime(timeString) {
  if (!timeString) return null;
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
    
    return days.map((day) => {
      return {
        Day: day,
        Start: startTime,
        End: endTime,
        ClassName: originalObj.className,
        classNumber: originalObj.classNumber,
        Section: originalObj.Section,
        Instructor: originalObj.Instructor,
        Room: originalObj.Room,
        Color: randomColor
      };
    });
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
          Instructor
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
  if (!timeString) return null;
  // Split the time string into hours, minutes, and AM/PM
  const splitTime =
    timeString.length > 1
      ? timeString.slice(0, -2) + " " + timeString.slice(-2)
      : timeString;
  const [time, period] = splitTime.split(" ");
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