// AI-CODE! fileIO.ts 
import { promises as fs } from 'fs';
import * as path from 'path';

/**
 * Reads a JSON file and returns its content as an object.
 * @param filePath - Path to the JSON file
 * @returns Parsed JSON data
 */
export async function readJsonFile<T = any>(filePath: string): Promise<T> {
  try {
    const data = await fs.readFile(path.resolve(filePath), 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error(`Error reading JSON file ${filePath}:`, err);
    throw err;
  }
}

/**
 * Writes data to a JSON file with formatted output.
 * @param filePath - Path to save the JSON file
 * @param data - Data to write
 */
export async function writeJsonFile(filePath: string, data: any): Promise<void> {
  try {
    const jsonString = JSON.stringify(data, null, 4);
    await fs.writeFile(filePath, jsonString, 'utf-8');
  } catch (err) {
    console.error(`Error writing JSON file ${filePath}:`, err);
    throw err;
  }
}   