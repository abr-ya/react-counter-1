import App from '../App';
import {connect} from 'react-redux';
import {add, sub, pow, res, addNum} from '../actions/actions';

// переносим State (или его часть) в props компонента
const mapStateToProps = state => ({
  counter: state.counter,
})
  
// добавляем функции - создатели экшенов в props компонента
const mapDispatchToProps = {
  add,
  sub,
  pow,
  res,
  addNum,
}

// связываем компонент с Redux Store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
