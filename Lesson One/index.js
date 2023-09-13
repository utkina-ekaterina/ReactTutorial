
/*
 
const h1 = document.createElement("h1")
h1.textContent = "Hello World"
h1.className = "header"

const element = <h1 className="header">This is JSX</h1>

*/

// JSX

/*
ReactDOM.render(
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
    ,
    document.getElementById("root"))
*/

/*
const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)

ReactDOM.render(page, document.getElementById("root"))

*/

const navbar = (
    <nav>
        <h1>Days of the week</h1>
        <ul>
            <li>Monday</li>
            <li>Tuesday</li>
            <li>Wednesday</li>
            <li>Thursday</li>
            <li>Friday</li>
            <li>Saturday</li>
            <li>Sunday</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("root"))
