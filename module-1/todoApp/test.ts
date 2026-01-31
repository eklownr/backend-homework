// test.ts
import { readJsonFile, writeJsonFile } from './fileIO';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

async function runTest() {
    const filePath = 'testDB.json';

    // Sample data to write
    const todos: Todo[] = [
        { id: 1, text: 'Learn TypeScript', completed: false },
        { id: 2, text: 'Write tests', completed: false },
    ];

      // Write to todoDB.json
      await writeJsonFile(filePath, todos);
      console.log('Data written to todoDB.json');
    
      // Read from todoDB.json
      const data = await readJsonFile<Todo[]>(filePath);
      console.log('Data read from todoDB.json:', data);
}

runTest().catch(console.error);   