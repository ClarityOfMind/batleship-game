import Coordinate from '../models/coordinate.model';

/** Class representing a particular ship on the battlefield. */
export class Ship {
    public class: string;
    public health: number;
    public size: number;
    public deckCoordinates: Coordinate[];

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
    decreaseHealth () {
        --this.health;
        if (this.health === 0) {
            return false; // Ship is dead
        } else {
            return true; // Ship still alive
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

