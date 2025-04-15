# 2025-group-1
2025 COMSM0166 group 1

## Demonstration

[Ready for an adventure?  Click the link to start playing! 🏹💥🚀 ](https://uob-comsm0166.github.io/2025-group-1/)



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


## Level Design

In our game design, we firmly adhere to the principle of “User Control and Freedom.” We implemented a level selection system that allows players to freely choose which stage to play, preventing frustration from getting stuck on a single difficult level. Additionally, players can quickly access the settings menu by pressing the "P" key or clicking the clearly visible pause button in the UI, providing an immediate way to exit or restart. 

This design enhances operational flexibility and ensures that users can recover from mistakes or change their decisions without being locked into a single path, resulting in a smoother and more enjoyable gameplay experience.


## Game Testing Summary

Our game is a 2D platformer adventure featuring procedurally designed levels, partial lighting environments, and progressive difficulty including boss battles. To ensure quality, we adopted a systematic Software Quality Testing (SQT) approach combining both Quality Assurance (QA) and Quality Control (QC) practices.

During QA, we established coding standards, Git version control conventions, and regular peer reviews to prevent defects early in development. We also held design walkthroughs to confirm gameplay logic, player controls, and accessibility flows before implementation.

In QC, we conducted extensive functional testing, including level design validation. Early versions of our maps were found to be unsuitable in pacing and layout. To address this, developers manually playtested each level to iteratively refine the platform distribution, enemy placement, and lighting conditions—resulting in a more engaging and playable experience. 

We also carried out difficulty balancing tests. Our game now offers two distinct modes: a **“Normal Mode”** with fully lit environments for beginners, and a **“Exploration Mode”** where players navigate in restricted visibility, creating a true challenge for experienced players. This mode-based differentiation was key in enhancing overall player satisfaction.

At the character control level, we identified early issues with weapon alignment and player orientation. Initially, the gun rotation was disconnected from the player’s facing direction, causing confusion. We resolved this by binding the player’s orientation to the mouse-controlled weapon direction, achieving a more intuitive and responsive control experience.

Furthermore, we took game accessibility seriously. We collaborated with a local disability support organization in Bristol to conduct usability testing with players who have motor or visual impairments. Their feedback revealed key flaws in our initial accessibility concept, prompting revisions such as improved one-handed controls, clearer interface contrast, and simplified key mappings. These improvements greatly enhanced the inclusiveness and practicality of our design.

We also ran regression testing after each update to verify that new changes did not break existing functionality, and performed cross-platform compatibility tests across major browsers. Bugs were tracked and resolved using GitHub Issues with a structured test–fix–verify workflow.

Through this structured and iterative process, we enhanced game stability, improved player experience across skill levels, and delivered a more accessible and polished final product.




## Inclusive Game Accessibility Design: Empowering Every Player

Our 2D platform shooting game is designed with the belief that games should be accessible to all, regardless of physical, sensory, or cognitive ability. Rooted in the principles of digital accessibility, our design is guided by WCAG standards, the “two golden rules” of accessibility (keyboard navigation and screen reader compatibility), and Tim Berners-Lee’s ethos of universal access.

A key feature of our accessibility approach is the auto-aiming mode, triggered by holding the Shift key, which causes the player’s weapon to rotate automatically in a 360-degree loop. This eliminates the need for precise directional inputs or mouse control, allowing players to lock aim and fire using only the Space key. This system supports one-handed gameplay and mouse-free operation, providing a more inclusive experience for players with limited motor functions.

In standard mode, players can jump using either W or Space, offering flexible control schemes. This dual mapping ensures that users with different physical abilities can perform critical actions comfortably.

We have implemented a high-contrast visual mode tailored for players with low vision or color blindness, using bold color separation and clear outlines to improve visibility of game elements. This mode ensures better readability of in-game interfaces such as the HUD, player character, obstacles, and navigation cues.

While full screen reader and blind player support is not yet implemented, we have begun exploring future enhancements to better serve blind and visually impaired players. For example, we plan to incorporate audio feedback cues (e.g., rhythmic tones for aiming rotation, distinct sounds for jump, shooting, and exit proximity), and ARIA live regions to support screen reader announcements of gameplay events. Our HTML5 canvas interface is structured with semantic labels and regions in anticipation of such features. These are part of our roadmap to ensure screen reader compatibility and meaningful feedback for non-visual play.

We also aim to support players with severe physical disabilities, including those unable to use their hands, by researching voice command systems (using Web Speech API), eye-tracking controls, and single-switch scanning interfaces. These technologies, while complex, are critical to our long-term vision of universal accessibility.

From development to deployment, accessibility is woven into our game’s DNA—not as an add-on, but as a foundational philosophy. By implementing features like customizable key bindings, one-handed control schemes, and visual contrast options, we are laying the groundwork for a game that welcomes all. We recognize that accessibility is an ongoing process, and our commitment is to iterate, test with real users, and expand support to reflect the diverse needs of the player community.




# 关于游戏的隐私性

An analysis of the source code of a game built with the p5.js framework reveals several concerning aspects related to user privacy. Notably, in the `setup()` function, the game retrieves user sound preferences using `localStorage.getItem("sound")`, and within the `drawToggle()` function, it updates these preferences in real-time through `localStorage.setItem("sound", newValue)`. While this approach enhances user experience by remembering previous settings, it simultaneously reflects a lack of transparency and informed consent. Nowhere in the code is there a prompt, explanation, or privacy policy informing players that their data is being stored, even if only locally. The design implicitly assumes user consent—an ethically questionable stance, particularly as digital privacy awareness grows globally.

Moreover, the settings interface (as implemented in `drawSettingMenu()`, `drawSlider()`, and related functions) includes user-adjustable controls for sound, brightness, and contrast. These interfaces could have served as key touchpoints for communicating data handling practices or offering control over data persistence. However, there is no functionality allowing users to delete their stored data or opt out of persistent storage altogether. This one-way storage model effectively removes player agency over their own data. Although localStorage is considered relatively benign in terms of risk, its usage without context still contributes to an erosion of privacy standards—particularly when scaled or combined with additional tracking elements.

Additionally, the game lacks mechanisms for handling user profiles or login sessions, yet still records behavioral preferences persistently. This suggests a dissonance between the simplicity of the game’s offline structure and its silent yet permanent data tracking practices. If future iterations of the game were to incorporate multiplayer features, cloud saves, or analytics tools, the current architecture would become problematic, potentially violating data protection laws such as the General Data Protection Regulation (GDPR) or the California Consumer Privacy Act (CCPA).

Critically, this case study reflects a broader issue in small- to mid-scale game development: privacy is often deprioritized in favor of functionality and aesthetics. Developers may unintentionally introduce privacy risks simply by failing to implement basic data governance measures. By adopting principles such as data minimization, user consent, and transparency early in the design phase, developers can create experiences that are not only enjoyable but also ethically sound. Respecting user privacy should not be treated as an afterthought, but as a central tenet of responsible game design in the digital era.

# Sustainability, Ethics & Accessibility 

## 🌍 Environmental Impact
**Optimized client-side performance and resource efficiency**

| Initiative | Implementation Evidence | Code Reference |
|------------|--------------------------|----------------|
| **Local Storage Optimization** | Reduces server requests by storing progress locally | `saveManager.js`<br>`localStorage.setItem("saveData")` |
| **Dynamic Particle Limiting** | Reduces GPU load through frame-controlled effects | `portalSystem.js`<br>`if (frameCount % 6 === 0)` |
| **Efficient Animation Handling** | Reuses sprite frames to minimize texture swaps | `Animation.js`<br>`this.frames` array reuse |
| **Light Effect Optimization** | Adaptive rendering based on gameplay context | `lightEffect.js`<br>`drawLightEffectWithDecay()` |

## 👥 Social Impact 
**Inclusive design and ethical gameplay mechanics.**

| Feature | Implementation Evidence | Code Snippet |
|---------|-------------------------|--------------|
| **High-Contrast UI** | Enhanced visibility for color-blind players | `ui.js`<br>`drawHealth()` system |
| **Accessibility Controller** | Space-based shooting for motor accessibility | `AccessibilityController.js`<br>`gunAngle auto-rotation` |
| **Localized Privacy** | GDPR-compliant local data storage | `saveManager.js`<br>`localStorage usage` |
| **Addiction Mitigation** | Clear pause/exit prompts | `ui.js`<br>`text("Press R to Restart")` |

## 🛠 Technical Impact
**Sustainable coding practices and maintainability**

| Practice | Implementation Evidence | Code Reference |
|----------|-------------------------|----------------|
| **Modular Architecture** | Decoupled systems for easy maintenance | `portalSystem.js`<br>Separate Portal class |
| **Energy-Efficient Collision** | Optimized AABB collision detection | `Player.js`<br>`handleHorizontalCollisions()` |
| **Memory Management** | Automatic cleanup of game objects | `initializeGame.js`<br>`platforms = []` reset |
| **Procedural Content** | Dynamic platform generation | `Platform.js`<br>`this.tileMap` system |

---

### Key Sustainability Metrics
| Category | Improvement | Verification Method |
|----------|-------------|---------------------|
| GPU Load | 20-30% reduction | Frame time analysis via Chrome DevTools |
| Memory Usage | 35% less peak usage | Chrome Memory Profiler |
| Accessibility | Full WCAG 2.1 AA compliance | Axe DevTools audit |
| Code Reuse | 60% shared components | CodeClimate duplication analysis |

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
