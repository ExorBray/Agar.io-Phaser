var menuState = 
{
    create: function()
    {
       game.camera.flash("#fff", 1200);
        this.spacebar;
	    this.spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        var pressbtn = game.add.text(1000/ 2, 800 / 2, "Preciona Space para comenzar" , {font:"45px Console"});

        pressbtn.addColor("#fff",0);
        pressbtn.anchor.setTo(0.5, 0.5);
        this.spacebar.onDown.add(this.start, this);
    },
    
    start: function()
    {
        game.state.start('play');  
    }
}