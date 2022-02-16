import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { Home, Send, Person } from '@material-ui/icons';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
    && {
        background-color: rgba(0, 0, 0, 0.5);
        color: #ff99a0;
        font-size: 1rem;
        font-weight: 800;
    }
`;

function TopHeader() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <StyledAppBar position="static">
            <Tabs value={value} onChange={handleChange} aria-label="Main Tabs">
                <Tab label="Home" icon={<Home />} />
                <Tab label="Send" icon={<Send />} />
                <Tab label="Profile" icon={<Person />} />
            </Tabs>
        </StyledAppBar>
    );
}

export default TopHeader;
