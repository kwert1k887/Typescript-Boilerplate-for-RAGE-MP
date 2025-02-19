mp.events.add({
    'packagesLoaded': () => console.log('Серверная часть успешно инициализирован'),
    'playerJoin': (player: PlayerMp) => console.log(`${player.name} присоединился к серверу!`),
});