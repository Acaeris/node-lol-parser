import { Image } from './image';

export interface Masteries {
    data: MasteryMap;
    version: string;
    tree: MasteryTree;
    type: string;
}

export interface MasteryMap {
    [key: string]: Mastery;
}

export interface Mastery {
    prereq: string;
    masteryTree: string;
    name: string;
    ranks: number;
    image: Image;
    sanitizedDescription: string[];
    id: number;
    description: string[];
}

export interface MasteryTree {
    Resolve: MasteryTreeList[];
    Ferocity: MasteryTreeList[];
    Cunning: MasteryTreeList[];
}

export interface MasteryTreeList {
    masteryTreeItems: MasteryTreeItem[];
}

export interface MasteryTreeItem {
    masteryId: number;
    prereq: string;
}
