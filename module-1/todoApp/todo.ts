import * as readline from 'readline';
import {Color, color, formatDate} from './formatUtils'

/*******************************
 * @author eklownr
 * @version 1.0
 * @since 2023-01-30
 * @see https://github.com/eklownr
 * run: 'tsx todo.ts' (Install global: 'npm install -g tsx')
/*******************************/

// create type TodoPost
type TodoPost = {
    id?: number;
    todo: string;
    date: string; 
    done?: Done;
}; 

// enum for checking if task is done
enum Done {
  DONE = "completed",
  ACTIVE = "active",
}   

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
        post.done = Done.ACTIVE;
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
// event on close
rl.on('close', () => {
    console.log(color("green",'== Closing TODO App! =='));
    process.exit(0);
});   


//*******************************
// Ask to add new todo post
function askToAddNewPost(): void {
    console.log(Color.YELLOW + "*******************************");
    
    rl.question("*** Add todo "+Color.RESET+"(or 'q' to quit): ", (input: string) => {
        const answer = input.trim();
        if (answer.toLowerCase() === "q") {
            console.log(color("magenta", "Go back to main"));
            message();
            main(); // run main again
            return;
        }
        if (answer) {
            const newPost: TodoPost = {
            todo: answer,
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
    console.log("s - set post as done/active");
    console.log("m - menu message");
    console.log(color("cyan", "************************************'"));
}


//*******************************
// list all todo-post
function listAll(): void {
    console.table(todoStorage);
    main(); // run main again
}

 
//*******************************
// Remove post by ID 
const removePostById = (id: number): void => {
    const index = todoStorage.findIndex(post => post.id === id);
    if (index !== -1) {
        todoStorage.splice(index, 1);
        console.log(Color.RED + `Post with id ${id} has been removed.` + Color.RESET);
    } else {
        console.log(Color.YELLOW + `No post found with id ${id}.` + Color.RESET);
    }
};   


//*******************************
// Mark post as done by ID 
const markAsDone = (id: number): void => {
    const post = todoStorage.find(p => p.id === id);
        if (post) { 
            if (post.done === Done.DONE) {
                post.done = Done.ACTIVE;
            } else { 
                post.done = Done.DONE;
            }; 
            console.log(Color.GREEN + `Post with id ${id} is ${post.done}!`+ Color.RESET);
        } else {
        console.log(Color.YELLOW + `No post found with id ${id}.` + Color.RESET);
        }
};   


//*******************************
// Ask to remove post
function askToRemovePost() {
    console.log(color("red", "*******************************"));
    rl.question(color("orange", "==> Delete by ID number: ") + "('q' to quit or 'delall'): ", (input: string) => {
    const trimmed = input.trim().toLowerCase();
        if (trimmed === "q") {
            console.log(color("magenta", "Go back to main"));
            message();
            main(); // run main again
            return;
        }
        if (trimmed === "delall") {
            todoStorage.splice(0, todoStorage.length);
            console.log(Color.RED + `All post/task has been removed.` + Color.RESET);
            listAll();
            return;
        }
        else if (trimmed) {
           const id = parseInt(trimmed);
           removePostById(id);
           listAll();
       }
    });
}


//*******************************
// Ask to set post as done
function askToSetAsDone() {
    console.log(color("blue", "*******************************"));
    rl.question(color("orange", "==> Set as done/active, by ID number: ") + "( or 'q' to quit): ", (input: string) => {
    const trimmed = input.trim().toLowerCase();
        if (trimmed === "q") {
            console.log(color("magenta", "Go back to main"));
            message();
            main(); // run main again
            return;
        }
        if (trimmed) {
            const id = parseInt(trimmed);
            markAsDone(id);
            listAll();
        }
    });
}


//*****************************************//
// main function takes care of user input  //
//*****************************************//
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
        else if (trimmed === "s") {
            askToSetAsDone();   
        }
        else if (trimmed === "c") {
            console.clear();
            message();   
            main();
        }
        else if (trimmed === "d") {
            askToRemovePost();   
        }else {
            console.log(color("orange","Empty input, try again."));
            main()
        }
    });
}

// welcome message
message();

// runing main function
main();
