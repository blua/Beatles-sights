const sights =  { beatlesSights :
	[{
		id: "paul_child",
		name: "Paul's childhood home",
		location: {lat: 53.3697068, lng: -2.900069},
		foursquareID: "4c4854ad76d72d7f3b00404d",
		description: "20 Fortlin Road is the house where Paul lived with his parents Jim and Mary and his brother Michael from 1955 to 1963. Tours of the interior are available with the National Trust.",
		keywords: ["mccartney"]
	},{
		id: "john_child",
		name: "John's childhood home",
		location: {lat: 53.37727, lng: -2.8835431},
		foursquareID: "4c1a117e95e89521e42557e7",
		description: "Located at 251 Menlove Avenue, Mendips is the house where John was brought up by his Aunt Mimi and Uncle George. Tours of the interior are available with the National Trust.",
		keywords: ["lennon"]
	},{
		id: "penny",
		name: "Penny Lane",
		location: {lat: 53.3889678, lng: -2.9155062},
		foursquareID: "4b9e5de8f964a5205fdd36e3",
		description: "The famous street that became a number 1 song in 1967.",
		keywords: ["roundabout", "nurse", "barber", "banker", "fireman"]
	},{
		id: "george_child",
		name: "George's childhood home",
		location: {lat: 53.3989926,lng: -2.9188277},
		foursquareID: "4f1aeadde4b0ce22e4f1f0ae",
		description: "12 Arnold Grove is birthplace and childhood home of George Harrison.",
		keywords: []
	},{
		id: "ringo_child",
		name: "Ringo's childhood home",
		location: {lat: 53.3887512, lng: -2.9618779},
		foursquareID: "5022329e45b02dc7c5b1a96d",
		description: "9 Madrin Street is the birthplace and ealy childhood home of Ringo Starr.",
		keywords: ["starkey"]
	},{
		id: "strawberry",
		name: "Strawberry Field",
		location: {lat: 53.3804178, lng: -2.8839224},
		foursquareID: "4b5c794cf964a520823129e3",
		description: "Strawberry Field, imortalized in the number 1 song Strawberry Fields Forever, was a Salvation Army children's home where John used to play with his friends.",
		keywords: ["strawberry fields", "lennon", "gates", "beaconsfield road"]
	},{
		id: "cavern",
		name: "The Cavern Club",
		location: {lat: 53.4063747, lng: -2.9901746},
		foursquareID: "4b927da0f964a520c2fd33e3",
		description: "A faithful replica partially located at the sight of the original Cavern, where The Beatles started their rise to fame, having played over 250 shows there.",
		keywords: ["cavern", "epstein", "club", "Mathew Street"]
	},{
		id: "st_peter",
		name: "St. Peter's Church",
		location: {lat: 53.375963, lng: -2.8715595},
		foursquareID: "4d8f485e1d06b1f7df4e5b3b",
		description: "Where John and Paul first met on July 6, 1957.",
		keywords: ["peter", "saint", "church"]
	},{
		id: "eleanor_statue",
		name: "Eleanor Rigby's statue",
		location: {lat: 53.4068357, lng: -2.9885233},
		foursquareID: "4e4fed7562e14b77e3a2f4b5",
		description: "A tribute to The Beatles by Tommy Steele, based on the song of the same name.",
		keywords: ["eleanor rigby", "statue", "tommy steele"]
	},{
		id: "eleanor_grave",
		name: "Eleanor Rigby's gravesite",
		location: {lat: 53.3757795, lng: -2.8711187},
		foursquareID: "4d1361030ad2f04dc700b354",
		description: "A possible inspiration (never confirmed) for the song of the same name, Eleanor's grave is located in the graveyard of St. Peter's Church.",
		keywords: ["eleanor rigby", "grave", "cemetery"]
	},{
		id: "mmt",
		name: "Magical Mystery Tour starting point",
		location: {lat: 53.39966, lng: -2.9928767},
		foursquareID: "4cf114f11c158cfa2261ceb5",
		description: "You can visit most of the points on this map in a couple hours, aboard an aptly-named tour bus.",
		keywords: ["magical mystery tour", "bus"]
	},{
		id: "story",
		name: "The Beatles Story",
		location: {lat: 53.399291, lng: -2.9942057},
		foursquareID: "4bae00c4f964a520db793be3",
		description: "Follow the timeline of The Beatles across a recreation of the times and spaces they crossed in this themed museum.",
		keywords: ["beatles story", "story", "museum"]
	},{
		id: "museum_lpool",
		name: "Museum of Liverpool",
		location: {lat: 53.4029425, lng: -2.9978138},
		foursquareID: "4bc76db0af07a593de2a7f2d",
		description: "The city's museum tells the story of Liverpool and its people, and reflects its global significance. The Beatles, of course, are part of that story.",
		keywords: ["museum", "liverpool"]
	},{
		id: "statue",
		name: "The Beatles Statue",
		location: {lat: 53.4045241, lng: -2.9985871},
		foursquareID: "5783f8ff498e5356c1aa8d23",
		description: "A Fab Four statue by Andrew Edwards, unveiled in 2015.",
		keywords: ["the beatles", "statue", "andrew edwards"]
	},{
		id: "institute",
		name: "Liverpool Institute",
		location: {lat: 53.399573, lng: -2.9744947},
		foursquareID: "4b4a371ef964a5201c7f26e3",
		description: "The building where Paul and George went to high school is now owned by Paul McCartney's art school, LIPA.",
		keywords: ["liverpool", "institute", "school"]
	},{
		id: "college_art",
		name: "Liverpool College of Art",
		location: {lat: 53.38000, lng: -2.900062},
		foursquareID: "",
		description: "The college where John went, with his first wife Cynthia and early Beatle Stuart Sutcliffe.",
		keywords: []
	},{
		id: "casbah",
		name: "Casbah Coffee Club",
		location: {lat: 53.4324354, lng: -2.9141807},
		foursquareID: "4dc580b0e4cd169dc64e441e",
		description: "The legendary music venue on the cellar of early Beatle Pete Best's home.",
		keywords: ["casbah", "pete best", "club"]
	},{
		id: "caledonia",
		name: "The Caledonia",
		location: {lat: 53.4004987, lng: -2.9700728},
		foursquareID: "4c7acdf981bca09313a80115",
		description: "Not Beatles-related, but it's my favorite Liverpool pub, so go check it out!",
		keywords: ["pub", "food", "drinks", "vegan"]
	}]
}

export default sights;
