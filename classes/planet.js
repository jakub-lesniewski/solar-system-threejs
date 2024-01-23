import * as THREE from "three";

export default class Planet {
  constructor(radius, texturePath, normalMapPath) {
    this.geometry = new THREE.SphereGeometry(radius, 32, 32);

    this.texture = new THREE.TextureLoader().load(texturePath);
    this.normalMap = new THREE.TextureLoader().load(normalMapPath);

    this.mesh = new THREE.Mesh(
      this.geometry,
      new THREE.MeshStandardMaterial({
        map: this.texture,
        normalMap: this.normalMap,
      })
    );

    // Tilt the planet by 23.5 degrees (Earth's axial tilt)
    const axisOfTilt = new THREE.Vector3(0, 0, -1); // Use the Z-axis for tilting
    const angleOfTilt = 23.5 * (Math.PI / 180); // Convert degrees to radians
    this.mesh.rotateOnWorldAxis(axisOfTilt, angleOfTilt);
  }
}
