const STORAGE_KEY = "jvmastry-progress-v3";

const questions = window.questionsBank ?? [];
const state = {
  currentQuestionId: null,
  filteredQuestions: [...questions],
  selectedDifficulty: "all",
  selectedLikelihood: "all",
  selectedTopic: "all",
  progress: loadProgress()
};

const elements = {
  questionCount: document.querySelector("#question-count"),
  reviewedCount: document.querySelector("#reviewed-count"),
  masteredCount: document.querySelector("#mastered-count"),
  difficultyPills: document.querySelector("#difficulty-pills"),
  likelihoodPills: document.querySelector("#likelihood-pills"),
  topicMap: document.querySelector("#topic-map"),
  masterySummary: document.querySelector("#mastery-summary"),
  clearTopicButton: document.querySelector("#clear-topic-button"),
  questionTopic: document.querySelector("#question-topic"),
  questionDifficulty: document.querySelector("#question-difficulty"),
  questionLikelihood: document.querySelector("#question-likelihood"),
  questionPrompt: document.querySelector("#question-prompt"),
  hintBox: document.querySelector("#question-hint"),
  hintText: document.querySelector("#question-hint-text"),
  answerBox: document.querySelector("#question-answer"),
  answerText: document.querySelector("#question-answer-text"),
  hintButton: document.querySelector("#hint-button"),
  revealButton: document.querySelector("#reveal-button"),
  nextButton: document.querySelector("#next-button"),
  randomQuestionButton: document.querySelector("#random-question-button"),
  shuffleFilteredButton: document.querySelector("#shuffle-filtered-button"),
  markReviewedButton: document.querySelector("#mark-reviewed-button"),
  markMasteredButton: document.querySelector("#mark-mastered-button"),
  reviewedPercent: document.querySelector("#reviewed-percent"),
  masteredPercent: document.querySelector("#mastered-percent"),
  reviewedBar: document.querySelector("#reviewed-bar"),
  masteredBar: document.querySelector("#mastered-bar"),
  deckSummary: document.querySelector("#deck-summary"),
  questionList: document.querySelector("#question-list"),
  resetProgressButton: document.querySelector("#reset-progress-button")
};

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {};
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function getQuestionStatus(questionId) {
  return state.progress[questionId] ?? "unseen";
}

function updateQuestionStatus(questionId, status) {
  state.progress[questionId] = status;
  saveProgress();
  updateProgressUI();
  renderTopicMap();
  renderQuestionList();
}

function getTopicStats() {
  const topics = [...new Set(questions.map((question) => question.topic))];

  return topics
    .map((topic) => {
      const topicQuestions = questions.filter((question) => question.topic === topic);
      const reviewed = topicQuestions.filter(
        (question) => getQuestionStatus(question.id) === "reviewed"
      ).length;
      const mastered = topicQuestions.filter(
        (question) => getQuestionStatus(question.id) === "mastered"
      ).length;
      const seen = reviewed + mastered;
      const total = topicQuestions.length;
      const coverage = Math.round((seen / total) * 100);
      const mastery = Math.round((mastered / total) * 100);
      const score = Math.round((((mastered * 2) + reviewed) / (total * 2)) * 100);

      let label = "Weak Spot";
      if (seen === 0) {
        label = "Untouched";
      } else if (score >= 70) {
        label = "Strong";
      } else if (score >= 40) {
        label = "Building";
      }

      return {
        topic,
        total,
        reviewed,
        mastered,
        seen,
        coverage,
        mastery,
        score,
        label
      };
    })
    .sort((left, right) => {
      if (left.score !== right.score) {
        return left.score - right.score;
      }

      return left.topic.localeCompare(right.topic);
    });
}

function renderTopicMap() {
  const topicStats = getTopicStats();
  elements.topicMap.innerHTML = "";

  const focusedTopic =
    state.selectedTopic === "all" ? null : topicStats.find((item) => item.topic === state.selectedTopic);
  const strongest = [...topicStats]
    .sort((left, right) => right.score - left.score)
    .slice(0, 2)
    .map((item) => item.topic);
  const weakest = topicStats.slice(0, 2).map((item) => item.topic);

  const summaryParts = [];
  if (focusedTopic) {
    summaryParts.push(
      `Focused topic: ${focusedTopic.topic} (${focusedTopic.mastered}/${focusedTopic.total} mastered, ${focusedTopic.coverage}% seen).`
    );
  } else {
    summaryParts.push("Focused topic: all topics.");
  }
  summaryParts.push(`Weak spots: ${weakest.join(" · ")}.`);
  summaryParts.push(`Strongest: ${strongest.join(" · ")}.`);
  elements.masterySummary.textContent = summaryParts.join(" ");
  elements.clearTopicButton.disabled = state.selectedTopic === "all";

  topicStats.forEach((stat) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `topic-card ${
      state.selectedTopic === stat.topic ? "topic-card--active" : ""
    } ${stat.label === "Strong" ? "topic-card--strong" : ""}`.trim();
    button.addEventListener("click", () => {
      state.selectedTopic = state.selectedTopic === stat.topic ? "all" : stat.topic;
      renderTopicMap();
      applyFilters();
    });

    const heading = document.createElement("div");
    heading.className = "topic-card__heading";

    const title = document.createElement("h3");
    title.textContent = stat.topic;

    const badge = document.createElement("span");
    badge.className = `pill topic-card__badge ${
      stat.label === "Strong" ? "topic-card__badge--strong" : ""
    }`.trim();
    badge.textContent = stat.label;

    heading.append(title, badge);

    const meta = document.createElement("p");
    meta.className = "topic-card__meta";
    meta.textContent = `${stat.total} questions · ${stat.seen} seen · ${stat.mastered} mastered`;

    const bars = document.createElement("div");
    bars.className = "topic-card__bars";
    bars.innerHTML = `
      <div>
        <div class="progress-label">
          <span>Coverage</span>
          <span>${stat.coverage}%</span>
        </div>
        <div class="progress-track"><div class="progress-fill" style="width: ${stat.coverage}%"></div></div>
      </div>
      <div>
        <div class="progress-label">
          <span>Mastery</span>
          <span>${stat.mastery}%</span>
        </div>
        <div class="progress-track"><div class="progress-fill progress-fill--accent" style="width: ${stat.mastery}%"></div></div>
      </div>
    `;

    const footer = document.createElement("div");
    footer.className = "topic-card__footer";
    footer.textContent =
      state.selectedTopic === stat.topic ? "Currently focused" : "Click to focus this topic";

    button.append(heading, meta, bars, footer);
    elements.topicMap.append(button);
  });
}

function renderFilterPills(container, options, selected, variantClass, onSelect) {
  container.innerHTML = "";
  options.forEach((option) => {
    const pill = document.createElement("button");
    pill.type = "button";
    pill.className = `pill ${variantClass} ${selected === option ? "pill--active" : ""}`.trim();
    pill.textContent = option === "all" ? "All" : option;
    pill.addEventListener("click", () => onSelect(option));
    container.append(pill);
  });
}

function renderDifficultyPills() {
  renderFilterPills(
    elements.difficultyPills,
    ["all", "Beginner", "Intermediate", "Advanced"],
    state.selectedDifficulty,
    "pill--difficulty",
    (option) => {
      state.selectedDifficulty = option;
      renderDifficultyPills();
      applyFilters();
    }
  );
}

function renderLikelihoodPills() {
  renderFilterPills(
    elements.likelihoodPills,
    ["all", "Very Common", "Common", "Occasional", "Rare"],
    state.selectedLikelihood,
    "pill--likelihood",
    (option) => {
      state.selectedLikelihood = option;
      renderLikelihoodPills();
      applyFilters();
    }
  );
}

function applyFilters() {
  const difficulty = state.selectedDifficulty;
  const likelihood = state.selectedLikelihood;
  const topic = state.selectedTopic;

  state.filteredQuestions = questions.filter((question) => {
    const matchesDifficulty = difficulty === "all" || question.difficulty === difficulty;
    const matchesLikelihood = likelihood === "all" || question.likelihood === likelihood;
    const matchesTopic = topic === "all" || question.topic === topic;

    return matchesDifficulty && matchesLikelihood && matchesTopic;
  });

  renderTopicMap();
  renderDeckSummary();
  renderQuestionList();

  if (!state.filteredQuestions.some((question) => question.id === state.currentQuestionId)) {
    pickNextQuestion();
  }
}

function renderDeckSummary() {
  const total = state.filteredQuestions.length;
  const topicPrefix =
    state.selectedTopic === "all" ? "All topics." : `Topic focus: ${state.selectedTopic}.`;
  const difficultySummary = ["Beginner", "Intermediate", "Advanced"]
    .map(
      (difficulty) =>
        `${difficulty}: ${state.filteredQuestions.filter((q) => q.difficulty === difficulty).length}`
    )
    .join(" · ");
  const likelihoodSummary = ["Very Common", "Common", "Occasional", "Rare"]
    .map(
      (likelihood) =>
        `${likelihood}: ${state.filteredQuestions.filter((q) => q.likelihood === likelihood).length}`
    )
    .join(" · ");

  elements.deckSummary.textContent =
    total > 0
      ? `${topicPrefix} ${total} questions in the current deck. ${difficultySummary}. ${likelihoodSummary}.`
      : "No questions match the current filters yet.";
}

function pickNextQuestion() {
  if (state.filteredQuestions.length === 0) {
    state.currentQuestionId = null;
    renderCurrentQuestion();
    return;
  }

  const unseenFirst = state.filteredQuestions.filter(
    (question) => getQuestionStatus(question.id) === "unseen"
  );
  const source = unseenFirst.length > 0 ? unseenFirst : state.filteredQuestions;
  state.currentQuestionId = source[Math.floor(Math.random() * source.length)].id;
  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  const question = questions.find((item) => item.id === state.currentQuestionId);

  if (!question) {
    elements.questionTopic.textContent = "No match";
    elements.questionDifficulty.textContent = "Update filters";
    elements.questionLikelihood.textContent = "No question";
    elements.questionPrompt.textContent = "No question is available for the current selection.";
    elements.hintText.textContent = "";
    elements.answerText.textContent = "";
    elements.hintBox.classList.add("answer--hidden");
    elements.answerBox.classList.add("answer--hidden");
    return;
  }

  elements.questionTopic.textContent = question.topic;
  elements.questionDifficulty.textContent = question.difficulty;
  elements.questionLikelihood.textContent = question.likelihood;
  elements.questionPrompt.textContent = question.prompt;
  elements.hintText.textContent = question.hint;
  elements.answerText.textContent = question.answer;
  elements.hintBox.classList.add("answer--hidden");
  elements.answerBox.classList.add("answer--hidden");
}

function renderQuestionList() {
  elements.questionList.innerHTML = "";

  state.filteredQuestions.forEach((question) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "question-list__item";
    button.addEventListener("click", () => {
      state.currentQuestionId = question.id;
      renderCurrentQuestion();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    const meta = document.createElement("div");
    meta.className = "question-list__meta";

    const topic = document.createElement("span");
    topic.className = "pill";
    topic.textContent = question.topic;

    const difficulty = document.createElement("span");
    difficulty.className = "pill pill--difficulty";
    difficulty.textContent = question.difficulty;

    const likelihood = document.createElement("span");
    likelihood.className = "pill pill--likelihood";
    likelihood.textContent = question.likelihood;

    meta.append(topic, difficulty, likelihood);

    const title = document.createElement("h3");
    title.textContent = question.prompt;

    const status = document.createElement("div");
    status.className = "question-list__status";
    status.textContent = `Status: ${getQuestionStatus(question.id)}`;

    button.append(meta, title, status);
    elements.questionList.append(button);
  });
}

function updateProgressUI() {
  const reviewedCount = Object.values(state.progress).filter((value) => value === "reviewed").length;
  const masteredCount = Object.values(state.progress).filter((value) => value === "mastered").length;
  const total = questions.length;
  const reviewedCoverage = Math.round(((reviewedCount + masteredCount) / total) * 100);
  const masteredCoverage = Math.round((masteredCount / total) * 100);

  elements.questionCount.textContent = total.toString();
  elements.reviewedCount.textContent = (reviewedCount + masteredCount).toString();
  elements.masteredCount.textContent = masteredCount.toString();
  elements.reviewedPercent.textContent = `${reviewedCoverage}%`;
  elements.masteredPercent.textContent = `${masteredCoverage}%`;
  elements.reviewedBar.style.width = `${reviewedCoverage}%`;
  elements.masteredBar.style.width = `${masteredCoverage}%`;
}

function bindEvents() {
  elements.hintButton.addEventListener("click", () => {
    if (state.currentQuestionId) {
      elements.hintBox.classList.remove("answer--hidden");
    }
  });

  elements.revealButton.addEventListener("click", () => {
    if (state.currentQuestionId) {
      elements.answerBox.classList.remove("answer--hidden");
    }
  });

  elements.nextButton.addEventListener("click", pickNextQuestion);
  elements.randomQuestionButton.addEventListener("click", pickNextQuestion);
  elements.shuffleFilteredButton.addEventListener("click", pickNextQuestion);

  elements.markReviewedButton.addEventListener("click", () => {
    if (state.currentQuestionId) {
      updateQuestionStatus(state.currentQuestionId, "reviewed");
    }
  });

  elements.markMasteredButton.addEventListener("click", () => {
    if (state.currentQuestionId) {
      updateQuestionStatus(state.currentQuestionId, "mastered");
    }
  });

  elements.resetProgressButton.addEventListener("click", () => {
    state.progress = {};
    saveProgress();
    updateProgressUI();
    renderTopicMap();
    applyFilters();
  });

  elements.clearTopicButton.addEventListener("click", () => {
    state.selectedTopic = "all";
    renderTopicMap();
    applyFilters();
  });
}

function init() {
  renderDifficultyPills();
  renderLikelihoodPills();
  renderTopicMap();
  bindEvents();
  updateProgressUI();
  applyFilters();
  pickNextQuestion();
}

init();
