import React, { useEffect, useState } from "react";

import { editMember, getMember } from '../Service/api';

import FormGroup from '@mui/material/FormGroup';
import { Button, FormControl, Input, InputLabel, FormLabel, FormControlLabel, RadioGroup, Radio } from "@mui/material";

import { useParams, useNavigate } from "react-router-dom";

const initialObject = {
    firstName: '',
    lastName: '',
    contactNumber: '',
    gender: 'male'
}

function EditMember() {
    const [member, setMember] = useState(initialObject);
    const { firstName, lastName, contactNumber, gender } = member;

    const { _id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        loadMemberData();
    }, []);

    async function loadMemberData() {
        const response = await getMember(_id);
        setMember(response.data);
    }

    function onValueChange(event) {
        setMember({...member, [event.target.name] : event.target.value});
    }

    async function HandleEditMember() {
        await editMember(_id, member);
        navigate('/members');
    }

    function HandleCancel() {
        navigate('/members');
    }


    return <>
        <FormGroup className="add-member-form">
            <FormControl className="form-field">
                <InputLabel>First Name</InputLabel>
                <Input onChange={(event) => onValueChange(event)} name='firstName' value={firstName}/>
            </FormControl>

            <FormControl className="form-field">
                <InputLabel>Last Name</InputLabel>
                <Input onChange={(event) => onValueChange(event)} name='lastName' value={lastName}/>
            </FormControl>

            <FormControl className="form-field">
                <InputLabel>Contact Number</InputLabel>
                <Input onChange={(event) => onValueChange(event)} name='contactNumber' value={contactNumber}/>
            </FormControl>
            
            <FormControl component="fieldset"  className="form-field">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup 
            row 
            aria-label="gender" 
            name="row-radio-buttons-group"
            defaultValue="male"
            value={gender}
            >
                <FormControlLabel value="male" control={<Radio />} label="Male"  onClick={(event) => onValueChange(event)} name='gender'/>
                <FormControlLabel value="female" control={<Radio />} label="Female" onClick={(event) => onValueChange(event)} name='gender'/>
                <FormControlLabel value="other" control={<Radio />} label="Other" onClick={(event) => onValueChange(event)} name='gender'/>
            </RadioGroup>
            </FormControl>   
            
            <div className="outer form-field">
                <Button variant="contained" className="inner add-member-btn" onClick={HandleEditMember}>Edit Member</Button>
                <Button variant="outlined" className="inner reset-btn" onClick={HandleCancel}>Cancel</Button>
            </div>
        </FormGroup>
    </>
}

export default EditMember;