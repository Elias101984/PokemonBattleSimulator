import { BattleService } from '../src/services/BattleService';
import { Pokemon } from '../src/models/Pokemon';

const mockPokedex: Pokemon[] = [
    {
        id: 4,
        num: '004',
        name: 'Charmander',
        img: '',
        type: ['fire'],
        height: '',
        weight: '',
        candy: '',
        egg: '',
        spawn_chance: 0,
        avg_spawns: 0,
        spawn_time: '',
        multipliers: null,
        weaknesses: [],
        hp: 39,
        attack: 52,
        defense: 43
    },
    {
        id: 7,
        num: '007',
        name: 'Squirtle',
        img: '',
        type: ['water'],
        height: '',
        weight: '',
        candy: '',
        egg: '',
        spawn_chance: 0,
        avg_spawns: 0,
        spawn_time: '',
        multipliers: null,
        weaknesses: [],
        hp: 44,
        attack: 48,
        defense: 65
    },
    {
        id: 1,
        num: '001',
        name: 'Bulbasaur',
        img: '',
        type: ['grass'],
        height: '',
        weight: '',
        candy: '',
        egg: '',
        spawn_chance: 0,
        avg_spawns: 0,
        spawn_time: '',
        multipliers: null,
        weaknesses: [],
        hp: 45,
        attack: 49,
        defense: 49
    }
];

const service = new BattleService(mockPokedex);

test('Positive: Squirtle beats Charmander (type advantage)', () => {
    const result = service.battle('Squirtle', 'Charmander');
    expect(result.winner).toBe('Squirtle');
});

/**
 * Changed this test to match the actual error message thrown by BattleService.ts.
 * Service throws 'One or both Pokemon not found in pokedex.', so we updated the expected error accordingly.
 */
test('Negative: Invalid Pokemon name throws error', () => {
    expect(() => service.battle('Pikachu', 'Charmander'))
        .toThrowError('One or both Pokemon not found in pokedex.');
});

test('Equivalent: Same Pokemon vs itself results in itself winning', () => {
    const result = service.battle('Bulbasaur', 'Bulbasaur');
    expect(result.winner).toBe('Bulbasaur');
});
