export interface DiscordLaughMessage {
  username: string;
  avatar: string;
  color: string;
  timestamp: string;
  content: string;
  isBot: boolean;
}

const usernames = [
  'NightWolf',
  'KappaKing',
  'LunaByte',
  'NeoPixel',
  'ShadowNeko',
  'MatiDev',
  'SantiGG',
  'BlueComet',
  'TomiPlay',
  'PixelWitch',
  'RomiSky',
  'FacuNode',
  'AgusLoop',
  'DarwinXD',
  'NicoBlink',
  'GhostMeme',
  'SebaCraft',
  'ValenBeat',
  'PogRider',
  'LautiLink',
  'MaxiBolt',
  'CamiSpark',
  'PabloPing',
  'RegorFan',
  'JuanchoArc',
  'MiniNova',
  'ChatLover',
  'KappaXD',
  'RavenByte',
  'Pixelito',
  'BlueFox',
  'DarkLeo',
  'RomiSoft',
  'TwitchyCat',
  'FedeGG',
  'RandomGuy',
  'SpeedyIO',
  'AgusPrime',
  'SantiCode',
  'NeoX',
  'MatiFlow',
  'NekoPulse',
  'LunaHex',
  'PandaLag',
  'JaviSynth',
  'CobraPing',
  'KiraLoop',
  'OmegaClip',
  'DaniWarp',
  'MomoBits',
];

const laughMessages = [
  'jajajajajaja',
  'JAJAJAJAJA',
  'jajaja no puedo',
  'me muero de risa jajaja',
  'jajajaj que buen clip',
  'jsjsjsjsjs',
  'xd jajajaja',
  'JAJAJA tremendo',
  'jajaja literal',
  'jajaja me ahogo',
  'jajajajaja buenisimo',
  'nooo jajaja',
  'jaja jaja jaja',
  'me tente mal jajaja',
  'jajajajajaj dios',
  'ajajajajjaj',
  'jaja esto es oro',
  'jajaja basta',
  'JAJAJA NO',
  'jajaja clip del año',
];

const usernameColors = [
  '#59bfff',
  '#f0b232',
  '#57f287',
  '#ed4245',
  '#eb459e',
  '#5865f2',
  '#faa61a',
  '#2dc770',
  '#a56ef5',
  '#00d1b2',
];

const avatarStyles = ['thumbs', 'bottts-neutral', 'fun-emoji', 'icons', 'adventurer'];

const pad = (value: number) => value.toString().padStart(2, '0');

export const discordLaughMessages: DiscordLaughMessage[] = Array.from(
  { length: 240 },
  (_, index) => {
    const usernameBase = usernames[index % usernames.length];
    const username = `${usernameBase}_${pad((index % 97) + 1)}`;
    const style = avatarStyles[index % avatarStyles.length];
    const avatar = `https://api.dicebear.com/9.x/${style}/svg?seed=${encodeURIComponent(`${username}-${index}`)}`;
    const color = usernameColors[index % usernameColors.length];
    const minute = 10 + (index % 50);
    const hour = 1 + Math.floor(index / 60);
    const timestamp = `${hour}:${pad(minute % 60)}`;
    const laugh = laughMessages[index % laughMessages.length];
    const suffix = index % 3 === 0 ? ' 😂' : index % 3 === 1 ? ' 🤣' : ' 😭';

    return {
      username,
      avatar,
      color,
      timestamp,
      content: `${laugh}${suffix}`,
      isBot: false,
    };
  },
);
