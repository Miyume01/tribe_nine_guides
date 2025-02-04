import butterflyHologram2Spot from "./holograms/butterfly 2 spot.png";
import butterflyHologram2 from "./holograms/butterfly 2.png";
import butterflyHologramSpot from "./holograms/butterfly spot.png";
import butterflyHologram from "./holograms/butterfly.png";
import tigerHologramSpot from "./holograms/tiger spot.png";
import tigerHologram from "./holograms/tiger.png";
import whaleHologramSpot from "./holograms/whale spot.png";
import whaleHologram from "./holograms/whale.png";
import wolfHologramSpot from "./holograms/wolf spot.png";
import wolfHologram from "./holograms/wolf.png";

const hologramData = [
    {
        heading: 'Tiger',
        imgData: [
            {
                src: tigerHologram,
                alt: 'Tiger',
                allowModal:false,
            },
            {
                src: tigerHologramSpot,
                alt: 'Tiger Spot',
                allowModal:true,
            },
            
        ],
    },
    {
        heading: 'Wolf Face',
        imgData: [
            {
                src: wolfHologram,
                alt: 'Wolf',
                allowModal:false,
            },
            {
                src: wolfHologramSpot,
                alt: 'Wolf Spot',
                allowModal:true,
            },
        ],
    },
    {
        heading: 'Whale',
        imgData: [
            {
                src: whaleHologram,
                alt: 'Whale',
                allowModal:false,
            },
            {
                src: whaleHologramSpot,
                alt: 'Whale Spot',
                allowModal:true,
            },
        ],
    },
    {
        heading: 'Butterfly',
        imgData: [
            {
                src: butterflyHologram,
                alt: 'Butterfly',
                allowModal:false,
            },
            {
                src: butterflyHologramSpot,
                alt: 'Butterfly Spot',
                allowModal:true,
            },
        ],
    },
    {
        heading: 'Butterfly 2',
        imgData: [
            {
                src: butterflyHologram2,
                alt: 'Butterfly 2',
                allowModal:false,
            },
            {
                src: butterflyHologram2Spot,
                alt: 'Butterfly 2 Spot',
                allowModal:true,
            },
        ],
    },
];

export default hologramData;