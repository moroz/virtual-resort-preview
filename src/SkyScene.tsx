import React from "react";
import { Entity, Scene } from "aframe-react";

interface Props {
  background: string;
  children?: any;
}

const SkyScene = ({ background, children }: Props) => {
  return (
    <Scene cursor={{ rayOrigin: "mouse" }} className="sky_scene">
      <Entity primitive="a-assets">
        <Entity primitive="a-asset-item" id="gavin" src="/gavin/scene.gltf" />
        <Entity primitive="a-asset-item" id="sky" src="/gavin/scene.gltf" />
      </Entity>

      <Entity
        primitive="a-sky"
        id="image-360"
        radius="20"
        src={background}
        crossorigin="anonymous"
        animation={{
          fade:
            "property: components.material.material.color; type: color; from: #FFF; to: #000; dur: 300; startEvents: fade",
          fadeback:
            "property: components.material.material.color; type: color; from: #000; to: #FFF; dur: 300; startEvents: animationcomplete__fade"
        }}
      />
      {children}
    </Scene>
  );
};

export default SkyScene;
