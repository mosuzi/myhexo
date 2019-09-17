const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    volume: 0.1,
    preload: 'metadata',
    audio: [
      {
        name: "告白の夜",
        artist: 'Ayasa绚沙',
        url: '/blog/music/Ayasa.mp3',
        cover: '/blog/music/ayasa.png'
      },
      {
        name: 'The dragonborn comes',
        artist: '括号君,迷惘（piano）',
        url: '/blog/music/The dragonborn comes.mp3',
        cover: '/blog/music/dragon.png'
      }
    ]
});