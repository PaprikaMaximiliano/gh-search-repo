import React, { useState } from 'react';
import { styled, TextField, Autocomplete } from '@mui/material';
import { connect } from 'react-redux';
import { changeLanguage, fetchData } from '../actions';
import store from '../store';
// import {fetchData} from "../actions/repoActions";

const langs = [
    'Python',
    'C',
    'C++',
    'Java',
    'C#',
    'Visual Basic',
    'Javascript',
];

const debounce = require('lodash.debounce');

const FormRowWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '8px 0 0px 0',
    '@media (max-width: 400px)': {
        display: 'block'
    }
});

const InputText = styled(TextField)({
    flex: '0 0 50%',
    marginRight: '8px',
    '@media (max-width: 400px)': {
        width:"100%",
        marginBottom: "5%"
    }
});

const DropdownLanguages = styled(Autocomplete)({
    flex: '1',
});

function Search({ dispatch, language }) {
    const [title, setTitle] = useState('');
    const onChooseLanguage = (title, lang) => {
        if (title) {
            dispatch(fetchData(title, lang));
            return;
        }
        dispatch(changeLanguage(lang));
        console.log('store', store.getState());
    };

    const onEnterRepoTitle = (e) => {
        setTitle(e.target.value);
        if (!e.target.value) {
            return;
        }
        dispatch(fetchData(e.target.value, language));
    };

    return (
        <FormRowWrapper>
            <InputText
                id="outlined-basic"
                label="Repository"
                variant="outlined"
                onChange={debounce(onEnterRepoTitle, 1000)}
            />
            <DropdownLanguages
                disablePortal
                id="combo-box-demo"
                options={langs}
                renderInput={(params) => (
                    <TextField {...params} label="Languages" />
                )}
                // value={language}
                onChange={(e, value) => {
                    console.log(value);
                    onChooseLanguage(title, value);
                }}
            />
        </FormRowWrapper>
    );
}

export default connect()(Search);
