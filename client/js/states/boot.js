import { Text } from '../helpers/elements';

class Boot extends Phaser.State {

  preload() {
    this.game.stage.backgroundColor = '#000';
  }

  create() {
    // This is not mandatory, but useful, as it will make the game keep reacting to messages from the server even when the game window doesn’t have focus (which is a desired behavior for most games).
    this.game.stage.disableVisibilityChange = true;

    new Text({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY,
      text: 'Loading...',
      style: {
        font: '30px Areal',
        fill: '#FFFFFF'
      }
    })
  }
}

export default Boot;
