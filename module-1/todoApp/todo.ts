import * as readline from 'readline';

/*******************************
 * @author eklownr
 * @version 1.0
 * @since 2023-01-30
 * @see https://github.com/eklownr
 * run: tsx todo.ts
/*******************************/


// ANSI escape-code 
const Color = {
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

console.log(Color.RED + "Red" + Color.RESET + "White" + Color.PURPLE + "Purble.");


// Color arrow function return colorized string
// use: console.log(color('red', 'This is red!'));
type ColorCode = 'red' | 'green' | 'orange' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'purple' | 'reset';
const color = (colorCode: ColorCode, value: string): string => {
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


// Use: formatDate(new Date())); Get: => '2026-30-01 - 12:34'
function formatDate(date: Date): string {
    const year = date.getFullYear();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${year}-${day}-${month} - ${hours}:${minutes}`;
}   

// create type TodoPost
type TodoPost = {
    id?: number;
    todo: string;
    date: string; 
    done?: string;
};   

// create emty list[], to save data, of type TodoPost 
const todoStorage: TodoPost[] = [];
var ID = 0; // Global id


//*******************************
// Add new post to storage
const add = (post: TodoPost): void => {
    if (post) {
        if (!post.id) {
            post.id = ++ID; // pre-increment to avoid duplicate
        } else {
            ID = Math.max(ID, post.id); // make sure ID is the highest
        }
        post.done = "TODO";
        todoStorage.push(post);
        console.log("Post added", post.id, post.todo, post.date);
    } else {
        console.log("Post is empty");
    }
};   


//*******************************
// interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true,
});

rl.on('close', () => {
    console.log(color("green",'== Closing TODO App! =='));
    process.exit(0);
});   


//*******************************
// Ask to add new todo post
function askToAddNewPost(): void {
    console.log(Color.YELLOW + "*******************************");
    
    rl.question("*** Add todo "+Color.RESET+"(or 'q' to quit): ", (input: string) => {
        const trimmed = input.trim();
        if (trimmed.toLowerCase() === "q") {
            console.log(color("magenta", "Go back to main"));
            message();
            main(); // run main again
            return;
        }
        if (trimmed) {
            const newPost: TodoPost = {
            todo: trimmed,
            date: formatDate(new Date()),
        };
        add(newPost);
        } else {
            console.log("Empty input, try again.");
        }
        askToAddNewPost(); // ask again, recursive call instead of loop.
  });
};


//*******************************
// Welcome message
function message() {
    console.log(color("cyan", "************************************'"));
    console.log(color("green", "== Welcome to ToDo App! =="));
    console.log("q - quit");
    console.log("a - add new post");
    console.log("l - list all post as a table");
    console.log("d - delete post");
    console.log("c - clear screen");
    console.log("m - show welcome message");
    console.log(color("cyan", "************************************'"));
}


//*******************************
// list all todo-post
function listAll(): void {
    console.table(todoStorage);
    main(); // run main again
}

 
//*******************************
// ==> TODO delete by ID <==
function delPostByID(id: number): void {
    if (id >= 0 && id < todoStorage.length) {
        todoStorage.splice(id, 1);
        console.log("Post deleted");
    } else {
        console.log("Invalid ID, try again.");
        deletePost(); // ask again with ID to remove
    }
}



//*******************************
// Ask witch post to delete
function deletePost() {
    console.log(color("red", "*******************************"));
    rl.question(color("orange", "==> Delete by ID number: ") + "( or 'q' to quit): ", (input: string) => {
    const trimmed = input.trim().toLowerCase();
        if (trimmed === "q") {
            console.log(color("magenta", "Go back to main"));
            message();
            main(); // run main again
            return;
        }
        if (trimmed) {
            const id = parseInt(trimmed);
            if (id >= 0 && id < todoStorage.length) {
                todoStorage.splice(id, 1);
                console.log(color("red","Post deleted"));
            } else {
                console.log("Invalid ID, try again.");
            }
        } else {
            console.log("Empty input, try again.");
        }
        listAll();
        //deletePost(); // run again, stop with 'q'
    })
}


//*******************************
// main function takes care of user input
//*******************************
function main() {    
    rl.question(color("blue", "==> ") +"What do you want to do? ", (input: string) => {
        const trimmed = input.trim().toLowerCase();
        if (trimmed === "q") {
            console.log(color("magenta","Bye ..."));
            rl.close();
            return;
        }
        else if (trimmed === "a") {
            askToAddNewPost();   
        }
        else if (trimmed === "l") {
            listAll();   
        }
        else if (trimmed === "m") {
            message();   
            main();
        }
        else if (trimmed === "c") {
            console.clear();
            message();   
            main();
        }
        else if (trimmed === "d") {
            deletePost();   
        }else {
            console.log(color("orange","Empty input, try again."));
            main()
        }

    });
   //main(); // run until 'q', or let other func run me again?
}

// welcome message
message();

// runing main function
main();
