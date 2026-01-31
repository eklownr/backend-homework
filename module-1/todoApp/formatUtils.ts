/**
 * Module formatUtils handel terminal-color and date-format 
 */

// ANSI escape-code 
export const Color = {
    RED: "\x1b[31m",
    GREEN: "\x1b[32m",
    YELLOW: "\x1b[33m",
    ORANGE: "\x1b[38;5;166m", // use 256-color for orange
    BLUE: "\x1b[34m",
    MAGENTA: "\x1b[35m",
    CYAN: "\x1b[36m",
    PURPLE: "\x1b[35m",
    RESET: "\x1b[0m"
}as const;

// console.log(Color.RED + "Red" + Color.RESET + "White" + Color.PURPLE + "Purble.");


/* Color arrow function return colorized string
// use: console.log(color('red', 'This is red!'));
*/
type ColorCode = 'red' | 'green' | 'orange' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'purple' | 'reset';
export const color = (colorCode: ColorCode, value: string): string => {
    const colors: { [key: string]: string } = {
        red: '\x1b[31m',
        green: '\x1b[32m',
        yellow: '\x1b[33m',
        orange: '\x1b[38;5;166m', // use 256-color for orange
        blue: '\x1b[34m',
        magenta: '\x1b[35m',
        cyan: '\x1b[36m',
        purple: '\x1b[35m',
        reset: '\x1b[0m'
    };
    return `${colors[colorCode] || colors.reset}${value}${colors.reset}`;
};

/**
 * Use: formatDate(new Date())); Get: => '2026-01-30 - 12:34'
 * @param date - Date object
 * @returns string: "year-day-month - hours:minutes"
 */
export function formatDate(date: Date): string {
    const year = date.getFullYear();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${year}-${day}-${month} - ${hours}:${minutes}`;
}   