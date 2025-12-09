import { createProject } from "../../utils/createProject";

export default createProject({
  title: "Anaria (2025)",
  slug: "anaria-2025",

  videoUrl: "/videos/anaria/Anaria.mp4",
  thumbnailUrl: "/videos/anaria/Anaria.mp4",

  details: [
    { icon: "User", text: "1" },
    { icon: "Clock", text: "3 Years" },
    { icon: "Cube", text: "Unity" },
  ],



  about: `I started this project while I was still learning Unity and game design, right after releasing my first game on Google Play, The Rabbit (Demo). Wanting to create something more ambitious, I moved on to developing a 3D game for PC. The project was envisioned as a horror experience built around a captivating story.`,

  projectInfo: [
    { label: "Role", value: "Game design" },
    { label: "Team Size", value: "6" },
    { label: "Time frame", value: "3 Days" },
    { label: "Engine", value: "Unity" },
  ],

  introduction: `The story of the game went through numerous changes over the course of three years, starting from the concept of a cursed doll to exploring a family with a dark and broken past. Since the project was started during the early stages of my learning process in Unity, I built it using Bolt, the visual scripting system available at that time, before Unity introduced its own. This decision led to a rather chaotic structure, with many gameObjects and prefabs that were difficult to manage, and every build resulted in dozens of bugs that had to be fixed.

Out of curiosity, and as part of my initial plan, I released the game on Steam as a test project to better understand how the platform’s algorithm worked. The results showed me the huge potential of Steam, which inspired me to create a complete remake of the game, titled Anaria: Reborn. 

In this portfolio, Anaria: Reborn is presented as the remake, but I decided to also include the original version to highlight the growth of my experience, development process, and skills over time.`,

  workImpact: `I handled all scripting and gameplay systems myself using visual scripting, while models and materials were imported from external sources. Every mechanic and interaction in the game reflects my design and vision.`,

  projectDeveleloping: [
    {
      label: "Player Controller",
      value: [
        `The player controller was initially designed with basic movement, sprint, stamina, and camera-based idle, walk, and run animations. Over time, it evolved from using RigidBody and colliders to the classic CharacterController component. One of the scripts was later upgraded from visual scripting to C#, creating a system to connect and transfer logic between visual scripting and C#.`,
      ],
    },

    {
      label: "Interaction System",
      value: `The item interaction system was originally implemented using simple OnTriggerEnter logic. When an item entered the player's trigger (a box collider attached to the center of the camera), the player could interact with it via left-click, causing the item to disappear and activate another required GameObject. For items inside cabinets, I added logic to disable colliders when closed to prevent interaction through walls.`,
    },

    {
      label: "Cabinet Controller",
      value: [
        `Implemented and iteratively optimized a system for opening and closing cabinets, drawers, and similar objects.`,
        "/pdf/anaria/CabinetController.pdf",
      ],
    },

    {
      label: "Door Controller",
      value: [
        `Doors in the game can be opened with or without a key. If a key is required, the player must first find it.`,
        "/pdf/anaria/DoorController.pdf",
      ],
    },

    {
      label: "Locker Controller",
      value: [
        `Lockers can be opened or closed and interact dynamically with the player's state.`,
        "/pdf/anaria/LockerController.pdf",
      ],
    },

    {
      label: "AiController",
      value: [
        `The enemy is the doll controlled by Ana. Implemented using NavMeshAgent: chasing, patrolling, losing sight, and catching the player.`,
        "/pdf/anaria/LockerController.pdf",
      ],
    },

    {
      label: "What I learned",
      value: [
        `Over the course of three years working on this project, I learned how crucial proper organization, planning, and optimization are in game development. This was my first experience creating complex AI logic from scratch, including an enemy system using NavMesh in Unity.`,
      ],
    },
  ],
});
