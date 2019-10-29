import App from '../App';
import {connect} from 'react-redux';
import {add, sub, addNum, res} from '../actions/actions';


// переносим State (или его часть) в props компонента
const mapStateToProps = state => ({
    counter: state.counter,
  })
  
  // добавляем функции (обработчики) в props компонента
  const mapDispatchToProps = {
    add,
    sub,
    addNum,
    res,
  }
  // function mapDispatchToProps(dispatch) {
  //   return {
  //     onAdd: () => dispatch(add()),
  //     onSub: () => dispatch(sub()),
  //     onPow: () => dispatch({type: 'POW'}), // action не вынесен в папку
  //     onRes: () => dispatch({type: 'RES'}), // action не вынесен в папку
  //     onAddNum: number => dispatch(addNum(number)),
  //   }
  // }
  
  // связываем компонент с Redux Store
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
