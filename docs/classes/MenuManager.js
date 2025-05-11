class MenuManager {
    constructor(game) {
        this.game = game;
        this.options = ["Start Game", "Settings", "Exit"];
        this.selectedIndex = 0;
    }

    draw() {
        background(0);
        textSize(32);
        textAlign(CENTER, CENTER);
        for (let i = 0; i < this.options.length; i++) {
            fill(i === this.selectedIndex ? 'yellow' : 'white');
            text(this.options[i], width / 2, height / 2 + i * 40);
        }
    }

    keyPressed(key) {
        if (key === 'ArrowUp') {
            this.selectedIndex = (this.selectedIndex - 1 + this.options.length) % this.options.length;
        } else if (key === 'ArrowDown') {
            this.selectedIndex = (this.selectedIndex + 1) % this.options.length;
        } else if (key === 'Enter') {
            this.handleSelection();
        }
    }

    handleSelection() {
        switch (this.selectedIndex) {
            case 0:
                this.game.setState("playing");
                break;
            case 1:
                console.log("Settings selected");
                break;
            case 2:
                console.log("Exit selected");
                break;
        }
    }
}

class Game {
    constructor() {
        this.state = "menu";
        this.menuManager = new MenuManager(this);
    }

    setState(newState) {
        this.state = newState;
    }

    draw() {
        if (this.state === "menu") {
            this.menuManager.draw();
        } else if (this.state === "playing") {
            background(50);
            text("Game Started!", width / 2, height / 2);
        }
    }

    
    keyPressed(key) {
        if (this.state === "menu") {
            this.menuManager.keyPressed(key);
        }
    }
}
