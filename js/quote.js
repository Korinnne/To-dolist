const quotes = [
    {
        quote: "'너의 잘못이 아니야.'",
        author:"영화 굿 윌 헌팅 中",
    },
    {
        quote :"'옳은 일을 하는 것이 결코 잘못은 아니다.'",
        author:"영화 인턴 中",

    },

    {
        quote :"'큰 힘에는 큰 책임이 따른다.'",
        author:"영화 스파이더맨 中",

    }



];
const imageselection = document.getElementById("imageselection");
const image=["css/3.jpeg","css/1.jpeg","css/22.gif" ];
  const quote = document.querySelector("#quote div:first-child");
  const author = document.querySelector("#quote span:last-child");
  const number = Math.floor(Math.random() * quotes.length);
  const todaysQuote = quotes[number];
 
  if(number === 1){
    imageselection.src = image[1];
  
  }
  
  else if(number === 0){
    imageselection.src = image[0];
    
  }
  
  else{
      imageselection.src = image[2];
  }
  
  
  
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;