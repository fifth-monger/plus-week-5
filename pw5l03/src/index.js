let apiURL = "https://jsonplaceholder.typicode.com/comments";

function displayComments(response) {
  console.log(response.data);
  console.log(response.data[0].email);
}

axios.get(apiURL).then(displayComments);
