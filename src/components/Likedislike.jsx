import {connect} from 'react-redux';
import { likeCount,dislikeCount } from '../store/action';

var Likedislike =(props)=>{

    // var liked =()=>{
    //     props.lik;
    // };
    // var disliked =()=>{
    //     props.dis;
    // };

    return (
        <div className='border border-2 m-2 p-2 border-warning'>
            <img onClick={props.lik} width='100px' src="https://thumbs.dreamstime.com/b/like-mouse-cursor-pressing-like-button-white-background-35442594.jpg" alt="" />
            <span className='display-4 text-primary'>{props.like}</span>
            <br />
            <img onClick={props.dis} width='100px' src="https://tuberanker.com/storage/images/data/why-do-people-dislike-videos.png" alt="" />
            <span className='display-4 text-danger'>{props.dislike}</span>
        </div>
    )
};

export default connect(
    function(state){return state.likedislike},
    function(dispatch){
        return {
            lik:()=>{dispatch(likeCount())},
            dis:()=>{dispatch(dislikeCount())}
        }
    })
    (Likedislike);