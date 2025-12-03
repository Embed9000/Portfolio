import { Users, Clock } from "lucide-react";
import CubeIcon from "../assets/CubeIcon";
import TinyCreatures from "../assets/Tiny Creatures.mp4";
import Claustraphobia from "../assets/claustrofobie.mp4";
import Kokomarka from "../assets/Cocomarka.mp4";
import Detectivia from "../assets/Detectivitatea.mp4";
import LostSword from "../assets/Lost sword.mp4";
import Anaria from "../assets/Anaria.mp4";
import AnariaReborn from "../assets/Anaria_Reborn.mp4";

import GreenSlime from "../assets/GreenSlime.mp4";
import IceSlime from "../assets/IceSlime.mp4";
import FireSlime from "../assets/FireSlime.mp4";
import SlimeController from "../assets/SlimeController.pdf";
import SpawnSlimeVideo from "../assets/SpawnSlime.mp4";
import SpawnSlimePdf from "../assets/spawnSlime.pdf";
import PlayerControllerVideo from "../assets/PlayerController.mp4";
import PlayerControllerPdf from "../assets/playerController.pdf";
import PlayerAttackVideo from "../assets/PlayerAttack.mp4";
import PlayerAttackPdf from "../assets/PlayerAttack.pdf";
import TradingSystemVideo from "../assets/TradingSystem.mp4";
import TinyCreaturesMainVideo from "../assets/TinyCreaturesMainVideo.mp4";
import TradingSystemPdf from "../assets/TradingSystem.pdf";

import PlayerControllerClaustrophobia from "../assets/PlayerControllerC.mp4"
import WindowSystemClaustrophobia from "../assets/WindowSystem.mp4"
import FakeExitController from "../assets/FakeExitSystem.mp4"
import InventorySystem from "../assets/InventorySystem.mp4"
import MainVideoClaustrophobia from "../assets/MainVideoClaustrophobia.mp4"


import PlayerControllerKoko from "../assets/PlayerControllerKoko.mp4"
import PlayerControllerKokopdf from "../assets/playerControllerKoko.pdf"
import StatsPlayerK from "../assets/StatsPlayerK.pdf"
import LevelUp from "../assets/LevelUp.mp4"
import LevelUpManagerK from "../assets/LevelUpManagerK.pdf"
import NpcController from "../assets/NpcController.mp4"
import NpcControllerK from "../assets/NpcControllerk.pdf"
import EnemyControlller from "../assets/EnemyControlller.mp4"
import EnemyControllerK from "../assets/EnemyControllerK.pdf"
import BossController from "../assets/BossController.mp4"
import BossControllerK from "../assets/BossControllerK.pdf"
import ProjectileController from "../assets/ProjectileController.mp4"
import KokomarkaMainVideo from "../assets/KokomarkaMainVideo.mp4"
import ProjectileControllerK from "../assets/ProjectileControllerK.pdf"


import CodeAiConection from "../assets/AiConection.pdf"
import VoiceToText from "../assets/VoiceToText.pdf"
import NpcControllerD from "../assets/NpcControllerD.mp4"
import NpcControllerDe from "../assets/NpcControllerD.pdf"
import CaseFile from "../assets/CaseFile.mp4"
import CaseFileD from "../assets/CaseFile.pdf"

import PlayerControllerL from "../assets/PlayerControllerL.pdf"
import PlayerAttackL from "../assets/PlayerAttackL.mp4"
import PlayerAttackLo from "../assets/PlayerAttackLo.pdf"
import PlayerStats from "../assets/PlayerStats.mp4"
import PlayerStatsL from "../assets/StatsPlayer.pdf"
import InventorySystemL from "../assets/InventorySystemL.mp4"
import InventorySystemLo from "../assets/InventorySystemL.pdf"
import EnemyControllerL from "../assets/EnemyControllerL.mp4"
import EnemyControllerLo from "../assets/EnemyControllerL.pdf"
import AnualTezis from "../assets/anualTezis.pdf"
import GuildSystem from "../assets/GuildSystem.mp4"

import CabinetController from "../assets/CabinetController.pdf"
import DoorController from "../assets/DoorController.pdf"
import LockerController from "../assets/LockerController.pdf"

import PlayerControllerAR from "../assets/PlayerControllerAR.pdf"
import CabinetControllerAR from "../assets/CabinetControllerAR.mp4"
import CabinetControllerARE from "../assets/CabinetControllerAR.pdf"
import LockerControllerAR from "../assets/LockerControllerAR.mp4"
import LockerControllerARE from "../assets/LockerControllerAR.pdf"
import ClockController from "../assets/ClockController.mp4"
import ClockControllerA from "../assets/ClockController.pdf"
import DollAiController from "../assets/DollAiController.mp4"
import Features from "../assets/Features.mp4"
import DollAiControllerA from "../assets/DollAiController.pdf"
import PhoneController from "../assets/PhoneController.mp4"
import Trailer from "../assets/Trailer.mp4"
import PhoneControllerA from "../assets/PhoneController.pdf"



export const projects = [
  {
    title: "Betty's Tiny Adventure (2024)",
    slug: "bettys-tiny-adventure-2024",
    description:
      'This project was created for the Ludum Dare 56 game jam. The chosen theme was "Small Creatures", and me with my team recreated Slime Rancher as a 2D top-down game.',
    videoUrl: TinyCreaturesMainVideo,
    thumbnailUrl: TinyCreatures,
    projectUrl: "#",
    details: [
      { icon: <Users size={30} />, text: "6" },
      { icon: <Clock size={30} />, text: "3 Days" },
      { icon: <CubeIcon width={30} height={30} />, text: "Unity" },
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
        value: `This script controls a slime in the game. The slime has a level, health, damage, and some special traits depending on its type—like fire, ice, or others. When it starts, the slime gets random values for health and level, sets up references to the player and other objects in the scene, and gets ready to move.

Every frame, the slime checks its distance from the player and its “home” spot. If it’s an ice-type slime and it’s being carried by the player, after some time it can hurt the player and then drops back into the world at a designated spot. If it’s a fire-type slime, it occasionally explodes, putting itself to sleep and damaging the player if they’re close.

The slime moves toward the player to attack, and when close enough, it does a sprint attack and hits. After the attack, it backs off a bit. When it’s asleep, it just stays still with some sleep effects visible. If it takes damage from the player, its health goes down, and when it dies, it gives experience points to the player.

You can pick up the slime by pressing “E” if it’s sleeping and nearby, and drop it with “R.” If you’re near a slime pen, you can put the slime inside it, and it starts producing crystals—basically farming. When inside the pen, the slime moves randomly within it.

In short, the slime has a full behavior system: it moves, attacks, sleeps, can be picked up and put into a pen, takes damage, regenerates, produces crystals, and can hurt the player if aggressive or if you let it go wild.

`,
      },
      {
        label: "",
        value: [GreenSlime, IceSlime, FireSlime],
      },
      {
        label1: "Code-SlimeController",
        value: SlimeController,
      },
      {
        label: "Spawn Slime",
        label1: "Code-SpawnSlime",
        value: [
          `This script manages the spawning of slimes in the game, making sure there aren’t more slimes than the maximum allowed (maxMobSpawn).

At the start, it sets a random cooldown timer somewhere between 60% and 100% of the specified spawnTimer. Every frame, it checks if the current number of slimes is below the max and if the cooldown has finished. If so, it tries to spawn a new slime.

When spawning, it randomly picks one of the three slime types (green, fire, or ice), but only if that type is enabled in the settings (green, fire, ice). If the selected type is valid, it creates the slime, places it at one of the predefined spawn locations, parents it there, and adds a tracking component so the slime can communicate back to this spawner.

After spawning, the cooldown resets to a new random time, and the current slime count increases by one.

If a slime dies or gets removed, the DecrementMobCount() function is called to decrease the counter, allowing new slimes to spawn.



Overall, the script keeps the number of slimes in check and spawns them periodically, distributing them randomly across the specified locations.



`,
          SpawnSlimeVideo,
          SpawnSlimePdf,
        ],
      },
      {
        label: "Player Controller",
        label1: "Code-PlayerController",
        value: [
          `The player moves using the W, A, S, and D keys, with diagonal movement being a bit slower to keep it smooth and balanced. Movement input is read each frame, and the character’s Rigidbody2D is moved accordingly in FixedUpdate.

The script also handles the player’s health regeneration based on distance from their home—closer means faster healing, farther means slower or no healing.

Regarding slimes, the script constantly tracks if the player is near a "slime pen" area and finds the closest slime pen object. This is important because it lets the player interact with slimes, like picking them up, dropping them off, or managing them inside the slime pen. The script keeps count of how many slimes the player currently has and updates this as the player interacts with the world.

There’s also handling for damage the player takes, including freezing effects and playing damage animations and sounds. When the player collects crystals (like green, fire, ice, or gold), it updates the UI and plays collection sounds.

So basically, this script controls how the player moves, manages health, takes damage, and interacts specifically with slime pens and crystals in the game world.


`,
          PlayerControllerVideo,
          PlayerControllerPdf,
        ],
      },
      {
        label: "Player Attack",
        label1: "Code-Player Attack",
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
        label1: "Code-TradingSystem",
        value: [
          `This script manages everything related to the player trading stuff in the game. It lets the player sell crystals when they’re close to a seller and press E, converting crystals like fire, ice, green, or gold into coins, with sounds confirming the sale or warning when they have nothing to sell.

It also handles buying upgrades or items at special shops. If the player has enough coins and presses E near the shop, the script deducts the coins, unlocks the upgrade (like changing the player’s attack type), and plays a sound and animation to confirm the purchase. If they don’t have enough coins, it plays a sound to let them know.

The script constantly checks the player’s distance to the shop or seller to show or hide UI prompts and activate or deactivate sounds, so trading only happens when the player is close enough and interacts by pressing the correct key.


In short, this single system smoothly controls how the player sells resources and buys upgrades, keeping the game economy and player progression in sync through intuitive proximity and input checks.


`,
          TradingSystemVideo,
          TradingSystemPdf,
        ],
      },
      {
        label: "What I learned",
        value:
          `For the first time, I created a script that defines multiple enemies, each with different abilities, that you can interact with in the game. I learned how to manage game logic to avoid any critical bugs, optimize the code, and make it more reliable. I also improved my skills in using Unity prefabs and handling their spawning and interactions properly.

It was a really enjoyable experience, though a bit stressful. I didn’t manage to do everything I wanted because of limited time, but I was able to build and learn how to create a complex player control system with full stats and interactions. Likewise, I developed enemies with visual effects and sound to enhance the game’s atmosphere.
`
      },
    ],
  },

  {
    title: "Claustraphobia (2023)",
    slug: "claustraphobia-2023",
    description:
      "This project was created for the Ludum Dare 54 game jam. The theme was ‘Limited Space,’ and your goal is to escape the mental hospital where you find yourself trapped.",
    videoUrl: MainVideoClaustrophobia,
    thumbnailUrl: Claustraphobia,
    projectUrl: "#",
    details: [
      { icon: <Users size={30} />, text: "6" },
      { icon: <Clock size={30} />, text: "3 Days" },
      { icon: <CubeIcon width={30} height={30} />, text: "Unity" },
    ],
    about: `Claustrophobia was also a project made for the Ludum Dare competition.
The story is that you find yourself in a mental hospital, and after waking up, you try to escape — but in reality, it’s all just in your imagination, and in the end, you never manage to get out.`,
    projectInfo: [
      { label: "Role", value: "Game design" },
      { label: "Team Size", value: "6" },
      { label: "Time frame", value: "3 Days" },
      { label: "Engine", value: "Unity" },
    ],
    introduction: `The game has a psychological theme. Since the Ludum Dare competition theme was "confined spaces", we chose to explore the fear of claustrophobia. The player constantly experiences moments where it seems they’ve found an exit, only for it to be blocked, creating the feeling that the world around them is closing in tighter and tighter.

The controls are simple: move left or right, and jump. There’s also a bar in the top-left corner representing your mental health. To restore it, you need to reach the next level or find a window that provides oxygen, gradually recovering your sanity.

My goal:

My aim was to try something new with my first international competition, to get deeper into game development and see how others design their levels.

`,
    workImpact: `I collaborated with one teammate on scripting, while the rest of the team created the sprites. I was responsible for the remaining game design elements`,
    projectDeveleloping: [
      {
        label: "Player Controller",
        value: [`The player controls were implemented simply using a 2D Box Collider.
Movement was applied via the Rigidbody: velocity was used for left and right movement, and force for jumping.
I also scripted the Animator to change the sprites depending on the player’s actions and the direction they were facing.
`,PlayerControllerClaustrophobia],
      },
      {
        label: "Window System",
        value: [`The window system, which provides the player with oxygen, was implemented simply using OnTriggerEnter2D. A trigger was placed at the window, and when the player reached it (identified via tag), the oxygen slider would increase over time using Time.deltaTime.`,WindowSystemClaustrophobia],
      },
      {
        label: "Fake Exit Controller",
        value: [`The claustrophobia effect in the game is amplified by the illusion of exits that close when the player collides with an invisible wall (OnCollisionEnter2D). This triggers a sprite with a small transition animation, fading from transparent to create a smoother effect.
`,FakeExitController,],
      },
      {
        label: "Inventory & Candle Mechanic",
        value: [`The player has an inventory system that allows them to hold or drop a candle. In dark rooms, the player cannot move far from the candle, reinforcing the “confined spaces” theme.

A block can only be moved if the player does not have the candle in their inventory. When the candle is dropped, it spawns at the player’s position as a GameObject with a collider and Rigidbody. Dropping is only allowed in specific trigger zones to prevent bugs. The HUD clearly shows whether the candle is in the player’s inventory or dropped.


`,InventorySystem],
      },
      {
        label: "What I learned",
        value:
          `One of the most important lessons I learned was the importance of choosing a leader. Since I had more experience before university compared to the rest of the team, I was offered the role — but I refused without thinking. By the end of the project, I realized I should have taken the lead.
Even without a leader, as long as there was mutual respect, no conflicts or misunderstandings arose, and everything went smoothly.
`
      },
    ],
  },

  {
    title: "Kokomarka (2025)",
    slug: "kokomarka-2025",
    description:
      "This short passion project was made in my free time for self-growth. You’re sent by God to Earth with a mission to defeat the demon threatening the world you live in.",
    videoUrl: KokomarkaMainVideo,
    thumbnailUrl: Kokomarka,
    projectUrl: "#",
    details: [
      { icon: <Users size={30} />, text: "6" },
      { icon: <Clock size={30} />, text: "3 Days" },
      { icon: <CubeIcon width={30} height={30} />, text: "Unity" },
    ],
    about: `This project was started purely for fun. At the time, I was working intensively on Anaria — its first version before release — and was mentally exhausted, finding it hard to maintain the same pace. That’s why I often start small “demo” projects, to test ideas I’m curious about and see if I can make them work.`,
    projectInfo: [
      { label: "Role", value: "Game design" },
      { label: "Team Size", value: "1" },
      { label: "Time frame", value: "2 Week" },
      { label: "Engine", value: "Unity" },
    ],
    introduction: `As its name suggests, this project started just for fun — but the result even surprised me.

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
        value: [`I experimented with implementing Unity’s CharacterController, which is normally designed for 3D projects, in a 2D game. I was curious to see how practical it would be, so I integrated it and managed to make it work. However, in the end, I can confidently say it’s not practical for a 2D setup — but it was a fun and interesting test driven by curiosity.
 
The player script controls movement, jumping, stamina, and attacking using CharacterController, even though the project is 2D. It reads input from the keyboard (WASD or arrows) for movement and space/F for sprinting and jumping, and calculates direction and velocity accordingly. Gravity is applied manually to simulate falling.

The script also handles attacks: left-click triggers an attack if stamina allows, activating attack hitboxes, playing animations, sound effects, and particle effects. Blocking is implemented with right-click, modifying animations and preventing attacks.

Animations are updated in real-time based on movement, sprinting, jumping, and attacking, ensuring visual feedback matches gameplay.



Overall, this shows that while CharacterController is designed for 3D, it can be adapted for a 2D game, though it’s not very practical — it was an experiment driven by curiosity and for fun.`,
PlayerControllerKoko,PlayerControllerKokopdf],
      },
      {
        label: "Player Stats",
        value: [`The PlayerStats script manages the player's health, stamina, experience, and leveling. It updates UI sliders in real-time to reflect current HP and stamina, and handles damage taken from enemies or projectiles. If the player is blocking, damage is reduced or nullified, and appropriate animations and camera effects are triggered.

The script also tracks experience gained from defeated enemies, increases the player's level when XP thresholds are reached, and instantiates a level-up UI to allow skill selection. Sound effects for taking damage are played automatically.

Overall, this script ensures that all core player stats and progression mechanics are functional and visually represented in the game.

`,StatsPlayerK],
      },
      {
        label: "Level Up Manager",
        value: [`This script handles the character upgrade system whenever the player earns a skill point. When the level-up menu appears, the player can choose between three options to improve their character.

At the start, the script finds the player object in the scene and retrieves the relevant scripts: statsPlayer (for stats like health, stamina, and armor) and mainCharacterController (for attack power). It also displays the descriptions of the three available upgrade options in the UI:

Increase stamina regeneration.

Increase the player’s attack power.

Increase armor.

During gameplay, the script listens for input from the player. If the player presses 1, 2, or 3, the script immediately applies the corresponding upgrade to the character’s stats.

Once the player selects an upgrade, the level-up menu closes, the game time is restored to normal, and the UI object is destroyed, allowing the player to continue playing seamlessly.



This script provides a simple yet effective way for the player to customize their character’s progression.


`,LevelUp,LevelUpManagerK],
      },
      {
        label: "Npc Controller",
        value: [`This script manages an NPC’s behavior, allowing the player to interact through conversations and, in some cases, teleportation.

When the player enters the NPC’s trigger area, the conversation starts and the corresponding UI is activated. The conversation text is displayed gradually, letter by letter, for a dynamic visual effect. At certain points, multiple dialogue options or a continue button may appear for the player.

At the end of the conversation, the script either simply closes the UI or teleports the player to a predetermined location. During teleportation, the player’s controls are temporarily disabled, and visual effects such as transitions or special scenes (e.g., a boss fight) are activated. After teleporting, control is restored and the transition effects are disabled.



In short, the script handles NPC interaction, text display, dialogue options, and player teleportation, providing a smooth and controlled gameplay experience.




`,NpcController,NpcControllerK],
      },
      {
        label: "Enemy Controller",
        value: [`This script controls the behavior of a basic enemy in a 2D/2.5D game. It manages movement, attacks, damage reception, and death, as well as animations and sound effects.

The enemy constantly checks its distance from the player: if the player is within a certain range, it follows them; if very close, it attacks; if the player is far, it patrols between predefined positions. During movement, the enemy flips to face the correct direction.

Attacks are triggered when the player is within range and cooldowns allow, activating a hitbox, playing attack sounds, and triggering animations. The enemy can receive damage from the player's attacks, decreasing its HP. When HP reaches zero, the enemy dies, plays a death animation, stops movement sounds, and awards XP to the player.


Overall, the script orchestrates enemy AI, combining simple patrol, follow, attack, and damage behaviors, while integrating visual and audio feedback for a responsive gameplay experience.


`,EnemyControlller,EnemyControllerK],
      },
      {
        label: "Boss Controller",
        value: [`This script controls the behavior of a boss in a game. The boss moves between predefined points and automatically faces the player. It can attack the player via a temporarily activated collider and spawn projectiles from defined positions at random intervals. The script manages the boss’s health, updates a UI HP slider, triggers the death animation, and stops sounds when HP reaches zero. Additionally, it adjusts the camera based on the distance to the player and applies small camera movement effects during attacks.

It also detects the player’s attacks and reduces the boss’s HP accordingly. Movement and attack cooldowns are handled through coroutines, and the movement points and attacks are semi-randomized to create dynamic and unpredictable behavior.


In short, this script makes the boss a complex enemy that moves, attacks, reacts to the player, and provides visual and audio feedback to feel like an intelligent and dangerous adversary.



`,BossController,BossControllerK],
      },
      {
        label: "ProjectileController",
        value: [`This script controls a projectile aimed at the player. After a short random delay, the projectile detaches from its parent and starts moving toward the player's position, slightly adjusted upward. It applies force continuously to fly toward the player and automatically destroys itself after 6 seconds. The projectile has a defined attack power, making it capable of dealing damage on impact.



`,ProjectileController,ProjectileControllerK],
      },
      {
        label: "What I learned",
        value:
          `For the first time, I created a script that defines multiple enemies, each with different abilities, that you can interact with in the game. I learned how to manage game logic to avoid any critical bugs, optimize the code, and make it more reliable. I also improved my skills in using Unity prefabs and handling their spawning and interactions properly.

It was a really enjoyable experience, though a bit stressful. I didn’t manage to do everything I wanted because of limited time, but I was able to build and learn how to create a complex player control system with full stats and interactions. Likewise, I developed enemies with visual effects and sound to enhance the game’s atmosphere.
`
      },
    ],
  },

  {
    title: "Detectivia (2025)",
    slug: "detectivia-2025",
    description:
      "This project explores AI integration in games using OpenAI. You play as a detective who talks to different AI-powered NPCs to solve the mystery and catch the criminal.",
    videoUrl: Detectivia,
    thumbnailUrl: Detectivia,
    projectUrl: "#",
    details: [
      { icon: <Users size={30} />, text: "6" },
      { icon: <Clock size={30} />, text: "3 Days" },
      { icon: <CubeIcon width={30} height={30} />, text: "Unity" },
    ],
    about: `Inspired by JudgeSim and SuckUp, this game puts you in the role of a detective solving daily cases. Investigate crime scenes for clues like torn clothes or objects left behind, then interrogate AI-powered NPC suspects with unique personalities and information. Use their answers to uncover the killer and bring them to justice.`,
    projectInfo: [
      { label: "Role", value: "Game design" },
      { label: "Team Size", value: "6" },
      { label: "Time frame", value: "3 Days" },
      { label: "Engine", value: "Unity" },
    ],
    introduction: `This project was originally started for a contest that never took place, so development was not continued. The part that interested me the most—the connection with OpenAI and the creation of NPCs with artificial intelligence—was already completed. The remaining mechanics would have been easy for me to implement, so I chose to pause development, even though the concept itself was solid.

For the NPC system using OpenAI, I paid the minimum fee of $5 to gain access. I tested it extensively, learned how it works, and set up the connection. It was quite challenging, especially without prior experience in this field.

Each NPC maintains its own information and conversation history, because OpenAI doesn’t automatically provide memory like GPT. This required manually building the history, meaning each prompt sent to the AI grows progressively larger to include previous interactions.

The prompts define the NPC’s behavior, personality, and situation—such as being interrogated for a case—along with relevant details about the character and the crime. When the player asks a question, OpenAI generates a response according to these instructions.

In some cases, NPCs were specifically instructed to lie, so players cannot force a confession by spamming questions. Instead, solving the case requires carefully analyzing the information hidden within their answers.



My Goal: To develop an AI-powered NPC capable of exhibiting unique behavior, personality, and realistic interactions.

`,
    workImpact: `I successfully integrated the project with OpenAI, scripting and programming the flow of information—what the NPCs receive, how they respond, and when they respond.

In addition, I created a case file system that stores each suspect’s NPC scripts and gathers all the relevant information. This file can be opened in-game to review suspect data or to check for any available evidence.

`,
    projectDeveleloping: [
      {
        label: "AiConetion",
        value: [`This script enables players to interact naturally with AI-powered NPCs in an investigation game. Players can ask questions and receive realistic, dynamic answers, while NPCs remember previous interactions to maintain continuity in the conversation.

The AI prompts are carefully designed based on each suspect’s personal information, crime details, and behavior rules. NPCs respond in a human-like manner—lying if guilty, hesitating, making mistakes, or showing timid or aggressive reactions—depending on the context of the questioning.

Clues embedded in the player’s questions directly influence the NPC’s responses, making interrogations strategic and engaging. Players must analyze answers and contradictions to uncover the culprit, transforming questioning into a core, immersive gameplay experience.

`,CodeAiConection

        ],
      },
      {
        label: "VoiceToText",
        value: [`This script allows the player to speak directly to NPCs by recording their voice, converting it to text using OpenAI Whisper, and sending it to the AI NPC. The NPC receives the question and responds naturally, simulating realistic human behavior. Audio is recorded, normalized, and converted to WAV automatically, creating a seamless interactive experience.

`,VoiceToText],
      },
      {
        label: "NpcController",
        value: [`This script manages an NPC in an investigation game, controlling player interaction and how the NPC is displayed in the game interface.

At initialization, the script sets up the NPC’s personal information, image, and connection to the player’s case file system. It also creates a suspect entry in the player’s case file, including all relevant details such as name, age, gender, and criminal record.

The NPC’s UI is handled dynamically: when the player can interact with the NPC, the name and input/answer panels are shown. If the NPC is in conversation, the input field and answer canvas are active; otherwise, the interface remains hidden.

The HideAllUI and HideInteractionUI functions manage the visibility of UI elements when they are not needed, reducing redundant code and keeping the interface clean.

In summary, this script ensures the NPC is visible and interactive only when appropriate, while organizing the interface and NPC information clearly, providing a smooth and immersive player experience.


`,NpcControllerD,NpcControllerDe],
      },
      {
        label: "CaseFile",
        value: [`This script manages the player’s case file in the investigation game, allowing them to review crime scene information, browse evidence, and examine suspects. It provides a structured and interactive interface for tracking details during the investigation.

The case file UI can be opened and closed with a key press, and the cursor is unlocked when the UI is active to allow interaction. Pages of the case file are navigable, and only one page is visible at a time. Each page can display information such as the crime scene description, collected evidence, and suspect details.

Evidence is displayed one by one, and the player can cycle through all evidence items. Suspect information is stored in a list, with each suspect having a photo, name, age, gender, and a flag indicating if they have a criminal record. Players can navigate between suspects, viewing their information and toggling details about their criminal history.

The script also integrates with other game systems, such as NPC interaction, ensuring that the case file behaves correctly during conversations. All UI updates, page changes, and data loading are handled dynamically, providing a smooth and immersive experience.

Overall, this script turns the case file into a central tool for investigation, helping players organize and analyze all information necessary to solve the crime.

`,CaseFile,CaseFileD],
      },
      {
        label: "What I learned",
        value:
          `For the first time, I created a script that defines multiple enemies, each with different abilities, that you can interact with in the game. I learned how to manage game logic to avoid any critical bugs, optimize the code, and make it more reliable. I also improved my skills in using Unity prefabs and handling their spawning and interactions properly.

It was a really enjoyable experience, though a bit stressful. I didn’t manage to do everything I wanted because of limited time, but I was able to build and learn how to create a complex player control system with full stats and interactions. Likewise, I developed enemies with visual effects and sound to enhance the game’s atmosphere.
`
      },
    ],
  },
  {
    title: "Lost Sword (2025)",
    slug: "lost-sword-2025",
    description:
      "Created for my year-end thesis, inspired by Skyrim and Elden Ring. You’re a lost hero defending an Orc village while trying to recover your forgotten memories.",
    videoUrl: LostSword,
    thumbnailUrl: LostSword,
    projectUrl: "#",
    details: [
      { icon: <Users size={30} />, text: "6" },
      { icon: <Clock size={30} />, text: "3 Days" },
      { icon: <CubeIcon width={30} height={30} />, text: "Unity" },
    ],
    about: `This project was created for my annual thesis. The topic I chose was A 3D RPG Game in Unity. I was inspired by games like Skyrim and Elden Ring, creating a first-person game with a unique story and a different combat style.`,
    projectInfo: [
      { label: "Role", value: "Game design" },
      { label: "Team Size", value: "6" },
      { label: "Time frame", value: "3 Days" },
      { label: "Engine", value: "Unity" },
    ],
    introduction: `The game takes place during a medieval fantasy adventure. The story goes like this:
Canva was a team of five heroes who set out to dethrone the Demon King and free the land. When you finally reached the throne room, the demon was nowhere to be found — instead, a massive explosion blew everyone away.

You, one of the heroes wielding the sword (hence the game’s title Lost Sword), wake up on a new continent, with no memory of what happened and without your former powers. Rescued by a group of orcs, you earn their trust and receive an adventurer’s permit, allowing you to take on quests and defend their village. With every major boss you defeat, fragments of your old powers return — along with pieces of your lost memory.

The gameplay mechanics are as follows:



Player controls: movement, sprinting, jumping, and attacking
Combat system with a 3-hit combo
Inventory system with swords, potions, incantations, and magical spells
Different types of enemies and NPCs
Adventurer’s guild system where you accept missions, earn rewards, level up, and rise in rank — progressing from simple tasks to the most dangerous quests
By defeating enemies you gain experience and level up, earning points that can be spent to improve different stats such as HP, stamina, mana, strength, or dexterity

My Goal:

My aim was to create a first-person game inspired by classic RPGs, implementing as many traditional mechanics as possible while designing engaging and immersive combat. The purpose behind this project was to strengthen and expand my skills in game design through hands-on experience.

`,
    workImpact: `I worked alone on all the scripts, mechanics, ideas, and implementation, only importing assets and models to help build and shape the game world
`,
    projectDeveleloping: [
      {
        label: "PlayerController",
        value: [`This script fully manages the main player’s controls and all interactions with the game world and mechanics. It allows the player to move freely using the keyboard, sprint, and perform lateral dodges while simulating jump physics and gravity. It controls the rotation of the character and camera based on mouse movement, providing a smooth and precise first-person or third-person view experience.

The script also handles interactions with objects through a Raycast system, showing a visual indicator when interaction is possible and enabling special object mechanics like opening chests or collecting stones for incantations. Additionally, it manages movement, sprinting, and other player animations, syncing them with speed, combat, and conversation states.

Footstep sounds and other audio effects are dynamically controlled, varying depending on surface, speed, and action. The dodge system includes cooldowns, temporary adjustments to movement speed and mouse sensitivity, providing clear visual and tactile feedback.

Overall, this script acts as a central manager for all player control mechanics, combining movement, interaction, combat, and animations in a smooth.


In short: Fully manages player movement, interactions, and animations, including sprint, dodge, jumping, camera rotation, and object interactions.

`,PlayerControllerL],
      },
      {
        label: "PlayerAttack",
        value: [`This script implements the core combat system for the player character. It manages sword attacks with a three-hit combo that consumes stamina, defensive blocking with a shield using cooldowns, and casting of magical incantations that consume mana and grant temporary buffs. The system is tightly integrated with the player’s stats, inventory, and animations, ensuring precise timing for attacks, hit detection, and ability usage.



Overall, it delivers a complete and responsive combat experience that combines melee, defense, and magic in a cohesive way.

`,PlayerAttackL,PlayerAttackLo],
      },
      {
        label: "PlayerStats",
        value: [`This script manages all of the player’s RPG stats and mechanics in a centralized and integrated way. It continuously tracks and updates values like health, stamina, mana, hunger, experience, and level, enabling dynamic interaction with the game world. It handles combat mechanics such as dealing damage, calculating armor and shield blocks, and triggering special effects for perfect blocks.

It also manages visual and audio effects for all player actions—attacks, blocks, taking damage, and potion use—creating a responsive and immersive gameplay experience. The experience and leveling system is fully integrated, allowing the player to gain stat points and improve abilities after battles.

Additionally, it controls inventory interactions and potion consumption, applying temporary bonuses and respecting cooldowns to maintain balanced gameplay. All of these systems are interconnected through smart player state management, ensuring smooth and consistent gameplay.



In short, this script serves as the “heart” of the RPG gameplay, combining stats, combat, regeneration, leveling, and visual/audio feedback into a centralized, extensible system.

`,PlayerStats,PlayerStatsL],
      },
      {
        label: "Inventory System",
        value: [`This script fully manages the player’s inventory, including swords, magical incantations, and potions. It allows equipping and switching swords, selecting and using incantations or potions, and applying their effects to the player. It also updates the visual interface with icons and selection effects, handles cooldowns for quick equipment, and plays appropriate sound effects for inventory actions. Essentially, it connects the inventory system with combat mechanics and player interactions, ensuring a smooth and intuitive gameplay experience.

`,InventorySystemL,InventorySystemLo],
      },
      {
        label: "Enemy Controller",
        value: [`This script manages the complete behavior of an enemy in the game allowing it to detect the player, chase them using a NavMeshAgent, and return to its initial position when the player moves away The enemy can perform attacks with varied animations, temporarily enabling a collider to apply damage while synchronizing sounds and visual effects When the enemy takes damage its health decreases with blood effects and corresponding sounds played automatically The script also handles the enemy’s death by disabling AI and colliders, triggering the death animation, and granting the player experience calculated from the enemy’s health and damage The health slider updates continuously and rotates to face the camera providing clear visibility and delivering a fully functional, realistic, and scalable AI for multiple enemies in the scene



In short, it manages enemy behavior, health, attacks, and interactions with the player, creating dynamic combat and feedback systems


`,EnemyControllerL,EnemyControllerLo],
      },
      {
        label: "GuildSystem",
        value:[
          `Designed around an adventurer’s license instead of traditional character leveling. Players progress by completing missions, gaining experience for their license, and advancing through ranks like Novice, Apprentice, Journeyman, Expert, Master, and Grandmaster. Higher ranks unlock more difficult missions.

The system’s core menu and mechanics were implemented, but mission content was not added, leaving it as a functional framework rather than a fully playable feature.

`,GuildSystem,]
},
      {
        label: "What I learned",
        value:
          [`For the first time, I created a script that defines multiple enemies, each with different abilities, that you can interact with in the game. I learned how to manage game logic to avoid any critical bugs, optimize the code, and make it more reliable. I also improved my skills in using Unity prefabs and handling their spawning and interactions properly.

It was a really enjoyable experience, though a bit stressful. I didn’t manage to do everything I wanted because of limited time, but I was able to build and learn how to create a complex player control system with full stats and interactions. Likewise, I developed enemies with visual effects and sound to enhance the game’s atmosphere.
`,AnualTezis]
},
    ],
  },
  {
    title: "Anaria (2025)",
    slug: "anaria-2025",
    description:
      "This slow-developed horror story game challenges you to uncover the hidden truth and escape the mysterious world you’re trapped in, unraveling the story as you progress.",
    videoUrl: Anaria,
    thumbnailUrl: Anaria,
    projectUrl: "#",
    details: [
      { icon: <Users size={30} />, text: "6" },
      { icon: <Clock size={30} />, text: "3 Days" },
      { icon: <CubeIcon width={30} height={30} />, text: "Unity" },
    ],
    about: `I started this project while I was still learning Unity and game design, right after releasing my first game on Google Play, The Rabbit (Demo). Wanting to create something more ambitious, I moved on to developing a 3D game for PC. The project was envisioned as a horror experience built around a captivating story.`,
    projectInfo: [
      { label: "Role", value: "Game design" },
      { label: "Team Size", value: "6" },
      { label: "Time frame", value: "3 Days" },
      { label: "Engine", value: "Unity" },
    ],
    introduction: `The story of the game went through numerous changes over the course of three years, starting from the concept of a cursed doll to exploring a family with a dark and broken past. Since the project was started during the early stages of my learning process in Unity, I built it using Bolt, the visual scripting system available at that time, before Unity introduced its own. This decision led to a rather chaotic structure, with many gameObjects and prefabs that were difficult to manage, and every build resulted in dozens of bugs that had to be fixed.

Out of curiosity, and as part of my initial plan, I released the game on Steam as a test project to better understand how the platform’s algorithm worked. The results showed me the huge potential of Steam, which inspired me to create a complete remake of the game, titled Anaria: Reborn. The name “Reborn” not only reflects the fact that it is a remake, but also ties directly into the game’s story.

In this portfolio, Anaria: Reborn is presented as the remake, but I decided to also include the original version to highlight the growth of my experience, development process, and skills over time. For this first version, I will provide only a short overview, as the full story is detailed within the Anaria: Reborn project.



My Goal:

Was to create a horror game with a unique experience and a strong story, starting almost from scratch with little experience and knowledge in visual scripting, and eventually reaching the point of releasing it on Steam.

`,
    workImpact: `I handled all scripting and gameplay systems myself using visual scripting, while models and materials were imported from external sources. Every mechanic and interaction in the game reflects my design and vision.
`,
    projectDeveleloping: [
      {
        label: "Player Controller",
        value: [`The player controller was initially designed with basic movement, sprint, stamina, and camera-based idle, walk, and run animations. Over time, it evolved from using RigidBody and colliders to the classic CharacterController component. One of the scripts was later upgraded from visual scripting to C#, creating a system to connect and transfer logic between visual scripting and C#.

`],
      },
      {
        label: "Interaction System",
        value: `The item interaction system was originally implemented using simple OnTriggerEnter logic. When an item entered the player's trigger (a box collider attached to the center of the camera), the player could interact with it via left-click, causing the item to disappear and activate another required GameObject. For items inside cabinets, I added a script that disables the item's collider when the cabinet is closed and re-enables it when opened, preventing interaction through walls.

`,
      },
      {
        label: "Cabinet Controller",
        value: [`Implemented and iteratively optimized a system for opening and closing cabinets, drawers, and similar objects. Using OnTriggerEnter logic, the system toggles the object’s state and activates or deactivates item colliders inside based on whether the container is open or closed.
`,CabinetController],
      },
      {
        label: "Door Controller",
        value: [`Doors in the game can be opened with or without a key. If a key is required, the player must first find and take it. Some doors, once opened, remain permanently open to set up specific scenarios like jumpscares or chase sequences.


`,DoorController]
      },
      {
        label: "Locker Controller",
        value: [`Doors in the game can be opened with or without a key. If a key is required, the player must first find and take it. Some doors, once opened, remain permanently open to set up specific scenarios like jumpscares or chase sequences.


`,DoorController]
      },
      {
        label: "AiController",
        value:[
          `The enemy represents the doll controlled by Ana, the player’s daughter. It was updated multiple times and ultimately implemented with NavMeshAgent in C#. When the doll sees the player, SetDestination targets the player’s position. If the player leaves its detection range for a certain time, the doll returns to patrolling, moving between predefined patrol points using Vector3.Distance to calculate distances. If it gets close enough, the player is caught and the scene resets shortly after.


`,LockerController]
      },
      {
        label: "What I learned",
        value:[
          `Over the course of three years working on this project, I learned how crucial proper organization, planning, and optimization are in game development. This was my first experience creating complex AI logic from scratch, including an enemy system using NavMesh in Unity. I designed the logic entirely on my own, without relying on tutorials, which helped me go far beyond standard visual scripting guides. Through this project, I also gained hands-on experience with player control, inventory systems, item interactions, and scene management. It taught me how to build systems that are both functional and scalable, preparing me for more advanced and complex projects.

`]
      },
    ],
  },
  {
    title: "Anaria:REBORN (2025)",
    slug: "anaria-reborn-2025",
    description:
      "This project is a vastly improved, professional upgrade of the original Anaria game. The story stays the same, but gameplay, design, and quality are greatly enhanced in every aspect.",
    videoUrl: Trailer,
    thumbnailUrl: AnariaReborn,
    projectUrl: "#",
    details: [
      { icon: <Users size={30} />, text: "6" },
      { icon: <Clock size={30} />, text: "3 Days" },
      { icon: <CubeIcon width={30} height={30} />, text: "Unity" },
    ],
    about: `This project is intended for commercial release. It’s a psychological horror game built around a strong story — a broken family, the dark mind of a girl, and the twisted world she created

`,
    projectInfo: [
      { label: "Role", value: "Game design" },
      { label: "Team Size", value: "6" },
      { label: "Time frame", value: "3 Days" },
      { label: "Engine", value: "Unity" },
    ],
    introduction: `Project Status:
This project is still in development, currently reflecting one month of work. It is a remake of my original game Anaria, rebuilt with improved graphics, stronger atmosphere, deeper cinematics, and a clearer narrative. The first release included only Chapter 1 as a test, but this remake will launch with the full story.



Gameplay:

You wake up in a room with no memory of who you are or how you got there. As you explore, you find pages from the journal of someone who was there before you, gradually revealing the dark story of the place. Ana, the antagonist, speaks in your mind and toys with you, torturing you through puzzles, item searches, and dangerous interactions with the environment. You must progress from room to room, uncover secrets, and piece together the truth behind the twisted world that traps you.



Story:
The game tells the story of a poor family torn apart by tragedy. After the father falls into alcoholism and violence, their daughter Ana runs away and is later killed by the same criminals who once hunted her family. Both parents also die in despair, and from Ana’s trauma a twisted world is born — a dark place that traps not only her family but also anyone who enters. The player must uncover the truth through journals, voices, and Ana’s haunting presence.



My Goal:
The first chapter has already been completely remade from scratch. I plan to release the game on Steam as Coming Soon on September 1st, with a full release within 3–6 months. Unlike the first version, where I invested nothing, this remake already has over $500 invested — including paid Unity assets. Even if some investments may turn out wrong, my purpose is to learn, experiment, and gain real experience with both game development and marketing.

`,
    workImpact: `I developed over 30 custom scripts covering gameplay mechanics, actions, and core game logic. I also integrated Unity Store assets — including some purchased ones — carefully selected to fit the story and atmosphere. Secondary scripts such as ambient effects, music, cinematics, lighting, and atmosphere were also created, but in this portfolio I will showcase only the most important ones in a summarized form.`,
    projectDeveleloping: [
      {
        label: "PlayerController",
        value: [`The PlayerController script fully manages the player’s movement and interactions within the game world. It reads input from the keyboard and mouse to control movement, running, and camera rotation, including the “camera peeking” effect for looking sideways. The player’s stamina is automatically managed: running consumes energy, while pausing allows it to regenerate, with a cooldown preventing sprinting if stamina reaches zero.

Player movement is applied using the CharacterController, combining forward and sideways directions with speed modifiers for walking, running, or camera peeking. The script controls walking and running animations, adjusting their speed and corresponding audio effects depending on the player’s actions and the surface they are walking on (e.g., blood). It also handles the detection of nearby objects or enemies, adapting detection range based on the player’s state.

Additionally, the script includes testing features, such as temporary speed changes for debugging, and checks different game states (cinematics, calls, interactions) to disable input and movement when necessary.



Overall, this script efficiently integrates all essential player control mechanics, from input and movement to animations, audio, and interactions.

`,PlayerControllerAR],
      },
      {
        label: "CabinetController",
        value: [`This script manages the player’s interaction with a cabinet in the game. When the player attempts to open or close the cabinet, the script checks if a cooldown is active to prevent repeated interactions too quickly. Opening or closing the cabinet triggers the corresponding animations and sound effects, using assigned audio clips or a fallback sound if no specific clip is provided.

Additionally, when the cabinet is empty, the script can trigger the spawning of a new object through a random object manager. During each interaction, the script also calculates and communicates the distance to the game’s doll character to determine if the doll can hear the cabinet sound.

The cooldown resets automatically after a set time, and in the editor, the cabinet’s hearing range is visualized with a yellow gizmo.


In short, this code combines interaction logic, animations, audio, and gameplay systems related to objects and characters, providing a realistic and smooth player experience.

`,CabinetControllerAR,CabinetControllerARE],
      },
      {
        label: "Locker Controller",
        value: [`The LockerController script manages the player’s interaction with lockers in the game. It handles opening and closing animations, plays the corresponding sound effects, and applies a cooldown to prevent repeated interactions. The locker can also trigger detection by nearby enemies depending on sound, and it has a special animation when catching the player.
`,LockerControllerAR,LockerControllerARE],
      },
      {
        label: "ClockController",
        value: [`This script controls an interactive clock in the game, handling both the rotation of the hands and the transition between the normal world and the parallel world. The clock hands can rotate continuously or in a “tick-tock” style, with their speed adjusting automatically based on interactions. When the player interacts with the clock, it toggles between “on” and “off” states, activating or deactivating visual objects and switching the mannequin model if one exists. The script also manages audio and visual effects, such as the clock sounds and the intensity of a volume effect for the world transition, using cooldowns to prevent interaction abuse and maintain a smooth and realistic experience.

In short, the script makes the clock rotate, switches worlds visually and audibly, and ensures smooth interaction for the player.

`,ClockController,ClockControllerA],
      },
      {
        label: "DollAiController",
        value: [`This script controls the behavior of a doll AI in a horror game. The doll patrols between predefined points, but when it detects the player, it stops patrolling and starts following them. It can check if the player is hiding in a locker and react accordingly, even catching the player if they get too close. The script also manages visual and audio effects, including background sounds, random doll replies, glitch effects, and scissor sounds. All animations and sounds are synchronized to create tension and make the horror experience more immersive.


In short, the script handles patrolling, following, detecting, and catching the player, along with audio and visual effects that enhance the game’s suspense.


`,DollAiController,DollAiControllerA],
      },
      {
        label: "PhoneController",
        value: [`This script manages all phone interactions in the game. It handles ringing, answering, in-call audio, and ending calls. It updates the visual state of the handset and phone, triggers events or tasks when the call is answered, and supports optional voice messages. It also controls audio playback with looping, pitch, and volume adjustments for a realistic phone experience.

In short: The player can interact with the phone, hear appropriate sounds, trigger events, and see visual feedback.


`,PhoneController,PhoneControllerA],
      },
      {
        label: "Features",
        value: [`In the game, players encounter a variety of interactive objects that enhance immersion and gameplay. For example, you can interact with devices like projectors or a gramophone, each with unique mechanics and visual/audio feedback. Beyond these, players can find journal pages to collect and read, which are stored in the inventory, and pieces of a torn photograph that form a small puzzle. Items can be picked up, moved, or used to progress, such as lighting red candles by using another candle in the environment, or locating objects like a music disc for the gramophone.



The game also features a robust save/load system using PlayerPrefs, customizable input including keyboard and gamepad support, and intuitive menus. Cinematics are fully scripted to move and rotate the player character precisely to enhance atmosphere. A single TriggerEvent script allows for flexible activation of game events, such as opening or dropping doors, starting jumpscares, triggering animations, or activating/deactivating objects, based on gameplay needs.



Graphics settings range from Low to Medium and High, with options for language, resolution, fullscreen mode, FPS cap, and camera comfort features like Camera Shake toggle. Audio settings include master, music, voice, and SFX volume controls, allowing the player to fine-tune their experience.


`,Features],
      },
      {
        label: "Localization",
        value: [`The game supports 10 different languages through a full localization system, allowing players to see all instructions and interactions in their preferred language. For example, movement controls such as "W / A / S / D → Move" or the left stick on a gamepad are translated and displayed properly in each language:

Chinese (Simplified): W / A / S / D → 移动

English: W / A / S / D → Move

French: W / A / S / D → Se déplacer

German: W / A / S / D → Bewegen

Japanese: W / A / S / D → 移動

Korean: W / A / S / D → 이동

Portuguese: W / A / S / D → Mover

Romanian: W / A / S / D → Mutați-vă

Russian: W / A / S / D → Двигаться

Spanish: W / A / S / D → Moverse

This ensures an accessible and intuitive experience for players worldwide.
`,Features],
      },
      {
        label: "What I learned",
        value:
          `Even after four years of experience in Unity, organizing a large project remains one of the biggest challenges—not just the hierarchy, but also the scripts. I constantly learn how to structure a project properly and efficiently. Revisiting old projects, like Claustrophobia, taught me a lot: the original was created in just three days, while a later version was rebuilt in three hours for a game jam, with improved mechanics and organization. Similarly, this project, developed over three years at a slow pace, was completely recreated in one month with much better optimization, graphics, controls, and story.
 

The best lessons come from my own mistakes, challenges, and difficulties. Each problem strengthens my skills in programming, design, project planning, and storytelling. I’ve learned to organize projects more professionally, structure everything clearly, and create a workflow that is easy to work with and understand. I’m constantly improving and moving confidently toward senior-level skills.
`
      },
    ],
  },
];
