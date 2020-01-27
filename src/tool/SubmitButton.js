import React from 'react';
import Button from '@material-ui/core/Button';
import { UserConsumer } from '../context/GlobalContext';

export default function SubmitButton(event) {
    return <UserConsumer>
        {({ submitForm }) => (
            <div>
                <Button variant="contained"
                    onClick={event => submitForm(event)}
                >提交問卷</Button>
            </div>
        )}
    </UserConsumer>;
}