export interface BenrathObject {
  title: string,
  subtitle: string,
  description: string,
  room: Room,
  image: string,
  friendlyId: string,
}

enum Room {
  DomeHall = 1,
}

enum FriendlyId {
  Window = "object_01_window"
}

const window: BenrathObject = {
  title: "Spiegelweiher",
  subtitle: "Schönster See Benraths",
  description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  room: Room.DomeHall,
  image: "https://www.google.de",
  friendlyId: FriendlyId.Window,
}

export {
  window,
}
