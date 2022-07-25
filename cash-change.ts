interface IChange {
  two: number;
  five: number;
  ten: number;
}

const getCashChange = (amount?: number): IChange | null => {
  // NULL should be returned if no amount is specified.

  if (!amount && amount !== 0) {
    console.log(`[ERROR] - No amount was provided!`);
    return null;
  }

  // NULL should be returned if the amount's value is less than the lowest available coin's value.

  if (amount < 2) {
    console.log(`[ERROR] - The amount must equal or be higher than 2 !`);
    return null;
  }

  let two: number = 0;
  let five: number = 0;
  let ten: number = 0;
  let rest: number = amount;

  // If the amount is an odd number higher than 5, a €5 banknote should be added.
  // Increment the 5€ banknotes counter by 1.
  // Take back €5 from the remaining change and store it in a rest variable to calculate the €2 coins and €10 banknotes.

  if (amount >= 5 && amount % 2) {
    five++;
    rest -= 5;
  }

  // The number of €10 banknotes equals the number of times the number 10 fits into the rest.
  // This number is then brought back to the closest possible intenger.
  // Remove the number of €10 banknotes from the rest.

  ten = Math.floor(rest / 10);
  rest = rest - ten;

  // If the given amount was 3, the machine will only be able to give its lowest valued coin to the customer, being €2.
  // If not, the number of €2 coins equals the rest devided by 2 brought back to the closest possible intenger.

  if (amount === 3) {
    two = 2;
    console.log(
      `[SORRY] - This machine does not deliver €1 coins, we will only be able to give you back €2 out of your €${amount}.`
    );
  } else {
    two = Math.floor(rest / 2);
  }

  return { two, five, ten };
};
