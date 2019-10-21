
/**
 * Rate stars by current moves
 *  3 stars: 12 moves, player have 16 cards with 8 pairs,
 *    player clicks 8 cards to memorize what they are(both unique assumed),
 *    then clicks another card in the rest of 8 cards,
 *    now clicks a paired card to match in first 8 cards,
 *    8 cards * 3 clicks_each_card = 24 clicks, 24 clicks / 2 = 12 moves
 *    totally, player has 12 chances to move.
 *    That means player has no chance to make mistake,
 *    unless the player luckly paired 2 sets of cards with 2 moves,
 *    (8 cards - 2 cards) * 3 clicks_each_card / 2 = 9 moves
 *    that means player only needs 9 moves to match the rest of cards,
 *    12 moves - 2 moves - 9 moves = 1 moves
 *    in that case, player can make 1 mistake which is acceptable for 3 stars.
 *  2 stars: 16 moves, click each card twice.
 *    Player needs two moves when player paired wrong cards,
 *    1 mistake_move + 1 correct_move = 2 matched_moves
 *    One move makes a mistake, one move matches successfully.
 *    16 moves - 12 moves = 4 moves  4 moves / 2 matched_moves = 2 times_mistake
 *    Totally, player has 2 times to make mistake.
 *  1 stars: more than 16 moves.
 */
function rate(count) {
  var stars;
  count <= 12 ? stars = 3 : count <= 16 ? stars = 2 : stars = 1;
  dim(stars);
}

function dim(nth) {
  $('.fa-star').eq(nth).removeClass('fa').addClass('far')
}

export { rate };
