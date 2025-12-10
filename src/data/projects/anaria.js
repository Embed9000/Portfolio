import { createProject } from "../../utils/createProject";

export default createProject({
  title: "Anaria (2025)",
  slug: "anaria-2025",
    description:
    'This slow-developed horror story game challenges you to uncover the hidden truth and escape the mysterious world you’re trapped in, unraveling the story as you progress',



  videoUrl: "https://pub-7268fd82ea9d46f4b492871f25fe59e8.r2.dev/Anaria/MainVideo/Anaria.mp4",
  thumbnailUrl: "https://pub-7268fd82ea9d46f4b492871f25fe59e8.r2.dev/Anaria/MainVideo/Anaria.mp4",

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
Out of curiosity, and as part of my initial plan, I released the game on Steam as a test project to better understand how the platform’s algorithm worked. The results showed me the huge potential of Steam, which inspired me to create a complete remake of the game, titled Anaria: Reborn. The name “Reborn” not only reflects the fact that it is a remake, but also ties directly into the game’s story.
In this portfolio, Anaria: Reborn is presented as the remake, but I decided to also include the original version to highlight the growth of my experience, development process, and skills over time. For this first version, I will provide only a short overview, as the full story is detailed within the Anaria: Reborn project.
My Goal:
Was to create a horror game with a unique experience and a strong story, starting almost from scratch with little experience and knowledge in visual scripting, and eventually reaching the point of releasing it on Steam.`,

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
        `Implemented and iteratively optimized a system for opening and closing cabinets, drawers, and similar objects. Using OnTriggerEnter logic, the system toggles the object’s state and activates or deactivates item colliders inside based on whether the container is open or closed.`,
        "/pdf/anaria/CabinetController.pdf",
      ],
    },

    {
      label: "Door Controller",
      value: [
        `Doors in the game can be opened with or without a key. If a key is required, the player must first find and take it. Some doors, once opened, remain permanently open to set up specific scenarios like jumpscares or chase sequences.`,
        "/pdf/anaria/DoorController.pdf",
      ],
    },

    {
      label: "Locker Controller",
      value: [
        `Lockers allow the player to hide, but if an enemy is nearby when hiding, the locker will detect the player, open, and trigger a jumpscare, eventually resetting the scene as the player is caught.`,
        "/pdf/anaria/LockerController.pdf",
      ],
    },

    {
      label: "AiController",
      value: [
        `The enemy represents the doll controlled by Ana, the player’s daughter. It was updated multiple times and ultimately implemented with NavMeshAgent in C#. When the doll sees the player, SetDestination targets the player’s position. If the player leaves its detection range for a certain time, the doll returns to patrolling, moving between predefined patrol points using Vector3.Distance to calculate distances. If it gets close enough, the player is caught and the scene resets shortly after.`,
        "/pdf/anaria/LockerController.pdf",
      ],
    },

    {
      label: "What I learned",
      value: [
`
Over the course of three years working on this project, I learned how crucial proper organization, planning, and optimization are in game development. This was my first experience creating complex AI logic from scratch, including an enemy system using NavMesh in Unity. I designed the logic entirely on my own, without relying on tutorials, which helped me go far beyond standard visual scripting guides. Through this project, I also gained hands-on experience with player control, inventory systems, item interactions, and scene management. It taught me how to build systems that are both functional and scalable, preparing me for more advanced and complex projects.
`
      ],
    },
  ],
});
