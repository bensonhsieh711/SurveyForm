import React, { createContext } from 'react';

export const UserContext = createContext({
    interestOptions: [],
    purposeOptions: [],
    styleOptions: [],
    loactionOptions: [],
    isNeedHelp: 'yes',
    hopeThings: '',
    submitForm: () => { },
    updateOptions: () => { },
});

export class UserProvider extends React.Component {
    updateOptions = (event, option, type) => {
        event.preventDefault();
        //console.log(event, option, type);
        let array = [];
        switch (type) {
            case 'interest':
                array = this.state.interestOptions.map((interest) => {
                    if (interest.key === option.key) {
                        interest.value = !option.value;
                    }
                    return interest;
                });
                this.setState({ interestOptions: array });
                break;
            case 'purpose':
                array = this.state.purposeOptions.map((purpose) => {
                    if (purpose.key === option.key) {
                        purpose.value = !option.value;
                    }
                    return purpose;
                });
                this.setState({ purposeOptions: array });
                break;
            case 'location':
                array = this.state.loactionOptions.map((location) => {
                    if (location.key === option.key) {
                        location.value = !option.value;
                    }
                    return location;
                });
                this.setState({ loactionOptions: array });
                break;
            case 'style':
                array = this.state.styleOptions.map((style) => {
                    if (style.key === option.key) {
                        style.value = !option.value;
                    }
                    return style;
                });
                this.setState({ styleOptions: array });
                break;
            case 'help':
                //console.log(event.target.value, type);
                this.setState({ isNeedHelp: event.target.value });
                break;
            case 'hope':
                this.setState({ hopeThings: event.target.value });
                break;
            default:
                break;
        }
    }

    submitForm = event => {
        event.preventDefault();
        // console.log('submitForm', this.state.interestOptions,
        //     this.state.loactionOptions,
        //     this.state.styleOptions,
        //     this.state.purposeOptions,
        //     this.state.isNeedHelp,
        //     this.state.hopeThings
        // );
    };

    state = {
        interestOptions: [
            { key: '唱歌', value: false },
            { key: '健身', value: false },
            { key: '畫畫', value: false },
            { key: '旅遊', value: false },
            { key: '滑雪', value: false },
            { key: '飲酒', value: false },
        ],
        purposeOptions: [
            { key: '找室友', value: false },
            { key: '語言交換', value: false },
            { key: '分擔房租', value: false },
        ],
        loactionOptions: [
            { key: '中正區', value: false },
            { key: '大同區', value: false },
            { key: '中山區', value: false },
            { key: '松山區', value: false },
            { key: '大安區', value: false },
            { key: '萬華區', value: false },
            { key: '信義區', value: false },
            { key: '士林區', value: false },
            { key: '北投區', value: false },
            { key: '內湖區', value: false },
            { key: '南港區', value: false },
            { key: '文山區', value: false }
        ],
        styleOptions: [
            { key: '現代簡約', value: false },
            { key: '輕工業風', value: false },
            { key: '北歐風格', value: false },
            { key: '溫馨鄉村', value: false },
            { key: '傳統中式', value: false },
            { key: '木紋日式', value: false },
            { key: '一般公寓', value: false },
            { key: '分擔房租', value: false },
        ],
        isNeedHelp: 'yes',
        hopeThings: '',
        submitForm: this.submitForm,
        checkOption: this.checkOption,
        updateOptions: this.updateOptions,
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