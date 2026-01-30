import * as readline from 'readline';

/*******************************
 * @author eklownr
 * @version 1.0
 * @since 2023-01-30
 * @see https://github.com/eklownr
 * run: tsx todo.ts
/*******************************/


type ColorCode = 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'reset';
// use: console.log(color('red', 'Detta är rätt!'));
const color = (colorCode: ColorCode, value: string): string => {
  const colors: { [key: string]: string } = {
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    orange: '\x1b[38;5;166m', // use 256-color for orange
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
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
};   

// create emty list[], to save data, of type TodoPost 
const todoStorage: TodoPost[] = [];
var ID = 0;


//*******************************
// Add new post to storage
const add = (post: TodoPost): void => {
    if (post) {
        if (!post.id) {
            post.id = ++ID; // Använd pre-increment för att undvika dubbel-ID
        } else {
            ID = Math.max(ID, post.id); // Se till att ID är högst det högsta existerande
        }
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
  console.log('Closing TODO App.');
  process.exit(0);
});   


//*******************************
// Ask to add new todo post
function askToAddNewPost(): void {
  rl.question("*** Add todo (or 'q' to quit): ", (input: string) => {
    const trimmed = input.trim();
    if (trimmed.toLowerCase() === "q") {
      console.log("Go back to main");
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
      console.log("empty input, try again.");
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
// ask witch post to delete
function deletePost() {
    console.log(color("red", "*******************************"));
    rl.question(" ==> Delete by ID number: (or 'q' to quit): ", (input: string) => {
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
                console.log("Post deleted");
            } else {
                console.log("Invalid ID, try again.");
            }
        } else {
            console.log("Empty input, try again.");
        }
        deletePost(); // run again, stop with 'q'
    })
}


//*******************************
// main function takes care of user input
//*******************************
function main() {    
    rl.question("What do you want to do? ('q' to quit): ", (input: string) => {
        const trimmed = input.trim().toLowerCase();
        if (trimmed === "q") {
            console.log("Bye ...");
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
            console.log("empty input, try again.");
            main()
        }

    });
   //main(); // run until 'q', or let other func run me again?
}

// welcome message
message();

// runing main function
main();



/*

// TEST to add new post
const newPost: TodoPost = {
    todo: "Buy groceries",
    date: formatDate(new Date()),
};
const newPost2: TodoPost = {
    todo: "Buy some stuff...",
    date: formatDate(new Date()),
};

add(newPost);
add(newPost2);

*/