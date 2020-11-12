import { ScenePoint } from "../interfaces/scenes";
interface Props {
    point: ScenePoint;
    navigate(path: string): void;
}
declare const Teleport: ({ point, navigate }: Props) => JSX.Element;
export default Teleport;