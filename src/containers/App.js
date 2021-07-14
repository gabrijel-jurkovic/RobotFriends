import React, {useState, useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'


function App() {
    const [robots, setRobots]= useState([])
    const [searchfield, setSearchfield]=useState('')
    //const [count,setCount]=useState(0)

    //runs after every time it renders
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                setRobots(users)
            })
    },[])//if array is empty it runs only on start, if we put something inside it is run everytime thatsomething changes, only run if count changes

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

    const filteredRobots = robots.filter(robots => {
        return robots.name.toLowerCase().startsWith(searchfield.toLowerCase());
    })
    if (!robots.length) {
        return <h1 className={'tc'}>Loading</h1>
    } else {
        return (
            <div className={'tc'}>
                <h1 className={'f1 light-blue'}>RobotFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }

}

export default App