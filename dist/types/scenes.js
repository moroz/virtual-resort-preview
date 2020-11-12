"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetTypeClassfiers = exports.AssetTypeDisplayNames = exports.AssetType = exports.ScenePointTypeDisplayNames = exports.ScenePointType = void 0;
var ScenePointType;
(function (ScenePointType) {
    ScenePointType["Teleport"] = "TELEPORT";
    ScenePointType["Text"] = "TEXT";
    ScenePointType["Video"] = "VIDEO";
    ScenePointType["Image"] = "IMAGE";
})(ScenePointType = exports.ScenePointType || (exports.ScenePointType = {}));
exports.ScenePointTypeDisplayNames = {
    [ScenePointType.Image]: "圖片",
    [ScenePointType.Video]: "影片",
    [ScenePointType.Text]: "文字",
    [ScenePointType.Teleport]: "場景中轉"
};
var AssetType;
(function (AssetType) {
    AssetType["Video"] = "VIDEO";
    AssetType["Image"] = "IMAGE";
})(AssetType = exports.AssetType || (exports.AssetType = {}));
exports.AssetTypeDisplayNames = {
    [AssetType.Image]: "圖片",
    [AssetType.Video]: "影片"
};
exports.AssetTypeClassfiers = {
    [AssetType.Video]: "個",
    [AssetType.Image]: "張"
};
