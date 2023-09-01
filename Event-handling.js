/**********************Events Handling in js*********************

Event=>The change in the state of an object is known as an Event. In html, there are various events which represents that some activity is performed by the user or by the browser. When javascript code is included in HTML, js react over these events and allow the execution. This process of reacting over the events is called Event Handling. Thus, js handles the HTML events via Event Handlers.

For example, when a user clicks over the browser, add js code, which will execute the task to be performed on the event.

An event handler is also known as an event listener. It listens to the event and executes when the event occurs.

example=>
            <div>
                <button id="btn">click me</button>
            </div>
            

            let btn=document.querySelector('#btn');

            btn.addEventListener("click",()=>{  //clicked display
                    alert("clicked");
            })


            When you click the button, you’re clicking not only the button but also the button’s container, the div, and the whole webpage.

            There are two main event models: event bubbling and event capturing.

1)Event bubbling=>

n the event bubbling model, an event starts at the most specific element and then flows upward toward the least specific element (the document or even window).

button=>div with the id container =>body=> html => document

The click event first occurs on the button which is the element that was clicked. Then the click event goes up the DOM tree, firing on each node along its way until it reaches the document object.

2)Event capturing=>

In the event capturing model, an event starts at the least specific element and flows downward toward the most specific element.
When you click the button, the click event occurs in the following order:
    document=>html=>body=>div with the id container=>button

3) HTML event handler attributes=>

To assign an event handler to an event associated with an HTML element, you can use an HTML attribute with the name of the event handler. For example, to execute some code when a button is clicked, you use the following:
<script>
function showAlert() {
    alert('Clicked!');
}
</script>
<input type="button" value="Save" onclick="showAlert()">


4)DOM Level 2 event handlers

DOM Level 2 Event Handlers provide two main methods for dealing with the registering/deregistering event listeners:

    addEventListener()      //register an event handler
    removeEventListener()  //remove an event handler

    let btn=document.querySelector("#btn");
    btn.addEventListner("click",()=>{
            alert("clicked");
    });

    its possible to add multiple event listener on single event

remove eventlistner=>
            let btn = document.querySelector('#btn');

            // add the event listener
            let showAlert = function() {
                alert('Clicked!');
            };
            btn.addEventListener('click', showAlert);

            // remove the event listener
            btn.removeEventListener('click', showAlert);

There are 3 ways to assign event handlers:=>

    1)HTML attribute: onclick="...".
    2)DOM property: elem.onclick = function.
    3)Methods: elem.addEventListener(event, handler[, phase]) to add, removeEventListener to remove.

HTML attributes are used sparingly, because JavaScript in the middle of an HTML tag looks a little bit odd and alien. Also can’t write lots of code in there.

DOM properties are ok to use, but we can’t assign more than one handler of the particular event. In many cases that limitation is not pressing.

The last way is the most flexible, but it is also the longest to write. There are few events that only work with it

1)Event Bubbling=>
            When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

example=>   <style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>

The form element is at the top of the DOM tree and therefore it will receive all events that occur within itself or any descendants (including nested

Stopping bubbling=>

A bubbling event goes from the target element straight up. Normally it goes upwards till <html>, and then to document object, and some events even reach window, calling all handlers on the path.

But any handler may decide that the event has been fully processed and stop the bubbling.

The method for it is event.stopPropagation().

        <form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="event.stopPropegation()">P</p>
  </div>
</form>
    
Event Capturing=>
        Event capturing is opposite to the event bubbling. In event capturing the flow goes from outermost element to the target element. Whereas in case of event bubbling the flow goes from target element to the outermost element.

        addEventListener(type, listener, useCapture)

        userCapture − it is a Boolean value. It indicates the event phase. It will be false Bydefault and that indicates it is in the bubbling phass

example=>
           <body>
            <div id="div">
                <button id="btn">click</button>
            </div>
    <script>
     var div=document.querySelector("#div");
     var btn=document.querySelector("#btn");

     div.addEventListener("click",()=>{
            console.log("div");
     },true);

     btn.addEventListener("click",()=>{
            console.log("butten");
     },true);

</script>

Event Deligation=>

    Having a large number of event handlers will take up memory and degrade the performance of a page.
    Instead of having multiple event handlers, you can assign a single event handler to handle all the click events:
    The event delegation technique utilizes the event bubbling to handle event at a higher level in the DOM than the element on which the event originated.

Example=>
        <ul id="menu">
    <li><a id="home">home</a></li>
    <li><a id="dashboard">Dashboard</a></li>
    <li><a id="report">report</a></li>
</ul>

let menu = document.querySelector('#menu');

menu.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'home':
            console.log('Home menu item was clicked');
            break;
        case 'dashboard':
            console.log('Dashboard menu item was clicked');
            break;
        case 'report':
            console.log('Report menu item was clicked');
            break;
    }
});

*/
            

