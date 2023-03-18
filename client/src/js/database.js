import { openDB } from 'idb';

// initializes the indexedDB
const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Updates the indexedDB database with text
export const putDb = async (content) => {
  console.log('Updating the database...');
  // creates a connection to database and the version of that database to be used
  const jateDB = await openDB('jate', 1);
  // creates a new "transaction" and specifies the database and permissions (can read and edit)
  const tx = jateDB.transaction('jate', 'readwrite');
  // opens the objectStore which allows us to make changes to database
  const store = tx.objectStore('jate');
  // uses .put to store content with associated id 
  const request = store.put({ id: 1, content: content });
  const result = await request;
  console.log('Database successfully updated!', result);
}

export const getDb = async () => {
  console.log('Retrieving data from the database...');
    // creates a connection to database and the version of that database to be used
  const jateDb = await openDB('jate', 1);
    // creates a new "transaction" and specifies the database and permissions (can only read not edit)
  const tx = jateDb.transaction('jate', 'readonly');
    // opens the objectStore which allows us to make changes to database
  const store = tx.objectStore('jate');
  // uses .get to get the most recently saved ver of the text 
  const request = store.get(1);
  const result = await request;
  console.log('Retrieved data from database!', result);
  return result.content;
}

initdb();
