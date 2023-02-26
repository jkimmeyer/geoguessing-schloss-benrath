export interface BenrathObject {
  title: string,
  subtitle: string,
  description: string,
  room: Room,
  thumbnail: string,
  imageUrls: string[],
  friendlyId: string,
}

enum Room {
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
  MakeupRoomWestSecondary = 20
}

enum FriendlyId {
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

const window: BenrathObject = {
  title: "Empfang mit Queen Elizabeth 2",
  subtitle: "1965",
  description: "Am 25. Mai 1965 besuchte Elizabeth II Schloss Benrath. Sie stand flankiert von Ministerpräsident Franz Meyers und Prinz Philip und begrüßte Mitglieder der britischen Kolonie  auf der regennassen Südterrasse.",
  room: Room.WomansWing,
  thumbnail: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677414814/detailshots/object_01_window_01_evztq8.jpg",
  imageUrls: [
    "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677414814/detailshots/object_01_window_01_evztq8.jpg",
    "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677414821/detailshots/object_01_window_03_trcz7n.jpg",
    "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677414820/detailshots/object_01_window_02_q9aezv.jpg"
],
  friendlyId: FriendlyId.Window,
}

const wineglass: BenrathObject = {
  title: "Weinglasabdruck",
  subtitle: "",
  description: "Die Getränkeausgabe war nicht in der Küche, sondern in der Nähe der Festtafel positioniert, und so konnten beim Öffnen von Champagnerflaschen oder beim Anzapfen von Bierfässern die Inhalte gelegentlich fontänenartig gegen die gefassten Wandpaneelen und Türen spritzen. Nicht selten entstanden dabei auch Flecken auf den Parkettböden. Während der Empfänge im Kuppelsaal stellten die Gäste ihre Gläser auf den Kamin simsen, Konsoltischen und auf die Stuckmarmorsockel der Putten mit Füllhörnern ab, was nachträglich an den sich abzeichnenden Ringen auf den kostbaren Oberflächen zu erkennen war. Zum Schutz dieser Flächen wurden ab 1963 passgenaue Glasplatten aufgelegt, wovon je doch die Puttensockel ausgenommen waren. Diese zeigen noch heute zahlreiche Ringe, die von Gläsern und Kaffee tassen herrühren.",
  room: Room.DomeHall,
  thumbnail: "",
  imageUrls: [],
  friendlyId: FriendlyId.Wineglass,
}

const domeHallFresco: BenrathObject = {
  title: "Jägerbild an der Decke",
  subtitle: "",
  description: "Das Deckengemälde des Künstlers, Wilm Lambert, zeigt Diane, die Göttin der Jagd und des Mondes aus der römischen Mythologie. Bei Mondschein bricht sie hier zur Jagd auf und wird dabei von ihren Gefährtinnen begleitet. Diana sitzt auf einer Kutsche, die von weißen Hirschkühen gezogen wird. Die dargestellte Jagdgesellschaft ist ausgestattet mit Pfeil und Bogen, sowie schweren Jagdhörnern. Damit sind übrigens auch schon ein paar Erkennungsmerkmale genannt, mit der man die Jacke gut erkennen kann. Auch im Stuck an den Wänden des Kursaals lassen sich viele Jagdmotive entdecken.",
  room: Room.DomeHall,
  thumbnail: "",
  imageUrls: [],
  friendlyId: FriendlyId.DomeHallFresco,
}

const lake: BenrathObject = {
  title: "Spiegelweiher",
  subtitle: "",
  description: "Der 470 Meter lange Spiegelweiher bildet die Hauptachse und entspricht der im Gebäude  liegenden Mittelachse mit Vestibül und Kuppelsaal. Der Weiher wird von  Rasenstreifen und hohen Bäumen gesäumt. Sein reflektierender Wasserspiegel verstärkt den Lichteinfall in die Räume des Schlosses, welches sich wiederum von ferne gesehen in der ruhigen Wasserfläche spiegelt.",
  room: Room.WomansWing,
  thumbnail: "",
  imageUrls: [],
  friendlyId: FriendlyId.Lake,
}

const table: BenrathObject = {
  title: "Konsolentisch",
  subtitle: "Bei Empfangsvorbereitungen wurde das Bein abgebrochen",
  description: "Klimatisch bedingte Schände entwickeln sich durch Quell- und Schwindprozesse der unterschiedlichen verbauten Materialien langsam, dafür jedoch in einem beträchtlichen Ausmaß. Erst mit der Zeit wurden Rissbildungen und Verformungen an den Parketthölzern sichtbar, zu deren Entstehung auch die Beheizung mancher Kellerräume beitrug. Vergleichbare Schadensphänomene zeigten sich an den Wandvertäfelungen – aufstehende und sich ablösende Fassungsschichten deuteten auf Bereiche des Holzträgers hin, die Risse und geöffnete Fugen aufwiesen. Aufbrechende und sich lösende Fassungsschichten waren zudem an den mit Polimentvergoldung versehenen Zierleisten, Rahmen und Konsoltischen zu verzeichnen.",
  room: Room.DomeHall,
  thumbnail: "",
  imageUrls: [],
  friendlyId: FriendlyId.Table,
}

const sofa: BenrathObject = {
  title: "Muschelbett",
  subtitle: "Schlafen, wie eine Herrscherin",
  description: "Das Sofa wurde als Bett genutzt und ist von Elisabeth Augusta. Das Bett war Teil einer offenen Muschel, welche die gesamte Höhe der Bettnische einnahm. Dies geht aus Zeichnungen des Schlossarchitekten Nicolas de Pigage sowie aus Reisebereichten aus dem 18. Jahrhundert hervor.",
  room: Room.HexagonRoomEast,
  thumbnail: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677414814/detailshots/object_04_sofa_01_ll9ayj.jpg",
  imageUrls: [
    "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677414814/detailshots/object_04_sofa_01_ll9ayj.jpg",
    "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677414819/detailshots/object_04_sofa_02_wvukqb.jpg",
    "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677414819/detailshots/object_04_sofa_03_vwohef.jpg",
    "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677414819/detailshots/object_04_sofa_04_r7enky.jpg"
  ],
  friendlyId: FriendlyId.Sofa,
}

const stuck: BenrathObject = {
  title: "Badezimmer",
  subtitle: "Kunstwerk aus Stuck",
  description: "Die Bäder manifestieren einmal mehr, dass die Raumökonomie des kurfürstlichen Landschlosses rationalen. An Sprüchen folgte, was ihrer luxuriösen Ausstattung jedoch keinen Abbruch tat. Beide Bäder bestehen aus großen Nischen, die unmittelbar an den Hof angrenzen. Die Wände zieren künstlerisch großartige Stuckdekorationen: Im Bad des Kurfürsten bildet der Stuck eine Eichenlaub Grotte, in deren Zentrum zwei Satyrputten eine Amphora halten, unter der die Wanne platziert werden sollte. Im Bad der Kurfürstin bildet eine stuckierte Tropfstein wand den unteren Bereich. Zwei weibliche Hermen tragen ein gebauschtes Tuch, das den oberen Bereich verdeckt.",
  room: Room.BathEast,
  thumbnail: "",
  imageUrls: [],
  friendlyId: FriendlyId.Stucco,
}

const poudreuse: BenrathObject = {
  title: "Poudreuse",
  subtitle: "Der historische Schminktisch",
  description: "Möbeltyp entstand um 1745 in Frankreich. Mittelplatte lässt sich herausziehen und als Spiegel aufstellen. Infos in Buch",
  room: Room.MakeupRoomEast,
  thumbnail: "",
  imageUrls: [],
  friendlyId: FriendlyId.Poudreuse,
}

const sessel: BenrathObject = {
  title: "Sessel mit Seidenbezug",
  subtitle: "Sitzen, wie eine Herrscherin",
  description: "Sessel mit gelbem Seidenbezug aus erster Ausstattungsphase um ca. 1770. Muster passend zur Tapete. Besonders hierbei: Die weite Sitzöffnung. So war es auch Damen, die in Röcken gekleidet waren, erlaubt, sich leicht seitlich auf den Sessel zu setzen und sich von ihrer 'schönen' Seite zu zeigen.",
  room: Room.RoomNorthEast,
  thumbnail: "",
  imageUrls: [],
  friendlyId: FriendlyId.Sofa,
}

const uhr: BenrathObject = {
  title: "Uhren",
  subtitle: "Eine einzigartige Sammlung",
  description: "In vielen Räumen des Schlossen findet man heute noch historische Uhren. Viele stehen auf Kaminsimsen und Möblen oder hängen an den Seidentapenten. Noch heute verfügt das Schloss über drei fest verbaute Uhren, von denen zwei in Jahre 1771 hergestellt wurden. Viele Wand- und Kaminuhren aus der Urspruchgsausstattung gingen durch veränderte Besitzverhätnisse verloren. Seit 1945 wurde immer mehr Aufmerksamkeit auf die ergäzung der Sammlung gelegt. Vor kurzem wurde eine sehr besondere Tischpendeluhr, die der kurpfälzische Uhrmacher Guillaume Cornille um 1770 in Düsseldorf für das Schloss Benrath anfertigte, erworben.",
  room: Room.EntranceHall,
  thumbnail: "",
  imageUrls: [],
  friendlyId: FriendlyId.Clock,
}

const desk: BenrathObject = {
  title: "Schreibschrank",
  subtitle: "Schlafen, wie eine Herrscherin",
  description: "Dieser Schreibschrank wurde zur selben Zeit, wie das Schloss gefertigt, also um 1770. Er wurde für das Kurfürstenpaar Elisabeth Auguste und Karl Theodor in einer Mannheimer Werkstatt gefertigt. Ein Hinweis darauf findet man auf den beiden Vordertüren. Sie sind sehr kunstvoll mit den Porträts der beiden geschmückt. Dies ist übrigens das einzige Möbelstück, das existiert, das die Porträts so kunstvoll zeigt.",
  room: Room.RoomNorthWest,
  thumbnail: "",
  imageUrls: [],
  friendlyId: FriendlyId.Desk,
}

const fresco: BenrathObject = {
  title: "Deckenfresco",
  subtitle: "",
  description: "Das Deckenfresco zeigt eine Stilisierung der vier Jahreszeiten in Form von Engelsfiguren.",
  room: Room.HexagonRoomWest,
  thumbnail: "",
  imageUrls: [],
  friendlyId: FriendlyId.Fresco,
}

export {
  table,
  window,
  wineglass,
  domeHallFresco,
  lake,
  sofa,
  stuck,
  poudreuse,
  sessel,
  uhr,
  desk,
  fresco
}
