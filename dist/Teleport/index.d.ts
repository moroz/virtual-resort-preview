import React from "react";
import { Scene, ScenePoint } from "../interfaces/scenes";
interface Props {
    point: ScenePoint;
    navigate(destination: Partial<Scene>): void;
}
declare class Teleport extends React.Component<Props> {
    state: {
        hover: boolean;
    };
    onClick: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    render(): JSX.Element;
}
export default Teleport;
