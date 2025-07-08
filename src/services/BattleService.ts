import { Pokemon } from '../models/Pokemon';
import { getTypeEffectiveness } from '../utils/TypeEffectiveness';

/**
 * Service class that encapsulates the battle logic.
 * Single Responsibility: handles only battle logic.
 */
export class BattleService {
    private pokedex: Pokemon[];

    constructor(pokedex: Pokemon[]) {
        this.pokedex = pokedex;
    }

    /**
     * Looks up a Pokemon by name (case-insensitive).
     * @param name The Pokemon's name.
     * @returns Pokemon object or undefined if not found.
     */
    findPokemon(name: string): Pokemon | undefined {
        return this.pokedex.find(
            (p) => p.name.toLowerCase() === name.trim().toLowerCase()
        );
    }

    /**
     * Computes a "battle power" score for a Pokemon.
     * Formula: HP + Attack + Defense * type multiplier.
     * @param pokemon Pokemon whose power is being calculated.
     * @param opponent The opponent Pokemon (to account for type effectiveness).
     * @returns Calculated battle power as number.
     */
    private calculateBattlePower(pokemon: Pokemon, opponent: Pokemon): number {
        const baseStats = pokemon.hp + pokemon.attack + pokemon.defense;
        const multiplier = getTypeEffectiveness(pokemon.type, opponent.type);
        return baseStats * multiplier;
    }

    /**
     * Simulates a battle between two named Pokemon.
     * Throws an error if either Pokemon is not found.
     * @param pokemon1Name Name of first Pokemon.
     * @param pokemon2Name Name of second Pokemon.
     * @returns Object with winner name and explanation string.
     */
    battle(pokemon1Name: string, pokemon2Name: string): { winner: string; explanation: string } {
        const p1 = this.findPokemon(pokemon1Name);
        const p2 = this.findPokemon(pokemon2Name);

        if (!p1 || !p2) {
            throw new Error('One or both Pokemon not found in pokedex.');
        }

        const power1 = this.calculateBattlePower(p1, p2);
        const power2 = this.calculateBattlePower(p2, p1);

        const winner = power1 > power2 ? p1 : p2;
        const reason = power1 === power2
            ? `Both ${p1.name} and ${p2.name} have equal battle power. Defaulting to ${p1.name}.`
            : `${winner.name} wins with higher adjusted power (${Math.max(power1, power2).toFixed(2)}).`;

        return {
            winner: winner.name,
            explanation: reason
        };
    }
}
