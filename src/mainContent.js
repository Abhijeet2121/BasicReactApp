import './App.css';

function MainContent(props){
    return(
        <main className={props.darkMode ? "dark": ""}>
            <h1 className="main--title"> Fun facts about React</h1>
            <ul className="main--facts">
                <li>was first realeased in 2013</li>
                <li>was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thoussands of enterprises apps, including mobile apps</li>
            </ul>
        </main>
    )
}

export default MainContent;