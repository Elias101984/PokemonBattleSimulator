import { Request, Response } from 'express';
import { BattleService } from '../services/BattleService';
import { Pokemon } from '../models/Pokemon';
import rawPokedex from '../../pokedex.json';

//explicity map each Pokemon entry from JSON with default values for `hp`, `attack`,
//and `defense type while keeping strict type checking enabled

const pokedex = (rawPokedex as any).pokemon.map((p: any) => ({
    name: p.name,
    type: p.type,
    hp: 100,
    attack: 50,
    defense: 50
}));

const battleService = new BattleService(pokedex.pokemon);

export function battleHandler(req: Request, res: Response): void {
    const { pokemon1, pokemon2 } = req.body;

    if (!pokemon1 || !pokemon2) {
        res.status(400).json({ error: 'Both pokemon1 and pokemon2 must be provided.' });
        return;
    }

    try {
        const result = battleService.battle(pokemon1, pokemon2);
        res.json(result);
    } catch (err: any) {
        res.status(404).json({ error: err.message });
    }
}
