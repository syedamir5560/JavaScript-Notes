/*

What is DOM ?
    
Document object model is an API for manipulating htlm document.DOM represent html document as a tree of nodes.DOM  provoide a function that allow you to add , remove ,  and modify part of the document effectivly

A document as a hierarchy of nodes=>

The DOM represents an HTML document as a hierarchy of nodes. Consider the following HTML document:

<html>
    <head>
        <title>JavaScript DOM</title>
    </head>
    <body>
        <p>Hello DOM!</p>
    </body>
</html>

In this DOM tree, the document is the root node. The root node has one child node which is the <html> element. The <html> element is called the document element.   

selecting Elements=>

1)  select element by id=>

    The document.getElementById() method returns an Element object that represents an HTML element with an id that matches a specified string.
    If the document has no element with the specified id, the document.getElementById() returns null.Because the id of an element is unique within an HTML document, the document.getElementById() is a quick way to access an element

    const element = document.getElementById(id);

example=>
            <html>
            <head>
                <title>JavaScript getElementById() Method</title>
            </head>
            <body>
                <p id="message">A paragraph</p>
            </body>
            </html>

        const p = document.getElementById('message');
        console.log(p);

        The document.getElementById() returns a DOM element specified by an id or null if no matching element found.
        If multiple elements have the same id, even though it is invalid, the getElementById() returns the first element it encounters.

2)select element by name=>
        Every element on an HTML document may have a name attribute:
        <input type="radio" name="language" value="JavaScript">  

        To get all elements with a specified name, you use the getElementsByName() method of the document object:
        let elements = document.getElementsByName(name);

                <!DOCTYPE html>
                <html>
                <body>

                <h1>The Document Object</h1>
                <h2>The document.getElementsByName Method</h2>

                Cats:
                <input name="animal" type="checkbox" value="Cats">
                Dogs:
                <input name="animal" type="checkbox" value="Dogs">

                <p>Number of elements with name="animal" is:</p>
                <p id="demo"></p>

                <script>
                let num = document.getElementsByName("animal").length;
                document.getElementById("demo").innerHTML = num;
                </script>
                </body>
                </html>

3)select element by tagName=>

The getElementsByTagName() method accepts a tag name and returns a live HTMLCollection of elements with the matching tag name in the order which they appear in the document.

The following illustrates the syntax of the getElementsByTagName():
let elements = document.getElementsByTagName(tagName);
            <body>
            <h1>JavaScript getElementsByTagName() Demo</h1>
            <h2>First heading</h2>
            <p>This is the first paragraph.</p>
            <h2>Second heading</h2>
            <p>This is the second paragraph.</p>
            <h2>Third heading</h2>
            <p>This is the third paragraph.</p>

            <button id="btnCount">Count H2</button>

            <script>
                    let btn = document.getElementById('btnCount');
            btn.addEventListener('click', () => {
                let headings = document.getElementsByTagName('h2');
                console.log(`The number of H2 tags: ${headings.length}`)
            });
        </script>
    </body>

getElementsByClassName()=>
    The getElementsByClassName() method returns an array-like of objects of the child elements with a specified class name
                    <body>
                        <div>
                            <header>
                                <ul id="menu">
                                        <li class="item">mango</li>
                                        <li class="item">apple</li>
                                        <li class="item">banana</li>
                                </ul>
                            </header>
                        </div>
                        <footer>
                            <p class="footer">example 1 </p>
                        </footer>
                        <script>
                // let menu = document.getElementById('menu');
                let items = document.getElementsByClassName('footer');
                let data = [].map.call(items, item => item.textContent);
                console.log(data);
                        </script>
                 </body>

CSS selector=>
The querySelector() finds the first element that matches a CSS selector or a group of CSS selectors.
    The querySelectorAll() finds all elements that match a CSS selector or a group of CSS selectors.
    A CSS selector defines elements to which a CSS rule applies.

    const heading = document.querySelector('h1');   //element selector
    const paragraph = document.querySelector('p');     
    const listItems = document.querySelectorAll('li'); 
    const box = document.querySelector('.box');       //class selector
    const button = document.querySelector('#myButton'); //id selector
    const input = document.querySelector('#myInput');
    const link = document.querySelector('a');



     Manipulating elements

     heading.textContent = 'Hello, Query Selector!';

    paragraph.style.color = 'blue';
    listItems.forEach((item, index) => {
      item.textContent = `Modified Item ${index + 1}`;
    });

     box.style.backgroundColor = 'yellow';
    button.addEventListener('click', () => {
      alert('Button Clicked!');
    });

    input.addEventListener('focus', () => {
      input.value = 'enter value';
    });

    link.setAttribute('target', '_blank');

    ******************************triversing element******************************

   1) Triversing element=>(parent node)

    To get the parent node of a specified node in the DOM tree, you use the parentNode property:

            let note = document.queryselector(".child");
                console.log(note.parentNode);

    2) next sibiling=>
              To get the next sibling of an element, you use the nextElementSibling attribute:
                let nextSibling = currentNode.nextElementSibling;

                let current=document.queryselector(".current");
                let next=current.nextElementSibling;
                console.log(next);

    3)chid node=>
            Get the first child element

            To get the first child element of a specified element, you use the firstChild property of the element:

            let firstChild = parentElement.firstElemtChild; 

            To get last child

            let lasthild=parentelement.lastElementChild;
    
*********************Manipulating elements*************************

1)Creating elements and appends elements=>

        To create an HTML element, you use the document.createElement() method:

        let element = document.createElement(htmlTag);

        example=>

                let div=document.createElement('div'); //create new element

                div.innerHtml='<p>new p</p>   //add child element

                document.body.appendsChild(div); //append it into body

                div.id="content";        // add id to Div

                let text=document.createTextNode("thi sis first paragarph"); //add text to div

                div.appendsChild(text);

                const menu = document.querySelector('#menu'); //create ui 
                    let li = document.createElement('li');
                    li.textContent = 'Products';

                    menu.appendChild(li);                   //add ui to element whose is is menu

2)The following example uses the appendChild() method to add three list items to the <ul> element:

            function createMenuItem(name) {
                let li = document.createElement('li');
                li.textContent = name;
                return li;
            }
            // get the ul#menu
            const menu = document.querySelector('#menu');
            // add menu item
            menu.appendChild(createMenuItem('Home'));
            menu.appendChild(createMenuItem('Services'));
            menu.appendChild(createMenuItem('About Us'));

3)create element vs innerHtml=>

    However, using the innerHTML causes the web browsers to reparse and recreate all DOM nodes inside the div element. Therefore, it is less efficient than creating a new element and appending to the div. In other words, creating a new element and appending it to the DOM tree provides better performance than the innerHTML.

4)before()=>
The element.before() method allows you to insert one or more nodes before the element. The following shows the syntax of the before() method:

            const p = document.querySelector('p');
            // create a new h1 element
            const h1 = document.createElement('h1');
            h1.innerText = 'JavaScript DOM - before()';
            // insert the h1 before the paragraph
            p.before(h1);

5)after()=>
The element.after() method allows you to insert one or more nodes after the element.
             const p = document.querySelector('p');
            // create a new h1 element
            const h1 = document.createElement('h1');
            h1.innerText = 'JavaScript DOM - after()';
            // insert the h1 before the paragraph
            p.after(h1);

6)replace child element=>
Use Node.replaceChild() to replace a child element of a node by a new element.
                let fisrt=document.querySelector("#first-list");
                let li=document.createElement("li");
                li.textContent="java";
                fisrt.replaceChild(li,fisrt.firstElementChild);

7)remove child element=>
To remove a child element of a node, you use the removeChild() method:
                let fisrt=document.querySelector("#first-list");
                fisrt.removeChild(fisrt.lastElementChild )

8)insert before first element child=>
To insert a node before another node as a child node of a parent node, you use the parentNode.insertBefore() method:
    parentNode.insertBefore(newNode, existingNode);

    let fisrt=document.querySelector("#first-list");
    let li=document.createElement("li");
    li.textContent="new";

   fisrt.insertBefore(li , fisrt.firstElementChild) 

9)insert after()=>
JavaScript DOM provides the insertBefore() method that allows you to insert a new node after an existing node as a child node.

    let fisrt=document.querySelector("#first-list");
    let li=document.createElement("li");
    li.textContent="last new";

   fisrt.insertAfter(li , fisrt.firstElementChild) 

*********************Managing Attributes************************

1)Introduction to the JavaScript setAttribute() method

To set a value of an attribute on a specified element, you use the setAttribute() method:
element.setAttribute(name, value);

let btn=document.querySelector("button");
btn.setAttribute('name' , 'send');

2)Introduction to the JavaScript getAttribute() method

    To get the value of an attribute on a specified element, you call the getAttribute() method of the element:

        let value = element.getAttribute(name);

        let link=document.querySelector("#google");
        if(link){
        let tar=link.getAttribute("target");
            console.log(tar);
        }

3)Introduction to JavaScript removeAttribute() method

        The removeAttribute() removes an attribute with a specified name from an element:

        element.removeAttribute(name);

        let link = document.querySelector('#js');
                if (link) {
                    link.removeAttribute('target');
                }

4)hasAttributes()=>
Use the hasAttribute() method to check if an element contains a specified attribute.
            let link=document.querySelector("#google");
            if(link){
            let tar=link.hasAttribute("target");
                console.log(tar);
            }

***************************Styling**********************
1)Setting inline styles

To set the inline style of an element, you use the style property of that element:

element.style
element.style.color = 'red';

To completely override the existing inline style, you set the cssText property of the style object. For example:

element.style.cssText = 'color:red;background-color:yellow';    

Or you can use the setAttribute() method:

element.setAttribute('style','color:red;background-color:yellow');

2)Introduction to the JavaScript className

The className is the property of an element that returns a space-separated list of CSS classes of the element as a string:

element.className
The following shows the classes of the ul element in the console window:

example=>let menu = document.querySelector('#menu');
console.log(menu.className);  //vertical main

you can add existing class name with new            
=>let menu = document.querySelector('#menu');
menu.className += ' new';
console.log(menu.className);

className returns a space-separated list of classes of an element as a string.

3)class list property:>
The classList is a read-only property of an element that returns a live collection of CSS classes:

const classes = element.classList;

let div = document.querySelector('#content');
for (let cssClass of div.classList) {
    console.log(cssClass);
}

2) Add one or more classes to the class list of an element=>(add())
        let div = document.querySelector('#content');
        div.classList.add('info','visible','block');

3)remove elements classes=>(remove())
        let div=document.queryselector("#id");
        div.classList.remove("block");

4)Replace a classof an element=>(replace())
    let div = document.querySelector('#content');
    div.classList.replace('info','warning');

5)check if element has specified property=>(contains())
        let div = document.querySelector('#content');
        div.classList.contains('warning'); // true

    */

















    
    


