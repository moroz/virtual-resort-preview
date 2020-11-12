"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aframe_react_1 = require("aframe-react");
const SkyScene = ({ background, children }) => {
    return (<aframe_react_1.Scene cursor={{ rayOrigin: "mouse" }} className="sky_scene">
      <aframe_react_1.Entity primitive="a-assets">
        <aframe_react_1.Entity primitive="a-asset-item" id="gavin" src="/gavin/scene.gltf"/>
        <aframe_react_1.Entity primitive="a-asset-item" id="sky" src="/gavin/scene.gltf"/>
      </aframe_react_1.Entity>

      <aframe_react_1.Entity primitive="a-sky" id="image-360" radius="20" src={background} crossorigin="anonymous" animation={{
        fade: "property: components.material.material.color; type: color; from: #FFF; to: #000; dur: 300; startEvents: fade",
        fadeback: "property: components.material.material.color; type: color; from: #000; to: #FFF; dur: 300; startEvents: animationcomplete__fade"
    }}/>
      {children}
    </aframe_react_1.Scene>);
};
exports.default = SkyScene;
