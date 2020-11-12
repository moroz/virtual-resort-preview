import { Scene as ApiScene } from "./interfaces/scenes";
interface Props {
    scene: ApiScene;
    navigate(path: string): void;
}
declare const SkyScene: ({ scene, navigate }: Props) => JSX.Element;
export default SkyScene;
