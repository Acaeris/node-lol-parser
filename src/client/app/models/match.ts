import { NumberMap } from './generic';

export interface Matches {
    matches: MatchReference[];
    totalGames: number;
    startIndex: number;
    endIndex: number;
}

export interface MatchReference {
    lane: string;
    gameId: number;
    champion: number;
    platformId: string;
    season: number;
    queue: number;
    role: string;
    timestamp: number;
}

export interface Match {
    seasonId: number;
    queueId: number;
    gameId: number;
    participantIdentities: ParticipantIdentity[];
    gameVersion: string;
    platformId: string;
    gameMode: string;
    mapId: number;
    gameType: string;
    teams: TeamStats[];
    participants: Participant[];
    gameDuration: number;
    gameCreation: number;
}

export interface ParticipantIdentity {
    player: Player;
    participantId: number;
}

export interface Player {
    currentPlatformId: string;
    summonerName: string;
    matchHistoryUri: string;
    platformId: string;
    currentAccountId: number;
    profileIcon: number;
    summonerId: number;
    accountId: number;
}

export interface TeamStats {
    firstDragon: boolean;
    firstInhibitor: boolean;
    bans: TeamBans[];
    baronKills: number;
    firstRiftHerald: boolean;
    firstBaron: boolean;
    riftHeraldKills: number;
    firstBlood: boolean;
    teamId: number;
    firstTower: boolean;
    vilemawKills: number;
    inhibitorKills: number;
    towerKills: number;
    dominionVictoryScore: number;
    win: string;
    dragonKills: number;
}

export interface TeamBans {
    pickTurn: number;
    championId: number;
}

export interface Participant {
    stats: ParticipantStats;
    participantId: number;
    runes: ParticipantRune[];
    timeline: ParticipantTimeline;
    teamId: number;
    spell2Id: number;
    masteries: ParticipantMastery[];
    highestAchievedSeasonTier: string;
    spell1Id: number;
    championId: number;
}

export interface ParticipantStats {
    physicalDamageDealt: number;
    neutralMinionsKilledTeamJundle: number;
    magicDamageDealt: number;
    totalPlayerScore: number;
    deaths: number;
    win: boolean;
    neutralMinionsKilledEnemyJungle: number;
    altarsCaptured: number;
    largestCriticalStrike: number;
    totalDamageDealt: number;
    magicDamageDealtToChampions: number;
    visionWardsBoughtInGame: number;
    damageDealtToObjectives: number;
    largestKillingSpree: number;
    item1: number;
    quadraKills: number;
    teamObjective: number;
    totalTimeCrowdControlDealt: number;
    longestTimeSpentLiving: number;
    wardsKilled: number;
    firstTowerAssist: boolean;
    firstTowerKill: boolean;
    item2: number;
    item3: number;
    item0: number;
    firstBloodAssist: boolean;
    visionScore: number;
    wardsPlaced: number;
    item4: number;
    item5: number;
    item6: number;
    turretKills: number;
    tripleKills: number;
    damageSelfMitigated: number;
    champLevel: number;
    nodeNeutralizeAssist: number;
    firstInhibitorKill: boolean;
    goldEarned: number;
    magicalDamageTaken: number;
    kills: number;
    doubleKills: number;
    nodeCaptureAssist: number;
    trueDamageTaken: number;
    nodeNeutralize: number;
    firstInhibitorAssist: boolean;
    assists: number;
    unrealKills: number;
    neutralMinionsKilled: number;
    objectivePlayerScore: number;
    combatPlayerScore: number;
    damageDealtToTurrets: number;
    altarsNeutralized: number;
    physicalDamageDealtToChampions: number;
    goldSpent: number;
    trueDamageDealt: number;
    trueDamageDealtToChampions: number;
    participantId: number;
    pentaKills: number;
    totalHeal: number;
    totalMinionsKilled: number;
    firstBloodKill: boolean;
    nodeCapture: number;
    largestMultiKill: number;
    sightWardsBoughtInGame: number;
    totalDamageDealtToChampions: number;
    totalUnitsHealed: number;
    inhibitorKills: number;
    totalScoreRank: number;
    totalDamageTaken: number;
    killingSprees: number;
    timeCCingOthers: number;
    physicalDamageTaken: number;
}

export interface ParticipantRune {
    runeId: number;
    rank: number;
}

export interface ParticipantTimeline {
    lane: string;
    participantId: number;
    csDiffPerMinDeltas: NumberMap;
    goldPerMinDeltas: NumberMap;
    xpDiffPerMinDeltas: NumberMap;
    creepsPerMinDeltas: NumberMap;
    xpPerMinDeltas: NumberMap;
    role: string;
    damageTakenDiffPerMinDeltas: NumberMap;
    damageTakenPerMinDeltas: NumberMap;
}

export interface ParticipantMastery {
    masteryId: number;
    rank: number;
}
