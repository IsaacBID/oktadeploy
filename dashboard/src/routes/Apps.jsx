import {  Box, Space, Title } from '@mantine/core';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {  IconSettings } from '@tabler/icons-react';
import GridView from '../components/GridView';

import { applist as testAppList } from '../testdata';
import ListView from '../components/ListView';

export default function Apps() {
    const redirect = useNavigate();
    const [appList, setAppList] = useState([]); 

    useEffect(() => {
        //request list of apps
        
        //adds selected prop to each app 
        const appsWithSelectedProp = testAppList.map(app => ({ ...app, checked: true }));
        setAppList(appsWithSelectedProp)
    }, []);

    useEffect(() => {
        //make this validation routerlevel
        const tenant = localStorage.getItem('OriginTenant');
        if (tenant == null || tenant == undefined) {
            redirect('/');
        }
    }, []);

    const saveSelected = () => {
        const selectedApps = appList.filter(app => app.checked).map(app => app.label);
        console.log(selectedApps)
    }

    const iconHandler = (app) => 
        app._links.logo === undefined 
        ? <Box w={24} h={24}><IconSettings /></Box>
        : <img src={app._links.logo[0].href} alt={app.label} width="24" height="24" />

    return (
        <>
            <Title order={1}>Select Apps to backup</Title>

            <Space h="lg" />

            <ListView 
                list={appList} 
                label="Select apps to backup"
                listSetter={setAppList}  
                saveHandler={saveSelected}
                iconHandler={iconHandler}
                collapsable={true}
            />

            
        </>
    )
}