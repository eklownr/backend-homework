// setup interface
interface Contact {
    id: number;
    name: string;
    email?: string;
    phone?: string;
    tags?: string[];
}
// create empty contacts array
let contacts: Contact[] = [];


// add new contact. check email, phone and tags
function addContact(contact: Contact) {
    if (!contact.email) {contact.email = "no email"}
    if (!contact.phone) {contact.phone = "no phone"}
    if (!contact.tags) {contact.tags = ["no tags"]}
    contacts.push(contact);
    console.log(`${contact.name} added to contacts`);
}


// list all contacts
function listContacts() {
    if (contacts && contacts.length > 0) {
        contacts.forEach(contact => {
            console.log(`${contact.id} ${contact.name} ${contact.email} ${contact.phone} ${contact.tags}`);
        });
    } else {
        console.log("No contacts to display.");
    }
}   


// find contacts by name and return them
function findByName(name: string): Contact[] {
    return contacts.filter(contact => contact.name === name);
} 


// count contacts and return counted number
function countContacts(nameToFind: string): number {
    const findResult = findByName(nameToFind);
    let couter: number = 0;
    findResult.forEach(contact => {
        couter++;
    });
    return couter;
}


// remove contact from contacts[] and print out message
function removeById(id: number): boolean {
    //const deleteContact = contacts.filter(contact => contact.id === id);
    //console.log(deleteContact);
    
    const index = contacts.findIndex(contact => contact.id === id);
    
    if (index === -1) { // no match
        console.log(`Contact id: ${id}, does not exist.`);
        return false;
    }
    contacts.splice(index, id-1);
    console.log(`Contact with id: ${id} is removed.`);
    return true;
}


function line() {
    console.log("--------------------------------------------------");
}

// main: setup contacts, and call functions
function main() {
    addContact({id: 1, name: "Anna",})
    addContact({id: 2, name: "Nils", email: "n@n.se", phone: "0700-00000",})
    addContact({id: 3, name: "peter", email: "peter@p.se",})
    addContact({id: 4, name: "Nils", email: "nils@n.se", phone: "0700-1234", tags: ["test", "1234", "testing"]})
    addContact({id: 5, name: "Bob", email: "bo@b.se", phone: "0700-00000", })

    line();
    listContacts();
    console.table(findByName("Nils"));
    console.log("How many Nils exist in contacts: ", countContacts("Nils"));
    line();
    removeById(2);
    line();
    listContacts();
}

main();