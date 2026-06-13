const account_id = 13732;
const token = "Zs3vQtt1k7oBnQQp";

const base_url = `https://www.stands4.com/services/v2/quotes.php?uid=${account_id}&tokenid=${token}&format=json`;


const formTag = document.getElementById("formTag");
formTag.onsubmit = fetchQuotes;

const output = document.getElementById("output");

async function fetchQuotes(event) {
  event.preventDefault();

  const form = e.target;
  const searchType = form.elements.searchType.value;
  const searchQuery = form.elements.searchQuery.value;

  const data = {
    searchtype: searchType,
    query: searchQuery,
  };

  // URLSearchParams output: searchtype=AUTHOR&query=Albert+Einstein
  const dataString = new URLSearchParams(data);
  console.log(dataString);

  const response = await fetch(base_url + "&" + dataString);
  console.log(response);

  const result = await response.json();
  console.log(result);

  let quoteData;
  if (Array.isArray(result.result)){
    quoteData = result.result[0];
  } else {
    quoteData = result.result;
  }
  

  output.innerHTML = `
        <div>
           <h2>Quote: ${quoteData.quote}</h2>
           <p>Author: ${quoteData.author}</p>
        </div>
  `;
}

const quoteForm = document.getElementById("quote-form");
quoteForm.onsubmit = searchQuotes;

async function searchQuotes(e){
    e.preventDefault();
    const form = event.target;
    const isInspirationChecked = form.elements.inspiration.checked;
    const isMotivationChecked = form.elements.motivation.checked;
    const inspiration = form.elements.inspiration.value;
    const motivation = form.elements.motivation.value;

    let query = "";
    if(isInspirationChecked){
      query = inspiration;
    
    }

    if (isMotivationChecked) {
      query = motivation;
      
    }

  
    const data = {
      searchtype: "SEARCH",
      query: query,
    }
    const dataString = new URLSearchParams(data);
    try {
      const response = await fetch(base_url + "&" + dataString);
      const result = await response.json();
      console.log(result);
    } catch (error) {
        console.error("There was an error fetching quotes", error);
    }
}






//This checks whether the API returned an array (author/keyword search)
// or a plain object (random quote), and pulls the data correctly either way.
// const quote = Array.isArray(result.result) ? result.result[0] : result.result;

//    const dataReceived = await response.json();
//     console.log(dataReceived);

//     const quotes = dataReceived.result;
//     console.log(quotes);

//     let limitedQuotes = [];
//     if(quotes.length > 5){
//         limitedQuotes = quotes.slice(0, 5);

//     }

//    for(let i = 0; i < limitedQuotes.length; i++) {
//         output.innerHTML += `
//             <div>
//                 <h2>Quote: ${limitedQuotes[i].quote}</h2>
//                 <p>Author: ${limitedQuotes[i].author}</p>

//             </div>

//     `;
