import React, { Component, PropTypes } from 'react';
import CommonTd from '../components/CommonTd';
import EditTd from '../components/EditTd';
import ImageTd from '../components/ImageTd';
import OperationTd from './OperationTd';

const propTypes = {
    data: PropTypes.object.isRequired,
}

class UserRow extends Component {
    render() {
        const { data } = this.props;
        return (
            <tr>
                <CommonTd value={ data.id } />
                <EditTd name="name" action="http://localhost:8000/user/ajax-edit" method="POST" type="" value={ data.name } data={{ id: data.id }} />
                <ImageTd value={ data.avatar } preview={ data.avatar } width="60" height="60" />
                <EditTd name="username" action="http://localhost:8000/user/ajax-edit" value={ data.username } data={{ id: data.id }} />
                <EditTd name="cellphone" action="http://localhost:8000/user/ajax-edit" value={ data.cellphone } data={{ id: data.id }} />
                <EditTd name="email" action="http://localhost:8000/user/ajax-edit" value={ data.email } data={{ id: data.id }} />
                <CommonTd value={ data.last_login_at } />
                <CommonTd value={ data.created_at } />
                <CommonTd value={ data.last_ip } />
                <OperationTd action="http://localhost:8000/user/ajax-edit" value={ data.status } data={{ id: data.id }} />
            </tr>
        )
    }
}

UserRow.propTypes = propTypes;

export default UserRow;
