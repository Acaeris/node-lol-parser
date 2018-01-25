import { Image } from './image';
import { StringMap, BooleanMap } from './generic';

export interface Items {
    data: ItemMap;
    version: string;
    tree: ItemTree[];
    groups: ItemGroup[];
    type: string;
}

export interface ItemMap {
    [key: string]: Item;
}

export interface Item {
    gold: ItemGold;
    plaintext: string;
    hideFromAll: boolean;
    inStore: boolean;
    into: string[];
    id: number;
    stats: ItemStats;
    colloq: string;
    maps: BooleanMap;
    specialRecipe: number;
    image: Image;
    description: string;
    tags: string[];
    effect: StringMap;
    requiredChampion: string;
    from: string[];
    group: string;
    consumeOnFull: boolean;
    name: string;
    consumed: boolean;
    sanitizedDescription: string;
    depth: number;
    stacks: number;
}

export interface ItemTree {
    header: string;
    tags: string[];
}

export interface ItemGroup {
    MaxGroupOwnable: string;
    key: string;
}

export interface ItemGold {
    sell: number;
    total: number;
    base: number;
    purchasable: boolean;
}

export interface ItemStats {
    PercentCritDamageMod: number;
    PercentSpellBlockMod: number;
    PercentHPRegenMod: number;
    PercentMovementSpeedMod: number;
    FlatSpellBlockMod: number;
    FlatCritDamageMod: number;
    FlatEnergyPoolMod: number;
    PercentLifeStealMod: number;
    FlatMPPoolMod: number;
    FlatMovementSpeedMod: number;
}
