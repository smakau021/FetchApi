# FetchApi
Accessing data from an API is one of the most common things you will do in web development, and the way to access APIs is with fetch. Fetch is function built into JavaScript that allows you to query any URL/API to get back data. The most important part is that fetch is asynchronous so it will run in the background and let you know when it finishes using promises. In this directory I will learn to exactly how to use fetch, and all of the common mistakes people make using fetch .



"Using the fetch API , we going to be hitting  to anywhere   eg https://www.google.com"
// fetch('https://www.google.com')


The way the fetch API works is you pass it the url as the forest property, 
Then it has a second property which is option -All different options you want to pass to it 
EG.. say you want to make a POST request you use the options fetch('url',{HERE}) 

console.log(fetch('https://www.google.com/')
    .then(res => console.log(res)))
We get a promise , so fetch is promised based which means that we can use async await or .venn ot .catch with it  
When i say .then , fetch will return a response object

What happens then ....?