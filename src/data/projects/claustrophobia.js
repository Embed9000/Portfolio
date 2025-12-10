import { createProject } from "../../utils/createProject";

// VIDEOS
const MainVideoClaustrophobia =
  "https://ecmlkuxxaw5nvx0f.public.blob.vercel-storage.com/MainVideoClaustrophobia-M6x0a7PoPj4OXXPnXh8MHxBOUm4kg7.mp4";

const ClaustraphobiaThumb =
  "https://ecmlkuxxaw5nvx0f.public.blob.vercel-storage.com/claustrofobie-vz9xO7ltGZD5HuS7la475Hcpl9b3Fu.mp4";

const PlayerControllerClaustrophobia =
  "https://ecmlkuxxaw5nvx0f.public.blob.vercel-storage.com/PlayerControllerC-Y7CTzU89l1hjXlSYelcRSLEYSR541m.mp4";

const WindowSystemClaustrophobia =
  "https://ecmlkuxxaw5nvx0f.public.blob.vercel-storage.com/WindowSystem-watkAsG9a7D1OGGumqCUi2HwXALy29.mp4";

const FakeExitController =
  "https://ecmlkuxxaw5nvx0f.public.blob.vercel-storage.com/FakeExitSystem-YJn1jMlcj7Yt2Y5Pr3oq480H6p6GDL.mp4";

const InventorySystem =
  "https://ecmlkuxxaw5nvx0f.public.blob.vercel-storage.com/InventorySystem-jyzv6k2rsSfWvZsdqwQUZRQDLAefwn.mp4";


export default createProject({
  title: "Claustraphobia (2023)",
  slug: "claustraphobia-2023",

  description:
    "This project was created for the Ludum Dare 54 game jam. The theme was ‘Limited Space,’ and your goal is to escape the mental hospital where you find yourself trapped.",

  videoUrl: MainVideoClaustrophobia,
  thumbnailUrl: ClaustraphobiaThumb,

details: [
  { icon: "User", text: "6" },
  { icon: "Clock", text: "3 Days" },
  { icon: "Cube", text: "Unity" },
],

  about: `Claustrophobia was also a project made for the Ludum Dare competition.
The story is that you find yourself in a mental hospital, and after waking up, you try to escape — but in reality, it’s all just in your imagination, and in the end, you never manage to get out.`,

  projectInfo: [
    { label: "Role", value: "Game design" },
    { label: "Team Size", value: "6" },
    { label: "Time frame", value: "3 Days" },
    { label: "Engine", value: "Unity" },
  ],

  introduction: `
The game has a psychological theme. Since the Ludum Dare competition theme was "confined spaces", we chose to explore the fear of claustrophobia. The player constantly experiences moments where it seems they’ve found an exit, only for it to be blocked, creating the feeling that the world around them is closing in tighter and tighter.
The controls are simple: move left or right, and jump. There’s also a bar in the top-left corner representing your mental health. To restore it, you need to reach the next level or find a window that provides oxygen, gradually recovering your sanity.
My goal:
My aim was to try something new with my first international competition, to get deeper into game development and see how others design their levels.
`,

  workImpact:`I collaborated with one teammate on scripting, while the rest of the team created the sprites. I was responsible for the remaining game design elements.`,

  projectDeveleloping: [
    {
      label: "Player Controller",
      value: [
        `The player controls were implemented simply using a 2D Box Collider.
          Movement was applied via the Rigidbody: velocity was used for left and right movement, and force for jumping.
          I also scripted the Animator to change the sprites depending on the player’s actions and the direction they were facing.`,
        PlayerControllerClaustrophobia,
      ],
    },

    {
      label: "Window System",
      value: [
        `The window system, which provides the player with oxygen, was implemented simply using OnTriggerEnter2D. A trigger was placed at the window, and when the player reached it (identified via tag), the oxygen slider would increase over time using Time.deltaTime.`,
        WindowSystemClaustrophobia,
      ],
    },

    {
      label: "Fake Exit Controller",
      value: [
        `The claustrophobia effect in the game is amplified by the illusion of exits that close when the player collides with an invisible wall (OnCollisionEnter2D). This triggers a sprite with a small transition animation, fading from transparent to create a smoother effect.`,
        FakeExitController,
      ],
    },

    {
      label: "Inventory & Candle Mechanic",
      value: [
        `The player has an inventory system that allows them to hold or drop a candle. In dark rooms, the player cannot move far from the candle, reinforcing the “confined spaces” theme.
A block can only be moved if the player does not have the candle in their inventory. When the candle is dropped, it spawns at the player’s position as a GameObject with a collider and Rigidbody. Dropping is only allowed in specific trigger zones to prevent bugs. The HUD clearly shows whether the candle is in the player’s inventory or dropped.
`,
        InventorySystem,
      ],
    },

    {
      label: "What I learned",
      value: `
One of the most important lessons I learned was the importance of choosing a leader. Since I had more experience before university compared to the rest of the team, I was offered the role — but I refused without thinking. By the end of the project, I realized I should have taken the lead.
Even without a leader, as long as there was mutual respect, no conflicts or misunderstandings arose, and everything went smoothly.
`,
    },
  ],
});
