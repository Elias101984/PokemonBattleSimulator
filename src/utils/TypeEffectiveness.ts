/**
 * Utility function to calculate type effectiveness multiplier.
 * Simplified for this challenge: Fire > Grass, Water > Fire, Grass > Water.
 * Any other type matchup is neutral (1.0x).
 *
 * @param attackerTypes Array of attacker's types.
 * @param defenderTypes Array of defender's types.
 * @returns Effectiveness multiplier (e.g., 1.2 or 1.0)
 */
export function getTypeEffectiveness(
    attackerTypes: string[],
    defenderTypes: string[]
): number {
    // Define a simple effectiveness chart
    const effectivenessChart: Record<string, string[]> = {
        fire: ['grass'],
        water: ['fire'],
        grass: ['water']
    };

    // Check each attacker type against each defender type
    for (const attacker of attackerTypes) {
        const strongerThan = effectivenessChart[attacker.toLowerCase()];
        if (!strongerThan) continue;

        for (const defender of defenderTypes) {
            if (strongerThan.includes(defender.toLowerCase())) {
                // Super effective
                return 1.2; 
            }
        }
    }
    // Neutral if no advantage
    return 1.0; 
}
