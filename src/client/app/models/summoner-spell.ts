import { Image } from './image';
import { SpellVar, SpellLevelTip } from './spell';

export interface SummonerSpells {
    data: SummonerSpellMap;
    version: string;
    type: string;
}

export interface SummonerSpellMap {
    [key: string]: SummonerSpell;
}

export interface SummonerSpell {
    vars: SpellVar[];
    image: Image;
    costBurn: string;
    cooldown: number[];
    effectBurn: string[];
    id: number;
    cooldownBurn: string;
    tooltip: string;
    maxrank: number;
    rangeBurn: string;
    description: string;
    effect: number[][];
    key: string;
    leveltip: SpellLevelTip;
    modes: string[];
    resource: string;
    name: string;
    costType: string;
    sanitizedDescription: string;
    sanitizedTooltip: string;
    range: string | number[];
    cost: number[];
    summonerLevel: number;
}
