# 2025-group-1
2025 COMSM0166 group 1

## Your Game

Link to your game [PLAY HERE](https://uob-comsm0166.github.io/2025-group-1/)

Your game lives in the [/docs](/docs) folder, and is published using Github pages to the link above.

Include a demo video of your game here (you don't have to wait until the end, you can insert a work in progress video)

## Your Group

![f39cc4e1d8b6dd73d4d2db40f5900f1](https://github.com/user-attachments/assets/c3ffb7cf-7c44-414e-b030-84610f4f36cd)


| MEMBER | NAME           | EMAIL                        | ROLE |
|--------|---------------|------------------------------|------|
| 1      | Peiru Li      | xb24597@bristol.ac.uk        |      |
| 2      | Qingya Fu     | zn24533@bristol.ac.uk        |      |
| 3      | Songying Li   | fm24830@bristol.ac.uk        |      |
| 4      | Jiaduo Gu     | wi24623@bristol.ac.uk        |      |
| 5      | Hanqi Wu      | to24657@bristol.ac.uk        |      |
| 6      | Hanzhen Guo   | om24630@bristol.ac.uk        |      |


## Project Report

## 2.Introduction

Our group's idea for the game was inspired by the game Spelunky, which is in the rougue-like game genre and takes place in a cave where the player must explore. The game has a lot of richness and randomized gameplay variations, and the gold or gems earned from each level can be exchanged at the store. Though we have made certain changes and will be expanding the gameplay by allowing the player to decrypt and piece together the main plot, our group's gaming mechanics are comparable to those of a rouguelike. Our game has an inventive twist because it is set in a future, deserted laboratory. Additionally, a few minor elements like partial lighting might encourage players to explore the terrain more, and certain function keys would enhance the game's playability.

Paper Prototype(https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-1/main/Two-paper-prototype-ideas/Video2.mp4)

- 5% ~250 words 
- Describe your game, what is based on, what makes it novel? 

## 3.Requirements 

### Ideation process

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


 
### User stories

| Stakeholder               | Epic                                                  | User Story                                                                                                                                         | Acceptance Criteria                                                                                                                                   |
|---------------------------|------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Narrative-Driven Players**  | Unlockable Plot Experience                         | As a player, I want to unlock storylines by completing quests so that I can get a deeper experience of the storyline.                           | Given that I have completed a mission, When I click the “Finish” button, Then a new story segment should be displayed.                               |
| **Exploratory Players**     | Realisation of the Dynamic Lighting System         | As a player, I want to explore dungeon rooms in darkness to experience the joy of the unknown.                                                  | Given that I am present in the game scene, When I move around the scene, Then the light source should follow me, creating real-time lighting updates. |
| **Novice Players**          | Intuitive and responsive interface for a smooth gaming experience | As a player, I expected the menu to be clearly designed so that I can easily get started without any extra help when I launch the game for the first time. | Given an intuitive and user-friendly menu interface, When I launch the game for the first time, Then I can easily understand how to start playing.   |
| **Amblyopia Players**       | Enhanced screen contrast for a clear and hassle-free gaming experience | As a player, I want to enhance the contrast of the screen so that I can clearly recognize everything in the game and have a more comfortable gaming experience. | Given that the visual setting to enhance the contrast of the screen is enabled, When I start the game as a partially sighted player, Then I can clearly distinguish all key elements of the game. |
| **Gameplay Programmer**     | Player vs Enemy Combat System Features             | As a developer, I want to implement a player vs enemy combat system, so that players can engage in battles with different enemy types.           | Given that there are various enemy types in the game scene (such as melee enemies, ranged enemies, and bosses), When the player engages in combat, Then each enemy should display unique attack styles, movement behaviors, and health attributes. |
| **Art Designers**            | Attracting the attention of potential players      | As a developer, I want to design a series of posters that match the theme of the game, so that it can attract potential players during the promotion period. | Given the game has a clear theme and visual style, When the designed posters are showcased during the promotion period, Then each poster should align with the game's theme and effectively capture potential players' attention. |


# 关于游戏的隐私性

An analysis of the source code of a game built with the p5.js framework reveals several concerning aspects related to user privacy. Notably, in the `setup()` function, the game retrieves user sound preferences using `localStorage.getItem("sound")`, and within the `drawToggle()` function, it updates these preferences in real-time through `localStorage.setItem("sound", newValue)`. While this approach enhances user experience by remembering previous settings, it simultaneously reflects a lack of transparency and informed consent. Nowhere in the code is there a prompt, explanation, or privacy policy informing players that their data is being stored, even if only locally. The design implicitly assumes user consent—an ethically questionable stance, particularly as digital privacy awareness grows globally.

Moreover, the settings interface (as implemented in `drawSettingMenu()`, `drawSlider()`, and related functions) includes user-adjustable controls for sound, brightness, and contrast. These interfaces could have served as key touchpoints for communicating data handling practices or offering control over data persistence. However, there is no functionality allowing users to delete their stored data or opt out of persistent storage altogether. This one-way storage model effectively removes player agency over their own data. Although localStorage is considered relatively benign in terms of risk, its usage without context still contributes to an erosion of privacy standards—particularly when scaled or combined with additional tracking elements.

Additionally, the game lacks mechanisms for handling user profiles or login sessions, yet still records behavioral preferences persistently. This suggests a dissonance between the simplicity of the game’s offline structure and its silent yet permanent data tracking practices. If future iterations of the game were to incorporate multiplayer features, cloud saves, or analytics tools, the current architecture would become problematic, potentially violating data protection laws such as the General Data Protection Regulation (GDPR) or the California Consumer Privacy Act (CCPA).

Critically, this case study reflects a broader issue in small- to mid-scale game development: privacy is often deprioritized in favor of functionality and aesthetics. Developers may unintentionally introduce privacy risks simply by failing to implement basic data governance measures. By adopting principles such as data minimization, user consent, and transparency early in the design phase, developers can create experiences that are not only enjoyable but also ethically sound. Respecting user privacy should not be treated as an afterthought, but as a central tenet of responsible game design in the digital era.




### Design

- 15% ~750 words 
- System architecture. Class diagrams, behavioural diagrams. 

### Implementation

- 15% ~750 words

- Describe implementation of your game, in particular highlighting the three areas of challenge in developing your game. 

### Evaluation

- 15% ~750 words

- One qualitative evaluation (your choice) 

- One quantitative evaluation (of your choice) 

- Description of how code was tested. 

### Process 

- 15% ~750 words

- Teamwork. How did you work together, what tools did you use. Did you have team roles? Reflection on how you worked together. 

### Conclusion

- 10% ~500 words

- Reflect on project as a whole. Lessons learned. Reflect on challenges. Future work. 

### Contribution Statement

- Provide a table of everyone's contribution, which may be used to weight individual grades. We expect that the contribution will be split evenly across team-members in most cases. Let us know as soon as possible if there are any issues with teamwork as soon as they are apparent. 

### Additional Marks

You can delete this section in your own repo, it's just here for information. in addition to the marks above, we will be marking you on the following two points:

- **Quality** of report writing, presentation, use of figures and visual material (5%) 
  - Please write in a clear concise manner suitable for an interested layperson. Write as if this repo was publicly available.

- **Documentation** of code (5%)

  - Is your repo clearly organised? 
  - Is code well commented throughout?
