function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    // Tax calculations (based on KRA rates)
    let payee = 0;
    if (grossSalary <= 24000) {
        payee = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        payee = grossSalary * 0.25;
    } else {
        payee = grossSalary * 0.30;
    }

    // NHIF Deductions (Simplified)
    let nhif = grossSalary <= 5999 ? 150 : 
               grossSalary <= 7999 ? 300 : 
               grossSalary <= 11999 ? 400 : 500;

    // NSSF Deductions (Fixed Rate)
    let nssf = 1080;

    let netSalary = grossSalary - (payee + nhif + nssf);
    return {
        grossSalary: grossSalary,
        payee: payee,
        nhif: nhif,
        nssf: nssf,
        netSalary: netSalary
    };
}

let basicSalary = parseFloat(prompt("Enter basic salary: "));
let benefits = parseFloat(prompt("Enter benefits: "));
console.log(calculateNetSalary(basicSalary, benefits));