function MainContent() {
    return (
        <h1>I'm learning React</h1>
    )
}

function Navbar() {
    return (
        <h2>I'm learning React too</h2>
    )
}

ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
    </div>,
    document.getElementById("root")
)