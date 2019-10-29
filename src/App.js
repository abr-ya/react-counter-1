import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.scss';

class App extends Component {

  render() {
    //console.log('APP', this.props);
    return (
      <div className={'App'}>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
          <button onClick={this.props.onPow}>Возвести в степень</button>
          <button onClick={this.props.onRes}>Сбросить</button>
        </div>
      </div>
    )
  }
}

// переносим State (или его часть) в props компонента
function mapStateToProps(state) {
  return {
    counter: state.counter,
  }
}

// добавляем функции (обработчики) в props компонента
function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch({type: 'ADD'}),
    onSub: () => dispatch({type: 'SUB'}),
    onPow: () => dispatch({type: 'POW'}),
    onRes: () => dispatch({type: 'RES'}),
  }
}

// связываем компонент с Redux Store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
