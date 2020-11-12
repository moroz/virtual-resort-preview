export declare type ID = number | string;
export declare enum ScenePointType {
    Teleport = "TELEPORT",
    Text = "TEXT",
    Video = "VIDEO",
    Image = "IMAGE"
}
export interface Point {
    x: number;
    y: number;
    z: number;
}
export declare const ScenePointTypeDisplayNames: Record<ScenePointType, string>;
export declare enum AssetType {
    Video = "VIDEO",
    Image = "IMAGE"
}
export declare const AssetTypeDisplayNames: Record<AssetType, string>;
export declare const AssetTypeClassfiers: Record<AssetType, string>;
export interface ScenePointAsset {
    id: ID;
    pointId: ID;
    point: ScenePoint;
    assetType: AssetType;
    assetUrl: string;
    createdAt: string;
    updatedAt: string;
}
export interface ScenePointAssetParams {
    pointId?: ID | null;
    assetType: AssetType | null;
    assetUrl: string;
}
export interface ScenePoint {
    id: ID;
    pointType: ScenePointType;
    destination: Scene | null;
    position: Point;
    rotation: Point;
    assets: ScenePointAsset[];
    scene: Scene;
    createdAt: string;
    updatedAt: string;
}
export interface Scene {
    id: ID;
    name: string;
    slug: string;
    backgroundUrl: string;
    thumbnailUrl: string | null;
    points: ScenePoint[];
    createdAt: string;
    updatedAt: string;
}
export interface SceneParams {
    name: string;
    slug: string;
    backgroundUrl: string;
}
export interface ScenePointParams {
    sceneId: ID;
    pointType: ScenePointType;
    assets?: ScenePointAssetParams[];
    position: Point;
    rotation: Point;
}
