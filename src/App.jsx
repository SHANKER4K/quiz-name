import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { UserProvider } from "./components/UserContext";
import { Routes, Route } from "react-router-dom";
import Question from "./components/Question";
import Results from "./components/Results";
import UserForm from "./components/UserForm";
function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [userName, setUserName] = useState("");
  const [element, setElement] = useState("");
  const [artwork, setArtwork] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const questions = [
    {
      question: "What's your favorite color?",
      options: ["Red 🔴", "Blue 🔵", "Green 🟢", "Yellow 🟡"],
    },
  ];
  const keywords = {
    Fire: "fire",
    Water: "water",
    Earth: "earth",
    Air: "air",
  };
  const elements = {
    "Red 🔴": "Fire",
    "Blue 🔵": "Water",
    "Green 🟢": "Earth",
    "Yellow 🟡": "Air",
  };
  function handleAnswer(answer) {
    setAnswers([...answers, answer]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  function handleUserFormSubmit(name) {
    setUserName(name);
  }
  useEffect(() => {
    const fetchArtwork = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://collectionapi.metmuseum.org/public/collection/v1/objects/44"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch image");
        }

        const data = await response.json();
        setArtwork(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    if (currentQuestionIndex === questions.length) {
      const selectedElement = determineElement(answers);
      setElement(selectedElement);
      fetchArtwork(keywords[selectedElement]);
    }
  }, [currentQuestionIndex]);
  function determineElement(answers) {
    const counts = {};
    answers.forEach(function (answer) {
      const element = elements[answer];
      counts[element] = (counts[element] || 0) + 1;
    });
    return Object.keys(counts).reduce(function (a, b) {
      return counts[a] > counts[b] ? a : b;
    });
  }
  return (
    <UserProvider>
      <div className="">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<UserForm onSubmit={handleUserFormSubmit} />}
          />
          <Route
            path="/quiz"
            element={
              currentQuestionIndex < questions.length ? (
                <Question
                  question={questions[currentQuestionIndex].question}
                  options={questions[currentQuestionIndex].options}
                  onAnswer={handleAnswer}
                />
              ) : isLoading ? (
                <center> Is isLoading</center>
              ) : error ? (
                <center>Error fetching image</center>
              ) : (
                <Results element={element} artwork={artwork} />
              )
            }
          />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
