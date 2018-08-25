import Behaviour from './behaviour';
import Coordinate from '../models/coordinate.model';

class ComputerBehaviour extends Behaviour {
    constructor () {
        super();
    }

    launchTorpedo (coordinate: Coordinate) {
        return coordinate;
    }

    getFired () {

    }

}
