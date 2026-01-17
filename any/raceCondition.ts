/**
 * Mutex Utility
 * This prevents Race Conditions by making functions wait their turn.
 */
class Mutex {
  private queue: Promise<void>;

  constructor() {
    this.queue = Promise.resolve();
  }

  // This "locks" the execution
  lock(): Promise<() => void> {
    let release: () => void;
    const next = new Promise<void>((resolve) => {
      release = resolve;
    });
    const wait = this.queue;
    this.queue = this.queue.then(() => next);
    return wait.then(() => release!);
  }
}

/**
 * THE USE CASE: Shared Bank Account
 */
class BankAccount {
  private balance: number;
  private mutex: Mutex;

  constructor(balance: number) {
    this.balance = balance;
    this.mutex = new Mutex();
  }

  // UNSAFE METHOD (Causes Race Condition)
  async unsafeWithdraw(amount: number) {
    console.log(`Unsafe: Checking balance... (${this.balance})`);
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 100));

    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Unsafe: Success! New balance: ${this.balance}`);
    }
  }

  // BEST PRACTICE (Safe)
  async safeWithdraw(amount: number) {
    // 1. Double-Check Pattern + Mutex
    const release = await this.mutex.lock();

    try {
      console.log(`Safe: Checking balance... (${this.balance})`);
      await new Promise((r) => setTimeout(r, 100)); // Delay

      if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`Safe: Success! New balance: ${this.balance}`);
      } else {
        console.log("Safe: Insufficient funds.");
      }
    } finally {
      // 2. Prevent Deadlock: Always release in 'finally'
      release();
    }
  }
}

// --- EXECUTION ---
const account = new BankAccount(100);

// Scenario: Two people withdraw $80 at the same time
console.log("--- Starting Safe Transactions ---");
account.safeWithdraw(80);
account.safeWithdraw(80);

// Result: The second person will wait, see balance is $20, and fail safely.
