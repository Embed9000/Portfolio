import { createProject } from "../../utils/createProject";

// VIDEOS
import LostSword from "../../assets/videos/lostSword/Lost sword.mp4";

// PLAYER
import PlayerAttackL from "../../assets/videos/lostSword/PlayerAttackL.mp4";
import PlayerAttackLo from "../../assets/pdf/lostSword/PlayerAttackLo.pdf";
import PlayerStats from "../../assets/videos/lostSword/PlayerStats.mp4";
import PlayerStatsL from "../../assets/pdf/lostSword/StatsPlayer.pdf";

// INVENTORY
import InventorySystemL from "../../assets/videos/lostSword/InventorySystemL.mp4";
import InventorySystemLo from "../../assets/pdf/lostSword/InventorySystemL.pdf";

// ENEMY
import EnemyControllerL from "../../assets/videos/lostSword/EnemyControllerL.mp4";
import EnemyControllerLo from "../../assets/pdf/lostSword/EnemyControllerL.pdf";

// GUILD
import GuildSystem from "../../assets/videos/lostSword/GuildSystem.mp4";

// THESIS
import AnualTezis from "../../assets/pdf/lostSword/anualtezis.pdf";

export default createProject({
  title: "Lost Sword (2025)",
  slug: "lost-sword-2025",

  description:
    "Created for my year-end thesis, inspired by Skyrim and Elden Ring. You’re a lost hero defending an Orc village while trying to recover your forgotten memories.",
  videoUrl: LostSword,
  thumbnailUrl: LostSword,

details: [
  { icon: "User", text: "1" },
  { icon: "Clock", text: "2 Month" },
  { icon: "Cube", text: "Unity" },
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
My aim was to create a first-person game inspired by classic RPGs, implementing as many traditional mechanics as possible while designing engaging and immersive combat. The purpose behind this project was to strengthen and expand my skills in game design through hands-on experience.`,

  workImpact: `I worked alone on all the scripts, mechanics, ideas, and implementation, only importing assets and models to help build and shape the game world`,

  projectDeveleloping: [
    {
      label: "PlayerController",
      value: [
        `This script fully manages the main player’s controls and all interactions with the game world and mechanics. It allows the player to move freely using the keyboard, sprint, and perform lateral dodges while simulating jump physics and gravity. It controls the rotation of the character and camera based on mouse movement, providing a smooth and precise first-person or third-person view experience.
The script also handles interactions with objects through a Raycast system, showing a visual indicator when interaction is possible and enabling special object mechanics like opening chests or collecting stones for incantations. Additionally, it manages movement, sprinting, and other player animations, syncing them with speed, combat, and conversation states.
Footstep sounds and other audio effects are dynamically controlled, varying depending on surface, speed, and action. The dodge system includes cooldowns, temporary adjustments to movement speed and mouse sensitivity, providing clear visual and tactile feedback.
Overall, this script acts as a central manager for all player control mechanics, combining movement, interaction, combat, and animations in a smooth.
In short: Fully manages player movement, interactions, and animations, including sprint, dodge, jumping, camera rotation, and object interactions.`,
        
      ],
    },

    {
      label: "PlayerAttack",
      value: [
        `This script implements the core combat system for the player character. It manages sword attacks with a three-hit combo that consumes stamina, defensive blocking with a shield using cooldowns, and casting of magical incantations that consume mana and grant temporary buffs. The system is tightly integrated with the player’s stats, inventory, and animations, ensuring precise timing for attacks, hit detection, and ability usage.
Overall, it delivers a complete and responsive combat experience that combines melee, defense, and magic in a cohesive way.`,
        PlayerAttackL,
        PlayerAttackLo,
      ],
    },

    {
      label: "PlayerStats",
      value: [
        `This script manages all of the player’s RPG stats and mechanics in a centralized and integrated way. It continuously tracks and updates values like health, stamina, mana, hunger, experience, and level, enabling dynamic interaction with the game world. It handles combat mechanics such as dealing damage, calculating armor and shield blocks, and triggering special effects for perfect blocks.
It also manages visual and audio effects for all player actions—attacks, blocks, taking damage, and potion use—creating a responsive and immersive gameplay experience. The experience and leveling system is fully integrated, allowing the player to gain stat points and improve abilities after battles.
Additionally, it controls inventory interactions and potion consumption, applying temporary bonuses and respecting cooldowns to maintain balanced gameplay. All of these systems are interconnected through smart player state management, ensuring smooth and consistent gameplay.
In short, this script serves as the “heart” of the RPG gameplay, combining stats, combat, regeneration, leveling, and visual/audio feedback into a centralized, extensible system.`,
        PlayerStats,
        PlayerStatsL,
      ],
    },

    {
      label: "Inventory System",
      value: [
        `This script fully manages the player’s inventory, including swords, magical incantations, and potions. It allows equipping and switching swords, selecting and using incantations or potions, and applying their effects to the player. It also updates the visual interface with icons and selection effects, handles cooldowns for quick equipment, and plays appropriate sound effects for inventory actions. Essentially, it connects the inventory system with combat mechanics and player interactions, ensuring a smooth and intuitive gameplay experience.`,
        InventorySystemL,
        InventorySystemLo,
      ],
    },

    {
      label: "Enemy Controller",
      value: [
        `This script manages the complete behavior of an enemy in the game allowing it to detect the player, chase them using a NavMeshAgent, and return to its initial position when the player moves away. The enemy can perform attacks with varied animations, temporarily enabling a collider to apply damage while synchronizing sounds and visual effects. When the enemy takes damage its health decreases with blood effects and corresponding sounds played automatically. The script also handles the enemy’s death by disabling AI and colliders, triggering the death animation, and granting the player experience calculated from the enemy’s health and damage. The health slider updates continuously and rotates to face the camera, providing clear visibility and delivering a fully functional, realistic, and scalable AI for multiple enemies in the scene.
In short, it manages enemy behavior, health, attacks, and interactions with the player, creating dynamic combat and feedback systems.`,
        EnemyControllerL,
        EnemyControllerLo,
      ],
    },

    {
      label: "GuildSystem",
      value: [
        `Designed around an adventurer’s license instead of traditional character leveling. Players progress by completing missions, gaining experience for their license, and advancing through ranks like Novice, Apprentice, Journeyman, Expert, Master, and Grandmaster. Higher ranks unlock more difficult missions.
The system’s core menu and mechanics were implemented, but mission content was not added, leaving it as a functional framework rather than a fully playable feature.`,
        GuildSystem,
      ],
    },

    {
      label: "What I learned",
      value: [
        `For the first time, I created a script that defines multiple enemies, each with different abilities, that you can interact with in the game. I learned how to manage game logic to avoid any critical bugs, optimize the code, and make it more reliable. I also improved my skills in using Unity prefabs and handling their spawning and interactions properly.
It was a really enjoyable experience, though a bit stressful. I didn’t manage to do everything I wanted because of limited time, but I was able to build and learn how to create a complex player control system with full stats and interactions. Likewise, I developed enemies with visual effects and sound to enhance the game’s atmosphere.`,
        AnualTezis,
      ],
    },
  ],
});
