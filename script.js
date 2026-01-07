const promise = document.getElementById("new-quote-btn")
const verse = document.getElementById("verse-text")
const verseRef = document.getElementById("verse-ref")
const commentary = document.getElementById("commentary-text")


async function extractVerse() {
    try {
        const response = await fetch("verses.json")
        const database = await response.json();

        const randomIndex = Math.floor(Math.random() * database.length)
        const selected = database[randomIndex]

        verse.innerText = `${selected.verse}`;
        verseRef.innerText = `${selected.reference}`;
        commentary.innerText = `${selected.commentary}`



    } catch (error) {
        console.error("Error loading the scripture database:", error);
        verse.innerText = "Check the console; the JSON file couldn't be reached.";


    }

}

promise.addEventListener("click", extractVerse)


extractVerse();