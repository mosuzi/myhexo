const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    volume: 0.2,
    audio: [
      {
        name: "告白の夜",
        artist: 'Ayasa绚沙',
        url: '/music/Ayasa.mp3'
      },
      {
        name: 'The dragonborn comes',
        artist: '括号君,迷惘（piano）',
        url: '/music/The dragonborn comes.mp3',
      }
    ]
});