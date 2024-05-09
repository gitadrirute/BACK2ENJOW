import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51P93CVHzFBmjKMNlJVagxAbnGvoYmLuvgmrkW6AjCgIibMsO1r08TBHs3Wh3NtMvElneFezCmYam87KfA19IzBSZ00bhZm7CZV');

export default stripePromise;
