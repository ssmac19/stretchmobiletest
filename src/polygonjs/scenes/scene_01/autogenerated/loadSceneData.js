import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1721440066438",
  root: "1721399315933",
  nodes: {
    geo1: "1721439160823",
    "geo1/clothSolver1": "1721399315933",
    "geo1/MAT": "1721438995532",
    "geo1/MAT/meshPhysical_CLOTH": "1721440059401",
    "geo1/MAT/meshPhysicalBuilder1": "1721440059401",
    "geo1/actor_clothSolver1": "1721438995532",
    lights: "1721399315933",
    cameras: "1721399315933",
    "cameras/cameraControls1": "1721399315933",
    text: "1721439236092",
    "text/MAT": "1721399315933",
  },
  shaders: {
    "/geo1/clothSolver1": { position: "1721399315933" },
    "/geo1/MAT/meshPhysical_CLOTH": {
      vertex: "1721399315933",
      fragment: "1721399315933",
      "customDepthMaterial.vertex": "1721399315933",
      "customDepthMaterial.fragment": "1721399315933",
      "customDistanceMaterial.vertex": "1721399315933",
      "customDistanceMaterial.fragment": "1721399315933",
      "customDepthDOFMaterial.vertex": "1721399315933",
      "customDepthDOFMaterial.fragment": "1721399315933",
    },
    "/geo1/MAT/meshPhysicalBuilder1": {
      vertex: "1721399315933",
      fragment: "1721399315933",
      "customDepthMaterial.vertex": "1721399315933",
      "customDepthMaterial.fragment": "1721399315933",
      "customDistanceMaterial.vertex": "1721399315933",
      "customDistanceMaterial.fragment": "1721399315933",
      "customDepthDOFMaterial.vertex": "1721399315933",
      "customDepthDOFMaterial.fragment": "1721399315933",
    },
  },
  jsFunctionBodies: { "/geo1/actor_clothSolver1": "1721399315933" },
};

export const loadSceneData_scene_01 = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "scene_01",
    urlPrefix: sceneDataRoot + "/scene_01",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};
