


// const url = `https://www.stands4.com/services/v2/quotes.php?uid=${account_id}&tokenid=${token}&format=json`



// const formTag = document.getElementById("formTag");
// formTag.onsubmit = fetchQuotes;

// const output = document.getElementById("output")



// async function fetchQuotes(event) {
//     event.preventDefault();

//     const form = event.target;
//     const searchType = form.elements.searchType.value;
//     const query = form.elements.searchQuery.value;

//     const data = {
//       searchtype: searchType,
//       query: query,
//     };

//     const dataString = new URLSearchParams(data)
//     console.log(dataString);

//     const response = await fetch(url + "&" + dataString);
//     console.log(response);
//     const result = await response.json();
//     console.log(result);
//     output.innerHTML = `
//         <div>
//             <h2>Quote: ${result.result[0].quote}</h2>
//             <p>Author: ${result.result[0].author}</p>
//         </div>
//     `
    


// }

const account_id = 13732;
const token = 'Zs3vQtt1k7oBnQQp';

const base_url = `https://www.stands4.com/services/v2/quotes.php?uid=${account_id}&tokenid=${token}&format=json`
//&searchtype=AUTHOR&query=Albert+Einstein

const formTag = document.getElementById("formTag");
formTag.onsubmit = fetchQuotes;

const output = document.getElementById("output");

async function fetchQuotes(event) {
    event.preventDefault();

    const form = event.target;
    const searchType = form.elements.searchType.value;
    const searchQuery = form.elements.searchQuery.value;

    const data = {
        searchtype: searchType,
        query: searchQuery
    }

    const dataString = new URLSearchParams(data);
    console.log(dataString);

    const response = await fetch(base_url + "&" + dataString);
    console.log(response);

    const result = await response.json();
    console.log(result);

    output.innerHTML = `
            <div>
                <h2>Quote: ${result.result[0].quote}</h2>
                <p>Author: ${result.result[0].author}</p>
            
            </div>
    
    `;



}