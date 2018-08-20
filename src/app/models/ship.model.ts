/** Class representing a particular ship on the battlefield. */
export class Ship {
    class: string;
    health: number;
    size: number;

    /**
     * Create a ship.
     * @param {number} type - One of four ship types ['battleship', 'cruiser', 'destroyer','torpedoBoat'].
     */
    constructor(type: number) {
        this.class = shipTypes[type];
        switch (this.class) {
            case 'battleship':
                this.health = 4;
                this.size = 4;
                break;
            case 'cruiser':
                this.health = 3;
                this.size = 3;
                break;
             case 'destroyer':
                this.health = 2;
                this.size = 2;
                break;
             case 'torpedoBoat':
                this.health = 1;
                this.size = 1;
                break;
        }
    }

    /**
     * Process.
     * @return {void}
     */
    getFired () {
        // this.health == --this.health;
        if (this.health === 0) {
            // remove the ship from Player's ship array
            // update Information Bar status: "You lost your [ship class]"
        } else {
            // update Information Bar status: "Your [ship class] got fired"
        }
    }
}

/**
 * Enum for ship types. Each number stands for a quantity of ship's decks, lives and size
 * @readonly
 * @enum {number}
 */
export enum shipTypes {
    battleship = 1,
    cruiser = 2,
    destroyer = 3,
    torpedoBoat = 4
}

