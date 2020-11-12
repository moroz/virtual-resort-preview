"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const aframe_react_1 = require("aframe-react");
const Teleport = ({ point, navigate }) => {
    const [hover, setHover] = react_1.useState(false);
    const { position, rotation, destination } = point;
    const onClick = () => {
        if (destination)
            navigate(`/scenes/${destination.slug}`);
    };
    const onMouseEnter = () => {
        setHover(true);
    };
    const onMouseLeave = () => {
        setHover(false);
    };
    return (react_1.default.createElement(aframe_react_1.Entity, { primitive: "a-plane", geometry: {
            height: hover ? 1.2 : 1,
            width: hover ? 1.2 : 1
        }, color: "#ffffff", material: "shader: flat; src: /goto.png", events: {
            click: onClick,
            mouseenter: onMouseEnter,
            mouseleave: onMouseLeave
        }, position: position, rotation: rotation, "event-set__click": "_target: #image-360; _delay: 300; material.src: ${src}", "proxy-event": "event: click; to: #image-360; as: fade", sound: "on: click; src: #click-sound" }));
};
exports.default = Teleport;
