export function calculateYearsAndMonths(startDate) {
    const today = new Date();
    
    let years = today.getFullYear() - startDate.getFullYear();
    let months = today.getMonth() - startDate.getMonth();
  
    // If the month difference is negative, adjust the year and month
    if (months < 0) {
      years--;
      months += 12;
    }
  
    return { years, months };
  }
  
//   // Example usage:
//   const startDate = new Date('2021-12-01'); // Provide the start date
//   const result = calculateYearsAndMonths(startDate);
  
//   console.log(`Years: ${result.years}, Months: ${result.months}`);