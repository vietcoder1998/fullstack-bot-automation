import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

const BotList: React.FC = () => {
    const [bots, setBots] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBots = async () => {
            try {
                const response = await axios.get('/api/bots');
                setBots(response.data);
            } catch (err) {
                setError('Failed to fetch bots');
            } finally {
                setLoading(false);
            }
        };

        fetchBots();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Bot List</h1>
            <ul>
                {bots.map((bot) => (
                    <li key={bot.id}>{bot.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default BotList;