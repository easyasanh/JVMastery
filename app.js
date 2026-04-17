const STORAGE_KEY = "jvmastry-progress-v3";

const questions = window.questionsBank ?? [];
const state = {
  currentQuestionId: null,
  filteredQuestions: [...questions],
  selectedDifficulty: "all",
  selectedLikelihood: "all",
  progress: loadProgress()
};

const elements = {
  questionCount: document.querySelector("#question-count"),
  reviewedCount: document.querySelector("#reviewed-count"),
  masteredCount: document.querySelector("#mastered-count"),
  difficultyPills: document.querySelector("#difficulty-pills"),
  likelihoodPills: document.querySelector("#likelihood-pills"),
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
  renderQuestionList();
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

  state.filteredQuestions = questions.filter((question) => {
    const matchesDifficulty = difficulty === "all" || question.difficulty === difficulty;
    const matchesLikelihood = likelihood === "all" || question.likelihood === likelihood;

    return matchesDifficulty && matchesLikelihood;
  });

  renderDeckSummary();
  renderQuestionList();

  if (!state.filteredQuestions.some((question) => question.id === state.currentQuestionId)) {
    pickNextQuestion();
  }
}

function renderDeckSummary() {
  const total = state.filteredQuestions.length;
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
      ? `${total} questions in the current deck. ${difficultySummary}. ${likelihoodSummary}.`
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
    applyFilters();
  });
}

function init() {
  renderDifficultyPills();
  renderLikelihoodPills();
  bindEvents();
  updateProgressUI();
  applyFilters();
  pickNextQuestion();
}

init();
