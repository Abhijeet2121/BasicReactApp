import logo from './logo.svg'
import './App.css';


function Navbar(props){
    return (
    <nav
         className={props.darkMode ? "dark" : ""}>

        <img 
            src={logo} 
            className='App-logo' alt='logo' 
        />
        <h1 className ="nav--logo_text">React Facts</h1>
        
        <div className="toggler"
        >
            <p className="toggler--light">Light</p>
            <div
                className="toggler--slider"
                onClick={props.toggleDarkMode}
            >
                <div className="toggler--slider--circle"></div>
            </div>
            <p className="toggler--dark">Dark</p>
        </div>
    </nav>        
    )
}

export default Navbar;