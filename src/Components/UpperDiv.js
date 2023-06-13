import React, { useState } from 'react';

function UpperDiv() {
  const [count, setCount] = useState('');
  const [totalchar, settotalchar] = useState(0);
  const [totalword, settotoalword] = useState(0);
  const [totalsentence, settotoalsentence] = useState(0);
  const [totalpronoun,settotoalpronoun] = useState(0);
  const [totalparagraph, settotalparagraph] = useState(0);
  const [long,setlongest] = useState("-");
  const pronouns = [
  "I", "you", "he", "she", "it",
  "we", "you", "they",
  "mine", "yours", "his", "hers", "its", 
  "ours", "yours", "theirs",
  "myself", "yourself", "himself", "herself", "itself",
  "ourselves", "yourselves", "themselves",
  "this", "that",
  "these", "those",
  "who", "whom", "whose", "which", "what",
  "all", "another", "any", "anybody", "anyone", "anything", "each", "everybody", "everyone", "everything",
  "few", "many", "nobody", "none", "nothing", "one", "several", "some", "somebody", "someone", "something",
  "both", "either", "neither",
  "who", "whom", "whose", "which", "that",
  "each other", "one another",
  "myself", "yourself", "himself", "herself", "itself", "ourselves", "yourselves", "themselves",  
  "they", "them", "their"
]


const handleKeyPress = (event) => {
  if (event.key === 'Enter') {
        settotalparagraph((prevCount) => prevCount + 1);
  }
  
}

  const handlechange = (event) => {
    let charcount = 0;
    let wordcount = 1;
    let sentencecount=1;
    let pronouncount = 0;
    let max_pronouncount=totalpronoun
    let sentencebool=false;

    
    const newstring = event.target.value;
    var newword = newstring.split(" ");
    var longestword = newstring.split(" ").sort(function(a, b) { return b.length - a.length; });
    setlongest(longestword[0])
    setCount(newstring);
        
    const paragraphs = newstring.split(/\n\s*\n/);
    const paragraphCount = paragraphs.length;
    settotalparagraph(paragraphCount);
    
    
    for(let i=0;i<newword.length;i++){
      if(pronouns.includes(newword[i])){
        pronouncount++;
      }
    }
    
    if(max_pronouncount<pronouncount){
      max_pronouncount=pronouncount;
    }
   
   

    for (let i = 0; i < newstring.length; i++) {

      if (newstring.charAt(i) !== ' ') charcount++;
      else wordcount++;
      

      if(sentencebool){
        sentencecount++;
        sentencebool=false;
      }

      if (newstring.charAt(i) === '.'){
        sentencebool=true;
        continue;
      }
      else continue;
    }

    settotalchar(charcount);
    settotoalword(wordcount);
    settotoalsentence(sentencecount);
    settotoalpronoun(max_pronouncount);
  };

  return (
    <div>
      <ul className='UpperDiv'>
        <ul>
          <li>Words</li>
          <li className='Innerlist'>{totalword}</li>
        </ul>
        <ul>
          <li>Characters</li>
          <li className='Innerlist'>{totalchar}</li>
        </ul>
        <ul>
          <li>Sentences</li>
          <li className='Innerlist'>{totalsentence}</li>
        </ul>
        <ul>
          <li>Paragraphs</li>
          <li className='Innerlist'>{totalparagraph}</li>
        </ul>
        <ul>
          <li>Pronouns</li>
          <li className='Innerlist'>{totalpronoun}</li>
        </ul>
      </ul>
      <textarea type="text" className='Inputdiv' placeholder='Paste your text here...' value={count} onChange={handlechange} onKeyDown={handleKeyPress}/>
      <div>
        <p className='lastdiv'>Longest Word - {long}  </p>
      </div>
    </div>
  );
}

export default UpperDiv;
