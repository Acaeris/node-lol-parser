import { Image } from './image';

export interface Runes {
    data: RuneMap;
    version: string;
    type: string;
}

export interface RuneMap {
    [key: string]: Rune;
}

export interface Rune {
    stats: RuneStats;
    name: string;
    tags: string[];
    image: Image;
    sanitizedDescription: string;
    rune: RuneMetaData;
    id: number;
    description: string;
}

export interface RuneStats {
    PercentTimeDeadModPerLevel: number;
    PercentArmorPenetrationModPerLevel: number;
    PercentCritDamageMod: number;
    PercentSpellBlockMod: number;
    PercentHPRegenMod: number;
    PercentMovementSpeedMod: number;
    FlatSpellBlockMod: number;
    FlatEnergyRegenModPerLevel: number;
    FlatEnergyPoolMod: number;
    FlatMagicPenetrationModPerLevel: number;
    PercentLifeStealMod: number;
    FlatMPPoolMod: number;
    PercentCooldownMod: number;
    PercentMagicPenetrationMod: number;
    FlatArmorPenetrationModPerLevel: number;
    FlatMovementSpeedMod: number;
    FlatTimeDeadModPerLevel: number;
    FlatArmorModPerLevel: number;
    PercentAttackSpeedMod: number;
    FlatDodgeModPerLevel: number;
    PercentMagicDamageMod: number;
    PercentBlockMod: number;
    FlatDodgeMod: number;
    FlatEnergyRegenMod: number;
    FlatHPModPerLevel: number;
    PercentAttackSpeedModPerLevel: number;
    PercentSpellVampMod: number;
    FlatMPRegenMod: number;
    PercentHPPoolMod: number;
    PercentDodgeMod: number;
    FlatAttackSpeedMod: number;
    FlatArmorMod: number;
    FlatMagicDamageModPerLevel: number;
    FlatHPRegenMod: number;
    PercentPhysicalDamageMod: number;
    FlatCritChanceModPerLevel: number;
    FlatSpellBlockModPerLevel: number;
    PercentTimeDeadMod: number;
    FlatBlockMod: number;
    PercentMPPoolMod: number;
    FlatMagicDamageMod: number;
    PercentMPRegenMod: number;
    PercentMovementSpeedModPerLevel: number;
    PercentCooldownModPerLevel: number;
    FlatMPModPerLevel: number;
    FlatEnergyModPerLevel: number;
    FlatPhysicalDamageMod: number;
    FlatHPRegenModPerLevel: number;
    FlatCritDamageMod: number;
    PercentArmorMod: number;
    FlatMagicPenetrationMod: number;
    PercentCritChanceMod: number;
    FlatPhysicalDamageModPerLevel: number;
    PercentArmorPenetrationMod: number;
    PercentEXPBonus: number;
    FlatMPRegenModPerLevel: number;
    PercentMagicPenetrationModPerLevel: number;
    FlatTimeDeadMod: number;
    FlatMovementSpeedModPerLevel: number;
    FlatGoldPer10Mod: number;
    FlatArmorPenetrationMod: number;
    FlatCritDamageModPerLevel: number;
    FlatHPPoolMod: number;
    FlatCritChanceMod: number;
    FlatEXPBonus: number;
}

export interface RuneMetaData {
    tier: string;
    type: string;
    isRune: boolean;
}
