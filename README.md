# TempRepo





Basic Info
===============================

Dice: 2
Tiles (Hexagons) on Board: 19

Settlement Slots (Hexagon corners): 30 outer ring, 18 center ring, 6 inner ring = 54 total
Road Slots (Hexagon surfaces): 30 outermost, 12 perp + 18 center + 6 perp + 6 center = 72 total
Number Counters: 18 total (19 Tiles minus desert)
Ports: 9 total
Resources (and Tile Types): Grain, Ore, Lumber, Wool, Brick (19 each), Desert

Buyables: Road, Settlement, City, Development

Tile Markers (Die Roll Markers): 18 total


There is no 'destruction,' only moving around of ownership.

DB: gamestate will be updated at the end of each turn.
When game is loaded, it will load from last turn saved







Client-Server-DB Roles and Structure (Game State & Data Logistics)
================

Client:
-handles user inputs
-contains assets and engines (for graphics, styling, game state)
-renders states to GUI for user
-updates state for itself (and renders the update) when possible (POST)
-receives updated data from server (when state is influenced by another user)


Server:
-Holds data necessary to create a new game instance
-Holds the number of (and data for) active user sessions and game instances
-Facilitates updates to players who are not currently active (unable to make changes to game state)
-As long as a game session is active, game state can be stored on the server. This reduces the amount of querying we have to do with the database.
-When a game session is inactive (no player sessions in that game), it will be stored in the db
-Retrieves inactive game sessions when requested by a player


Database:
-inactive sessions are stored here until they are called on again
-inactive sessions have an expiration date before they are removed? (MVP+)
-stores user data (name, password, game history, stats, etc.)






Base States/Attributes for Game Management
===============================
** See Database Table for Players **

Utility States/Attributes for Game Management
===============================
isActivePlayer
resourceCardsInHand
hasPlayedDevelopmentCard
longestRoad

Utility Functions for Game Management
===============================
changeActivePlayer
rollDice
distributeResourceCards
isValidRoadPlacement
isValidSettlementPlacement
findLongestRoad
findLargestArmy
endTurn






Networking / User Connection
===============================

Tying a connection to a session




Home Page
===============================

Enter a Username
Create Game
Active Lobbies (showing open slots?)
Create Account




Creating a Game
===============================

Options:
lobby_name
lobby_password (optional)
number_of_players (fixed at 4 for MVP, changeable for MVP+)
number_of_AI (MVP+)




Joining a Game
===============================

Options:
lobby_name / lobby_password
user_name / player_name




In-Game Turn Flow
===============================
render possible actions based on state


Player States (in addition to data from db table):
is_active_player: boolean (if false, display the active player)
resource_cards_in_hand: integer
has_played_development_card: boolean


Automatic Events:
collect_resources
player_turn_timer (MVP+)
RENDER_BOARD_STATE


Player Actions:
dice_roll
make_purchase
play_development_card
open_trade_request
cancel_action
end_turn


Player Decision Events:
discard_half: (dice_roll === 7 && handsize > 7) (round up if odd)
robber_card_steal: Select a player, then pick a card from their resources




Message Log
===============================
game message log
player message log









Page

InGameComponent
|
|-----Player Interface
|          |
|          |-----Resource Cards In Hand
|          |
|          |-----Development Cards
|          |
|          |-----Available Actions
|          |
|          |-----Enter Message
|
|
|
|-----Message Log
|          |
|          |-----Game Message
|          |
|          |-----Player Message
|
|
|
|-----Board
|          |
|          |-----Tiles
|          |
|          |-----Roads
|          |
|          |-----Settlement/City
|          |
|          |-----Resource Card Stacks
|          |
|          |-----Development Card Stack
|          |
|          |-----Dice Rolled
|          |
|          |-----Other Player Non-Board Assets
|                     |
|                     |-----Victory Points
|                     |
|                     |-----Development Cards
|                     |
|                     |-----Resource Cards In Hand
|
|
|





|
|----------|----------|
|          |----------|
|                     |
|
|
|
|
|




