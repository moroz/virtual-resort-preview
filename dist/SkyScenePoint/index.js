"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const scenes_1 = require("../interfaces/scenes");
const Teleport_1 = __importDefault(require("../Teleport"));
const SkyScenePoint = ({ point, navigate }) => {
    switch (point.pointType) {
        case scenes_1.ScenePointType.Teleport:
            return react_1.default.createElement(Teleport_1.default, { point: point, navigate: navigate });
        default:
            return null;
    }
};
exports.default = SkyScenePoint;
