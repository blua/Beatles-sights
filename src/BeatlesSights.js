const sights =  { beatlesSights :
	[{
		id: "paul_child",
		name: "Paul's childhood home",
		location: {lat: 53.369667, lng: -2.897889},
		foursquareID: "4c4854ad76d72d7f3b00404d",
		description: "20 Fortlin Road is the house where Paul lived with his parents Jim and Mary and his brother Michael from 1955 to 1963. Tours of the interior are available with the National Trust.",
		keywords: ["paul mccartney", "macca", "20 fortlin road"]
	},{
		id: "john_child",
		name: "John's childhood home",
		location: {lat: 53.377222, lng: -2.881389},
		foursquareID: "4c1a117e95e89521e42557e7",
		description: "Located at 251 Menlove Avenue, Mendips is the house where John was brought up by his Aunt Mimi and Uncle George. Tours of the interior are available with the National Trust.",
		keywords: ["john lennon", "mendips", "251 menlove avenue"]
	},{
		id: "penny",
		name: "Penny Lane",
		location: {lat: 53.386944, lng: -2.919444},
		foursquareID: "4b9e5de8f964a5205fdd36e3",
		description: "The famous street that became a number 1 song in 1967.",
		keywords: ["penny lane", "roundabout", "nurse", "barber", "banker", "fireman"]
	},{
		id: "george_child",
		name: "George's childhood home",
		location: {lat: 53.399028, lng: -2.916639},
		foursquareID: "4f1aeadde4b0ce22e4f1f0ae",
		description: "12 Arnold Grove is the birthplace and childhood home of George Harrison.",
		keywords: ["george harrison", "12 arnold grove"]
	},{
		id: "ringo_child",
		name: "Ringo's childhood home",
		location: {lat: 53.388937, lng: -2.959732},
		foursquareID: "5022329e45b02dc7c5b1a96d",
		description: "9 Madrin Street is the birthplace and ealy childhood home of Ringo Starr.",
		keywords: ["ringo starr", "9 madrin street", "starkey"]
	},{
		id: "strawberry",
		name: "Strawberry Field",
		location: {lat: 53.380278, lng: -2.883889},
		foursquareID: "4b5c794cf964a520823129e3",
		description: "Strawberry Field, imortalized in the number 1 song Strawberry Fields Forever, was a Salvation Army children's home where John used to play with his friends.",
		keywords: ["strawberry field", "strawberry fields forever", "john lennon", "red gates", "beaconsfield road"]
	},{
		id: "cavern",
		name: "The Cavern Club",
		location: {lat: 53.406554, lng: -2.987889},
		foursquareID: "4b927da0f964a520c2fd33e3",
		description: "A faithful replica partially located at the sight of the original Cavern, where The Beatles started their rise to fame, having played over 250 shows there.",
		keywords: ["cavern", "brian epstein", "Mathew Street", "concerts"]
	},{
		id: "st_peter",
		name: "St. Peter's Church",
		location: {lat: 53.376, lng: -2.8694},
		foursquareID: "4d8f485e1d06b1f7df4e5b3b",
		description: "Where John and Paul first met on July 6, 1957.",
		keywords: ["john lennon", "paul mccartney", "woolton fete", "quarrymen"]
	},{
		id: "eleanor_statue",
		name: "Eleanor Rigby's statue",
		location: {lat: 53.40694, lng: -2.98664},
		foursquareID: "4e4fed7562e14b77e3a2f4b5",
		description: "A tribute to The Beatles by Tommy Steele, based on the song of the same name.",
		keywords: ["eleanor rigby", "statue", "tommy steele", "stanley street"]
	},{
		id: "eleanor_grave",
		name: "Eleanor Rigby's gravesite",
		location: {lat: 53.375834, lng: -2.868923},
		foursquareID: "4d1361030ad2f04dc700b354",
		description: "A possible inspiration (never confirmed) for the song of the same name, Eleanor's grave is located in the graveyard of St. Peter's Church.",
		keywords: ["eleanor rigby", "grave", "cemetery", "thombstone"]
	},{
		id: "mmt",
		name: "Magical Mystery Tour starting point",
		location: {lat: 53.399871, lng: -2.990731},
		foursquareID: "4cf114f11c158cfa2261ceb5",
		description: "You can visit most of the points on this map in a couple hours, aboard an aptly-named tour bus.",
		keywords: ["magical mystery tour", "bus"]
	},{
		id: "story",
		name: "The Beatles Story",
		location: {lat: 53.399, lng: -2.992},
		foursquareID: "4bae00c4f964a520db793be3",
		description: "Follow the timeline of The Beatles across a recreation of the times and spaces they crossed in this themed museum.",
		keywords: ["beatles story", "story", "museum"]
	},{
		id: "museum_lpool",
		name: "Museum of Liverpool",
		location: {lat: 53.4031, lng: -2.9956},
		foursquareID: "4bc76db0af07a593de2a7f2d",
		description: "The city's museum tells the story of Liverpool and its people, and reflects its global significance. The Beatles, of course, are part of that story.",
		keywords: ["museum", "liverpool"]
	},{
		id: "statue",
		name: "The Beatles Statue",
		location: {lat: 53.404690, lng: -2.995690},
		foursquareID: "5783f8ff498e5356c1aa8d23",
		description: "A Fab Four statue by Andrew Edwards, unveiled in 2015.",
		keywords: ["the beatles", "statue", "andrew edwards"]
	},{
		id: "institute",
		name: "Liverpool Institute",
		location: {lat: 53.399556, lng: -2.972306},
		foursquareID: "4b4a371ef964a5201c7f26e3",
		description: "The building where Paul and George went to high school is now occupied by Paul McCartney's art school, LIPA.",
		keywords: ["liverpool institute", "high school", "paul mccartney", "george harrison", "mount street"]
	},{
		id: "college_art",
		name: "Liverpool College of Art",
		location: {lat: 53.3997473, lng:-2.9715137},
		foursquareID: "4b4a371ef964a5201c7f26e3",
		description: "The building of the former college where John went, with his first wife Cynthia and early Beatle Stuart Sutcliffe, is now occupied by Paul McCartney's art school, LIPA.",
		keywords: ["college of art", "john lennon", "cynthia nixon", "cynthia lennon", "stuart sutcliffe", "hope street"]
	},{
		id: "casbah",
		name: "Casbah Coffee Club",
		location: {lat: 53.431936, lng: -2.911462},
		foursquareID: "4dc580b0e4cd169dc64e441e",
		description: "The legendary music venue on the cellar of early Beatle Pete Best's home.",
		keywords: ["casbah", "pete best", "club", "mona best", "concerts"]
	},{
		id: "caledonia",
		name: "The Caledonia",
		location: {lat: 53.400710, lng: -2.967873},
		foursquareID: "4c7acdf981bca09313a80115",
		description: "Not Beatles-related, but it's my favorite Liverpool pub, so go check it out!",
		keywords: ["caledonia", "pub", "food", "drinks", "vegan", "dog friendly", "pet friendly"]
	}]
}

export default sights;
