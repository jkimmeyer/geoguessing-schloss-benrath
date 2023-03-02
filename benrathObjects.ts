import { Room, FriendlyId, BenrathObject } from "./types"

const window: BenrathObject = {
  title: "Empfang mit Queen Elizabeth 2",
  subtitle: "1965",
  description: "Am 25. Mai 1965 besuchte Elizabeth II Schloss Benrath. Sie stand flankiert von Ministerpräsident Franz Meyers und Prinz Philip und begrüßte Mitglieder der britischen Kolonie  auf der regennassen Südterrasse.",
  room: Room.WomansWing,
  thumbnail: {
    url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677748909/detailshots/object_01_window/object_01_window_01_evztq8.jpg",
    alt: "Queen Elisabeth",
    width: 924,
    height: 616,
  },
  imageUrls: [
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677748909/detailshots/object_01_window/object_01_window_01_evztq8.jpg",
      alt: "Queen Elisabeth beim Schloss Benrath",
      width: 924,
      height: 616
    },
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677414821/detailshots/object_01_window/object_01_window_03_trcz7n.jpg",
      alt: "Front-Ansicht Schloss Benrath aus Entfernung",
      width: 6000,
      height: 4000,
    },
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677414820/detailshots/object_01_window/object_01_window_02_q9aezv.jpg",
      alt: "Front-Ansicht Schloss Benrath",
      width: 6000,
      height: 4000,
}
],
  friendlyId: FriendlyId.Window,
}

const wineglass: BenrathObject = {
  title: "Weinglasabdruck",
  subtitle: "",
  description: "Die Getränkeausgabe war nicht in der Küche, sondern in der Nähe der Festtafel positioniert, und so konnten beim Öffnen von Champagnerflaschen oder beim Anzapfen von Bierfässern die Inhalte gelegentlich fontänenartig gegen die gefassten Wandpaneelen und Türen spritzen. Nicht selten entstanden dabei auch Flecken auf den Parkettböden. Während der Empfänge im Kuppelsaal stellten die Gäste ihre Gläser auf den Kamin simsen, Konsoltischen und auf die Stuckmarmorsockel der Putten mit Füllhörnern ab, was nachträglich an den sich abzeichnenden Ringen auf den kostbaren Oberflächen zu erkennen war. Zum Schutz dieser Flächen wurden ab 1963 passgenaue Glasplatten aufgelegt, wovon je doch die Puttensockel ausgenommen waren. Diese zeigen noch heute zahlreiche Ringe, die von Gläsern und Kaffee tassen herrühren.",
  room: Room.DomeHall,
  thumbnail: {
    url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677421657/detailshots/object_02_wineglass/object_02_wineglass_02_dxhjpq.jpg",
    alt: "Weinglasabdruck im Kuppelsaal",
    width: 6000,
    height: 4000,
  },
  imageUrls: [
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677421657/detailshots/object_02_wineglass/object_02_wineglass_02_dxhjpq.jpg",
      alt: "Weinglasabdruck im Kuppelsaal",
      width: 6000,
      height: 4000,
    },
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677421657/detailshots/object_02_wineglass/object_02_wineglass_01_h4neps.jpg",
      alt: "Weinglasabdruck im Kuppelsaal",
      width: 6000,
      height: 4000,
    },
  ],
  friendlyId: FriendlyId.Wineglass,
}

const domeHallFresco: BenrathObject = {
  title: "Jägerbild an der Decke",
  description: "Das Deckengemälde des Künstlers, Wilm Lambert, zeigt Diane, die Göttin der Jagd und des Mondes aus der römischen Mythologie. Bei Mondschein bricht sie hier zur Jagd auf und wird dabei von ihren Gefährtinnen begleitet. Diana sitzt auf einer Kutsche, die von weißen Hirschkühen gezogen wird. Die dargestellte Jagdgesellschaft ist ausgestattet mit Pfeil und Bogen, sowie schweren Jagdhörnern. Damit sind übrigens auch schon ein paar Erkennungsmerkmale genannt, mit der man die Jacke gut erkennen kann. Auch im Stuck an den Wänden des Kursaals lassen sich viele Jagdmotive entdecken.",
  room: Room.DomeHall,
  thumbnail: {
    url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677419600/detailshots/object_02_domeHallFresco/object_02_domeHallFresco_01_zrxpgo.jpg",
    alt: "Jägerfresco im Kuppelsaal",
    width: 6000,
    height: 4000,
  },
  imageUrls: [
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677419600/detailshots/object_02_domeHallFresco/object_02_domeHallFresco_01_zrxpgo.jpg",
      alt: "Jägerfresco im Kuppelsaal",
      width: 6000,
      height: 4000,
    },
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677419601/detailshots/object_02_domeHallFresco/object_02_domeHallFresco_02_tbra6k.jpg",
      alt: "Jägerfresco im Kuppelsaal",
      width: 6000,
      height: 4000,
    },
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677419599/detailshots/object_02_domeHallFresco/object_02_domeHallFresco_03_kfvjqj.jpg",
      alt: "Jägerfresco im Kuppelsaal",
      width: 6000,
      height: 4000,
    },
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677419579/detailshots/object_02_domeHallFresco/object_02_domeHallFresco_04_d8qhub.jpg",
      alt: "Jägerfresco im Kuppelsaal",
      width: 6000,
      height: 4000,
    }
  ],
  friendlyId: FriendlyId.DomeHallFresco,
}

const lake: BenrathObject = {
  title: "Spiegelweiher",
  description: "Der 470 Meter lange Spiegelweiher bildet die Hauptachse und entspricht der im Gebäude  liegenden Mittelachse mit Vestibül und Kuppelsaal. Der Weiher wird von  Rasenstreifen und hohen Bäumen gesäumt. Sein reflektierender Wasserspiegel verstärkt den Lichteinfall in die Räume des Schlosses, welches sich wiederum von ferne gesehen in der ruhigen Wasserfläche spiegelt.",
  room: Room.WomansWing,
  thumbnail: {
    url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677749083/detailshots/object_02_lake/object_02_lake_01_sjvfnb.jpg",
    alt: "Spiegelweiher mit Schloss im Hintergrund",
    width: 672,
    height: 448,
  },
  imageUrls: [
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677749083/detailshots/object_02_lake/object_02_lake_01_sjvfnb.jpg",
      alt: "Spiegelweiher mit Schloss im Hintergrund",
      width: 672,
      height: 448,
    },
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677421444/detailshots/object_02_lake/object_02_lake_02_gjfut0.jpg",
      alt: "Spiegelweiher aus Sicht des Schlosses",
      width: 6000,
      height: 4000,
    }
  ],
  friendlyId: FriendlyId.Lake,
}

const table: BenrathObject = {
  title: "Konsolentisch",
  subtitle: "Bei Empfangsvorbereitungen wurde das Bein abgebrochen",
  description: "Klimatisch bedingte Schände entwickeln sich durch Quell- und Schwindprozesse der unterschiedlichen verbauten Materialien langsam, dafür jedoch in einem beträchtlichen Ausmaß. Erst mit der Zeit wurden Rissbildungen und Verformungen an den Parketthölzern sichtbar, zu deren Entstehung auch die Beheizung mancher Kellerräume beitrug. Vergleichbare Schadensphänomene zeigten sich an den Wandvertäfelungen – aufstehende und sich ablösende Fassungsschichten deuteten auf Bereiche des Holzträgers hin, die Risse und geöffnete Fugen aufwiesen. Aufbrechende und sich lösende Fassungsschichten waren zudem an den mit Polimentvergoldung versehenen Zierleisten, Rahmen und Konsoltischen zu verzeichnen.",
  room: Room.DomeHall,
  thumbnail: {
    url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677421997/detailshots/object_03_table/object_03_table_01_esojhc.jpg",
    alt: "Konsolentisch mit repariertem Bein",
    width: 6000,
    height: 4000,
  },
  imageUrls: [
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677421997/detailshots/object_03_table/object_03_table_01_esojhc.jpg",
      alt: "Konsolentisch mit repariertem Bein",
      width: 6000,
      height: 4000,
    },
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677421997/detailshots/object_03_table/object_03_table_02_dsfhwl.jpg",
      alt: "Konsolentisch mit repariertem Bein",
      width: 6000,
      height: 4000,
    }
  ],
  friendlyId: FriendlyId.Table,
}

const sofa: BenrathObject = {
  title: "Muschelbett",
  subtitle: "Schlafen, wie eine Herrscherin",
  description: "Das Sofa wurde als Bett genutzt und ist von Elisabeth Augusta. Das Bett war Teil einer offenen Muschel, welche die gesamte Höhe der Bettnische einnahm. Dies geht aus Zeichnungen des Schlossarchitekten Nicolas de Pigage sowie aus Reisebereichten aus dem 18. Jahrhundert hervor.",
  room: Room.HexagonRoomEast,
  thumbnail: {
    url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677749171/detailshots/object_04_sofa/object_04_sofa_01_ll9ayj.jpg",
    alt: "Raum mit eingezeichnetem Muschelbett",
    width: 1551,
    height: 1034,
  },
  imageUrls: [
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677749171/detailshots/object_04_sofa/object_04_sofa_01_ll9ayj.jpg",
      alt: "Raum mit eingezeichnetem Muschelbett",
      width: 1551,
      height: 1034,
    },
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677414819/detailshots/object_04_sofa/object_04_sofa_02_wvukqb.jpg",
      alt: "Totalaufnahme des Muschelbett",
      width: 6000,
      height: 4000,
    },
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677414819/detailshots/object_04_sofa/object_04_sofa_03_vwohef.jpg",
      alt: "Detailaufnahme des Stoffes des Muschelbett",
      width: 6000,
      height: 4000,
    },
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677414819/detailshots/object_04_sofa/object_04_sofa_04_r7enky.jpg",
      alt: "Detailaufnahme des Stoffes des Muschelbett",
      width: 6000,
      height: 4000,
    }
  ],
  friendlyId: FriendlyId.Sofa,
}

const stuck: BenrathObject = {
  title: "Badezimmer",
  subtitle: "Kunstwerk aus Stuck",
  description: "Die Bäder manifestieren einmal mehr, dass die Raumökonomie des kurfürstlichen Landschlosses rationalen. An Sprüchen folgte, was ihrer luxuriösen Ausstattung jedoch keinen Abbruch tat. Beide Bäder bestehen aus großen Nischen, die unmittelbar an den Hof angrenzen. Die Wände zieren künstlerisch großartige Stuckdekorationen: Im Bad des Kurfürsten bildet der Stuck eine Eichenlaub Grotte, in deren Zentrum zwei Satyrputten eine Amphora halten, unter der die Wanne platziert werden sollte. Im Bad der Kurfürstin bildet eine stuckierte Tropfstein wand den unteren Bereich. Zwei weibliche Hermen tragen ein gebauschtes Tuch, das den oberen Bereich verdeckt.",
  room: Room.BathEast,
  thumbnail: {
    url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677753477/detailshots/object_05_stuck/object_05_stuck-01_a6favb.jpg",
    alt: "Stuckverzierte Wand eines Badezimmers",
    width: 2958,
    height: 1972,
  },
  imageUrls: [
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677753477/detailshots/object_05_stuck/object_05_stuck-01_a6favb.jpg",
      alt: "Stuckverzierte Wand eines Badezimmers",
      width: 2958,
      height: 1972,
    },
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677690669/detailshots/object_05_stuck/object_05_stuck-02_pehjgc.jpg",
      alt: "Detailaufnahme einer stuckverzierten Wand eines Badezimmers",
      width: 6000,
      height: 4000,
    },
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677690673/detailshots/object_05_stuck/object_05_stuck-03_dcrmcn.jpg",
      alt: "Detailaufnahme einer stuckverzierten Wand eines Badezimmers",
      width: 6000,
      height: 4000,
    }],
  friendlyId: FriendlyId.Stucco,
}

const poudreuse: BenrathObject = {
  title: "Poudreuse",
  subtitle: "Der historische Schminktisch",
  description: "Möbeltyp entstand um 1745 in Frankreich. Mittelplatte lässt sich herausziehen und als Spiegel aufstellen. Infos in Buch",
  room: Room.MakeupRoomEast,
  thumbnail: {
    url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677690712/detailshots/object_06_poudreuse/object_06_poudreuse-01_vm96gz.jpg",
    alt: "Detailaufnahme auf das Schloss der Poudreuse",
    width: 6000,
    height: 4000,
  },
  imageUrls: [
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677690712/detailshots/object_06_poudreuse/object_06_poudreuse-01_vm96gz.jpg",
      alt: "Detailaufnahme auf das Schloss der Poudreuse",
      width: 6000,
      height: 4000,
    },
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677690712/detailshots/object_06_poudreuse/object_06_poudreuse-02_apyo0p.jpg",
      alt: "Totalaufnahme der Poudreuse",
      width: 6000,
      height: 4000,
    }
  ],
  friendlyId: FriendlyId.Poudreuse,
}

const sessel: BenrathObject = {
  title: "Sessel mit Seidenbezug",
  subtitle: "Sitzen, wie eine Herrscherin",
  description: "Sessel mit gelbem Seidenbezug aus erster Ausstattungsphase um ca. 1770. Muster passend zur Tapete. Besonders hierbei: Die weite Sitzöffnung. So war es auch Damen, die in Röcken gekleidet waren, erlaubt, sich leicht seitlich auf den Sessel zu setzen und sich von ihrer 'schönen' Seite zu zeigen.",
  room: Room.RoomNorthEast,
  thumbnail: {
    url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677690868/detailshots/object_08_sessel/object_08_sessel-01_lyr2ic.jpg",
    alt: "Totalaufnahme des Sessels",
    width: 6000,
    height: 4000,
  },
  imageUrls: [
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677690868/detailshots/object_08_sessel/object_08_sessel-01_lyr2ic.jpg",
      alt: "Totalaufnahme des Sessels",
      width: 6000,
      height: 4000,
    },
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677690876/detailshots/object_08_sessel/object_08_sessel-02_l3nqb1.jpg",
      alt: "Detailaufnahme auf den Stoff des Sessels",
      width: 6000,
      height: 4000,
    }
  ],
  friendlyId: FriendlyId.Chair,
}

const uhr: BenrathObject = {
  title: "Uhren",
  subtitle: "Eine einzigartige Sammlung",
  description: "In vielen Räumen des Schlossen findet man heute noch historische Uhren. Viele stehen auf Kaminsimsen und Möblen oder hängen an den Seidentapenten. Noch heute verfügt das Schloss über drei fest verbaute Uhren, von denen zwei in Jahre 1771 hergestellt wurden. Viele Wand- und Kaminuhren aus der Urspruchgsausstattung gingen durch veränderte Besitzverhätnisse verloren. Seit 1945 wurde immer mehr Aufmerksamkeit auf die ergäzung der Sammlung gelegt. Vor kurzem wurde eine sehr besondere Tischpendeluhr, die der kurpfälzische Uhrmacher Guillaume Cornille um 1770 in Düsseldorf für das Schloss Benrath anfertigte, erworben.",
  room: Room.EntranceHall,
  thumbnail: {
    url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677690928/detailshots/object_11_uhr/object_11_uhr-01_ho46ow.jpg",
    alt: "Historische Deckenuhr mit umgebendem Stuck",
    width: 6000,
    height: 4000,
  },
  imageUrls: [
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677690928/detailshots/object_11_uhr/object_11_uhr-01_ho46ow.jpg",
      alt: "Historische Deckenuhr mit umgebendem Stuck",
      width: 6000,
      height: 4000,
    },
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677419600/detailshots/object_11_uhr/object_11_uhr_02_lgh9hc.jpg",
      alt: "Historische Deckenuhr mit umgebendem Stuck",
      width: 6000,
      height: 4000,
    }
  ],
  friendlyId: FriendlyId.Clock,
}

const desk: BenrathObject = {
  title: "Schreibschrank",
  subtitle: "Schreiben, wie ein König",
  description: "Dieser Schreibschrank wurde zur selben Zeit, wie das Schloss gefertigt, also um 1770. Er wurde für das Kurfürstenpaar Elisabeth Auguste und Karl Theodor in einer Mannheimer Werkstatt gefertigt. Ein Hinweis darauf findet man auf den beiden Vordertüren. Sie sind sehr kunstvoll mit den Porträts der beiden geschmückt. Dies ist übrigens das einzige Möbelstück, das existiert, das die Porträts so kunstvoll zeigt.",
  room: Room.RoomNorthWest,
  thumbnail: {
    url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677690995/detailshots/object_16_desk/object_16_desk-01_zsdhlo.jpg",
    alt: "Schrank mit Schreibtisch und Schubladen",
    width: 6000,
    height: 4000,
  },
  imageUrls: [
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677690995/detailshots/object_16_desk/object_16_desk-01_zsdhlo.jpg",
      alt: "Schrank mit Schreibtisch Schubladen",
      width: 6000,
      height: 4000,
    },
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677690995/detailshots/object_16_desk/object_16_desk-02_u1asms.jpg",
      alt: "Schrank mit Portät von Elisabeth Auguste",
      width: 6000,
      height: 4000,
    },
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677690995/detailshots/object_16_desk/object_16_desk-03_okvdlu.jpg",
      alt: "Armaturen des Schranks mit Schreibtisch",
      width: 6000,
      height: 4000,
    }
  ],
  friendlyId: FriendlyId.Desk,
}

const fresco: BenrathObject = {
  title: "Deckenfresco",
  description: "Das Deckenfresco zeigt eine Stilisierung der vier Jahreszeiten in Form von Engelsfiguren.",
  room: Room.HexagonRoomWest,
  thumbnail: {
    url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677692978/detailshots/object_18_fresco/object_18_fresco-01_b4osto.jpg",
    alt: "Deckenfresco zum Thema vier Jahreszeiten",
    width: 6000,
    height: 4000,
  },
  imageUrls: [
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677692978/detailshots/object_18_fresco/object_18_fresco-01_b4osto.jpg",
      alt: "Deckenfresco zum Thema vier Jahreszeiten",
      width: 6000,
      height: 4000,
    },
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677692976/detailshots/object_18_fresco/object_18_fresco-02_otxdhk.jpg",
      alt: "Deckenfresco mit Engelsabbildung",
      width: 6000,
      height: 4000,
    },
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677692975/detailshots/object_18_fresco/object_18_fresco-03_gil9pj.jpg",
      alt: "Deckenfresco mit Engelsabbildung",
      width: 6000,
      height: 4000,
    },
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677692975/detailshots/object_18_fresco/object_18_fresco-04_s0ycww.jpg",
      alt: "Deckenfresco mit Engelsabbildung",
      width: 6000,
      height: 4000,
    }
  ],
  friendlyId: FriendlyId.Fresco,
}

const tableclockLeft: BenrathObject = {
  title: "Tischuhr mit Löwenköpfen und Henkelvase",
  description: "Das prunkvoll gestaltete Uhrgehäuse aus feuervergoldeter Bronze wurde im »Livre de desseins« als »Piece de bureau à la romaine« dem sonst unbekannten Bronzier Le Duc zugeschrieben. Das Gehäuse ist auf einer querrechteckigen, ebonisierten Holzbasis montiert, die auf Löwentatzen steht. Seitlich wird der Holzsockel mit vergoldeten Applikationen geschmückt, unter andere zwei Löwenköpfe mit Ringen in den Mäulern. Die Uhrwerkstrommel trägt rechts und links zwei Löwenmasken, die Tuchdraperien in den Mäulern tragen. Das prunkvolle Uhrgehäuse bekrönt eine große antikische Henkelvase. Das Uhrwerk besitzt eine Laufdauer von 14 Tagen und einen Viertelstundenschlag auf zwei rückwärtig angebrachten Bronzeglocken. Im preußischen Inventar von 1882 wird die Uhr nicht mehr erwähnt, so dass davon ausgegangen werden muss, dass sie auf unbekanntem Wege das Schloss verlassen hat. Die älteste sichere Provenienzangabe stammt aus dem Jahr 2004, als die Uhr als Teil der Sammlung von Galen bei Sotheby’s in Amsterdam verkauft wurde. Auf welchen Wegen und wann die Uhr in die Sammlung der weitverzweigten Familie von Galen gelangte, ist ungeklärt. Zunächst heiratete Maria Anna Ferdinande Gräfin von Galen 1850 August Wilhelm Graf von Spee. Die Nähe zum preußischen Hof lässt es als möglich erscheinen, dass die Uhr im 19. Jahrhundert als Geschenk an einen Vertreter/eine Vertreterin der Familie von Galen ging.",
  room: Room.HexagonRoomWest,
  thumbnail: {
    url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677691076/detailshots/object_18_tableclock-left/object_18_tableclock-left-01_nkvwya.jpg",
    alt: "Goldene Tischuhr mit Verzierungen",
    width: 6000,
    height: 4000,
  },
  imageUrls: [
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677691076/detailshots/object_18_tableclock-left/object_18_tableclock-left-01_nkvwya.jpg",
      alt: "Goldene Tischuhr mit Verzierungen",
      width: 6000,
      height: 4000,
    },
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677691076/detailshots/object_18_tableclock-left/object_18_tableclock-left-02_zpkcfh.jpg",
      alt: "Goldene Tischuhr mit Verzierungen",
      width: 6000,
      height: 4000,
    }
  ],
  friendlyId: FriendlyId.TableclockLeft,
}


const tableclockRight: BenrathObject = {
  title: "Tischuhr mit Kurpfälzischem Wappen",
  description: "Diese außergewöhnliche Tischuhr stammt vermutlich aus dem persönlichen Besitz von Kurfürst Carl Theodor, dem Bauherrn von Schloss Benrath, wie die figürlichen bzw. heraldischen Darstellungen nahelegen. Auf einer von vier Füßen getragenen Marmorplatte steht das aus Messingblech montierte kubische Uhrgehäuse. Es wird von vier Obelisken in den Ecken flankiert. Das Gehäuse besteht aus einem Sockel, der mit Palmetten verziert ist. Auf diesem setzt sich das schlichte Uhrgehäuse fort. Auf den vergoldeten Messingblechen sind aufwendige Handgravuren angebracht; an den Ecken sitzen vier Löwenköpfe. Zwei ornamental durchbrochene Seitentüren geben den Blick auf das Uhrwerk frei. Bekrönt wird die Uhr von einer Verdachung, die an der Front und an der Rückseite jeweils die Gravur einer Ordenskette zeigt. Hierbei handelt es sich um den Orden vom Goldenen Vlies und um den Sankt-Georgs- Ritterorden. Das Uhrwerk aus Messing und Stahl ist süddeutsch-österreichischen Typs und hat eine Gangdauer von 30 Stunden. Halbe und Volle Stunden werden von einem Rechenschlagwerk gesteuert und auf einer innenliegenden Bronzeglocke angeschlagen. Das Uhrwerk kann aufgrund seiner Bauweise Martin Krapp II (1744 - 1791) zugeschrieben werden.",
  room: Room.HexagonRoomWest,
  thumbnail: {
    url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677691142/detailshots/object_18_tableclock-right/object_18_tableclock-right-01_gdisfj.jpg",
    alt: "Goldene Tischuhr mit Löwen-Wappen",
    width: 6000,
    height: 4000,
  },
  imageUrls: [
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677691142/detailshots/object_18_tableclock-right/object_18_tableclock-right-01_gdisfj.jpg",
      alt: "Goldene Tischuhr mit Löwen-Wappen",
      width: 6000,
      height: 4000,
    },
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677691140/detailshots/object_18_tableclock-right/object_18_tableclock-right-02_sorszc.jpg",
      alt: "Sockel der Goldenen Tischuhr",
      width: 6000,
      height: 4000,
    },
    {
      url: "https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677691141/detailshots/object_18_tableclock-right/object_18_tableclock-right-03_heh3rg.jpg",
      alt: "Löwenabbildung der goldenen Tischuhr",
      width: 6000,
      height: 4000,
    }
  ],
  friendlyId: FriendlyId.TableclockRight,
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
  fresco,
  tableclockLeft,
  tableclockRight
}
