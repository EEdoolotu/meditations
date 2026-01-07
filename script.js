let availableList = []
let masterList = []

const promise = document.getElementById("new-quote-btn")
const verse = document.getElementById("verse-text")
const verseRef = document.getElementById("verse-ref")
const commentary = document.getElementById("commentary-text")



async function initialize() {
    try {
        const response = await fetch("verses.json")
        let database = await response.json();
        masterList = database;
        availableList = [...masterList]

        extractVerse()
    } catch(error) {
        console.error("Error loading JSON:", error)
        verse.innerText = "Error loading your verses. Check your JSON file.";

    }
}

async function extractVerse() {
    try {
        if (availableList.length === 0) {
            availableList = [...masterList]  
        }
        const randomIndex = Math.floor(Math.random() * availableList.length)
        const selected = availableList.splice(randomIndex, 1)[0]

        verse.innerText = `${selected.verse}`;
        verseRef.innerText = `${selected.reference}`;
        commentary.innerText = `${selected.commentary}`
    } catch (error) {
        console.error("Error loading the scripture database:", error);
        verse.innerText = "Check the console; the JSON file couldn't be reached.";

    }

}

promise.addEventListener("click", extractVerse)


initialize();