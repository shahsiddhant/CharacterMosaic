import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  public name;
  public currentCharacter;
  private characterDetails = [
    {
      id: 'Edith',
      createdBy: 'Isabel Marte',
      description: [
        `Race: Haitian`,
        `Age: 21`,
        `Occupation: Student/Artist`,
        `Likes: Reading, Drawing, Making jewelry, Dancing, Music,
        Food, Nature`,
        `Dislikes: When people crack/pop their gum, Small talk,
        Slackers`,
        `Edith is a beautiful and independent young lady who can
      often be introverted. However, she has many extroverted
      qualities like dancing and active involvement in her college
      clubs. She is learning French through school and is picking
      up Creole from her mother. She grew up with a single parent
      and her 5 siblings. She is a hard worker, an excellent artist,
      and an active reader. She is always there for her friends,
      and is able to empathize with them. And, although she can
      be very quiet, she secretly has a very pretty singing voice.`],
      references: [`./assets/edith/ref_01.png`],
      sketches: [`./assets/edith/Edith_01.jpg`]
    },
    {
      id: 'Omar',
      createdBy: 'Marcel Saleta',
      description: [`Omar represents the working class from the country side across
      all Central/Latin America. Waking up at dawn, Omar plows the land, harvests the crops and
      brings the bread home, always with a smile on his face. Omar is humble, hard-working
      and committed to his land. Agriculture has been the root of the Latin American economy
      since the 1600's and still is for many countries today. Men like Omar, have devoted their lives
      to the land in order to help their country and their families get ahead.`],
      references: [`./assets/omar/ref_01.jpg`],
      sketches: [`./assets/omar/omar_01.jpg`, `./assets/omar/omar_02.jpg`]
    },
    {
      id: 'Em',
      createdBy: 'Minko Alyssa',
      description: [`Emerald is a young Black and White racially mixed woman growing up in the inner
      city culture of Pittsburgh, PA. She is the daughter of April and Marcus.`,

        `Still in high school, Em often faces unbeknownst racial discrimination for being a
      mixed kid. Within the high school cliques, she is neither part of the Black community
      nor the more priveledged, well-off White families. She falls between the lines, and
      despite her quiet demeanor and tendency to keep to herself, she often questions her
      own identity.`,

        `Em fell in love with the arts at an early age because her parents encouraged self-
      expression. When she couldn’t find the words to explain how she was feeling, she
      would paint large and abstract. When she found the words but it felt as if no one were
      listening or able to understand, she would sing with what felt like her only companion:
      her acoustic guitar.`],
      references: [`./assets/em/ref_01.png`],
      sketches: [
        `./assets/em/Em_01.png`,
        `./assets/em/Em_02.png`,
        `./assets/em/Em_03.png`,
        `./assets/em/Em_04.png`,
        `./assets/em/Em_05.png`,
        `./assets/em/Em_06.png`,
        `./assets/em/Em_07.png`
      ]
    },
    {
      id: 'Marty',
      createdBy: 'Levi Davis',
      description: [`Born in the year 1901, Marty came out of the womb playing along to the
      records of Louis Armstrong. Known in the New York City area as an up and coming
      soloist, he is one of the most sought-after cats of his day and age. Rarely seen in public,
      he prefers to let his melodic solos and harmonic choruses speak for him. He is generally
      known to be quiet, kind, and bashful. He spends his days practicing hours and hours at
      a time, hoping to reach worldwide renown.`],
      references: [
        `./assets/marty/ref_01.png`,
        `./assets/marty/ref_02.png`
      ],
      sketches: [
        `./assets/marty/Marty_01.jpg`,
        `./assets/marty/Marty_02.jpg`,
        `./assets/marty/Marty_03.jpg`,
        `./assets/marty/Marty_04.jpg`,
      ]
    },
    {
      id: 'Thokmay',
      createdBy: 'Tim Stringer',
      description: [`Gender: Male`,
        `Ethnicity: Tibetan`,
        `Age: 10`,
        `Family: Has been raised in the monastery as an Orphan. Family died during the revolt`,
        `Intelligence: Extremely intelligent and aware, questions almost everything`,
        `Religion: Buddhism`,
        `Goals: See more of the world, achieve Buddhahood`,
        `Secrets: Sometimes when sweeping he knows he doesn’t have to sweep certain areas of the
      monastary because nobody ever looks there, He hates the food at the monastery but when
      asked will say it is good. He hasn’t really left more than his village and longs to see more of the
      world.`,
        `Fears: Heights, spiders,`],
      references: [`./assets/thokmay/ref_01.png`],
      sketches: [`./assets/thokmay/thokmay_01.jpg`]
    },
    {
      id: 'Konrad',
      createdBy: 'Henry Trettenbach',
      description: [`Konrad Awad is bitter. For his entire life, he's felt alienated by German society
      because countless people seem to assume that he's not German and can't even speak German event though he grew up his entire life
      in Germany. Now, with terrorism and growing islamophobia, some people fear him. Fortunately, Konrad has been able to
      channel his self-doubt and feelings of loneliness into his writing. Although he's never been particularly religious,
      he hopes to use his writing as a way to make the world paranoid and inspire others who have also been ostracized.
      Beneath his bitterness, he's very kind-hearted.`],
      references: [`./assets/konrad/ref_01.png`],
      sketches: [
        `./assets/konrad/konrad_01.png`,
        `./assets/konrad/konrad_02.jpg`,
        `./assets/konrad/konrad_03.jpg`,
        `./assets/konrad/konrad_04.jpg`,
      ]
    },
    {
      id: 'Shola',
      createdBy: 'Shana Dixon',
      description: [`Shola is a young girl from Karonga, Malawi. At the age of six, her happy
      childhood turned grim when intruders force themselves into her home, took her left
      arm, and threatened to come back for the rest of her. There had been a recent surge
      of attacks on albino children in the area. Where Shola is from, albino children can
      be seen as magical gifts from god. This makes them targets for criminals to steal
      their limbs to put on the black market. Scared, Shola’s family sought refuge in the
      Kenya. Not only did her family find safety, but an acceptance of people with
      albinism. She stumbled upon a beauty pageant specifically for albino people! Now,
      Shola loves to play dress up, dance around her room in her mom’s heels, and
      imagine herself as one of the beautiful albino women she saw onstage.`],
      references: [
        `./assets/shola/ref_01.png`,
        `./assets/shola/ref_02.png`,
        `./assets/shola/ref_03.png`,
        `./assets/shola/ref_04.png`
      ],
      sketches: [
        `./assets/shola/shola_01.png`,
        `./assets/shola/shola_02.png`,
        `./assets/shola/shola_03.png`,
      ]
    },
    {
      id: 'Yannathan',
      createdBy: 'Mirjam Makovec',
      description: [`My	character’s name is Yannathan, which	means	“walk	about, travel	or roam” in English.
      He is	an 18-year-old hunter and	lives	during the 1830s. His	people are called	the	Wurundjeri
      who live in Woiwurrung which is part of the	Kulin Nation,	an alliance	of five tribes. This nation	covers parts of
      Victoria, including	the	area of	City of	Melbourne	and	City of	Yarra. The main	language here	is Woi wurrung. Each clan	is governed	by a
      Ngurungaeta	(pronounced	na-run-getta). In	the	1830s, during	the	first settlement
      of the Europeans, the	Ngurungaeta	is a man called	Billibellary, a highly	respected	leader.`,
        ` Yannathans clan, the	Wurundjeri,	never	settles at one place for too long.
      During Spring	and	Summer, they travel a	lot while	during Winter	they move into the mountains as	the valleys	get	flooded.`,
        `Even	though	each	clan	moves	and	lives on	its	own,	contact with	the	other
      Kulin	tribes	is very	important.	Big	gatherings	are	arranged,	so	different	clans
      can	meet	and	mingle.	This	is	essential	for	the	young	people,	as	they	are	only
      allowed	to	find	a	partner	from	another	tribe.	Yannathan	is	one	of	them.	The
      gatherings	are	also	important	as	the	various	Ngurungaeta	can	meet	and	settle disputes.`,
        `A	very	important	aspect	of	the	aboriginal	life	is	religion.	Here	a	lot	of
        aborigines	belief	in	the	Dreamtime,	the	beginning	of	everything.	Their
        ancestors	created	the	whole	world	at	the	beginning	of	time and	left	sacred	places,	where	the	aborigines	celebrate	their	rituals.`],
      references: [`./assets/yannathan/ref_01.png`],
      sketches: [
        `./assets/yannathan/yannathan_02.png`
      ]
    }
  ];



  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.name = this.route.snapshot.params['id'];
    this.currentCharacter = this.characterDetails.find(character => {
      return this.name === character.id;
    });
  }




}
