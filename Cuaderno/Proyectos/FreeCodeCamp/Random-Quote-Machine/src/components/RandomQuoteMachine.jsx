//https://www.escuelafrontend.com/articulos/css-en-js-styled-components-en-react

import { useEffect, useState } from "react";
import "./RandomQuoteMachins.css";

var colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

// rsmoot0702@gmail.com 14.95 4462



export default () => {
  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState({ quote: "", author: "" });
  const body = document.querySelector("body");
  const btnSN = document.querySelector("a");
  const btnQuote = document.querySelector("#new-quote");
  
  useEffect(() => {
    if (loading) {
      fetch(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
        .then((response) => response.json())
        .then((allQuotes) => {
          let numQuote = Math.floor(Math.random() * allQuotes.quotes.length);
          setLoading(false);
          setQuote({
            quote: allQuotes.quotes[numQuote].quote,
            author: allQuotes.quotes[numQuote].author,
          });
          var random_color = colors[Math.floor(Math.random() * colors.length)];
          body.style.backgroundColor = random_color;
          body.style.color = random_color;
          // btnSN.style.backgroundColor = random_color;
          // btnQuote.style.backgroundColor = random_color;
          body.style.transition = "all 5s";
          // btnSN.style.transition = "all 5s";
          // btnQuote.style.transition = "all 5s";
          
        });
    }
  }, [loading]);

  const nextQuote = () => {
    setLoading(true);
  };
  return (
    <div id="wrapper">
      <div id="quote-box">
        <div className="quote-text">
          <i className="fa fa-quote-left"> </i>
          <span id="text">{quote.quote}</span>
        </div>
        <div className="quote-author">
          - <span id="author">{quote.author}</span>
        </div>
        <div className="buttons">
          <a
            className="button"
            id="tweet-quote"
            title="Tweet this quote!"
            target="_top"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            className="button"
            id="tumblr-quote"
            title="Post this quote on tumblr!"
            target="_blank"
          >
            <i className="fa fa-tumblr"></i>
          </a>
          <button onClick={nextQuote} className="button" id="new-quote">
            New quote
          </button>
        </div>
      </div>
      <div className="footer">
        by <a href="https://codepen.io/hezag/">hezag</a>
      </div>
    </div>
  );
};
