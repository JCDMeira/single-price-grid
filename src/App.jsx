import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="conteiner">
        <div className="content">
          <div className="field1">
            <h1>Join our community</h1>
            <h2>30-day, hassle-free money back guarantee</h2>
            <p>
              Gain access to our full library of tutorials along with expert
              code reviews. Perfect for any developers who are serious about
              honing their skills.
            </p>
          </div>

          <div className="field2">
            <h1>Monthly Subscription</h1>
            <p className="atention">
              <span>$29</span> per month
            </p>
            <p className="text">Full access for less than $1 a day</p>
            <button>Sign Up</button>
          </div>

          <div className="field3">
            <h1>Why Us</h1>
            <p>
              Tutorials by industry experts Peer & expert code review Coding
              exercises{' '}
              <span>
                Access to our GitHub repos Community forum Flashcard decks
              </span>
              <span>New videos every week</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
