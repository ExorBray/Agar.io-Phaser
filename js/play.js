var playState = 
{
    create: function()
    {
        this.botRouteCode = 2;
        game.camera.flash("#fff", 1200);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.setBounds(0,0,800,800);
        
        this.bg = game.add.tileSprite(0,0, 800,800,'bg');
        this.cell = game.add.sprite(50,50,'cell');
        this.cell.scale.setTo(0.4,0.4);
        game.physics.arcade.enable(this.cell);
        
        game.camera.follow(this.cell);
        
        this.cursor = game.input.keyboard.createCursorKeys();
        
        food = game.add.group();
        food.enableBody = true;
        food.physicsBodyType = Phaser.Physics.ARCADE;
        
        bots = game.add.group();
        bots.scale.set(0.4,0.4);
        bots.enableBody = true;
        bots.physicsBodyType = Phaser.Physics.ARCADE;
        bots.setAll('anchor.x', 0.5);
        bots.setAll('anchor.y', 0.5);
        
        for(var i = 0; i < 60; i++) 
        {
            foodcells = food.create(Math.random()*game.world.width, Math.random()*game.world.height, 'cell');
        }
        
        
        food.setAll('scale.x', 0.1);
        food.setAll('scale.y', 0.1);
        
        game.time.events.loop(666, this.changeBotDirection, this);
    },
        
    update: function()
    {
        var text1 =  game.add.text(900, 300, "Moverse" , {font:"45px Console"});
        var text2 =  game.add.text(900, 350, "🡰🡱🡳🡲" , {font:"45px Console"});
        var text3 = game.add.text(900, 100, "Brian Alexis López Santos" , {font:"30px Console"});
        var text4 = game.add.text(900, 150, "Para la clase de:  Programación para internet" , {font:"30px Console"});
        text1.addColor("#fff",0);
        text3.addColor("#fff",0);
        text4.addColor("#fff",0);

        game.physics.arcade.overlap(this.cell, food, this.eatFood, null, this);
        game.physics.arcade.overlap(bots, food, this.eatFoodBots, null, this);
        game.physics.arcade.overlap(this.cell, bots, this.eatBotsByCell, null, this);
        
        this.cell.body.collideWorldBounds = true;
        
        if(this.cursor.left.isDown)
        {
            this.cell.x -= 10;
        }
        if(this.cursor.right.isDown)
        {
            this.cell.x += 10;
        }
        if(this.cursor.up.isDown)
        {
            this.cell.y -= 10;
        }
        if(this.cursor.down.isDown)
        {
            this.cell.y += 10;
        }
        
    },
    
    changeBotDirection: function()
    {
        this.nowInteger = game.rnd.integerInRange(0,3);
        this.botRouteCode = this.nowInteger;
    },
    
    eatFood: function(cell, f) 
    {
        f.kill();
       
    },
    
}