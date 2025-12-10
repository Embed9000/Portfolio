import { createProject } from "../../utils/createProject";

// VIDEOS
const KokomarkaMainVideo = "https://ecmlkuxxaw5nvx0f.public.blob.vercel-storage.com/KokomarkaMainVideo-2YhKxTFAHYJ8lWseGcZELMIeK36k9l.mp4";
const KokomarkaThumb = "https://ecmlkuxxaw5nvx0f.public.blob.vercel-storage.com/KokomarkaMainVideo-2YhKxTFAHYJ8lWseGcZELMIeK36k9l.mp4";

const PlayerControllerKoko = "https://ecmlkuxxaw5nvx0f.public.blob.vercel-storage.com/PlayerControllerKoko-xCVX1kLBHDhbOWUhxycjuG6MNNlP3u.mp4";
const LevelUp = "https://ecmlkuxxaw5nvx0f.public.blob.vercel-storage.com/LevelUp-wgKSn0NzWN1PgzHdvrWqjxRScWly4I.mp4";
const NpcController = "https://ecmlkuxxaw5nvx0f.public.blob.vercel-storage.com/NpcController-i0MM2tHkH6cMMwg1tRLvv4KT2PiOQS.mp4";
const EnemyControlller = "https://ecmlkuxxaw5nvx0f.public.blob.vercel-storage.com/EnemyControlller-8cIp2sLgP1cfs2Z34sgappDnfEwBpA.mp4";
const BossController = "https://ecmlkuxxaw5nvx0f.public.blob.vercel-storage.com/BossController-OG281s91kUvvBhPPpualQNLeThYogD.mp4";
const ProjectileController = "https://ecmlkuxxaw5nvx0f.public.blob.vercel-storage.com/ProjectileController-n1TfGInXNOh9Jv7Lz8ZdUOSxYVNbdB.mp4";

// PDFs
import PlayerControllerKokopdf from "/pdf/kokomarka/playerControllerKoko.pdf";
import StatsPlayerK from "/pdf/kokomarka/StatsPlayerK.pdf";
import LevelUpManagerK from "/pdf/kokomarka/LevelUpManagerK.pdf";
import NpcControllerK from "/pdf/kokomarka/NpcControllerK.pdf";
import EnemyControllerK from "/pdf/kokomarka/EnemyControllerK.pdf";
import BossControllerK from "/pdf/kokomarka/BossControllerK.pdf";
import ProjectileControllerK from "/pdf/kokomarka/ProjectileControllerK.pdf";

export default createProject({
  title: "Kokomarka (2025)",
  slug: "kokomarka-2025",

  description:
    "This short passion project was made in my free time for self-growth. You’re sent by God to Earth with a mission to defeat the demon threatening the world you live in.",

  videoUrl: KokomarkaMainVideo,
  thumbnailUrl: KokomarkaThumb,

details: [
  { icon: "User", text: "1" },
  { icon: "Clock", text: "2 Week" },
  { icon: "Cube", text: "Unity" },
],

  about: `This project was started purely for fun. At the time, I was working intensively on Anaria — its first version before release — and was mentally exhausted, finding it hard to maintain the same pace. That’s why I often start small “demo” projects, to test ideas I’m curious about and see if I can make them work.`,

  projectInfo: [
    { label: "Role", value: "Game design" },
    { label: "Team Size", value: "1" },
    { label: "Time frame", value: "2 Week" },
    { label: "Engine", value: "Unity" },
  ],

  introduction: `
As its name suggests, this project started just for fun — but the result even surprised me.
The game’s story is as follows: you are a living light, which explains the entirely white, glowing character design. Arriving on Earth with no memory, everyone calls you the hero sent by God. Eventually, you discover your true purpose: to fight against God Himself, who in this world takes the form of a demon.
Your goal is to defeat Him, and once you succeed, you disappear along with all the monsters God created on Earth.
The reason — or rather the way — you arrived here is because of a falling star, sent by the true creator of Earth, who has been watching from afar.
The game features simple interactions: you can attack, NPCs can talk to you, and enemies have basic AI — including spawning, patrolling, chasing, and attacking.
The main enemy, “The God,” has multiple mechanics, such as generating random spells, casting them, having the spells track the player after being launched, moving to random positions, and performing attacks.
To make the experience more spectacular, I also added background effects, since, as I mentioned earlier, my goal from the start was to create a visually appealing and distinctive game.
My Goal:
My primary goal was to create a 2D game with a beautiful artistic style, using shaders for the water. However, since I tend to push things further than I originally plan, I ended up adding more mechanics — which turned out to be quite good in the end.
`,

  workImpact: `I developed all the mechanics and scripts from scratch, along with the game’s concept and all aspects of its game design, using only sprites and images imported from the Unity Store.`,

  projectDeveleloping: [
    {
      label: "Player Controller",
      value: [
        `I experimented with implementing Unity’s CharacterController, which is normally designed for 3D projects, in a 2D game. I was curious to see how practical it would be, so I integrated it and managed to make it work. However, in the end, I can confidently say it’s not practical for a 2D setup — but it was a fun and interesting test driven by curiosity.
 The player script controls movement, jumping, stamina, and attacking using CharacterController, even though the project is 2D. It reads input from the keyboard (WASD or arrows) for movement and space/F for sprinting and jumping, and calculates direction and velocity accordingly. Gravity is applied manually to simulate falling.
The script also handles attacks: left-click triggers an attack if stamina allows, activating attack hitboxes, playing animations, sound effects, and particle effects. Blocking is implemented with right-click, modifying animations and preventing attacks.
Animations are updated in real-time based on movement, sprinting, jumping, and attacking, ensuring visual feedback matches gameplay.
Overall, this shows that while CharacterController is designed for 3D, it can be adapted for a 2D game, though it’s not very practical — it was an experiment driven by curiosity and for fun.`,
        PlayerControllerKoko,
        PlayerControllerKokopdf,
      ],
    },

    {
      label: "Player Stats",
      value: [
        `The PlayerStats script manages the player's health, stamina, experience, and leveling. It updates UI sliders in real-time to reflect current HP and stamina, and handles damage taken from enemies or projectiles. If the player is blocking, damage is reduced or nullified, and appropriate animations and camera effects are triggered.
The script also tracks experience gained from defeated enemies, increases the player's level when XP thresholds are reached, and instantiates a level-up UI to allow skill selection. Sound effects for taking damage are played automatically.
Overall, this script ensures that all core player stats and progression mechanics are functional and visually represented in the game.`,
        StatsPlayerK,
      ],
    },

    {
      label: "Level Up Manager",
      value: [
        `This script handles the character upgrade system whenever the player earns a skill point. When the level-up menu appears, the player can choose between three options to improve their character.
At the start, the script finds the player object in the scene and retrieves the relevant scripts: statsPlayer (for stats like health, stamina, and armor) and mainCharacterController (for attack power). It also displays the descriptions of the three available upgrade options in the UI:
Increase stamina regeneration.
Increase the player’s attack power.
Increase armor.
During gameplay, the script listens for input from the player. If the player presses 1, 2, or 3, the script immediately applies the corresponding upgrade to the character’s stats.
Once the player selects an upgrade, the level-up menu closes, the game time is restored to normal, and the UI object is destroyed, allowing the player to continue playing seamlessly.
This script provides a simple yet effective way for the player to customize their character’s progression.`,
        LevelUp,
        LevelUpManagerK,
      ],
    },

    {
      label: "Npc Controller",
      value: [
        `This script manages an NPC’s behavior, allowing the player to interact through conversations and, in some cases, teleportation.
When the player enters the NPC’s trigger area, the conversation starts and the corresponding UI is activated. The conversation text is displayed gradually, letter by letter, for a dynamic visual effect. At certain points, multiple dialogue options or a continue button may appear for the player.
At the end of the conversation, the script either simply closes the UI or teleports the player to a predetermined location. During teleportation, the player’s controls are temporarily disabled, and visual effects such as transitions or special scenes (e.g., a boss fight) are activated. After teleporting, control is restored and the transition effects are disabled.
In short, the script handles NPC interaction, text display, dialogue options, and player teleportation, providing a smooth and controlled gameplay experience.`,
        NpcController,
        NpcControllerK,
      ],
    },

    {
      label: "Enemy Controller",
      value: [
        `This script controls the behavior of a basic enemy in a 2D/2.5D game. It manages movement, attacks, damage reception, and death, as well as animations and sound effects.
The enemy constantly checks its distance from the player: if the player is within a certain range, it follows them; if very close, it attacks; if the player is far, it patrols between predefined positions. During movement, the enemy flips to face the correct direction.
Attacks are triggered when the player is within range and cooldowns allow, activating a hitbox, playing attack sounds, and triggering animations. The enemy can receive damage from the player's attacks, decreasing its HP. When HP reaches zero, the enemy dies, plays a death animation, stops movement sounds, and awards XP to the player.
Overall, the script orchestrates enemy AI, combining simple patrol, follow, attack, and damage behaviors, while integrating visual and audio feedback for a responsive gameplay experience.`,
        EnemyControlller,
        EnemyControllerK,
      ],
    },

    {
      label: "Boss Controller",
      value: [
        `This script controls the behavior of a boss in a game. The boss moves between predefined points and automatically faces the player. It can attack the player via a temporarily activated collider and spawn projectiles from defined positions at random intervals. The script manages the boss’s health, updates a UI HP slider, triggers the death animation, and stops sounds when HP reaches zero. Additionally, it adjusts the camera based on the distance to the player and applies small camera movement effects during attacks.
It also detects the player’s attacks and reduces the boss’s HP accordingly. Movement and attack cooldowns are handled through coroutines, and the movement points and attacks are semi-randomized to create dynamic and unpredictable behavior.`,
        BossController,
        BossControllerK,
      ],
    },

    {
      label: "ProjectileController",
      value: [
        `This script controls a projectile aimed at the player. After a short random delay, the projectile detaches from its parent and starts moving toward the player's position, slightly adjusted upward. It applies force continuously to fly toward the player and automatically destroys itself after 6 seconds. The projectile has a defined attack power, making it capable of dealing damage on impact.`,
        ProjectileController,
        ProjectileControllerK,
      ],
    },

    {
      label: "What I learned",
      value: `
For the first time, I created a script that defines multiple enemies, each with different abilities, that you can interact with in the game. I learned how to manage game logic to avoid any critical bugs, optimize the code, and make it more reliable. I also improved my skills in using Unity prefabs and handling their spawning and interactions properly.
It was a really enjoyable experience, though a bit stressful. I didn’t manage to do everything I wanted because of limited time, but I was able to build and learn how to create a complex player control system with full stats and interactions. Likewise, I developed enemies with visual effects and sound to enhance the game’s atmosphere.
`,
    },
  ],
});
