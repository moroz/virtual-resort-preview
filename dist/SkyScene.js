"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const aframe_react_1 = require("aframe-react");
const SkyScenePoint_1 = __importDefault(require("./SkyScenePoint"));
const Sky_1 = __importDefault(require("./Sky"));
const SkyScene = ({ scene, navigate, children }) => {
    const { points } = scene;
    return (react_1.default.createElement(aframe_react_1.Scene, { cursor: { rayOrigin: "mouse" }, className: "sky_scene" },
        react_1.default.createElement(Sky_1.default, { scene: scene }),
        points.map((point) => (react_1.default.createElement(SkyScenePoint_1.default, { key: point.id, point: point, navigate: navigate }))),
        children));
};
exports.default = SkyScene;
