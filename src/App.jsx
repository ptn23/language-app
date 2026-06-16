import { useState } from 'react'
import './App.css'

function App() {
  const cards = [
   {question: "Xin chúc mừng", answer: "Congratulations in Vietnamese", level:"easy"},
   {question: "偶然的", answer:"Suddenly in Chinese", level:"easy"},
   {question: "자바스크립트 몰랍니다",answer: "I don't know Javascript in Korean", level: "medium" },
   {question: "下个月我要去洛杉矶", answer:"Next month I will go to LA in Chinese", level: "hard"},
   {question: "Trời càng ngày càng nóng", answer:"The weather is getting hotter in Vietnamese", level: "medium"},
   {question: "난 잠들고 싶었지만 일이 아직 많다", answer: "I want to go to sleep but I'm so tired in Korean", level: "hard"}
  ]
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setisFlipped] = useState(false);

  function toggleAnswer(){
    setisFlipped(!isFlipped);
  }
  
  function nextCard() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    setCurrentIndex(randomIndex);
    setisFlipped(false);
  }

  function previousCard(){
    const randomIndex = Math.floor(Math.random() * cards.length);
      setCurrentIndex(randomIndex);
      setisFlipped(false);
  }

  return (
    <>
    <div style={{
      backgroundImage: `url("https://tse3.mm.bing.net/th/id/OIP.UNVSMaJI216Dc1WM4M0oDwHaE5?rs=1&pid=ImgDetMain&o=7&rm=3.png")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minheight: '100vh'
    }}>
    <div id="header">
        <h1>The Ultimate Language Test!</h1>
        <p>How good are you at identifying language? Can you decode both the language written and the meaning of the question?</p>
        <p>Number of cards: 6</p>
      </div>
    
      <div className="flashcard-section">
      
        <div className="flip-container">
          <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
            <button onClick={toggleAnswer} className="flip-card-front" id={cards[currentIndex].level}>
              {cards[currentIndex].question}
            </button>
            <button onClick={toggleAnswer} className="flip-card-back">
              {cards[currentIndex].answer}
            </button>
          </div>
        </div>

        <div className="navigation-buttons">
          <button onClick={previousCard}> 
            <img src="https://www.pngall.com/wp-content/uploads/12/Previous-Button-PNG-Free-Image.png" className="photo" alt="Previous"/>
          </button>
          <button onClick={nextCard}>
            <img src="https://tse1.mm.bing.net/th/id/OIP.BC_WDubX2PbMWCv47bpc6gAAAA?w=300&h=300&rs=1&pid=ImgDetMain&o=7&rm=3.png" className="photo" alt="Next"/>
          </button>
        </div>

      </div>
    </div>
    </>
  )
}

export default App
