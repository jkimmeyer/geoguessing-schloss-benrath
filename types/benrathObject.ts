export interface BenrathObject {
  title: string;
  subtitle?: string;
  description: string;
  room: Room;
  thumbnail: string;
  imageUrls: string[];
  friendlyId: string;
}

export enum Room {
  WomansWing = 1,
  DomeHall = 2,
  MansWing = 3,
  HexagonRoomEast = 4,
  BathEast = 5,
  MakeupRoomEast = 6,
  OvenRoomEast = 7,
  RoomNorthEast = 8,
  MakeupRoomSecondaryEast = 9,
  TiledRoomEast = 10,
  EntranceHall = 11,
  RoomNorthWest = 16,
  PlankedRoomWest = 17,
  HexagonRoomWest = 18,
  MakeupRoomWest = 19,
  MakeupRoomWestSecondary = 20,
}

export enum FriendlyId {
  Window = "object_01_window",
  Wineglass = "object_02_wineglass",
  DomeHallFresco = "object_02_domeHallFresco",
  Lake = "object_02_lake",
  Table = "object_03_table",
  Sofa = "object_04_sofa",
  Stucco = "object_05_stuck",
  Poudreuse = "object_06_poudreuse",
  Chair = "object_08_sessel",
  Clock = "object_11_uhr",
  Desk = "object_16_desk",
  Fresco = "object_18_fresco",
}
