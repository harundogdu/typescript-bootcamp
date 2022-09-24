// Enum Definition
import chalk from "chalk";

// Example 1
enum INotification {
    Success,
    Error,
    Warning,
    Info
}

const sendNotification = (type: INotification) => {
    switch (type) {
        case INotification.Success:
            console.log(chalk.green("Success Notification"));
            break;
        case INotification.Error:
            console.log(chalk.red("Error Notification"));
            break;
        case INotification.Warning:
            console.log(chalk.yellow("Warning Notification"));
            break;
        case INotification.Info:
        default:
            console.log(chalk.blue("Info Notification"));
            break;
    }
}

sendNotification(INotification.Success)

// Path: src\enum-definition.ts
