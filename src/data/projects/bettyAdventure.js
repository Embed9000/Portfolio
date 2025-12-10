import { createProject } from "../../utils/createProject";

// VIDEO IMPORTS
import TinyCreaturesMainVideo from "https://ecmlkuxxaw5nvx0f.public.blob.vercel-storage.com/TinyCreaturesMainVideo.mp4";
import TinyCreatures from "https://ecmlkuxxaw5nvx0f.public.blob.vercel-storage.com/Tiny%20Creatures.mp4";
import GreenSlime from "https://ecmlkuxxaw5nvx0f.public.blob.vercel-storage.com/GreenSlime.mp4";
import IceSlime from "https://ecmlkuxxaw5nvx0f.public.blob.vercel-storage.com/IceSlime.mp4";
import FireSlime from "https://ecmlkuxxaw5nvx0f.public.blob.vercel-storage.com/FireSlime.mp4";
import PlayerControllerVideo from "https://ecmlkuxxaw5nvx0f.public.blob.vercel-storage.com/PlayerController.mp4";
import PlayerAttackVideo from "https://ecmlkuxxaw5nvx0f.public.blob.vercel-storage.com/PlayerAttack.mp4";
import TradingSystemVideo from "https://ecmlkuxxaw5nvx0f.public.blob.vercel-storage.com/TradingSystem.mp4";

// PDF IMPORTS
import SlimeController from "/pdf/bettyAdventure/SlimeController.pdf";
import PlayerControllerPdf from "/pdf/bettyAdventure/PlayerController.pdf";
import PlayerAttackPdf from "/pdf/bettyAdventure/PlayerAttack.pdf";
import TradingSystemPdf from "/pdf/bettyAdventure/TradingSystem.pdf";

export default createProject({
  title: "Betty's Tiny Adventure (2024)",
  slug: "bettys-tiny-adventure-2024",

  description:
    'This project was created for the Ludum Dare 56 game jam. The chosen theme was "Small Creatures", and me with my team recreated Slime Rancher as a 2D top-down game.',

  videoUrl: TinyCreaturesMainVideo,
  thumbnailUrl: TinyCreatures,
  projectUrl: "#",

details: [
  { icon: "User", text: "6" },
  { icon: "Clock", text: "3 Days" },
  { icon: "Cube", text: "Unity" },
],

  about: `Betty's Tiny Adventure was made for Ludum Dare 56 in 2024, based on the theme "Small Creatures." It’s a 2D top-down take on Slime Rancher, where you capture or defeat three types of slimes to collect crystals. These crystals let you buy better gear and progress in the game.`,

  projectInfo: [
    { label: "Role", value: "Game design" },
    { label: "Team Size", value: "6" },
    { label: "Time frame", value: "3 Days" },
    { label: "Engine", value: "Unity" },
  ],

  introduction: `
Betty's Tiny Adventure was a challenging project completed within a tight 3-day deadline for a game jam. I was the sole programmer and handled all the coding and game design aspects, while the rest of the team focused on creating sprites for characters, enemies, items, and other visuals.
I chose to tackle something new for me — building an inventory system that lets you pick up and drop objects dynamically. I learned and implemented this system in real time during the project.
Each enemy had unique abilities:
The green slime had a simple attack.
The ice slime, if kept too long in the inventory, would freeze the player and escape on its own.
The fire slime could randomly explode, dealing damage to the player.
I also quickly added a save system using methods I was already familiar with in Visual Studio Code, since I didn’t have time to learn new techniques during the jam.
My goal:
The main purpose was self-development and challenging myself, since I was the only programmer on the team and wanted to try something new under a tight deadline. Besides personal growth, I also participated for fun and the excitement of the competition.
`,

  workImpact: `In this project, I was fully responsible for Game Design, scripting, and programming animations and sounds  The rest of the team worked on all the visual assets: sprites for the game world, characters, enemies, and animations.`,

  projectDeveleloping: [
    {
      label: "Slime Controller",
      value: [
        `This script controls a slime in the game. The slime has a level, health, damage, and some special special traits depending on its type—like fire, ice, or others. When it starts, the slime gets random random values for health and level, sets up references to the player and other objects in the scene, and gets ready to move.
Every frame, the slime checks its distance from the player and its “home” spot. If it’s an ice-type slime and it’s being carried by the player, after some time it can hurt the player and then drops back into the world at a designated spot. If it’s a fire-type slime, it occasionally explodes, putting itself to sleep sleep and damaging the player if they’re close.
The slime moves toward the player to attack, and when close enough, it does a sprint attack and hits. After the attack, it backs off a bit. When it’s asleep, it just stays still with some sleep effects visible.
If it takes damage from the player, its health goes down down, and when it dies, it gives experience points to the player.
You can pick up the slime by pressing “E” if it’s sleeping and nearby, and drop it with “R.” If you’re near a slime pen, you can put the slime inside it, and it starts starts producing crystals—basically farming.
When inside the pen, the slime moves randomly randomly within it.
In short, the slime has a full behavior system: it moves, attacks, sleeps, can be picked up and put into a pen, takes damage, regenerates, produces crystals, and can hurt the player if aggressive or if you let it go wild.
`,
        GreenSlime,
        IceSlime,
        FireSlime,
      ],
    },

    {
      label: "Code-SlimeController",
      value: SlimeController,
    },

    {
      label: "Spawn Slime",
      value: [
        `This script manages the spawning of slimes in the game, making sure there aren’t more slimes than the maximum allowed (maxMobSpawn).
At the start, it sets a random cooldown timer somewhere between 60% and 100% of the specified spawnTimer. Every frame, it checks if the current number of slimes is`,
        PlayerControllerVideo,
        PlayerControllerPdf,
      ],
    },

    {
      label: "Player Attack",
      value: [
        `This script handles the player’s attack. When you press Space and the attack cooldown is over, it triggers the attack animation and plays the attack sound.
While attacking, the player’s speed gets a small boost to make the movement feel more dynamic. After the attack, the speed goes back to normal.
It also tracks when the player can be hit (getAttack), using a cooldown to prevent getting attacked repeatedly without a break.
In short: it controls when and how the player attacks, manages the timing for when the player can take damage, and handles speed changes, animation, and sound effects during the attack.
`,
        PlayerAttackVideo,
        PlayerAttackPdf,
      ],
    },

    {
      label: "Trading System",
      value: [
        `This script manages everything related to the player trading stuff in the game. It lets the player sell crystals when they’re close to a seller and press E, converting crystals like fire, ice, green, or gold into coins, with sounds confirming the sale or warning warning when they have nothing nothing to sell.
It also also handles buying upgrades or items at special shops. If the player has enough coins and presses E near the shop, the script deducts deducts the coins, unlocks the upgrade (like changing the player’s attack type type), and plays a sound and animation to confirm the purchase. If they don’t have enough coins, it plays a sound to let them know.
The script constantly checks the player’s distance to the shop or seller to show or hide hide UI prompts and activate or deactivate sounds, so trading only happens when the player is close enough and interacts by pressing the correct key.
In short, this single system smoothly controls how the player sells resources and buys upgrades, keeping keeping the game economy and player progression in sync through intuitive intuitive proximity and input checks.`,
        TradingSystemVideo,
        TradingSystemPdf,
      ],
    },

    {
      label: "What I learned",
      value: `For the first time, I created a script that defines multiple enemies, each with different abilities, that you can interact with in the game. I learned how to manage game logic to avoid any critical bugs, optimize optimize the code, and make it more reliable. I also improved my skills in using Unity prefabs and handling their spawning and interactions properly.
It was a really really enjoyable experience, though a bit stressful. I didn’t manage to do everything everything I wanted because of limited time, but I was able to build and learn how to create a complex player control system with full stats and interactions. interactions.
Likewise, I developed enemies with visual effects and sound to enhance enhance the game’s atmosphere.`,
    },
  ],
});
