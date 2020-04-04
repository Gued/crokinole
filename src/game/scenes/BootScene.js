import { Scene } from 'phaser'


export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    this.load.image('sky', 'http://localhost:8080/image/sky.png')
    this.load.image('bomb', 'http://localhost:8080/image/bomb.png')
    this.load.audio('thud', ['http://localhost:8080/audio/thud.mp3', 'http://localhost:8080/audio/thud.ogg'])
  }

  create () {
    this.scene.start('PlayScene')
  }
}
