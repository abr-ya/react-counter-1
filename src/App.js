import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.scss';

class App extends Component {

  render() {
    //console.log('APP', this.props);
    return (
      <div className={'App'}>
        <h1>Управляем числом: {this.props.counter}</h1>

        <hr/>

        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
          <button onClick={this.props.onPow}>Возвести в степень</button>
          <button onClick={this.props.onRes}>Сбросить</button>
          <button onClick={() => this.props.onAddNum(10)}>Добавить число 10</button> {// вызываем используя замыкание
          }
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
    onAddNum: number => dispatch({type: 'ADD_NUM', payload: number}),
  }
}

// связываем компонент с Redux Store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
