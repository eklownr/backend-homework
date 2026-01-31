

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