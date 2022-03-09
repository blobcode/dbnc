// match fudge recipe to sugar quantity?
// set amount of sugar (only modified by undefined)
amt = base * fudge;

// check for known recipes
if (recipe == "SPANISH") {
  fudge = SPANISH_FUDGE;
} else if (recipe == "FRENCH") {
  chocolate = 7;
  fudge = FRENCH_FUDGE;
} else if (recipe == "ENGLISH") {
  fudge = ENGLISH_FUDGE;
} else {
  fudge = 1;
  amt = base;
}

// calculate sugar amount
sugar = 2 * bottom(amt) + top(amt) * 1.17;
