"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const aframe_react_1 = require("aframe-react");
class Teleport extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            hover: false
        };
        this.onClick = () => {
            const { destination } = this.props.point;
            if (destination)
                this.props.navigate(destination);
        };
        this.onMouseEnter = () => {
            this.setState({ hover: true });
        };
        this.onMouseLeave = () => {
            this.setState({ hover: false });
        };
    }
    render() {
        const { hover } = this.state;
        const { position, rotation } = this.props.point;
        return (react_1.default.createElement(aframe_react_1.Entity, { primitive: "a-plane", geometry: {
                height: hover ? 1.2 : 1,
                width: hover ? 1.2 : 1
            }, color: "#ffffff", material: "shader: flat; src: /goto.png", events: {
                click: this.onClick,
                mouseenter: this.onMouseEnter,
                mouseleave: this.onMouseLeave
            }, position: position, rotation: rotation, "event-set__click": "_target: #image-360; _delay: 300; material.src: ${src}", "proxy-event": "event: click; to: #image-360; as: fade", sound: "on: click; src: #click-sound" }));
    }
}
exports.default = Teleport;
