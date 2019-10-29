import App from '../App';
import {connect} from 'react-redux';
import {add, sub, addNum, res} from '../actions/actions';

const mapStateToProps = state => ({
    counter: state.counter,
})

const mapDispatchToProps = {
    add,
    sub,
    addNum,
    res,
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
