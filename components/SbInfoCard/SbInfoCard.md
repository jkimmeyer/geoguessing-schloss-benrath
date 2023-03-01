## Info Card Default
```tsx

import * as nextImage from 'next/image';

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => <img {...props} />
});

import { Room, FriendlyId } from '../../types';

const couch = {
  title: "Muschelbett",
  subtitle: "Schlafen, wie eine Herrscherin",
  description: "Das Sofa wurde als Bett genutzt und ist von Elisabeth Augusta. Das Bett war Teil einer offenen Muschel, welche die gesamte Höhe der Bettnische einnahm. Dies geht aus Zeichnungen des Schlossarchitekten Nicolas de Pigage sowie aus Reisebereichten aus dem 18. Jahrhundert hervor.",
  room: Room.HexagonRoomEast,
  thumbnail: {
    url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677414819/detailshots/object_04_sofa/object_04_sofa_04_r7enky.jpg",
    width: 1920,
    height: 1080,
  },
  imageUrls: [
    "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677414814/detailshots/object_04_sofa_01_ll9ayj.jpg",
    "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677414819/detailshots/object_04_sofa_02_wvukqb.jpg",
    "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677414819/detailshots/object_04_sofa_03_vwohef.jpg",
    "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677414819/detailshots/object_04_sofa_04_r7enky.jpg"
  ],
  friendlyId: FriendlyId.Sofa,
};

<SbInfoCard benrathObject={couch}>Info Card</SbInfoCard>
```
