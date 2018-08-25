import Coordinate from '../models/coordinate.model';

abstract class Behaviour {
    constructor () {
    }

    abstract getFired (coordinate: Coordinate);

}

export default Behaviour;
