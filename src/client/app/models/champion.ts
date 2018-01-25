import { Image } from './image';
import { StringMap } from './generic';
import { SpellVar, SpellLevelTip } from './spell';

export interface Champions {
    keys: StringMap;
    data: ChampionMap;
    version: string;
    type: string;
    format: string;
}

export interface ChampionMap {
    [key: string]: Champion;
}

export interface Champion {
    info: ChampionInfo;
    enemytips: string[];
    stats: ChampionStats;
    name: string;
    title: string;
    image: Image;
    tags: string[];
    partype: string;
    skins: ChampionSkin[];
    passive: ChampionPassive;
    recommended: ChampionRecommended[];
    allytips: string[];
    key: string;
    lore: string;
    id: number;
    blurb: string;
    spells: ChampionSpell[];
}

export interface ChampionInfo {
    difficulty: number;
    attack: number;
    defense: number;
    magic: number;
}

export interface ChampionStats {
    armorperlevel: number;
    hpperlevel: number;
    attackdamage: number;
    mpperlevel: number;
    attackspeedoffset: number;
    armor: number;
    hp: number;
    hpregenperlevel: number;
    spellblock: number;
    attackrange: number;
    movespeed: number;
    attackdamageperlevel: number;
    mpregenperlevel: number;
    mp: number;
    spellblockperlevel: number;
    crit: number;
    mpregen: number;
    attackspeedperlevel: number;
    hpregen: number;
    critperlevel: number;
}

export interface ChampionSkin {
    num: number;
    name: string;
    id: number;
}

export interface ChampionPassive {
    image: Image;
    sanitizedDescription: string;
    name: string;
    description: string;
}

export interface ChampionRecommended {
    map: string;
    blocks: ChampionBlock[];
    champion: string;
    title: string;
    priority: boolean;
    mode: string;
    type: string;
}

export interface ChampionSpell {
    cooldownBurn: string;
    resource: string;
    leveltip: SpellLevelTip;
    vars: SpellVar[];
    costType: string;
    image: Image;
    sanitizedDescription: string;
    sanitizedTooltip: string;
    effect: number[][];
    tooltip: string;
    maxrank: number;
    costBurn: string;
    rangeBurn: string;
    range: string | number[];
    cooldown: number[];
    cost: number[];
    key: string;
    description: string;
    effectBurn: string[];
    altimages: Image[];
    name: string;
}

export interface ChampionBlock {
    items: ChampionBlockItem[];
    recMath: boolean;
    type: string;
}

export interface ChampionBlockItem {
    count: number;
    id: number;
}
