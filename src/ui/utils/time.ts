export const timeVisualiser = (numberOfSeconds: number, quickForge: boolean, coleQuickForge: boolean) => {
    if (quickForge) {
        numberOfSeconds = Math.round(numberOfSeconds * 0.7)
    }

    if (coleQuickForge) {
        numberOfSeconds = Math.round(numberOfSeconds * 0.75)
    }

    let numberOfDays = 0;

    while (numberOfSeconds >= 86400) {
        numberOfDays += 1;
        numberOfSeconds -= 86400
    }

    const dayString = numberOfDays > 0 ? (numberOfDays > 1 ? `${numberOfDays} Days ` : `1 Day `) : "";

    let numberOfHours = 0;

    while (numberOfSeconds >= 3600) {
        numberOfHours += 1;
        numberOfSeconds -= 3600
    }

    const hourString = numberOfHours > 0 ? (numberOfHours > 1 ? `${numberOfHours} Hours ` : `1 Hour `) : "";

    let numberOfMinutes = 0;

    while (numberOfSeconds >= 60) {
        numberOfMinutes += 1;
        numberOfSeconds -= 60
    }

    const minuteString = numberOfMinutes > 0 ? (numberOfMinutes > 1 ? `${numberOfMinutes} Minutes ` : `1 Minute `) : "";

    const secondString = numberOfSeconds > 0 ? (numberOfSeconds > 1 ? `${numberOfSeconds} Seconds` : `1 Second`) : "";

    return dayString + hourString + minuteString + secondString
}