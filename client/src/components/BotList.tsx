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
            {bots.length === 0 ? (
                <div style={{ marginTop: 20, color: '#888' }}>No bots found.</div>
            ) : (
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid #ddd', padding: 8 }}>Name</th>
                            <th style={{ border: '1px solid #ddd', padding: 8 }}>Token</th>
                            <th style={{ border: '1px solid #ddd', padding: 8 }}>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bots.map((bot) => (
                            <tr key={bot._id}>
                                <td style={{ border: '1px solid #ddd', padding: 8 }}>{bot.name}</td>
                                <td style={{ border: '1px solid #ddd', padding: 8 }}>{bot.token}</td>
                                <td style={{ border: '1px solid #ddd', padding: 8 }}>{new Date(bot.createdAt).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default BotList;