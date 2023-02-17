import {connect} from 'react-redux';
import { incCounter,decCounter,resCounter } from '../store/action';

var Counter =(props)=>{
    //console.log(props)
    
    return (
        <div className='border border-2 m-2 p-2 border-danger'>
            <h1>counter:{props.count}</h1>
            <button onClick={props.inc}>incement</button> &nbsp;&nbsp;
            <button onClick={props.dec}>decrement</button> &nbsp;&nbsp;
            <button onClick={props.res}>reset</button>
        </div>
    )
}
function mapStateToProps(state){return state.counter};
function mapDispatchToProps(dispatch){return {
    inc:()=>{dispatch(incCounter())},
    dec:()=>{dispatch(decCounter())},
    res:()=>{dispatch(resCounter())}
}};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);