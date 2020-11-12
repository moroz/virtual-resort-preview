import React from "react";
import { ScenePoint } from "../interfaces/scenes";
interface Props {
    point: ScenePoint;
    navigate(path: string): void;
}
export default class Teleport extends React.Component<Props> {
    state: {
        hover: boolean;
    };
    onClick: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    render(): JSX.Element;
}
export {};
