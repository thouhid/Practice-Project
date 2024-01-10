import React, { Component } from 'react';
import Counters from './Counters';
import NavBar from './NavBar';
import FromTest from './FormTest';

class App extends Component {
    counterData = [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
        { id: 5, value: 0 }
    ];

    state = { 
        counters: this.counterData
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index].value++;
        this.setState({counters});
    }

    handleDelete = counterId => {
        const counters = this.state.counters.filter(counter => counter.id !== counterId);
        this.setState({counters});
    }

    handleReset = () => {
        const counters = this.counterData.map(counter => {
            counter.value = 0;
            return counter;
        });
        this.setState({counters});
    }

    render() { 
        return (
            <React.Fragment>
                <NavBar totalCount={this.state.counters.filter(counter => counter.value > 0).length}/>
                <main className='container'>
                    <Counters 
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                    />
                </main>
                <FromTest totalCount={this.state.counters.filter(counter => counter.value > 0).length}/>

            </React.Fragment>
            
        );
    }
}
 
export default App;