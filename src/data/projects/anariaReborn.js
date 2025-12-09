import { createProject } from "../../utils/createProject";

// MAIN MEDIA
import Trailer from "../../assets/videos/anariaReborn/Trailer.mp4";


// CABINET
import CabinetControllerAR from "../../assets/videos/anariaReborn/CabinetControllerAR.mp4";
import CabinetControllerARE from "../../assets/pdf/anariaReborn/CabinetControllerAR.pdf";

// LOCKER
import LockerControllerAR from "../../assets/videos/anariaReborn/LockerControllerAR.mp4";
import LockerControllerARE from "../../assets/pdf/anariaReborn/LockerControllerAR.pdf";

// CLOCK
import ClockController from "../../assets/videos/anariaReborn/ClockController.mp4";
import ClockControllerA from "../../assets/pdf/anariaReborn/ClockController.pdf";

// DOLL AI
import DollAiController from "../../assets/videos/anariaReborn/DollAiController.mp4";
import DollAiControllerA from "../../assets/pdf/anariaReborn/DollAiController.pdf";

// PHONE
import PhoneController from "../../assets/videos/anariaReborn/PhoneController.mp4";
import PhoneControllerA from "../../assets/pdf/anariaReborn/PhoneController.pdf";

// FEATURES
import Features from "../../assets/videos/anariaReborn/Features.mp4";

export default createProject({
  title: "Anaria:REBORN (2025)",
  slug: "anaria-reborn-2025",

  description:
    "This project is a vastly improved, professional upgrade of the original Anaria game. The story stays the same, but gameplay, design, and quality are greatly enhanced in every aspect.",

  videoUrl: Trailer,

details: [
  { icon: "User", text: "1" },
  { icon: "Clock", text: "1 Month" },
  { icon: "Cube", text: "Unity" },
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
      value: [
        `The PlayerController script fully manages the player’s movement and interactions within the game world. It reads input from the keyboard and mouse to control movement, running, and camera rotation, including the “camera peeking” effect for looking sideways. The player’s stamina is automatically managed: running consumes energy, while pausing allows it to regenerate, with a cooldown preventing sprinting if stamina reaches zero.
Player movement is applied using the CharacterController, combining forward and sideways directions with speed modifiers for walking, running, or camera peeking. The script controls walking and running animations, adjusting their speed and corresponding audio effects depending on the player’s actions and the surface they are walking on (e.g., blood). It also handles the detection of nearby objects or enemies, adapting detection range based on the player’s state.
Additionally, the script includes testing features, such as temporary speed changes for debugging, and checks different game states (cinematics, calls, interactions) to disable input and movement when necessary.
Overall, this script efficiently integrates all essential player control mechanics, from input and movement to animations, audio, and interactions.
`,
      ],
    },

    {
      label: "CabinetController",
      value: [
        `This script manages the player’s interaction with a cabinet in the game. When the player attempts to open or close the cabinet, the script checks if a cooldown is active to prevent repeated interactions too quickly. Opening or closing the cabinet triggers the corresponding animations and sound effects, using assigned audio clips or a fallback sound if no specific clip is provided.
Additionally, when the cabinet is empty, the script can trigger the spawning of a new object through a random object manager. During each interaction, the script also calculates and communicates the distance to the game’s doll character to determine if the doll can hear the cabinet sound.
The cooldown resets automatically after a set time, and in the editor, the cabinet’s hearing range is visualized with a yellow gizmo.
In short, this code combines interaction logic, animations, audio, and gameplay systems related to objects and characters, providing a realistic and smooth player experience.
`,
        CabinetControllerAR,
        CabinetControllerARE,
      ],
    },

    {
      label: "Locker Controller",
      value: [
        `The LockerController script manages the player’s interaction with lockers in the game. It handles opening and closing animations, plays the corresponding sound effects, and applies a cooldown to prevent repeated interactions. The locker can also trigger detection by nearby enemies depending on sound, and it has a special animation when catching the player.`,
        LockerControllerAR,
        LockerControllerARE,
      ],
    },

    {
      label: "ClockController",
      value: [
        `This script controls an interactive clock in the game, handling both the rotation of the hands and the transition between the normal world and the parallel world. The clock hands can rotate continuously or in a “tick-tock” style, with their speed adjusting automatically based on interactions. When the player interacts with the clock, it toggles between “on” and “off” states, activating or deactivating visual objects and switching the mannequin model if one exists. The script also manages audio and visual effects, such as the clock sounds and the intensity of a volume effect for the world transition, using cooldowns to prevent interaction abuse and maintain a smooth and realistic experience.
In short, the script makes the clock rotate, switches worlds visually and audibly, and ensures smooth interaction for the player.
`,
        ClockController,
        ClockControllerA,
      ],
    },

    {
      label: "DollAiController",
      value: [
        `This script controls the behavior of a doll AI in a horror game. The doll patrols between predefined points, but when it detects the player, it stops patrolling and starts following them. It can check if the player is hiding in a locker and react accordingly, even catching the player if they get too close. The script also manages visual and audio effects, including background sounds, random doll replies, glitch effects, and scissor sounds. All animations and sounds are synchronized to create tension and make the horror experience more immersive.
In short, the script handles patrolling, following, detecting, and catching the player, along with audio and visual effects that enhance the game’s suspense.
`,
        DollAiController,
        DollAiControllerA,
      ],
    },

    {
      label: "PhoneController",
      value: [
        `This script manages all phone interactions in the game. It handles ringing, answering, in-call audio, and ending calls. It updates the visual state of the handset and phone, triggers events or tasks when the call is answered, and supports optional voice messages. It also controls audio playback with looping, pitch, and volume adjustments for a realistic phone experience.
In short: The player can interact with the phone, hear appropriate sounds, trigger events, and see visual feedback.
`,
        PhoneController,
        PhoneControllerA,
      ],
    },

    {
      label: "Features",
      value: [
        `In the game, players encounter a variety of interactive objects that enhance immersion and gameplay. For example, you can interact with devices like projectors or a gramophone, each with unique mechanics and visual/audio feedback. Beyond these, players can find journal pages to collect and read, which are stored in the inventory, and pieces of a torn photograph that form a small puzzle. Items can be picked up, moved, or used to progress, such as lighting red candles by using another candle in the environment, or locating objects like a music disc for the gramophone.
The game also features a robust save/load system using PlayerPrefs, customizable input including keyboard and gamepad support, and intuitive menus. Cinematics are fully scripted to move and rotate the player character precisely to enhance atmosphere. A single TriggerEvent script allows for flexible activation of game events, such as opening or dropping doors, starting jumpscares, triggering animations, or activating/deactivating objects, based on gameplay needs.
Graphics settings range from Low to Medium and High, with options for language, resolution, fullscreen mode, FPS cap, and camera comfort features like Camera Shake toggle. Audio settings include master, music, voice, and SFX volume controls, allowing the player to fine-tune their experience.
`,
        Features,
      ],
    },

    {
      label: "Localization",
      value: [
        `The game supports 10 different languages through a full localization system, allowing players to see all instructions and interactions in their preferred language. For example, movement controls such as "W / A / S / D → Move" or the left stick on a gamepad are translated and displayed properly in each language:

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
`,
        Features,
      ],
    },

    {
      label: "What I learned",
      value: [
        `Even after four years of experience in Unity, organizing a large project remains one of the biggest challenges—not just the hierarchy, but also the scripts. I constantly learn how to structure a project properly and efficiently. Revisiting old projects, like Claustrophobia, taught me a lot: the original was created in just three days, while a later version was rebuilt in three hours for a game jam, with improved mechanics and organization. Similarly, this project, developed over three years at a slow pace, was completely recreated in one month with much better optimization, graphics, controls, and story.
The best lessons come from my own mistakes, challenges, and difficulties. Each problem strengthens my skills in programming, design, project planning, and storytelling. I’ve learned to organize projects more professionally, structure everything clearly, and create a workflow that is easy to work with and understand. I’m constantly improving and moving confidently toward senior-level skills.
`,
      ],
    },
  ],
});
