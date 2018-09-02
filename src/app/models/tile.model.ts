import Coordinate from './coordinate.model';

/** Class representing a particular tile of the battlefield. */
class Tile {
    public state = 0;
    public isShip = false; // Indicate if any ship set up on the tile
    public isAroundShip = false; // Indicate if the tile is aneighbour of a ship
    public position: Coordinate; // Tile's position on the board
    public positionAtPort: undefined | Coordinate = undefined;
    /**
     * Create a particular tile of battlefield.
     * @param {object} coordinate - The instance of Coordanate class that contains X and Y coordinates of a particular tile.
     */
    constructor (coordinate: Coordinate) {
        this.position = coordinate;
    }
}

export default Tile;
