import React from 'react';
import Header from '../components/Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';

const Main = () => {

    const navigation = useNavigation();

    return (
        <div>
            <Header></Header>
            <div>{navigation.state === 'loading' && 'Loading'}</div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;