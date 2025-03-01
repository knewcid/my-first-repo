import {Routes, Route, Link} from 'react-router-dom';
import Homepage from './Homepage';
import Projects from './Projects';

const Header = (props) => {
    return (
        <header className="App-header">
            <img src={props.logo} className="App-logo" alt="logo" />
            <nav className='nav'>
                <Link to='/about-me' className='nav-item'>Pleasure</Link>
                <Link to='/projects' className='nav-item'>Pain</Link>
            </nav>
            <Routes>
                <Route path='/about-me' element={<Homepage />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
      </header>
    )
}

export { Header };