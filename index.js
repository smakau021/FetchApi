console.log("Heeey Let's play with fetch API")

"Using the fetch API , we going to be hitting my github https://github.com/smakau021"
// fetch('https://www.google.com/')
"The way the fetch API works is you pass it the url as the forest property, "
"Then it has a second property which is option -All different optsyou want to pass to it "
"EG.. say you want to make a POST requiest you use the options fetch('url',{HERE}) "


// console.log("To first see what I get returned ")
console.log(fetch('https://www.google.com')
    .then(res => console.log(res)))
    
" We get a promise , so fetch is promised based which means that we can use async await or .venn ot .catch with it  "
"When i say .then , fetch will return a response object"

"Lets logout the response object to see "
