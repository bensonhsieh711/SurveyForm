import React, { createContext } from 'react';

export const UserContext = createContext({
    username: '',
    areaList: [],
    updateUsername: () => { },
    submitForm: () => { },
    updateArea: () => { },
    checkArea: () => { },
});

export class UserProvider extends React.Component {
    updateUsername = newUsername => {
        console.log(newUsername);
        this.setState({ username: newUsername });
    };

    checkArea = area => {
        //console.log('area', area);
        return this.state.areaList.indexOf(area) > -1;
    }

    updateArea = event => {
        event.preventDefault();
        let array = this.state.areaList;
        if (array.indexOf(event.target.value) === -1) {
            array.push(event.target.value);
        } else {
            array.pop(event.target.value);
        }
        this.setState({ areaList: array });
        //console.log('updateArea', this.state.areaList)
    }
    submitForm = event => {
        event.preventDefault();
        console.log('submitForm');
    };

    state = {
        areaList: [],
        username: 'user',
        updateUsername: this.updateUsername,
        submitForm: this.submitForm,
        updateLocation: this.updateLocation,
        updateArea: this.updateArea,
        checkArea: this.checkArea,
    };
    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export const UserConsumer = UserContext.Consumer;