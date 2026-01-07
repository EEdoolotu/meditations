const promise = document.getElementById("new-quote-btn")
const verse = document.getElementById("verse-text")
const verseRef = document.getElementById("verse-ref")
const commentary = document.getElementById("commentary-text")

let availableList = []
let masterList = []


async function extractVerse() {
    try {
        const response = await fetch("verses.json")
        let database = await response.json();
        masterList = [...database];

        const randomIndex = Math.floor(Math.random() * database.length)
        let pulledItemArray = masterList.splice(randomIndex,1)
        const selected = pulledItemArray[0]

        verse.innerText = `${selected.verse}`;
        verseRef.innerText = `${selected.reference}`;
        commentary.innerText = `${selected.commentary}`
        usedVerses.push(selected)

        if (masterList.length === 0) {
            masterList = usedVerses;
            usedVerses = [];
        }

    } catch (error) {
        console.error("Error loading the scripture database:", error);
        verse.innerText = "Check the console; the JSON file couldn't be reached.";


    }

}

promise.addEventListener("click", extractVerse)


extractVerse();