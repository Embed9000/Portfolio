import { createProject } from "../../utils/createProject";

// VIDEOS
import Detectivia from "../../assets/videos/detectivia/Detectivitatea.mp4";

// PDFs & CODES
import CodeAiConection from "../../assets/pdf/detectivia/AiConection.pdf";
import VoiceToText from "../../assets/pdf/detectivia/VoiceToText.pdf";
import NpcControllerD from "../../assets/videos/detectivia/NpcControllerD.mp4";
import NpcControllerDe from "../../assets/pdf/detectivia/NpcControllerD.pdf";
import CaseFile from "../../assets/videos/detectivia/CaseFile.mp4";
import CaseFileD from "../../assets/pdf/detectivia/CaseFile.pdf";

export default createProject({
  title: "Detectivia (2025)",
  slug: "detectivia-2025",

  description:
    "This project explores AI integration in games using OpenAI. You play as a detective who talks to different AI-powered NPCs to solve the mystery and catch the criminal.",

  videoUrl: Detectivia,
  thumbnailUrl: Detectivia,

details: [
  { icon: "User", text: "1" },
  { icon: "Clock", text: "1 Week" },
  { icon: "Cube", text: "Unity" },
],

  about: `Inspired by JudgeSim and SuckUp, this game puts you in the role of a detective solving daily cases.
Investigate crime scenes for clues like torn clothes or objects left behind,
then interrogate AI-powered NPC suspects with unique personalities and information.
Use their answers to uncover the killer and bring them to justice.`,

  projectInfo: [
    { label: "Role", value: "Game design" },
    { label: "Team Size", value: "6" },
    { label: "Time frame", value: "3 Days" },
    { label: "Engine", value: "Unity" },
  ],

  introduction: `This project was originally started for a contest that never took place, so development was not continued.
The part that interested me the most—the connection with OpenAI and the creation of NPCs with artificial intelligence—was already completed.
The remaining mechanics would have been easy for me to implement, so I chose to pause development, even though the concept itself was solid.
For the NPC system using OpenAI, I paid the minimum fee of $5 to gain access.
I tested it extensively, learned how it works, and set up the connection.
It was quite challenging, especially without prior experience in this field.
Each NPC maintains its own information and conversation history, because OpenAI doesn’t automatically provide memory like GPT.
This required manually building the history, meaning each prompt sent to the AI grows progressively larger to include previous interactions.
The prompts define the NPC’s behavior, personality, and situation—such as being interrogated for a case—along with relevant details about the character and the crime.
When the player asks a question, OpenAI generates a response according to these instructions.
In some cases, NPCs were specifically instructed to lie, so players cannot force a confession by spamming questions.
Instead, solving the case requires carefully analyzing the information hidden within their answers.
My Goal: To develop an AI-powered NPC capable of exhibiting unique behavior, personality, and realistic interactions.`,

  workImpact: `I successfully integrated the project with OpenAI, scripting and programming the flow of information—what the NPCs receive, how they respond, and when they respond.
In addition, I created a case file system that stores each suspect’s NPC scripts and gathers all the relevant information.
This file can be opened in-game to review suspect data or to check for any available evidence.`,

  projectDeveleloping: [
    {
      label: "AiConetion",
      value: [
        `This script enables players to interact naturally with AI-powered NPCs in an investigation game.
Players can ask questions and receive realistic, dynamic answers, while NPCs remember previous interactions to maintain continuity in the conversation.
The AI prompts are carefully designed based on each suspect’s personal information, crime details, and behavior rules.
NPCs respond in a human-like manner—lying if guilty, hesitating, making mistakes, or showing timid or aggressive reactions—depending on the context of the questioning.
Clues embedded in the player’s questions directly influence the NPC’s responses, making interrogations strategic and engaging.
Players must analyze answers and contradictions to uncover the culprit, transforming questioning into a core, immersive gameplay experience.`,
        CodeAiConection,
      ],
    },

    {
      label: "VoiceToText",
      value: [
        `This script allows the player to speak directly to NPCs by recording their voice,converting it to text using OpenAI Whisper, and sending it to the AI NPC.
The NPC receives the question and responds naturally, simulating realistic human behavior.
Audio is recorded, normalized, and converted to WAV automatically, creating a seamless interactive experience.`,
        VoiceToText,
      ],
    },

    {
      label: "NpcController",
      value: [
        `This script manages an NPC in an investigation game, controlling player interaction and how the NPC is displayed in the game interface.
At initialization, the script sets up the NPC’s personal information, image,and connection to the player’s case file system.
It also creates a suspect entry in the player’s case file, including all relevant details such as name, age, gender, and criminal record.
The NPC’s UI is handled dynamically: when the player can interact with the NPC, the name and input/answer panels are shown.
If the NPC is in conversation, the input field and answer canvas are active; otherwise, the interface remains hidden.
The HideAllUI and HideInteractionUI functions manage the visibility of UI elements when they are not needed,reducing redundant code and keeping the interface clean.
In summary, this script ensures the NPC is visible and interactive only when appropriate,while organizing the interface and NPC information clearly,
providing a smooth and immersive player experience.`,
        NpcControllerD,
        NpcControllerDe,
      ],
    },

    {
      label: "CaseFile",
      value: [
        `This script manages the player’s case file in the investigation game,allowing them to review crime scene information, browse evidence, and examine suspects.
It provides a structured and interactive interface for tracking details during the investigation.
The case file UI can be opened and closed with a key press,and the cursor is unlocked when the UI is active to allow interaction.
Pages of the case file are navigable, and only one page is visible at a time.
Each page can display information such as the crime scene description, collected evidence, and suspect details.
Evidence is displayed one by one, and the player can cycle through all evidence items.
Suspect information is stored in a list, with each suspect having a photo, name, age, gender, and a flag indicating if they have a criminal record.
Players can navigate between suspects, viewing their information and toggling details about their criminal history.
The script also integrates with other game systems, such as NPC interaction,ensuring that the case file behaves correctly during conversations.
All UI updates, page changes, and data loading are handled dynamically, providing a smooth and immersive experience.
Overall, this script turns the case file into a central tool for investigation,helping players organize and analyze all information necessary to solve the crime.`,
        CaseFile,
        CaseFileD,
      ],
    },

    {
      label: "What I learned",
      value: `For the first time, I created a script that defines multiple enemies, each with different abilities, that you can interact with in the game.
I learned how to manage game logic to avoid any critical bugs, optimize the code, and make it more reliable.
I also improved my skills in using Unity prefabs and handling their spawning and interactions properly.
It was a really enjoyable experience, though a bit stressful.
I didn’t manage to do everything I wanted because of limited time,
but I was able to build and learn how to create a complex player control system with full stats and interactions.
Likewise, I developed enemies with visual effects and sound to enhance the game’s atmosphere.`,
    },
  ],
});
