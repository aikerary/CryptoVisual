import React from 'react';
import Card from './card';
import './css/dashboard.css';

class Dashboard extends React.Component {
    render() {
        return (
            <main>
                {/* Card with prop Bitcoin */}
                <Card cryptoName="Bitcoin" />
                {/* Card with prop Ethereum */}
                <Card cryptoName="Ethereum" />
            </main>
        );
    }
}

export default Dashboard;