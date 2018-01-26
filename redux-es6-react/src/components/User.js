import React from 'react';
import Button from './Button'
import UserItem from './UserItem'

class User extends React.Component {
    constructor(props) {
        super(props);
        // this.componentDidMount = this.componentDidMount.bind(this);
        // console.log(props);
    }

    // componentDidMount() {
    //     console.log(this.props);
    //     this.props.fetchUsers();
    // }
        
    render() {
        const {data, fetchUsers} = this.props
        console.log(data);
        return(
            <div className='container'>
                <Button 
                    onClick = {fetchUsers}
                    text =  {'Fetch Users'}
                    className={'btn btn-blue'}
                />
                <div id={'users'}>
                    {data.users.map((user, i) => {
                        return <UserItem
                            key={i}
                            user={user}
                        />
                    })}
                </div>
            </div>
        )
    }
}

export default User;