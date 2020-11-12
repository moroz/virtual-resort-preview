"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const aframe_react_1 = require("aframe-react");
const SkyScene = ({ background, children }) => {
    return (react_1.default.createElement(aframe_react_1.Scene, { cursor: { rayOrigin: "mouse" }, className: "sky_scene" },
        react_1.default.createElement(aframe_react_1.Entity, { primitive: "a-assets" },
            react_1.default.createElement(aframe_react_1.Entity, { primitive: "a-asset-item", id: "gavin", src: "/gavin/scene.gltf" }),
            react_1.default.createElement(aframe_react_1.Entity, { primitive: "a-asset-item", id: "sky", src: "/gavin/scene.gltf" })),
        react_1.default.createElement(aframe_react_1.Entity, { primitive: "a-sky", id: "image-360", radius: "20", src: background, crossorigin: "anonymous", animation: {
                fade: "property: components.material.material.color; type: color; from: #FFF; to: #000; dur: 300; startEvents: fade",
                fadeback: "property: components.material.material.color; type: color; from: #000; to: #FFF; dur: 300; startEvents: animationcomplete__fade"
            } }),
        children));
};
exports.default = SkyScene;
