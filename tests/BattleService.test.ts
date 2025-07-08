import { BattleService } from '../src/services/BattleService';
import { Pokemon } from '../src/models/Pokemon';

const mockPokedex: Pokemon[] = [
    { name: 'Charmander', type: ['fire'], hp: 39, attack: 52, defense: 43 },
    { name: 'Squirtle', type: ['water'], hp: 44, attack: 48, defense: 65 },
    { name: 'Bulbasaur', type: ['grass'], hp: 45, attack: 49, defense: 49 }
];

const service = new BattleService(mockPokedex);

test('Positive: Squirtle beats Charmander (type advantage)', () => {
    const result = service.battle('Squirtle', 'Charmander');
    expect(result.winner).toBe('Squirtle');
});

test('Negative: Invalid Pokemon name throws error', () => {
    expect(() => service.battle('Pikachu', 'Charmander')).toThrowError('One or both Pokemon not found.');
});

test('Equivalent: Same Pokemon vs itself results in itself winning', () => {
    const result = service.battle('Bulbasaur', 'Bulbasaur');
    expect(result.winner).toBe('Bulbasaur');
});
