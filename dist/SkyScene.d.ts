import { Scene as ApiScene } from "./interfaces/scenes";
interface Props {
    scene: ApiScene;
    navigate(destination: ApiScene): void;
}
declare const SkyScene: ({ scene, navigate }: Props) => JSX.Element;
export default SkyScene;
