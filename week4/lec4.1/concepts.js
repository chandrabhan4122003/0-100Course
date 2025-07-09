// debouncing and throtlling
// if there is Onclick on the input button it will send 6 requests to make it only one request goes

// Deboucing means 
// u dont send requests immediately 
// like take example it will send when user has not typed for 100ms then it will send the request to teh server 

// Throtlling means?
// Throttling is a technique used to control the rate at which a function is executed or a resource is accessed. It's often used to prevent excessive usage, reduce load, or improve performance. Throttling can be applied to various domains, such as:

// Rate limiting: Limiting the number of requests made to an API or a server within a certain time frame.
// Function execution: Limiting the frequency at which a function is called, to prevent excessive CPU usage or other resource-intensive operations.
// Event handling: Limiting the number of events handled within a certain time frame, to prevent overwhelming the system.
// In JavaScript, throttling is often used to optimize performance, especially when dealing with events that fire rapidly, such as mouse movements or scrolling. By throttling the event handling, you can prevent the browser from becoming unresponsive or consuming excessive CPU resources.

// Here's an example of a simple throttle function in JavaScript:

// javascript
// 13 lines
// Click to expand
// function throttle(func, wait) {
// let timeout;
// ...
// This function takes a function func and a wait time wait as arguments. It returns a new function that will only call func at most once every wait milliseconds.

// While JavaScript is a common use case for throttling, it's not the only one. Throttling can be applied to various programming languages and systems, including Python, Java, C++, and more.