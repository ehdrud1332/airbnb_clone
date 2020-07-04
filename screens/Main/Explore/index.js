import ExploreContainer from "./ExploreContainer";
import {connect} from 'react-redux';
import roomsSlice, {getRooms} from '../../../redux/roomsSlice';

function mapDispatchToProps(dispatch) {
    return{
        getRooms: () => dispatch(getRooms())
    };
}

function mapStateToProps(state) {
    return state.roomsSlice.explore
}

export default connect(mapStateToProps, mapDispatchToProps)(ExploreContainer);

