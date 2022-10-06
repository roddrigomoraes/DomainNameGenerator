/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  var domainGenerator = (pronoun, adj, noun) => {
    for (var i = 0; i < pronoun.length; i++) {
      console.log("the first loop");
      for (var j = 0; j < adj.length; j++) {
        console.log("the second loop");
        for (var r = 0; r < noun.length; r++) {
          console.log("the third loop");
          console.log(pronoun[i] + adj[j] + noun[r] + ".com");
        }
      }
    }
    console.log("Hello Rigo from the console!");
  };
  //this one is only to see see a different way to do the code
  function domainGenerator(pronoun, adj, noun) {
    let result;
    for (var i = 0; i < pronoun.length; i++) {
      for (var j = 0; j < adj.length; j++) {
        for (var r = 0; r < noun.length; r++) {
          return (result = pronoun[i] + adj[j] + noun[r] + ".com");
        }
      }
    }
  }
};
