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
            },
            {
                src: tigerHologramSpot,
                alt: 'Tiger Spot',
            },
        ],
    },
    {
        heading: 'Wolf Face',
        imgData: [
            {
                src: wolfHologram,
                alt: 'Wolf',
            },
            {
                src: wolfHologramSpot,
                alt: 'Wolf Spot',
            },
        ],
    },
    {
        heading: 'Whale',
        imgData: [
            {
                src: whaleHologram,
                alt: 'Whale',
            },
            {
                src: whaleHologramSpot,
                alt: 'Whale Spot',
            },
        ],
    },
    {
        heading: 'Butterfly',
        imgData: [
            {
                src: butterflyHologram,
                alt: 'Butterfly',
            },
            {
                src: butterflyHologramSpot,
                alt: 'Butterfly Spot',
            },
        ],
    },
    {
        heading: 'Butterfly 2',
        imgData: [
            {
                src: butterflyHologram2,
                alt: 'Butterfly 2',
            },
            {
                src: butterflyHologram2Spot,
                alt: 'Butterfly 2 Spot',
            },
        ],
    },
];

export default hologramData;