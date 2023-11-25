
function getCharacters() {

  let characterData = [
    {
      id: 1,
      name: "Biff Buxler",
      race: "Loxodon",
      class: "Druid",
      level: 3,
      stats: {
        strength: 14,
        dexterity: 13,
        constitution: 16,
        intelligence: 12,
        wisdom: 18,
        charisma: 15
      },
      armorClass: 18,
      hitPoints: 28,
      equipment: [
      {
            title: 'Scimitar', 
            description: '+3 to hit. 1d6+1 damage.',
      },
      {
            title: 'Dagger',
            description: '+3 to hit. 1d4+1 damage.'
      },
      {
            title: 'Sling',
            description: '+3 to hit. 1d4+1 damage.',
      },
      ],
      pic: 'https://i.pinimg.com/564x/09/e7/6d/09e76defbd9c98e1e3bc3663d7692b75.jpg',
      spellsOrSkills: [
      {
            title: 'Wild shape',
            description: 'Turn into an animal for 1 hour: example - spider, cat, snake, rat, wolf, horse, velociraptor, giant lizard. Twice per day'
      },
      {
            title: 'Cure wounds',
            description: ' A creature you touch regains 1d8 +5 HP'
      },
      {
            title: 'Invisibility',
            description: 'Turn yourself or a friend invisible for up to an hour.'
      },
      ]
    },
    {
      id: 2,
      name: "Ceren Tallinn",
      race: "Tiefling",
      class: "Wizard",
      level: 3,
      stats: {
        strength: 12,
        dexterity: 14,
        constitution: 15,
        intelligence: 18,
        wisdom: 16,
        charisma: 13
      },
      armorClass: 12,
      hitPoints: 18,
      equipment: [
      {
            title: 'Staff',
            description: '+2 to hit. 1d6+1 damage.',
      },
      {
            title: 'Dagger',
            description: '+2 to hit. 1d4+1 damage.',
      },

      ],
      pic: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/181464088/original/9e4af05f31194c83af5080ccf6ab4d24df986105/draw-your-dnd-and-rpg-character-tokens-or-profile-pics.png',
      spellsOrSkills: [
      {
            title: 'Magic Missile',
            description: 'You create three glowing darts of magical force. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several.',
      },
      {
            title: 'Mold Earth',
            description: 'You can manipulate a portion of dirt or stone (up to a 5-foot cube) that you can see within 30 feet. ',
      },
      {
            title: 'Burning Hands',
            description: 'As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one.  The fire ignites any flammable objects in the area that aren\'t being worn or carried.',
      },
      {
            title: 'Jump',
            description: 'You touch a creature. The creature\'s jump distance is tripled until the spell ends.',
      },
      {
            title: 'Thunderwave',
            description: 'A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn\'t pushed. This also pushes items back.  And makes a huge boom.',
      },
      {
            title: 'Lucky',
            description: 'Re-roll ones! You can use this twice'
      },
      ]
    },
    {
      id: 3,
      name: 'Xarbert Camshaft',
      race: 'Dragonborn',
      class: 'Bard',
      level: 3,
      stats: {
        strength: 14,
        dexterity: 13,
        constitution: 16,
        intelligence: 15,
        wisdom: 12,
        charisma: 18
      },
      armorClass: 14,
      hitPoints: 28,
      equipment: [
      {
            title: 'Crossbow',
            description: '+3 to hit. 1d8+1 damage.',
      },
      {
            title: 'Short Sword',
            description: '+3 to hit. 1d6+1 damage.',
      },
      {
            title: 'Slide Whistle',
            description: 'Sounds great!',
      },
      ],
      pic: 'https://www.nicepng.com/png/full/231-2310875_mikael-the-dnd-by-vector-free-dragonborn-d.png',
      spellsOrSkills: [
      {
            title: 'Vicious Mockery',
            description: 'You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you, it must succeed on a Wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn.',
      },
      {
            title: 'Charm person',
            description: 'You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you.',
      },
      {
            title: 'Puppet',
            description: 'Your gesture forces one humanoid you can see within 120 feet to make a Constitution saving throw. On a failed save, the target must move up to its speed in a direction you choose. In addition, you can cause the target to drop whatever it is holding.',
      },
      {
            title: 'Dragon\'s Breath - Acid',
            description: 'Unleash a 30\' spray. Creatures in the path takes 2d6 damage (or half if they make a DC 14 Dexterity saving throw)',
      },
      ]
    },
    {
      id: 4,
      name: 'Xarolth Tyrlin',
      race: 'Red Dragonborn',
      class: 'Wild Magic Barbarian',
      level: 3,
      stats: {
        strength: 16,
        dexterity: 13,
        constitution: 18,
        intelligence: 12,
        wisdom: 14,
        charisma: 15
      },
      armorClass: 15,
      hitPoints: 48,
      equipment: [
      {
            title: 'Great sword',
            description: '+4 to hit. 1d10+2 damage.',
      },
      {
            title: 'Long Bow',
            description: '+3 to hit. 1d8+2 damage.',
      },
      {
            title: 'Dagger',
            description: '+3 to hit. 1d4+2 damage.',
      },
      ],
      pic: 'https://www.kindpng.com/picc/m/735-7350364_d-d-dragonborn-dragonborn-fighter-hd-png-download.png',
      spellsOrSkills: [
      {
            title: 'Rage ',
            description: 'Take half damage. +2 to the damage you deal. Advantage on strength related rolls. 3 times per day. Also roll on the Wild Magic Rage table'
      },
      {
            title: 'Alert',
            description: 'Can\'t be surprised. +5 to initiative. Other creatures don’t gain advantage on attack rolls against you as a result of being unseen by you.',
      },
      {
            title: 'Dragon\'s Breath - Fire',
            description: 'Unleash a 15\' cone of fire. Creatures in the path takes 2d6 damage (or half if they make a DC 14 Dexterity saving throw)',
      },
      {
            title: 'Magic Awareness',
            description: 'Until the end of your next turn, you know the location of any spell or magic item within 60 feet of you that isn’t behind total cover. When you sense a spell, you learn which school of magic it belongs to. Twice per day',
      },
      ]
    },
    {
      id: 5,
      name: 'Tiana Thunderpants',
      race: 'Dwarf',
      class: 'Fighter',
      level: 3,
      stats: {
        strength: 18,
        dexterity: 14,
        constitution: 16,
        intelligence: 13,
        wisdom: 12,
        charisma: 15
      },
      armorClass: 16,
      hitPoints: 39,
      equipment: [
      {
            title: 'Great Axes',
            description: '+3 to hit. 1d12+1 damage.',
      },
      {
            title: 'Deafening Horn - ',
            description: 'Blow a deafening blast.  Creatures within 30 feet are deafened for a turn. Creatures within 120 feet are called to the sound.',
      },
      {
            title: 'Hand Crossbow',
            description: '+3 to hit. 1d6+1 damage.',
      },
      ],
      pic: 'https://i.pinimg.com/originals/74/e3/42/74e3427291b06ccb1d53819abeb9de79.png',
      spellsOrSkills: [
      {
            title: 'Two-weapon Fighting',
            description: 'You can use your bonus action to attack with a second axe in your off hand. -4 to that attack',
      },
      {
            title: 'Action Surge',
            description: 'You can take a whole second attack. Twice per day',
      },
      ]
    },
    {
      id: 6,
      name: 'December',
      race: 'Lycanthrope',
      class: 'Rogue',
      level: 3,
      stats: {
        strength: 13,
        dexterity: 18,
        constitution: 14,
        intelligence: 16,
        wisdom: 12,
        charisma: 15
      },
      armorClass: 17,
      hitPoints: 30,
      equipment: [
      {
            title: 'Acid vials',
            description: 'As an action, you can splash the contents of this vial onto a creature within 5 feet of you or throw the vial up to 20 feet, shattering it on impact. In either case, make a ranged attack against a creature or object, treating the acid as an improvised weapon. On a hit, the target takes 2d6 acid damage.  ',
      },
      {
            title: 'Long Sword',
            description: '+3 to hit. 1d8+1 damage.',
      },
      {
            title: 'Claws',
            description: 'Natural weapon. +3 to hit. 1d4+1 damage',
      },
      ],
      pic: 'https://i.pinimg.com/originals/58/fd/49/58fd498b72c56c290e6b0c1b91af659e.jpg',
      spellsOrSkills: [
      {
            title: 'Lycanthrope ',
            description: 'Turn into wolf for an hour',
      },
      {
            title: 'Open Locks',
            description: 'Use thieves tools to unlock',
      },
      {
            title: 'Pick Pockets',
            description: 'You can attempt to take something from a creature without them noticing',
      },

      ]
    },
    {
      id: 7,
      name: 'Kaylee Frye',
      race: 'Human',
      class: 'Cleric',
      level: 3,
      stats: {
        strength: 18,
        dexterity: 12,
        constitution: 15,
        intelligence: 13,
        wisdom: 16,
        charisma: 14
      },
      armorClass: 16,
      hitPoints: 30,
      equipment: [
      {
            title: 'Great Hammer',
            description: '+3 to hit. 1d12+1 damage.',
      },
      {
            title: 'Holy symbol',
            description: 'Create a zone of protection around yourself and 2 friends next to you.  +5 to AC for one round. Twice per day',
      },

      ],
      pic: 'https://cdna.artstation.com/p/assets/images/images/004/366/012/large/avetino-ave-ki-425e0c46790423-586425c56082c.jpg?1482999786',
      spellsOrSkills: [
      {
            title: 'Mending',
            description: 'This spell repairs a single break or tear in an object you touch, such as broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage.  ',
      },
      {
            title: 'Guidance',
            description: 'You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends.  ',
      },
      {
            title: 'Bless',
            description: 'You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw.  ',
      },
      {
            title: 'Healing word',
            description: 'A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.  ',
      },
      {
            title: 'Inflict Wounds',
            description: 'Make a melee spell attack against a creature you can reach. On a hit, the target takes 3d10 necrotic damage.  ',
      },
      ]
    },
    {
      id: 8,
      name: 'Arthos Battersby',
      race: 'Rabbitfolk',
      class: 'Rogue',
      level: 3,
      stats: {
        strength: 12,
        dexterity: 18,
        constitution: 13,
        intelligence: 16,
        wisdom: 14,
        charisma: 15
      },
      armorClass: 17,
      hitPoints: 27,
      equipment: [
      {
            title: 'Short Sword',
            description: '+3 to hit. 1d6+1 damage.',
      },
      {
            title: 'Short Bow',
            description: '+3 to hit. 1d6+1 damage.',
      },
      {
            title: 'Theives Tools',
            description: 'Lockpicks and whatnot',
      },
      {
            title: 'Skeleton Key',
            description: '+2 to lock picking check.  Usable twice.',
      },

      ],
      pic: 'https://i.pinimg.com/564x/aa/a7/57/aaa7576776cc32be41ac389aeb66b092.jpg',
      spellsOrSkills: [
      {
            title: 'Open Locks ',
            description: 'Use thieves tools to unlock',
      },
      {
            title: 'Pick Pockets',
            description: 'You can attempt to take something from a creature without them noticing',
      },
      {
            title: 'Uncanny Dodge',
            description: 'Take half damage on an attack.  Usable once',
      },
      ]
    },
    {
      id: 9,
      name: 'Kaptain Killer',
      race: 'Aaracokra (owl)',
      class: 'Cleric',
      level: 3,
      stats: {
        strength: 12,
        dexterity: 13,
        constitution: 14,
        intelligence: 15,
        wisdom: 18,
        charisma: 16
      },
      armorClass: 16,
      hitPoints: 30,
      equipment: [
      {
            title: 'Short Sword',
            description: '+3 to hit. 1d6+1 damage.',
      },
      {
            title: 'Pistol',
            description: 'One-shot only!  +2 to hit. 1d6+5 damage',
      },
      ],
      pic: 'https://www.dndbeyond.com/avatars/10227/819/637239657324495506.jpeg?width=150&height=150&fit=crop&quality=95&auto=webp',
      spellsOrSkills: [
      {
            title: 'Word of Radiance',
            description: 'You utter a divine word, and burning radiance erupts from you. Each creature of your choice that you can see within range must succeed on a Constitution saving throw or take 1d6 radiant damage.  ',
      },
      {
            title: 'Cure Wounds',
            description: ' A creature you touch regains 1d8 +5 HP'
      },
      {
            title: 'Hold Person',
            description: 'Choose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.  ',
      },
      ]
    },
    {
      id: 10,
      name: 'Tsigliana Merovin',
      race: 'Human',
      class: 'Wizard',
      level: 3,
      stats: {
        strength: 13,
        dexterity: 14,
        constitution: 12,
        intelligence: 18,
        wisdom: 15,
        charisma: 16
      },
      armorClass: 12,
      hitPoints: 21,
      equipment: [
      {
            title: 'Spell Book',
            description: '+2 to spells attacks, or -2 to your opponent\'s saves. Can be used twice per day',
      },
      {
            title: 'Wand of Magic Missile',
            description: 'You can use this twice. You create three glowing darts of magical force. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several.',
      },
      {
            title: 'Dagger',
            description: '+2 to hit. 1d4+1 damage.',
      },

      ],
      pic: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7aa9d383-2837-41aa-b7b7-8f831c00ddef/dauvuu8-689c987b-304d-4ae9-a67e-797d8d524bd8.jpg/v1/fill/w_900,h_1744,q_75,strp/pathfinder__shyka_by_willobrien_dauvuu8-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTc0NCIsInBhdGgiOiJcL2ZcLzdhYTlkMzgzLTI4MzctNDFhYS1iN2I3LThmODMxYzAwZGRlZlwvZGF1dnV1OC02ODljOTg3Yi0zMDRkLTRhZTktYTY3ZS03OTdkOGQ1MjRiZDguanBnIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.RMvqbDMWJiKED7fz75g0o9mr8w9Ws5ETSwogRihcamM',
      spellsOrSkills: [
      {
            title: 'Unseen servant',
            description: 'This spell creates an invisible, mindless force that performs simple tasks at your command until the spell ends. It has AC 10, 1 hit point, and a Strength of 2, and it can\'t attack. If it drops to 0 hit points, the spell ends.  On each of your turns as a bonus action, you can mentally command the servant to move up to 15 feet and interact with an object.',
      },
      {
            title: 'Magnify Gravity',
            description: 'The gravity in a 10-foot-radius sphere centered on a point you can see within range increases for a moment. Each creature in the sphere on the turn when you cast the spell must make a Constitution saving throw. On a failed save, a creature takes 2d8 force damage, and its speed is halved until the end of its next turn. On a successful save, a creature takes half as much damage and suffers no reduction to its speed. ',
      },
      {
            title: 'Fog Cloud',
            description: 'You create a 20-foot-radius sphere of fog centered on a point within range. The sphere spreads around corners, and its area is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.  ',
      },
      {
            title: 'Snilloc\'s Snowball Storm',
            description: 'A flurry of magic snowballs erupts from a point you choose within range. Each creature in a 5-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes 3d6 cold damage on a failed save, or half as much damage on a successful one.  ',
      },
      ]
    },
    {
      id: 11,
      name: 'Arakxes Wilson',
      race: 'Tiefling',
      class: 'Sorcerer',
      level: 3,
      stats: {
        strength: 13,
        dexterity: 14,
        constitution: 15,
        intelligence: 16,
        wisdom: 12,
        charisma: 18
      },
      armorClass: 13,
      hitPoints: 24,
      equipment: [
      {
            title: 'Staff',
            description: '+2 to hit. 1d6+1 damage.',
      },
      {
            title: 'Cloak of Dodging',
            description: 'Sweet cloak.  Add +3 to dexterity checks',
      },
      ],
      pic: 'https://preview.redd.it/zlkbfcrubl281.jpg?width=1440&format=pjpg&auto=webp&s=53799cdf11ae9883257d41f48ff756471fc61673',
      spellsOrSkills: [
      {
            title: 'Hellish Rebuke',
            description: 'As a reaction to being hit. You point your finger, and the creature that damaged you is momentarily surrounded by hellish flames. The creature must make a Dexterity saving throw. It takes 2d10 fire damage on a failed save, or half as much damage on a successful one. Twice per day ',
      },
      {
            title: 'Control Flames',
            description: 'You can manipulate a non-magical flame (up to a 5-foot cube) that you can see within 30 feet. ',
      },
      {
            title: 'Disguise Self',
            description: 'You make yourself—including your clothing, armor, weapons, and other belongings on your person—look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can\'t change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you.  ',
      },
      {
            title: 'Feather Fall',
            description: 'Choose up to five falling creatures within range. A falling creature\'s rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature.  ',
      },
      {
            title: 'Witch Bolt',
            description: 'A beam of crackling, blue energy lances out toward a creature within range, forming a sustained arc of lightning between you and the target. Make a ranged spell attack against that creature. On a hit, the target takes 1d12 lightning damage, and on each of your turns for the duration, you can use your action to deal 1d12 lightning damage to the target automatically. The spell ends if you use your action to do anything else. The spell also ends if the target is ever outside the spell\'s range or if it has total cover from you.  ',
      },
      ]
    },
    {
      id: 12,
      name: 'Click Clack',
      race: 'Aaracokra (Shoebill)',
      class: 'Fighter',
      level: 3,
      stats: {
        strength: 18,
        dexterity: 12,
        constitution: 15,
        intelligence: 16,
        wisdom: 13,
        charisma: 14
      },
      armorClass: 16,
      hitPoints: 36,
      equipment: [
      {
            title: 'Axe',
            description: '+3 to hit. 1d12+1 damage.',
      },
      {
            title: 'Long Sword',
            description: '+3 to hit. 1d8+1 damage.',
      },
      {
            title: 'Bill',
            description: '+3 to hit. 1d8+1 damage. Creature has to make a DC 14 strength save or be stuck in your mouth',
      },
      ],
      pic: 'https://cdna.artstation.com/p/assets/images/images/031/391/058/large/sion-williams-inktober-day-22-rock.jpg?1603474424',
      spellsOrSkills: [
      {
            title: 'Indomitable',
            description: 'You are very tough. You can reroll a saving throw that you fail. If you do so, you must use the new roll. Once per day',
      },
      {
            title: 'Action Surge',
            description: 'You can take a whole second attack. Twice per day',
      },
      ]
    },
    {
      id: 13,
      name: 'Sasha Wondertoes',
      race: 'Halfling',
      class: 'Sorcerer',
      level: 3,
      stats: {
        strength: 14,
        dexterity: 15,
        constitution: 16,
        intelligence: 12,
        wisdom: 13,
        charisma: 18
      },
      armorClass: 13,
      hitPoints: 27,
      equipment: [
      {
            title: 'Pet flame',
            description: 'You have a friendly little ball of fire.  It lives in your hair. Name it.  It can start small fires',
      },
      {
            title: 'Scimitar',
            description: '+3 to hit. 1d6+1 damage.',
      },
      {
            title: 'Hand Crossbow',
            description: '+3 to hit. 1d6+1 damage.',
      },
      ],
      pic: 'https://i.pinimg.com/originals/3f/a5/23/3fa523edb21942be9fabd80b43d36c60.png',
      spellsOrSkills: [
      {
            title: 'Fire Bolt',
            description: 'You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn\'t being worn or carried.  ',
      },
      {
            title: 'Burning Hands',
            description: 'As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one.  The fire ignites any flammable objects in the area that aren\'t being worn or carried.',
      },
      {
            title: 'Comprehend Languages',
            description: 'For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text.  ',
      },
      {
            title: 'Aganazzar\'s Scorcher',
            description: 'A line of roaring flame 30 feet long and 5 feet wide emanates from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 3d8 fire damage on a failed save, or half as much damage on a successful one.  ',
      },

      ]
    },
    {
      id: 14,
      name: 'Eden Telomere',
      race: 'Elf',
      class: 'Bard',
      level: 3,
      stats: {
        strength: 13,
        dexterity: 16,
        constitution: 14,
        intelligence: 12,
        wisdom: 15,
        charisma: 18
      },
      armorClass: 14,
      hitPoints: 30,
      equipment: [
      {
            title: 'Lute',
            description: 'Makes music.  You can smash with it too. +2 to hit. 1d4+1 damage.',
      },
      {
            title: 'Rapier',
            description: '+3 to hit. 1d6+1 damage.',
      },
      {
            title: 'Dagger',
            description: '+2 to hit. 1d4+1 damage.',
      },
      ],
      pic: 'https://i.pinimg.com/originals/5e/9e/ba/5e9ebadfe3cf30f2c515fe85d2b6827d.png',
      spellsOrSkills: [
      {
            title: 'Mage Hand',
            description: 'A spectral, floating hand appears at a point you choose within range. The hand lasts for a minute or until you dismiss it as an action.  You can use your action to control the hand. You can use the hand to manipulate an object. You can move the hand up to 30 feet each time you use it.  ',
      },
      {
            title: 'Friends',
            description: 'For the duration, you have advantage on all Charisma checks directed at one creature of your choice that isn\'t hostile toward you. When the spell ends, the creature realizes that you used magic to influence its mood and becomes hostile toward you. ',
      },
      {
            title: 'Silent Image',
            description: 'You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 15-foot cube. The image appears at a spot within range and lasts for the duration. The image is purely visual; it isn\'t accompanied by sound, smell, or other sensory effects.  You can use your action to cause the image to move to any spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking.  ',
      },
      {
            title: 'Speak with Animals',
            description: 'You gain the ability to comprehend and verbally communicate with beasts for the duration. The knowledge and awareness of many beasts is limited by their intelligence, but at minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day. You might be able to persuade a beast to perform a small favor for you, at the DM\'s discretion.  ',
      },
      ]
    },
    {
      id: 15,
      name: 'Yx Creekdancer',
      race: 'Human',
      class: 'Monk',
      level: 3,
      stats: {
        strength: 14,
        dexterity: 18,
        constitution: 13,
        intelligence: 15,
        wisdom: 16,
        charisma: 12
      },
      armorClass: 17,
      hitPoints: 27,
      equipment: [
      {
            title: 'Staff',
            description: '+5 to hit. 1d6+3 damage.',
      },
      {
            title: 'Fists and feet!',
            description: '+5 to hit. 1d4+3 damage.',
      },

      ],
      pic: 'https://i.pinimg.com/564x/92/1d/a2/921da27ba22bc6d04c6386402271a2a9.jpg',
      spellsOrSkills: [
      {
            title: 'Flurry of Blows',
            description: 'You can make 2 extra unarmed strikes. Twice per day',
      },
      {
            title: 'Step of the Wind',
            description: 'Your movement and jump distance are doubled for one action ',
      },
      {
            title: 'Stunning Strike',
            description: 'After you hit a creature, they must succeed on a Constitution saving throw (DC 14) or be Stunned until the end of your next turn.',
      },
      ]
    },
    {
      id: 16,
      name: 'Grung',
      race: 'Grung (frog peope)',
      class: 'Cleric',
      level: 3,
      stats: {
        strength: 14,
        dexterity: 16,
        constitution: 12,
        intelligence: 13,
        wisdom: 18,
        charisma: 15
      },
      armorClass: 16,
      hitPoints: 27,
      equipment: [
      {
            title: 'Spear ',
            description: '+3 to hit. 1d8+1 damage.',
      },
      {
            title: 'Javelins',
            description: '+3 to hit. 1d6+1 damage. You have 3',
      },
      ],
      pic: 'https://cdna.artstation.com/p/assets/images/images/035/817/708/large/christina-kritikou-viper-the-grung-sorcerer.jpg?1615981236',
      spellsOrSkills: [
      {
            title: 'Prayer of Healing',
            description: 'Up to six creatures of your choice that you can see within range each regain hit points equal to 2d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.  ',
      },
      {
            title: 'Zone of Truth',
            description: 'You create a magical zone that guards against deception in a 15-foot-radius sphere centered on a point of your choice within range.  On a failed Charisma save (DC 14), a creature can\'t speak a deliberate lie while in the radius. An affected creature is aware of the spell and can thus avoid answering questions to which it would normally respond with a lie. Such creatures can be evasive in its answers as long as it remains within the boundaries of the truth.  ',
      },
      {
            title: 'Command',
            description: 'You speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom saving throw or follow the command on its next turn. The spell has no effect if the target is undead, if it doesn\'t understand your language, or if your command is directly harmful to it.  ',
      },

      ]
    },
  ]
  return characterData
}

export default getCharacters