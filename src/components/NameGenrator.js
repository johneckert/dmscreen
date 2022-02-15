import { useState, useEffect } from "react"
import { BASE_ID, API_KEY } from "../secrets.js"

const NameGenerator = () => {
    const [syllables, setSyllables] = useState([]);
    const [suffixes, setSuffixes] = useState([]);
    const [words, setWords] = useState([]);

    useEffect(
        //async fetch(`https://api.airtable.com/v0/${BASE_ID}/table/`)
    );


    return (
        <table>
            
        </table>
    )
}

export default NameGenerator;