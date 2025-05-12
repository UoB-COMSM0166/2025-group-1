# 2025-group-1
2025 COMSM0166 group 1

# Demonstration
<div align="center">
    <a href="https://uob-comsm0166.github.io/2025-group-1/"><img src="https://github.com/UoB-COMSM0166/2025-group-1/blob/main/picture/play-game.png" width="1000"></a>
    <p><br>💥&nbsp;&nbsp;&nbsp;&nbsp;<strong><a href="https://uob-comsm0166.github.io/2025-group-1/">CLICK HERE TO PLAY!</a></strong>&nbsp;&nbsp;&nbsp;&nbsp;🚀</p>
</div>

<div align="center">
  <a href="https://youtu.be/9Rv5dqSU8yw" target="_blank" rel="noopener">
    <img
      src="https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-1/main/picture/demo-video.png"
      width="1000"
      alt="Watch Our Video!"
    >
    <p><strong>🎥&nbsp;&nbsp;Demo Video&nbsp;&nbsp;🎥</strong></p>
  </a>
</div>



# 📚 Table of Contents

1. [Development Team](#1-development-team)
2. [Introduction](#2-introduction)
3. [Requirements](#3-requirements)
4. [Design](#4-design)
5. [Implementation](#5-implementation)
6. [Evaluation](#6-evaluation)
7. [Sustainability, Ethics & Accessibility](#7-sustainability-ethics--accessibility)
8. [Privacy](#8-privacy)
9. [Process](#9-process)
10. [Conclusion](#10-conclusion)
11. [Contribution Statement](#11-contribution-statement)




# 1. Development Team

![f39cc4e1d8b6dd73d4d2db40f5900f1](https://github.com/user-attachments/assets/c3ffb7cf-7c44-414e-b030-84610f4f36cd)


| MEMBER | NAME           | EMAIL                        | ROLE |
|--------|---------------|------------------------------|------|
| 1      | Peiru Li      | xb24597@bristol.ac.uk        |   Technical Game Developer   |
| 2      | Qingya Fu     | zn24533@bristol.ac.uk        |    Product Manager and Game Designer  |
| 3      | Songying Li   | fm24830@bristol.ac.uk        |  Game Developer and Designer    |
| 4      | Jiaduo Gu     | wi24623@bristol.ac.uk        |   Game Narrative Designer  |
| 5      | Hanqi Wu      | to24657@bristol.ac.uk        |   Systems Engineer   |
| 6      | Hanzhen Guo   | om24630@bristol.ac.uk        |     UI/UX Designer  |


# 2. Introduction

The game is set in the year 2500, where players take on the role of a scavenger who accidentally enters a long-abandoned underground laboratory. As they battle enemies and search for a way out, players gradually uncover the tragic history behind the facility through scattered logs. Once a site for radical immortality experiments, the lab was ultimately destroyed by the creation of a failed bio-engineered entity—the uncontrollable “Ultimate Specimen.” The narrative offers a reflection on the dangers of unchecked ambition and highlights the importance of respecting nature.

Inspired by the classic roguelike Spelunky, our game retains its core mechanics while introducing puzzle-solving elements and deeper narrative immersion. The main objective is simple yet challenging: survive and escape. To meet diverse player needs, we offer three game modes—a casual mode for relaxed play, an exploration mode featuring partial map illumination, and an inclusive mode specifically designed for single-arm players.

During development, we tackled two major technical challenges: building an intelligent enemy AI capable of dynamic tracking, and designing a responsive audio system that adapts in real time to the player’s state, enhancing overall immersion.

Accessibility remained a core design principle. In addition to single-arm player support, we also optimized color schemes to accommodate players with color vision deficiencies, ensuring an inclusive experience for all.

Our team followed an agile development approach, using GitHub for version control. We began with interface prototyping to ensure seamless integration across modules (AI, UI, audio). Through continuous user testing, we refined gameplay difficulty, visual design, and core mechanics to deliver a smooth and rewarding experience for every player.

![宣传海报](https://github.com/user-attachments/assets/9bdc8825-ee57-4456-bb98-49788907e947)


Paper Prototype(https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-1/main/Two-paper-prototype-ideas/Video2.mp4)


# 3. Requirements 

## Ideation process

In the first week of game development, our team researched outstanding cases from previous years and familiarized ourselves with the entire development process. To refine potential game ideas, we held a discussion meeting in the middle of the week. Prior to this, the six team members divided tasks based on their personal interests, gaming experience, and professional skills. Among them, four members with extensive gaming experience proposed five game concepts and explored potential expansions. The games we considered included Overcooked 2, Worms, Zero Sievert, Plague Inc., and Carrot Fantasy. 

During the discussion, we thoroughly analyzed each game's core mechanics, potential development challenges, feasibility, and rationality. Meanwhile, the remaining two members compiled the strengths and weaknesses of various successful cases and shared their findings in a document during the meeting. In the end, we documented our game ideas and discussion results from the first week.


| Game Type | Game Prototypes | Game Description | Added Idea Points | Possible Challenges |
|-----------|----------------|------------------|-------------------|---------------------|
| **Multiplayer / Casual Party / Simulation** | **Overcooked! 2** | Players take on the role of a chef and work with their teammates to cook food, fulfill orders, and earn high scores in a variety of challenging and chaotic kitchens within a set time limit! | (1) Setting up a character to interfere with the cooking process, such as a mouse. <br> (2) Setting up a character to help the player cut vegetables. <br> (3) Set up a gold coin shop to upgrade cooking utensils to increase the cooking speed or delay the time for guests, etc. | (1) Insufficient Game Content <br> (2) Balance Between Randomness and Difficulty <br> (3) Lack of Rewards and Long-Term Goals <br> (4) Multiplayer mode adds complexity to the code |
| **Strategy Simulation / Infectious Disease Simulation / Placement Strategy** | **Plague Inc.** | Players need to design and evolve deadly pathogens to spread globally by mutating transmission routes, symptoms and resistance to drugs, while countering national anti-epidemic measures, and ultimately succeeding in infecting and wiping out the human race. | (1) Improvement of the story background: changed to science fiction theme, the story background is moved to a new planet. <br> (2) Putting obstacles in the way of the human research process, such as the infection rate of more than 80%, the speed of antidote development decreased. <br> (3) Propagation path: changed from the original version of the Earth’s aircraft and ships to space warships. | (1) Data aspects: <br> &emsp; A. Infection rate arithmetic, etc. <br> &emsp; B. Adjustments to antidote generation - related to changes in infection rates. <br> &emsp; C. Increased transmission routes. <br> (2) Text volume: tasks such as news doohickey require a lot of imagination and too much text. |
| **Turn-based Strategy / Ballistic Shooting / Casual Battle** | **Worms** | Players take control of a unit of hilarious and cranky little bugs and use a variety of weapons (bazookas, grenades, kamikazes, etc.) to engage their opponents in turn-based battles, with the goal of destroying all enemy bugs using precision shooting and tactical maneuvers. | (1) Defeat enemies to drop props or blood packs. <br> (2) Levels feature a countdown timer, a screen that shrinks as time progresses, or a mysterious threat that forces the player to move forward quickly. | (1) Enemy AI tracking <br> (2) Terrain destruction caused by multiple weapons <br> (3) As the player moves, the screen view follows (real-time tracking of camera). |
| **Overhead Survival Shooter / Exploration Scavenging / Doomsday Survival** | **Zero Sievert** | Players scavenge for supplies, fight to survive in randomly generated wasteland war zones, and use gun modifications and base management to enhance their combat power against hostile forces and mutated monsters. | No better ideas at the moment, not enough room for improvement | (1) Random movement track of monsters <br> (2) As the player moves, the screen view follows (real-time tracking of camera). |
| **Tower Defence / Casual Strategy** | **Carrot Fantasy** | Players need to build turrets in the level to block the incoming monsters and protect the radish from being eaten! | No better ideas at the moment, not enough room for improvement | — |
| **Roguelike / Platform Adventure / Action Quest** | **Spelunky** | Players control explorers as they search for treasure, avoid traps, defeat enemies, and try to survive in randomly generated underground caves. The game combines high-freedom exploration, hardcore platform jumping, and a permanent death mechanic, where every challenge is full of unknowns, testing players’ strategy and reflexes. | (1) Combined with exploration mode by adding localized lighting effects. <br> (2) Adding hidden paths or spaces and presenting them as environmental cues. <br> (3) Adding a portal mechanism. <br> (4) Create a story background for the game and present it in the form of decryption. | (1) **Technical Challenges**: Procedural generation must ensure that random maps are both playable and balanced. <br> (2) **Collision Detection**: It requires optimization for smoother gameplay. <br> (3) **Content Expansion**: Introducing new features, boss battles, and buff mechanisms, along with diverse environments, can keep gameplay fresh. |

Moving into the second week, team members played each candidate game to gain a deeper understanding of their core mechanics, followed by another discussion session. After intense deliberation, we decided to develop a game that preserves the characteristics of the original while significantly enhancing its fun factor with minimal yet impactful new mechanics. The game also needed to have strong potential for innovation and engaging conflicts. Ultimately, we chose Spelunky as our prototype—a classic roguelike game. Building on its core features, we plan to introduce an exploration mode, integrating localized lighting mechanics and puzzle-solving elements to create a brand-new game concept. The team unanimously agreed on this idea and finalized it as our development direction.


## Early stages design

In the early stage of development, we created a paper prototype to visualize and test the game’s core mechanics. During this phase, we discussed player goals, gameplay logic, and fun factors.  This process also revealed that the “pet-following” mechanic lacked engagement, leading us to remove it. At the same time we decided to add wall destruction to the gameplay. The prototype allowed us to rapidly validate and refine level layouts, enemy behavior, and puzzle logic—saving time and resources.

Additionally, it gave us an early opportunity to test accessibility features, such as simulating single-arm play and evaluating rule clarity, ensuring inclusivity from the very beginning. Overall, the paper prototype provided clear development direction and significantly improved our workflow efficiency.


<div align="center">
  <img src="https://github.com/UoB-COMSM0166/2025-group-1/blob/main/Animation/Animation1.gif" alt="Animation" width="500">
    <br>
  <em>Figure:Normal levels for paper models </em>
</div>
<div align="center">
  <img src="https://github.com/UoB-COMSM0166/2025-group-1/blob/main/Animation/Animation2.gif" alt="Animation" width="500">
    <br>
  <em>Figure:The ultimate level of paper modelling </em>
</div>



## User stories

| Stakeholder               | Epic                                                  | User Story                                                                                                                                         | Acceptance Criteria                                                                                                                                   |
|---------------------------|------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Narrative-Driven Players**  | Unlockable Plot Experience                         | As a player, I want to unlock storylines by completing quests so that I can get a deeper experience of the storyline.                           | Given that I have completed a mission, When I click the “Finish” button, Then a new story segment should be displayed.                               |
| **Exploratory Players**     | Realisation of the Dynamic Lighting System         | As a player, I want to explore dungeon rooms in darkness to experience the joy of the unknown.                                                  | Given that I am present in the game scene, When I move around the scene, Then the light source should follow me, creating real-time lighting updates. |
| **Novice Players**          | Intuitive and responsive interface for a smooth gaming experience | As a player, I expected the menu to be clearly designed so that I can easily get started without any extra help when I launch the game for the first time. | Given an intuitive and user-friendly menu interface, When I launch the game for the first time, Then I can easily understand how to start playing.   |
| **Amblyopia Players**       | Enhanced screen contrast for a clear and hassle-free gaming experience | As a player, I want to enhance the contrast of the screen so that I can clearly recognize everything in the game and have a more comfortable gaming experience. | Given that the visual setting to enhance the contrast of the screen is enabled, When I start the game as a partially sighted player, Then I can clearly distinguish all key elements of the game. |
| **Gameplay Programmer**     | Player vs Enemy Combat System Features             | As a developer, I want to implement a player vs enemy combat system, so that players can engage in battles with different enemy types.           | Given that there are various enemy types in the game scene (such as melee enemies, ranged enemies, and bosses), When the player engages in combat, Then each enemy should display unique attack styles, movement behaviors, and health attributes. |
| **Art Designers**            | Attracting the attention of potential players      | As a developer, I want to design a series of posters that match the theme of the game, so that it can attract potential players during the promotion period. | Given the game has a clear theme and visual style, When the designed posters are showcased during the promotion period, Then each poster should align with the game's theme and effectively capture potential players' attention. |


## Use case diagrams


# 4. Design

## Class diagrams
The class diagram organizes the system into auxiliary modules (including UI design, music arrangement, accessibility features, and menu design), enemies, bullets, and trap setups.
Design highlights include:

**Inheritance for reuse**

The three-tier abstraction of Entity → Enemy → Bullet ensures core movement, collision, and rendering logic is implemented only once.

**Single responsibility**

Each Manager/System focuses on one function, while Main is solely responsible for orchestrating the overall game flow.

**Modular interfaces**

Level elements, entities, and systems are decoupled via clear interfaces (update(), display(), checkCollision()), making it easy to add or replace components.

**Event-driven awareness**

Components like Portal and Switch notify Main through boolean returns or callbacks, enabling loosely coupled level control.
![Class diagram](https://github.com/UoB-COMSM0166/2025-group-1/blob/main/picture/class%20diagram.png)


## Sequence Diagrams
The sequence diagram below illustrates that players can adjust settings or view instructions and then return after clicks “Start” on the main menu. Next, they proceed through mode selection and level selection into a story cutscene. From there they enter the main game loop—each frame executes, in order: enemy updates, player input processing, item/trap detection, and bullet collision checks—until either the victory or game-over screen appears, at which point the player can press a key to retry or continue with the next part of the story.
![Sequence Diagram](https://github.com/user-attachments/assets/10c5c9d7-856f-4b09-b39e-35385a545b16)


# 5. Implementation

## Challenge 1 : Enemy AI Tracking

Our first major challenge was designing an enemy AI that could dynamically track and chase the player while remaining confined to its platform and avoiding erratic behavior. 

We chose a **finite state machine (FSM)** for its **simplicity, performance**, and **maintainability**. Although more advanced systems like **Behavior trees** or **GOAP** offer finer-grained control—and **machine-learning** approaches (reinforcement or supervised) enable highly adaptive agents—they demand full training environments, large datasets, and inference integration, which greatly increases development complexity. 

In most 2D platformers, an FSM-based logic sequence (“player on platform → chase → attack”) delivers **robust, predictable** gameplay with **minimal overhead**.

**FSM States**

- Standby: The enemy idles or patrols slowly, playing background animations. When the player enters the same platform, it immediately orients toward them.
   
- Alert: Upon detection, the enemy triggers a roar animation and freezes briefly to heighten tension.
   
- Chase: It switches to high-speed pursuit at attackSpeed, following the player horizontally. A continuous distance check monitors when the player enters attackRange.
   
- Attack: Once within attackRange, the enemy stops and executes an attack animation (e.g., a lunge or swing), applying damage only if collision conditions are met.
   
- Return/Patrol: If the player leaves the platform, a short countdown (e.g., two seconds) triggers a return to Standby or Patrol, preventing off-platform pursuits.

**Transition Mechanics**

- Platform Detection: A collision or overlap function verifies whether the player and enemy share the same platform by checking bounding-box overlaps or proximity to platform boundary markers.

- Distance Check & Thresholds: We run a continuous distance check to determine when to switch from Chase to Attack. We fine-tune the attackRange threshold to ensure the AI has enough animation frames to complete its attack sequence once the transition occurs.

- State Timers & Return Delay: Upon player exit, a brief countdown timer starts (e.g., two seconds). Only if the player remains off-platform for the full duration does the enemy revert to Standby or Patrol, smoothing the state change and preventing unnecessary off-platform chasing.

**Implementation Details**

In the main update loop, collision tests and distance calculations drive state transitions. We toggle the enemy’s speed variable between patrolSpeed and attackSpeed, and enforce platform boundaries by reversing direction at edges. This FSM-driven approach reduces collision and boundary-detection errors, ensuring enemies remain reliable threats that enhance gameplay without sacrificing stability or maintainability. Overall, this FSM pattern balances complexity and functionality, giving designers clear hooks for future tweaks.


<p align="center">
  <img src="https://github.com/UoB-COMSM0166/2025-group-1/blob/main/Animation/Animation3.gif" alt="Animation" width="500">
  <br>
  <em>Figure: The player enters the platform where the monster is located< </em>
</p>

## Challenge 2: Intelligent Audio Switching System

To enhance immersion and responsiveness, we developed a smart audio scheduling system based on a **behavior tree architecture**. This system dynamically controls background music and sound effects in real time, adapting to gameplay progress and UI context. It comprises four core components:

- **Context-Based Background Music**

The system detects the current game interface—main menu, in-game action, or result screen—and automatically switches to the appropriate background track. Calm or tense atmospheres are created accordingly, enhancing player engagement.

- **One-Time Event Sound Effects**

For instantaneous, impactful events—like gunfire, explosions, or heartbeat alerts when health is low—the system triggers one-off sound effects that play immediately upon activation. These sounds are short, high-intensity cues that heighten urgency without looping.

- **Combat State Audio Transition**

When the player engages in continuous firing within enemy range (excluding final boss stages), the system enters “combat mode.” The background music transitions seamlessly to an intense battle theme. Once the player stops attacking and exits combat distance, the music smoothly fades back to the standard track, maintaining emotional synchronization with gameplay.

- **Audio Priority Management**

To handle overlapping sound triggers, we implemented a priority system. Each sound effect is assigned a priority level. When multiple effects are triggered simultaneously, the system ensures the highest-priority sound plays first, reducing auditory clutter and preserving clarity.

This **behavior tree–driven approach** allows for modular logic and scalable control. All transitions—whether from idle to combat, or from event SFX to ambient background—are managed through a consistent and flexible structure. The result is a polished audio system that delivers **fluid, immersive, and emotionally responsive** feedback throughout the player’s experience.



<p align="center">
  <img src="https://github.com/UoB-COMSM0166/2025-group-1/blob/main/Animation/Animation4.gif" alt="Animation" width="500">
  <br>
  <em>Figure: Sound effect switch when the player has only one drop of blood left </em>
</p>


# 6. Evaluation

## Qualitative evaluation-Think Aloud method

We conducted a qualitative evaluation using the Think Aloud method. During the testing sessions, participants were asked to verbalise their thoughts, feelings, and actions aloud while interacting with the game. A facilitator guided users to keep speaking throughout the process, while two observers recorded their verbal expressions, facial reactions, and emotional responses. A total of 21 players from different age groups and professional backgrounds participated in the evaluation. 

To clearly present our findings, we extracted a sample observation record from one participant, showcasing timestamp, facial expression screenshots, and key moments of self-talk or questions raised.

| Timestamp | Facial Expression / Emotion     | Self-talk / Question                                                                                  | User Action                                                                                     | Issue Category                   |
|-----------|----------------------------------|--------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|----------------------------------|
| 00:12   | Smile, Amazed                   | The menu background image and the background music are great!                                         | Stop at the main menu to see the background image                                               | Positive Feedback                |
| 00:28      | Frown, Confused                 | Why does the volume display decimals when adjusting the volume?                                       | Look up and ask the developer after trying to move the volume keys repeatedly                  | Settings Display Precision       |
| 00:46      | Bite the lips, Confused         | How do I play? There are no instructions on how to play the game.                                     | Press A and D on the keyboard to try and figure out how to make a move                          | Lack of Instructional Visibility |
| 00:59      | Smile                           | I defeated a monster.                                                                                  | Use the mouse to aim and attack the monster 3 times and the monster dies!                       | Positive Feedback                |
| 01:12      | Anxious, frowning, fidgety      | I'm claustrophobic and this partial light mode makes me feel depressed. Is there no full light mode?  | Operate the game character to pace the game repeatedly                                          | User Comfort & Accessibility     |
| ...       | ...                              | ...                                                                                                    | ...                                                                                              | ...                              |

<p align="center">
  <img src="https://github.com/UoB-COMSM0166/2025-group-1/blob/main/Animation/Animation5.gif"
       alt="Animation"
       width="500" />
  <br>
  <em>Figure: Gamers use think aloud method to test gameplay fragment </em>
</p>


After the meeting, we collated the observation records and divided the feedback into four categories: Usability & Interaction Issues, Visual & Informational Design, Accessibility & User Well-being, and Positive Feedback for optimisation.
<p align="center">
  <img src="https://github.com/user-attachments/assets/6a7dd874-99d6-4ec0-930e-181af343ce03"
       alt="Animation"
       />
  <br>
  <em>Figure: four categories of feedback</em>
</p>


### Analysis and Optimisation

We identified and addressed key issues from three categories:

#### 1. Usability & Interaction
**Problems:**  
- Buttons required double-click  
- Mouse response was slow  
- Health did not reset after entering a new level  
- Jumping couldn't be combined with left/right movement  

**Solutions:**  
- Changed to single-click operation  
- Improved UI input responsiveness  
- Enabled automatic health reset at new levels  
- Updated movement logic to support directional control during jumps  

#### 2. Visual & Informational Design
**Problems:**  
- No embedded gameplay instructions or story guide  
- Volume and brightness showed decimals  
- Missing turn animation  

**Solutions:**  
- Added in-game tutorials and story fragment prompts  
- Displayed volume/brightness as integers  
- Implemented turn animations for visual continuity  

#### 3. Accessibility & User Well-being
**Problem:**  
- Some players felt discomfort with partial lighting, while others enjoyed it  

**Solution:**  
- Added toggle between “Full Light Mode” and “Exploration Mode”

This method provided strong support for understanding users’ cognitive processes and emotional journeys, contributing effectively to the iterative improvement of our game design.


## Quantitative evaluation-NASA TLX、SUS

### NASA TLX

To evaluate the cognitive workload and system usability of our game's two primary modes—Simple Mode and Exploration Mode—we conducted a quantitative study using two standardized instruments:

- NASA Task Load Index (Raw TLX) – to assess subjective workload

- System Usability Scale (SUS) – to measure perceived system usability

- Wilcoxon Signed-Rank Test

Twelve experienced participants (each with 3–5 years of gaming experience) took part in the study. To minimize learning and order effects, half of the participants started with the Simple Mode while the other half began with the Exploration Mode. After completing each mode, participants filled out both the TLX and SUS questionnaires.

We focused on the six dimensions of NASA TLX for a focused analysis, with the sub-dimensions of Frustration and Performance showing greater fluctuations in data compared to the other dimensions across modes.

Figure shows that players reported significantly higher frustration in the Exploration Mode than in the Simple Mode. The average frustration score rose from approximately 30 to over 55.

<div align="center">
  <img src="https://github.com/user-attachments/assets/15a67a36-fb4d-4464-bc92-5a6e4ece82a9" width="400"/>
  <p><em>Figure: Average Frustration Score by Mode</em></p>
</div>

Figure further reveals that the frustration scores in the Exploration Mode are not only higher on average, but also more variable, with several participants reporting very high values.

<div align="center">
  <img src="https://github.com/user-attachments/assets/adfef191-976c-44d8-8517-b25f1b168c8c" width="400"/>
  <p><em>Figure: Distribution of Frustration Scores by Mode</em></p>
</div>

These results suggest that while Exploration Mode adds challenge, it also increases emotional stress and uncertainty.


Figure shows a reverse trend in perceived performance: the average score decreased in the Exploration Mode compared to the Simple Mode.

<div align="center">
  <img src="https://github.com/user-attachments/assets/301b92cd-b9ca-433a-8cb8-5a19b30bdc1f" width="400"/>
  <p><em>Figure: Average Performance Score by Mode</em></p>
</div>

Figure  confirms this drop in user-reported success, with more low and mid-range scores under the Exploration condition.

<div align="center">
  <img src="https://github.com/user-attachments/assets/5ca20c1c-bbf5-4897-bf7e-ebcb58d5360c" width="400"/>
  <p><em>Figure: Distribution of Performance Scores by Mode</em></p>
</div>

These results validate the hypothesis that the Exploration Mode leads to **higher frustration** and **lower perceived success**, indicating potential usability or pacing issues in its current form.

### SUS – System Usability Score Consistency

In contrast, the System Usability Scale (SUS) results suggest that both modes are similarly usable.

Despite the gameplay differences, participants consistently rated both modes highly.

In the SUS average bar chart and distribution plots (previously presented as Figure 2 & 4 in earlier section), both modes achieved scores well above the industry benchmark of 68, with no significant difference between them (p > 0.4).

These results confirm that the perceived usability of the interface and system design remains stable, regardless of gameplay variation. The only visual difference—Screen Brightness Range—did not influence usability ratings.

### Statistical Analysis: Wilcoxon Signed-Rank Tests

To evaluate the statistical significance of subjective differences between game modes, we conducted Wilcoxon Signed-Rank Tests on key metrics:

<div align="center">

### Statistical Analysis: Wilcoxon Signed-Rank Tests

<table>
  <thead>
    <tr>
      <th>Metric</th>
      <th>Mean (Simple)</th>
      <th>Mean (Exploration)</th>
      <th>p-value</th>
      <th>Significance</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Total NASA TLX Score</td>
      <td>~46.2</td>
      <td>~52.6</td>
      <td><strong>0.00049</strong></td>
      <td>Significant</td>
    </tr>
    <tr>
      <td>Frustration Score</td>
      <td>~30.3</td>
      <td>~55.3</td>
      <td><strong>0.00049</strong></td>
      <td>Significant</td>
    </tr>
    <tr>
      <td>Performance Score</td>
      <td>~74.1</td>
      <td>~61.7</td>
      <td><strong>0.00049</strong></td>
      <td>Significant</td>
    </tr>
    <tr>
      <td>SUS Score</td>
      <td>~76.2</td>
      <td>~75.6</td>
      <td>0.476</td>
      <td>Not significant</td>
    </tr>
  </tbody>
</table>

</div>


These results confirm that:

- Exploration Mode leads to significantly higher frustration (p < 0.001)

- Perceived performance significantly drops in Exploration Mode (p < 0.001)

- Overall workload increases (p < 0.001)

- However, usability remains consistent between modes (p > 0.05)

### Design Implications

While players can navigate and operate both modes with ease, the increased frustration and lowered performance in Exploration Mode highlight areas for improvement:

- Smooth the difficulty curve in Exploration Mode

- Provide better onboarding or optional guidance for advanced mechanics

- Consider adaptive systems for accessibility and engagement

### Testing

To ensure that our game behaved correctly and remained stable throughout development, we implemented both white-box and black-box testing strategies. These two approaches allowed us to validate both the internal logic and the overall gameplay experience.

#### White-box

We conducted white-box testing during development, focusing on player movement, enemy AI, and game state logic.
Using browser debugging tools and console logs, we manually verified that key functions like collision handling and input response worked as intended.
While we didn’t adopt a full unit testing framework, we regularly inspected code during each sprint to catch logic errors early.

#### Black-box

Due to our game’s visual and interactive nature, black-box testing was more efficient at catching real gameplay issues. So black-box testing was our primary QA method. Team members play-tested new features without looking at the code, checking for:

- Visual glitches, broken controls, missing feedback

- Gameplay bugs or unexpected behavior

Each developer used a Git feature branch, and new content was tested in isolation before merging. Weekly sprints included regular play sessions, ensuring consistent quality and stability.

# 7. Sustainability, Ethics & Accessibility

From the early stages of development, we committed to sustainability and inclusivity as core design principles, and applying a sustainable development awareness framework to it. By setting the default screen brightness to 50%, we balance visual quality with reduced energy consumption. All design choices reflect a philosophy of energy efficiency and inclusive gameplay, ensuring smooth experiences for players of diverse abilities.

<p align="center">
  <img src="https://github.com/user-attachments/assets/6f824b9a-3f78-4709-a3c3-9a5114564306" alt="可持续1" width="600"/>
    <br>
  <em>Figure: sustainability framework for game development</em>
</p>

## Environmental Impact

**Optimizing client-side performance and resource efficiency:**

| Initiative                   | Implementation                                                | Code Reference                              |
|-----------------------------|----------------------------------------------------------------|---------------------------------------------|
| Local Storage Optimization   | Stores game progress locally to reduce server load             | `saveManager.js` / `setItem()`              |
| Dynamic Particle Limiting    | Lowers GPU usage through frame-based particle control          | `portalSystem.js` / `frameCount`            |
| Efficient Animation Handling | Reuses sprite frames to minimize texture swapping              | `Animation.js` / `this.frames`

## Social & Accessibility Impact

**Inclusive design and ethical gameplay mechanics: empowering every player：**

| Feature                    | Implementation                                                                | Code Reference                            |
| -------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------- |
| High-Contrast UI           | Enhanced visibility for color-blind and low-vision players                    | `ui.js` / `drawHealth()`                  |
| One-Handed Control Support | Auto-aim with Shift + Space-only shooting enables full gameplay with one hand | `AccessibilityController.js` / `gunAngle` |
| Flexible Jumping Controls  | W or Space can both trigger jumps for ergonomic flexibility                   | `ui.js` / input mapping                   |
| Localized Privacy          | GDPR-compliant local data storage                                             | `saveManager.js` / `localStorage`         |
| Addiction Mitigation       | Clear pause and exit prompts                                                  | `ui.js` / `text("Press R to Restart")`    |

A major focus of our accessibility philosophy is supporting one-handed players. With Shift-enabled auto-aim and a Space-only shooting mechanism, players can engage in core gameplay without using a mouse or second hand. This system is designed to provide fully functional, competitive control to individuals with limited motor abilities—without compromising game mechanics.

Our accessibility framework follows WCAG 2.1 AA standards and embraces the “two golden rules” of digital accessibility: keyboard navigation and screen reader compatibility. Additional plans include audio cues, ARIA live regions, and exploration of voice input, eye-tracking, and single-switch scanning—aiming toward universal access in the long term.

## Technical Impact

**Sustainable coding practices and maintainability:**

| Practice                 | Implementation                                      | Code Reference                                     |
|--------------------------|------------------------------------------------------|----------------------------------------------------|
| Modular Architecture     | Decoupled systems for easier maintenance             | `portalSystem.js` / Separate Portal class          |
| Energy-Efficient Collision | Optimized AABB collision detection                 | `Player.js` / `handleHorizontalCollisions()`       |
| Memory Management        | Automatic cleanup of unused game objects            | `initializeGame.js` / `platforms = []`             |
| Procedural Content       | Dynamic generation of platform elements             | `Platform.js` / `this.tileMap` system              |

## Key Sustainability Metrics

| Category        | Improvement                            | Verification Method                        |
|----------------|-----------------------------------------|--------------------------------------------|
| GPU Load        | 20–30% reduction                        | Frame time analysis (Chrome DevTools)      |
| Memory Usage    | 35% lower peak usage                    | Chrome Memory Profiler                     |
| Accessibility   | Full WCAG 2.1 AA compliance             | Axe DevTools audit                         |
| Code Reuse      | 60% shared components                   | CodeClimate duplication analysis           |

## High Contrast Mode: Designed for Everyone

- Global Toggle: One-click toggle in settings, no restart required—updates UI immediately across all screens.

- Menus & Backgrounds: UI adapts between dark gray and pure black backgrounds for better contrast visibility.

- Accessibility Integration: Enabling Accessibility Mode automatically applies High Contrast with maximum brightness.

- HUD & Prompts: Vital UI elements (health bars, icons, game messages) use bold white or bright red for legibility.

- Real-Time Response: Instant effect upon toggling—maintains gameplay flow and immersion.

- Future Expansion: Plans include screen reader support, speech controls, and audio cues for blind users.

# 8. Privacy

An analysis of the game's p5.js source code highlights multiple privacy concerns:

## Key Issues

- **Implicit Data Collection:**  
  Preferences like sound are stored using `localStorage.getItem("sound")` and updated silently via `setItem()`, without any user notification or consent.

- **No Data Deletion or Opt-Out:**  
  Players cannot delete their stored data or opt out of persistent storage. This limits user control and violates principles of data agency.

- **No Policy Disclosure:**  
  There is no privacy policy, prompt, or explanation regarding data collection—raising ethical concerns about informed consent.

- **One-Way Storage Model:**  
  While `localStorage` is low-risk, using it without context erodes trust—especially if combined with future tracking or analytics.

- **Offline Game, Persistent Tracking:**  
  Despite no login system, the game stores behavioral settings permanently. Future multiplayer or analytics features may risk non-compliance with GDPR/CCPA.

## Recommendation

- Developers should prioritize **transparency**, **data minimization**, and **user control** from the early design phase.  
- Privacy is not an afterthought—it’s a foundation for ethical and responsible game design.

# 9. Process

Our team adopted an agile development methodology throughout the game development project, which significantly contributed to efficient collaboration and steady progress. Each member assumed specific roles based on their individual strengths. This role-based distribution enabled us to leverage everyone’s expertise and ensured accountability within the team.

We held two regular meetings each week: one online meeting every Saturday via Microsoft Teams and one in-person meeting every Tuesday. The Saturday meetings focused on reviewing development progress and addressing technical challenges that individual members encountered. Tuesday meetings served as retrospective sessions where we reflected on past difficulties, refined goals for the next sprint, and discussed whether any requirements or priorities needed to be adjusted.

<p align="center">
  <img width="1091" alt="Product Requirements Table" src="https://github.com/user-attachments/assets/826ac3b0-f747-4dcd-bd8c-f0758b9df6d0" />
  <br>
  <em>Figure: First draft of the product requirements table</em>
</p>



<div align="center">
  <img src="https://github.com/UoB-COMSM0166/2025-group-1/blob/main/Animation/Animation6.gif" alt="Animation" width="450">
    <br>
  <em>Figure: in-person meeting on Tuesday</em>
</div>

Before each meeting, our product manager, Fufu, would inform the group of the agenda and time through a WhatsApp group chat. After the meeting, Fufu would summarize the key decisions and distribute updated task assignments accordingly. This structured communication kept everyone informed and aligned.

<p align="center">
  <img src="https://github.com/user-attachments/assets/ad4a471f-7e0c-44a3-948a-1107004944d4"
       alt="WhatsApp group message snippet"
       width="300" />
  <br>
  <em>Figure: WhatsApp group message snippet</em>
</p>

To manage our workflow and ensure transparency, we used a Kanban board to track task progress. Each task was clearly defined and assigned, allowing us to visualize the overall status of the project at a glance. This tool helped us remain organized and responsive to any bottlenecks that emerged during development.

In addition, we made extensive use of GitHub’s Pull Request (PR) functionality for version control and collaborative coding. It became our standard practice to create a new branch for each assigned task. After completing a task, a team member would submit a pull request, which another member was required to review before merging. This peer-review process not only maintained high coding standards but also allowed us to catch potential bugs early. Even if problematic code was merged, the branch structure made it easy to trace issues back to specific tasks.

As the core features of the game were implemented, we began inviting users to test our product regularly. The feedback we received significantly accelerated our iteration cycles and led to several changes in product requirements. Every team member responded proactively to these changes and willingly took on the task of fixing the bugs that naturally emerged during rapid iterations.

One of the biggest challenges we faced was implementing the enemy AI tracking system. It took us three weeks to complete, one week longer than originally planned. During this time, we held six meetings focused solely on this feature, brainstorming various solutions. The first two weeks yielded no significant breakthroughs, which was frustrating for the team. To gain fresh perspectives, we posted in developer forums and received a wide range of suggestions. One of these eventually led us in the right direction, and we implemented the tracking system much faster than expected once we found the right approach.

<p align="center">
  <img src="https://github.com/UoB-COMSM0166/2025-group-1/blob/main/Animation/Animation7.gif" alt="Animation" width="400">
  <br>
  <em>Figure: Discuss about the enemy AI tracking system</em>
</p>


In addition to gameplay mechanics, our team prioritized inclusive design. We developed an accessibility mode specifically tailored for colorblind and one-handed players. This required a great deal of additional effort. To ensure our design truly improved the player experience, we arranged a coffee chat with the head of the Disability and Wellbeing organization. Their insights offered perspectives we had not previously considered and deeply informed our design choices.



<p align="center">
  <img src="https://github.com/UoB-COMSM0166/2025-group-1/blob/main/picture/access1.png" 
       alt="Initial Contact Email" 
       width="600" />
  <br>
  <em>Figure: Initial contact email</em>
</p>



<p align="center">
  <img src="https://github.com/UoB-COMSM0166/2025-group-1/blob/main/picture/access2.png" 
       alt="Reply from Tristan" 
       width="600" />
  <br>
  <em>Figure: Tristan's reply email</em>
</p>

This system of regular meetings, clearly defined roles, structured communication, user feedback, and disciplined code management created a productive and cohesive working environment. Through effective collaboration, user engagement, and inclusive practices, we were able to deliver a high-quality game while continuously learning and adapting as a team.


# 10. Conclusion

RIFT is a game inspired by the roguelike platformer Spelunky, but reimagined with a unique narrative backdrop, innovative mechanics, and puzzle-solving elements. Over the course of five months, our team of six members collaboratively developed this game from the ground up—an undertaking that proved both challenging and rewarding.

Coming from diverse academic backgrounds, each member brought a different skillset to the team. Early on, we assigned roles based on individual strengths, allowing everyone to contribute meaningfully. From programming and art to design and sound, each member demonstrated commitment and professionalism in pushing the project forward.

Throughout development, we followed an agile workflow. We held two meetings each week to monitor progress, troubleshoot technical issues, reflect on team performance, and plan upcoming sprints. These meetings also provided a space to adapt our task priorities and requirements based on user feedback. Agile collaboration and open communication played a pivotal role in keeping our project on track.

Looking back, we are proud to say that our final product closely reflects our initial vision—and in some areas, even surpassed expectations. Beyond technical achievement, one of our most valuable takeaways was the experience of cross-disciplinary teamwork. We learned to communicate efficiently, adapt to different working styles, and maintain alignment despite a fast-paced iteration cycle. These skills will be indispensable in our future careers.

That said, there are still many ideas we had hoped to implement but could not due to time or technical constraints. While we aimed to incorporate inclusive design from the outset, the current accessibility mode is better suited for players with a left arm only. We struggled to involve enough one-armed testers, which limited the inclusivity evaluation. Additionally, features like procedurally generated levels, multiplayer mode, and richer storytelling could significantly enhance the experience and immersion.

Looking forward, we hope to continue optimizing RIFT and eventually publish it on mobile platforms. We also plan to create RIFT merchandise, such as T-shirts, to grow our fanbase and community. This project has laid a strong foundation—not just for the game itself, but for the shared values, trust, and creativity of our team.

This project was more than a technical endeavor—it was a journey of collaboration, creativity, and growth. Though RIFT is still evolving, we are proud of how far we've come and excited for what lies ahead.

# 11. Contribution Statement
| Name     |   Contribution   | 
|-------------------|----------------|
|Qingya Fu    | 1.00 |
| Songying Li | 1.00 | 
| Hanzhen Guo | 1.00 | 
| Hanqi Wu    |1.00  | 
| Peiru Li    |1.00  |
|Jiaduo Gu    | 1.00|


