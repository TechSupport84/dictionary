import { useEffect, useState } from "react";
import SearchWord from "../components/SearchWord";
import { BiBookBookmark, BiFilterAlt, BiVolumeFull, BiBookmarkPlus, BiBookmarkMinus } from "react-icons/bi";
import axios from "axios";
import GoogleAd from "../components/GoogleAd";

interface License {
  name: string;
  url: string;
}

interface Phonetic {
  text?: string;
  audio?: string;
  sourceUrl?: string;
  license?: License;
}

interface Definition {
  definition: string;
  example?: string;
  synonyms?: string[];
  antonyms?: string[];
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
}

interface WordData {
  word: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license?: License;
  sourceUrls?: string[];
}

function Home() {
  const [word, setWord] = useState<string>("");
  const [wordData, setWordData] = useState<WordData | null>(null);
  const [error, setError] = useState<string>("");
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  useEffect(() => {
    const storedBookmarks = localStorage.getItem("bookmarks");
    if (storedBookmarks) {
      setBookmarks(JSON.parse(storedBookmarks));
    }
  }, []);

  useEffect(() => {
    if (!word.trim()) return;

    const fetchWordDefinition = async () => {
      try {
        const response = await axios.get<WordData[]>(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        setWordData(response.data[0]);
        setError("");
      } catch (err) {
        setWordData(null);
        console.log(err)
        setError("Word not found. Please try another word.");
      }
    };

    fetchWordDefinition();
  }, [word]);

  // Add or Remove Bookmarks
  const toggleBookmark = () => {
    const updatedBookmarks = bookmarks.includes(word)
      ? bookmarks.filter((w) => w !== word)
      : [...bookmarks, word];

    setBookmarks(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };



  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-center mt-2 text-3xl text-gray-400 font-bold">
        Dictionary
      </h2>

      {/* Search Input */}
      <div className="flex flex-row items-center justify-center mt-10">
        <SearchWord value={word} onChange={(e) => setWord(e.target.value)} />
      </div>

      {/* Icons */}
      <div className="flex flex-row items-center justify-between mt-6">
        <BiFilterAlt size={30} className="text-orange-800 cursor-pointer" />
        <BiBookBookmark size={50} className="text-green-500 cursor-pointer" />
      </div>

      {/* Display Word Definition */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : wordData ? (
          <>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">{wordData.word}</h3>
              <button onClick={toggleBookmark} className="text-blue-600 hover:text-blue-800">
                {bookmarks.includes(word) ? <BiBookmarkMinus size={24} /> : <BiBookmarkPlus size={24} />}
              </button>
            </div>

            {/* Phonetics & Audio */}
            {wordData.phonetics.length > 0 && (
              <div className="mt-2">
                {wordData.phonetics.map((phonetic, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {phonetic.text && (
                      <p className="text-gray-500 italic text-gray-800">{phonetic.text}</p>
                    )}
                    {phonetic.audio && (
                      <button
                        onClick={() => new Audio(phonetic.audio!).play()}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <BiVolumeFull size={24} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Definitions */}
            <h4 className="mt-2 font-semibold text-gray-800">Definitions:</h4>
            <ul className="list-disc ml-5">
              {wordData.meanings.map((meaning, idx) => (
                <li key={idx} className="text-gray-200">
                  <strong>{meaning.partOfSpeech}</strong>: {meaning.definitions[0].definition}
                  {meaning.definitions[0].example && (
                    <p className="text-sm text-gray-300">Example: {meaning.definitions[0].example}</p>
                  )}
                </li>
              ))}
            </ul>

            {/* Source & License */}
            {wordData.sourceUrls && wordData.sourceUrls.length > 0 && (
              <p className="mt-4 text-sm text-gray-400">
                Source: <a href={wordData.sourceUrls[0]} className="text-blue-600 underline">{wordData.sourceUrls[0]}</a>
              </p>
            )}
            {wordData.license && (
              <p className="text-sm text-gray-400">
                License: <a href={wordData.license.url} className="text-blue-600 underline">{wordData.license.name}</a>
              </p>
            )}
          </>
        ) : (
    
          <p className="text-gray-300">Get all word definitions here.</p>
        )}
      </div>

      {bookmarks.length > 0 && (
        <div className="mt-6 p-4 bg-gray-200 rounded-lg">
          <h4 className="text-lg text-gray-800 font-semibold">Bookmarked Words:</h4>
          <ul className="list-disc ml-5">
            {bookmarks.map((word, index) => (
              <li key={index} className="text-blue-600 cursor-pointer hover:underline" onClick={() => setWord(word)}>
                {word}
              </li>
            ))}
          </ul>
        </div>
      )}

      <GoogleAd dataAdSlot="7791776402"/>
    </div>
  );
}

export default Home;
