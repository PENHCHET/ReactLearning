import { connect } from 'react-redux';
import User from '../components/User';
import fetchUsers from '../actions/users';

const mapStateToProps = (state) => ({
    data: state,
})

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => {
            dispatch(fetchUsers())
        }
    }
}

const UsersContainer = connect(
    mapStateToProps,    
    mapDispatchToProps,
)(User)

export default UsersContainer;