import Coordinate from './coordinate.model';

/** Class representing a particular tile of the battlefield. */
class Tile {
    public state = 0;
    public isShip = false;
    public isAroundShip = false;
    public position: Coordinate;

    /**
     * Create a particular tile of battlefield.
     * @param {object} coordinate - The instance of Coordanate class that contains X and Y coordinates of a particular tile.
     */
    constructor (coordinate: Coordinate) {
        this.position = coordinate;
    }
}

export default Tile;
