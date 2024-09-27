export default function calculateDaysLeft(endDate: string | Date): any {
    // Convert endDate to a Date object if it's a string (ISO string)
    const targetDate = typeof endDate === 'string' ? new Date(endDate) : endDate;
    const currentDate = new Date();

    // Ensure the target date is a valid date
    if (isNaN(targetDate.getTime())) {
        throw new Error('Invalid date provided');
    }

    // Calculate the difference in milliseconds
    const timeDifference = targetDate.getTime() - currentDate.getTime();

    // Convert the time difference from milliseconds to days
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    // Return the number of days left
    return daysLeft;
}

