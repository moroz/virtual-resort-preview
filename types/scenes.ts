export type ID = number | string;

export enum ScenePointType {
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

export const ScenePointTypeDisplayNames: Record<ScenePointType, string> = {
  [ScenePointType.Image]: "圖片",
  [ScenePointType.Video]: "影片",
  [ScenePointType.Text]: "文字",
  [ScenePointType.Teleport]: "場景中轉"
};

export enum AssetType {
  Video = "VIDEO",
  Image = "IMAGE"
}

export const AssetTypeDisplayNames: Record<AssetType, string> = {
  [AssetType.Image]: "圖片",
  [AssetType.Video]: "影片"
};

export const AssetTypeClassfiers: Record<AssetType, string> = {
  [AssetType.Video]: "個",
  [AssetType.Image]: "張"
};

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
