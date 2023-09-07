/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


const createEmployeeRecord = (employee) => {
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}

const createEmployeeRecords = (employees) => {
    const employeeArr = [ ];
    employees.map((employee) => {
        employeeArr.push(createEmployeeRecord(employee));
    })
return employeeArr;

}


const createTimeInEvent = (dateFull) => {
    let hourNum = parseInt(dateFull.slice(11), 10);
    let dateStr = dateFull.slice(0,10);

    let timeInObj = {
        type: "TimeIn",
        hour: hourNum,
        date: dateStr,
    }

   
    this.timeInEvents.push(timeInObj);

    return this;
}

const createTimeOutEvent = (dateFull) => {
    let hourNum = parseInt(dateFull.slice(11), 10);
    let dateStr = dateFull.slice(0,10);

    let timeOutObj = {
        type: "TimeOut",
        hour: hourNum,
        date: dateStr,
    }

   
    this.timeOutEvents.push(timeOutObj);

    return this;
    
}

const hoursWorkedOnDate = (dateWork) => {

    let timeIn = this.timeInEvents.find(e => e.date === dateWork)
    let timeOut = this.timeOutEvents.find(e => e.date === dateWork)
    return (timeOut.hour - timeIn.hour)/100
}

const wagesEarnedOnDate =(dateWage) => hoursWorkedOnDate.call(this, dateWage) * this.payPerHour

const findEmployeeByFirstName = (srcArray, firstName) => {

    for(let employee of srcArray){
        if(employee.firstName === firstName){
            return employee;
        }
    }

    return undefined;
}

const calculatePayroll = (employees) => {
let wageFull = 0;

for (let employee of employees) {
    wageFull += allWagesFor.call(employee);
}

return wageFull

}