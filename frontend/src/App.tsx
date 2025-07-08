// Import React hooks and dependencies
import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    // State to hold the two Pokémon names entered by the user
    const [pokemon1, setPokemon1] = useState('');
    const [pokemon2, setPokemon2] = useState('');

    // State to hold the battle result or any error message
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    // State to show loading spinner / disable button while API call is in progress
    const [loading, setLoading] = useState(false);

    /**
     * Handles the battle button click
     * Sends a POST request to backend API with the two Pokémon names
     * Updates result or error state based on response
     */
    const handleBattle = async () => {
        // Indicate API request is in progress
        setLoading(true);   
        // Clear previous errors
        setError(null);  
        // Clear previous result
        setResult(null);      

        try {
            // POST to backend `/api/battle` endpoint
            const res = await axios.post('/api/battle', { pokemon1, pokemon2 });

            // Display winner and explanation returned by backend
            setResult(`${res.data.winner} wins! ${res.data.explanation}`);
        } catch (err: unknown) {
            // If error is from axios, display the error returned by backend
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.error || 'An error occurred');
            } else {
                // Handle unexpected errors
                setError('An unexpected error occurred');
            }
        } finally {
            // Re-enable battle button
            setLoading(false);  
        }
    };

    return (
        <div className="App">
            <h1>Pokémon Battle Simulator</h1>

            {/* Input fields for Pokémon names */}
            <div>
                <input
                    type="text"
                    placeholder="First Pokémon"
                    value={pokemon1}
                    onChange={(e) => setPokemon1(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Second Pokémon"
                    value={pokemon2}
                    onChange={(e) => setPokemon2(e.target.value)}
                />

                {/* Battle button, disabled while loading */}
                <button onClick={handleBattle} disabled={loading}>
                    {loading ? 'Battling...' : 'Battle!'}
                </button>
            </div>

            {/* Display result or error */}
            {result && <div className="result">{result}</div>}
            {error && <div className="error">{error}</div>}
        </div>
    );
}

export default App;
