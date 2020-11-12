import { Scene as ApiScene } from "./interfaces/scenes";
interface Props {
    scene: ApiScene;
    navigate(destination: ApiScene): void;
    children?: any;
}
declare const SkyScene: ({ scene, navigate, children }: Props) => JSX.Element;
export default SkyScene;
