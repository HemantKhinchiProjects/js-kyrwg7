# js-Callback

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-kyrwg7)

\*\*\*\* Using promises we can stop callBack Hell

_/1# catch only one time define in Promises chaining/_

![image](https://user-images.githubusercontent.com/99024438/207840180-f0c89888-72cb-4f9c-bd88-79a5f927cab9.png)

# the Fetch API (morden way to featch API)

//in the fetch API we just need to call to function
//Note\*: fetch API promices only got reject. when we got network error.
// we not got deta directly. for get data we need to add json() method

_/2# /Note: there are three stapes:_/
A. we fetch the Data
B. then we take the response and return the response.json that return a promis and in another then we accutuly get the data
C. we also catch the error at the end

1. for Resolve = .then(()=>{})
2. for reject = .catch(()=>{})
3. ![image](<https://github.com/HemantTrellance/js-kyrwg7/blob/main/assets/Js%20(forked)%20-%20StackBlitz%20(1).png?raw=true>)

_/3# Note: async & await:_/
we can convert a simple function in to async function just place async befor write () of function. and whenevr we call async function it return a promise.
we can not access the data directly because it just return promis.
