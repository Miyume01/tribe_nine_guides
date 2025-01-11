// import doroImage from './doro.png';
import BatterImg from './cards_format/batter.png';
import CheerzyImg from './cards_format/Cheerzy.png';
import DefenderImg from './cards_format/defender.png';
import DoubleSpeedImg from './cards_format/double-speed.png';
import EndroneImg from './cards_format/Endrone.png';
import HammerImg from './cards_format/hammer.png';
import LaserDroneImg from './cards_format/laser-drone.png';
import MameezeImg from './cards_format/Mameeze.png';
import OrbDroneImg from './cards_format/orb-drone.png';
import PenaltyImg from './cards_format/Penalty.png';
import RiderImg from './cards_format/Rider.png';
import ScheezeImg from './cards_format/Scheeze.png';
import SHARKImg from './cards_format/SHARK1.png';

const enemiesURL = [
    { name: 'Cheerzy (Speed)', url: '/enemies/cheerzy-speed', image: CheerzyImg, id: 'enemy-cheerzy' },
    { name: 'Laser Drone', url: '/enemies/laser-drone', image: LaserDroneImg, id: 'enemy-laser-drone' },
    { name: 'Orb Drone', url: '/enemies/orb-drone', image: OrbDroneImg, id: 'enemy-orb-drone' },
    { name: 'Shinagawa Tribe (Hammer)', url: '/enemies/shinagawa-tribe-hammer', image: HammerImg, id: 'enemy-shinagawa-hammer' },
    { name: 'Shinagawa Tribe (Rider)', url: '/enemies/shinagawa-tribe-rider', image: RiderImg, id: 'enemy-shinagawa-rider' },
    { name: 'Shinagawa Tribe (Batter)', url: '/enemies/shinagawa-tribe-batter', image: BatterImg, id: 'enemy-shinagawa-batter' },
    { name: 'Minion in White (Defender)', url: '/enemies/minion-in-white-defender', image: DefenderImg, id: 'enemy-minion-defender' },
    { name: 'Minion in White (Double Speed)', url: '/enemies/minion-in-white-double-speed', image: DoubleSpeedImg, id: 'enemy-minion-double-speed' },
    { name: 'Scheeze', url: '/enemies/scheeze', image: ScheezeImg, id: 'enemy-scheeze' },
    { name: 'Mameeze', url: '/enemies/mameeze', image: MameezeImg, id: 'enemy-mameeze' },
    { name: 'Endrone', url: '/enemies/endrone', image: EndroneImg, id: 'enemy-endrone' },
    { name: 'S.H.A.R.K', url: '/enemies/shark', image: SHARKImg, id: 'enemy-shark' },
    { name: 'Death Penalty', url: '/enemies/death-penalty', image: PenaltyImg, id: 'enemy-death-penalty' },
];


export default enemiesURL;