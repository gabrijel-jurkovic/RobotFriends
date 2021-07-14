import React from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'

//PART 16
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json()
            })
            .then(users => {
                this.setState({robots: users})
            });
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render() {
        const {robots,searchfield}=this.state;
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().startsWith(searchfield.toLowerCase());
        })
        if (!robots.length) {
            return <h1 className={'tc'}>Loading</h1>
        } else {
            return (
                <div className={'tc'}>
                    <h1 className={'f1 light-blue'}>RobotFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App