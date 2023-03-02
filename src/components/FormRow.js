import React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const FormRowWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '8px 0 0px 0',
});

const TextWrapper = styled(TextField)({
    flex: 1,
    marginRight: '8px',
});

const DropdownWrapper = styled(FormControl)({
    minWidth: '120px',
});

function FormRow() {
    const [textValue, setTextValue] = React.useState('');
    const [dropdownValue, setDropdownValue] = React.useState('');

    const handleTextChange = (event) => {
        setTextValue(event.target.value);
    };

    const handleDropdownChange = (event) => {
        setDropdownValue(event.target.value);
    };

    return (
        <FormRowWrapper>
            <TextWrapper
                label="Text Input"
                value={textValue}
                onChange={handleTextChange}
            />
            <DropdownWrapper>
                <Select
                    labelId="dropdown-label"
                    id="dropdown"
                    value={dropdownValue}
                    onChange={handleDropdownChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="option1">Option 1</MenuItem>
                    <MenuItem value="option2">Option 2</MenuItem>
                    <MenuItem value="option3">Option 3</MenuItem>
                </Select>
            </DropdownWrapper>
        </FormRowWrapper>
    );
}

export default FormRow;
