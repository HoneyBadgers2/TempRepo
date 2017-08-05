
// pseudocode for our functions based on the data that the client/server will be working with.

// TODO: make a class Player that has these functions in its prototype?

// class Player extends SOMETHING_HERE {
//   constructor(props) {
//   super(props)
//   this.state = {
//     astate: 'astatus'
//   }
//
//     // function bindings here?
//   }
//
//
//   // functions here
//
// }

// TODO: add 'turn_order' column to the Players Table 

// Player State Check (in addition to data from db table):
// ==========================
function is_active_player(player) {
// boolean (if false, display who the active player is)
  return false;
}


function resource_cards_in_hand(player) {
  return player.card_brick + player.card_grain + player.card_lumber + player.card_ore + player.card_wool;
  // render this number as part of "non-board assets of other players"
}


function count_unplayed_development_cards(player) {
  return player.card_knight + player.card_road + player.card_monopoly + player.card_plenty + player.card_victory;
  // render this number as part of "non-board assets of other players"
}


// TODO: add this as property in table, doesn't need to be a function?
function has_played_development_card() {
  return false;
}


function calculate_score(player) {
  let score = player.played_card_victory + player.owns_settlement + player.owns_city;
  let bonus = 0;

  if (player.has_longest_road) {
    bonus = bonus + 2;
  }
    
  if (player.has_biggest_army) {
    bonus = bonus + 2;
  }

  return score + bonus;
}



// Automatic Events:
// ==========================
function collect_resources(rollResult) {
  for (let i = 0; i < this.state.tiles.length; i++) {
    // if tile has roll value, the houses of that tile receive resources.
    if (this.state.tiles[i].roll_trigger_value === rollResult) {
      // check tile's house slots for owners
      for (let j = 0; j < 6; j++) {
        // TODO: check for edge case such as "not enough resources"
        if (this.state.tiles[i].corner[j].owner !== null) {
          let amountToReceive = corner // TODO: incomplete line here
          let resourceRecepient = this.state.tiles[i].corner[j].owner;
          let resourceToCollect = 'card_' + this.state.tiles[i].terrain;
          console.log(resourceRecepient + ' receives ' + amountToReceive + ' ' + resourceToCollect + '(s)');
          this.state.players[0][resourceToCollect]--
          this.state.players[resourceRecepient][resourceToCollect]++
        }
      }
    }
  }
}


// function player_turn_timer() {
  // FOR MVP+
// }


function render_board_state() {
  //
}


function render_board_component() {
  //
}

function render_player_gui() {
  // TODO: decide if rendering a static gui (gives rejection messages when options are unavailable), or a dynamic gui (only render available actions)
  if (is_active_player) {
    if (has_played_development_card) {
      // do not render development option
    } if (SOME_OTHER_CONDITION_TO_BE_SPECIFIED) {}
  } else {
    // this is not the active player. render current player
  }

}



// Player Actions:
// ==========================
function dice_roll() {
  let die_1_result = Math.floor(Math.random() * 6) + 1;
  let die_2_result = Math.floor(Math.random() * 6) + 1;
  console.log('dice rolled, results: ', die_1_result, die_2_result);

  // TODO: update board with roll result

  if (dice_roll === 7) {
    for (let i = 1; i < 5; i++) {
      if (resource_cards_in_hand(player[i]) > 7) {
        discard_half(player[i]);
      }
    }
  } else {
    collect_resources(die_1_result + die_2_result);
  }

}


function make_purchase(target) {

  if (target === 'road'){
    // check if affordable && piece available
    // check if valid placements (slots where road connects and are unoccupied)
    // show valid placements and await user input
    // set owner
    // if needed, check longest road
      // check points
    // update board with result
  }

  if (target === 'settlement'){
    // check if affordable && piece available
    // check if valid placements (slots where road connects, and adjacent slots are unoccupied)
    // show valid placements and await user input
    // set owner
      // check points
    // update board with result
  }

  if (target === 'city'){
    // check if affordable && piece available
    // check if valid placements (player owns a settlement)
    // show valid placements and await user input
    // set owner
      // check points
    // update board with result
  }

  if (target === 'development'){
    // check if affordable && available
    // get random_development_card
    // decrement random_development_card for board
    // increment random_development_card for player (as hidden/unplayed)
  }

}


function play_development_card(card) {
  if (has_played_development_card) {
    // cannot play more than once per turn
  } else if (card === 'card_knight') {
    // reveal card (decrement counter for card and increment counter for played)
    // implement effect
    // has_played_development_card = true;
  } else if (card === 'card_monopoly') {
    // reveal card (decrement counter for card and increment counter for played)
    // implement effect
    // has_played_development_card = true;
  } else if (card === 'card_plenty') {
    // reveal card (decrement counter for card and increment counter for played)
    // implement effect
    // has_played_development_card = true;
  } else if (card === 'card_victory') {
    // reveal card (decrement counter for card and increment counter for played)
    // implement effect
    // has_played_development_card = true;
  }
}

function open_trade_request() {
  // open trade GUI?
}

function cancel_action() {
  // update client state to render updated menu
}

function end_turn(player) {
  //
  // hide GUI for actions, display currently active player
  // increment turn counter
  // set 'has_played_development_card' to false
  // set 'is_active_player' to the next player
}


// Player Decision Events:
// NOTE: (might need to implement a 'change active player temporarily for event')
// ==========================
// (dice_roll === 7 && handsize > 7) (round up if odd)
function discard_half(player) {
  let discarded = [];
  //
} 

// Select a player, then pick a card from their resources
function robber_card_steal(thief, victim) {
  // thief receives random card from victim's hand based on victim's hand.length
  // advanced: display GUI for card stealing
}



