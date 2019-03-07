import React from 'react';
import ReactDOM from 'react-dom';
import DayView from './components/dayView/DayView'
import data from './exampleData.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: data.tasks
    }
    this.addTask = this.addTask.bind(this);
  };

  componentWillMount() {
    console.log('sample data', this.state.tasks);
  }

  addTask(task, dueDate = '') {
    let newTask = {
      task: task,
      due: dueDate,
      status: 'incomplete'
    };
    if (task) {
      console.log('Adding new task');
      this.setState(prevState => ({
        tasks: [newTask, ...prevState.tasks]
      }));
      console.log('Updated tasks', this.state.tasks);
    } else {
      console.log('Failed to add new task.')
    }
  }

  render() {
    return (
      <div>
        <DayView tasks={this.state.tasks} addTask={this.addTask}/>
      </div>
    )
  };
}

ReactDOM.render(<App />, document.getElementById("App"));