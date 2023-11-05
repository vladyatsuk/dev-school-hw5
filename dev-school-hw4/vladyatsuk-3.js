class Warrior {
  #ranks = [
    "Pushover",
    "Novice",
    "Fighter",
    "Warrior",
    "Veteran",
    "Sage",
    "Elite",
    "Conqueror",
    "Champion",
    "Master",
    "Greatest",
  ];
  #rank = this.#ranks[0];
  #level = 1;
  #experience = 100;
  #achievements = [];

  level() {
    return this.#level;
  }

  experience() {
    return this.#experience;
  }

  rank() {
    return this.#rank;
  }

  achievements() {
    return this.#achievements;
  }

  updateLevelAndRank(experience) {
    this.#level = Math.min(Math.floor(experience / 100), 100);
    this.#rank = this.#ranks[Math.floor(this.#level / 10)];
  }

  training(event) {
    const [description, experiencePoints, minLevel] = event;

    if (this.level() >= minLevel) {
      this.#experience = Math.min(this.experience() + experiencePoints, 10000);
      this.updateLevelAndRank(this.experience());
      this.#achievements.push(description);
      return description;
    }
    return "Not strong enough";
  }

  battle(enemyLevel) {
    if (enemyLevel < 1 || enemyLevel > 100) {
      return "Invalid level";
    }

    const enemyRankIndex = Math.floor(enemyLevel / 10);
    const diff = enemyLevel - this.level();
    let gainedExp, description;

    if (enemyRankIndex - this.#ranks.indexOf(this.rank()) >= 1 && diff >= 5) {
      return "You've been defeated";
    }

    if (diff === 0) {
      description = "A good fight";
      gainedExp = 10;
    } else if (diff === -1) {
      description = "A good fight";
      gainedExp = 5;
    } else if (diff <= -2) {
      description = "Easy fight";
      gainedExp = 0;
    } else {
      description = "An intense fight";
      gainedExp = 20 * diff * diff;
    }

    this.#experience = Math.min(this.experience() + gainedExp, 10000);
    this.updateLevelAndRank(this.#experience);
    return description;
  }
}
