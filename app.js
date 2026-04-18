const STORAGE_KEY = "jvmastry-progress-v4";

const questions = (window.questionsBank ?? []).map(enrichQuestion);
const state = {
  currentQuestionId: null,
  filteredQuestions: [...questions],
  selectedDifficulty: "all",
  selectedLikelihood: "all",
  selectedTopic: "all",
  hintVisible: false,
  answerVisible: false,
  progress: loadProgress()
};

const elements = {
  questionCount: document.querySelector("#question-count"),
  attemptedCount: document.querySelector("#attempted-count"),
  averageScore: document.querySelector("#average-score"),
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
  markSchemeList: document.querySelector("#question-mark-scheme"),
  scoreState: document.querySelector("#score-state"),
  scoreButtons: document.querySelector("#score-buttons"),
  hintButton: document.querySelector("#hint-button"),
  revealButton: document.querySelector("#reveal-button"),
  nextButton: document.querySelector("#next-button"),
  randomQuestionButton: document.querySelector("#random-question-button"),
  shuffleFilteredButton: document.querySelector("#shuffle-filtered-button"),
  attemptedPercent: document.querySelector("#attempted-percent"),
  scorePercent: document.querySelector("#score-percent"),
  attemptedBar: document.querySelector("#attempted-bar"),
  scoreBar: document.querySelector("#score-bar"),
  deckSummary: document.querySelector("#deck-summary"),
  questionList: document.querySelector("#question-list"),
  resetProgressButton: document.querySelector("#reset-progress-button")
};

function enrichQuestion(question) {
  const markScheme = buildMarkScheme(question);
  return {
    ...question,
    markScheme,
    totalMarks: markScheme.length
  };
}

function buildMarkScheme(question) {
  if (Array.isArray(question.markScheme) && question.markScheme.length > 0) {
    return question.markScheme;
  }

  const normalizedAnswer = question.answer.replace(/\s+/g, " ").trim();
  let parts = normalizedAnswer
    .split(/(?<=[.!?])\s+/)
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length === 1) {
    parts = normalizedAnswer
      .split(/,\s+/)
      .map((part) => part.trim())
      .filter((part) => part.length > 10);
  }

  const condensed = [];
  for (const part of parts) {
    if (condensed.length === 4) {
      break;
    }

    let text = part.replace(/[.]+$/g, "").trim();
    if (text.length < 12) {
      continue;
    }
    text = text.charAt(0).toUpperCase() + text.slice(1);
    condensed.push(text);
  }

  if (condensed.length === 0) {
    condensed.push(normalizedAnswer);
  }

  if (condensed.length === 1 && condensed[0].includes(" and ")) {
    return condensed[0]
      .split(/\s+and\s+/)
      .map((part) => part.trim())
      .filter((part) => part.length > 8)
      .slice(0, 4);
  }

  return condensed.slice(0, 4);
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {};
    return Object.fromEntries(
      Object.entries(saved).map(([questionId, value]) => [questionId, normalizeProgressEntry(value)])
    );
  } catch {
    return {};
  }
}

function normalizeProgressEntry(value) {
  if (!value) {
    return null;
  }

  if (typeof value === "string") {
    if (value === "mastered") {
      return { earnedMarks: 2, totalMarks: 2 };
    }

    if (value === "reviewed") {
      return { earnedMarks: 1, totalMarks: 2 };
    }

    return null;
  }

  const earnedMarks = Number.isFinite(value.earnedMarks) ? value.earnedMarks : 0;
  const totalMarks = Number.isFinite(value.totalMarks) && value.totalMarks > 0 ? value.totalMarks : 1;
  return {
    earnedMarks: Math.max(0, Math.min(earnedMarks, totalMarks)),
    totalMarks
  };
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function getQuestionProgress(questionId) {
  return state.progress[questionId] ?? null;
}

function isAttempted(questionId) {
  return Boolean(getQuestionProgress(questionId));
}

function getQuestionScore(question) {
  const progress = getQuestionProgress(question.id);
  if (!progress) {
    return null;
  }

  const totalMarks = question.totalMarks || progress.totalMarks || 1;
  return {
    earnedMarks: Math.max(0, Math.min(progress.earnedMarks, totalMarks)),
    totalMarks
  };
}

function updateQuestionScore(questionId, earnedMarks) {
  const question = questions.find((item) => item.id === questionId);
  if (!question) {
    return;
  }

  state.progress[questionId] = {
    earnedMarks,
    totalMarks: question.totalMarks
  };
  saveProgress();
  updateProgressUI();
  renderTopicMap();
  renderCurrentQuestion();
  renderQuestionList();
}

function setCurrentQuestion(questionId) {
  state.currentQuestionId = questionId;
  state.hintVisible = false;
  state.answerVisible = false;
  renderCurrentQuestion();
}

function getTopicStats() {
  const topics = [...new Set(questions.map((question) => question.topic))];

  return topics
    .map((topic) => {
      const topicQuestions = questions.filter((question) => question.topic === topic);
      const attemptedQuestions = topicQuestions.filter((question) => isAttempted(question.id));
      const earnedMarks = topicQuestions.reduce((sum, question) => {
        const score = getQuestionScore(question);
        return sum + (score ? score.earnedMarks : 0);
      }, 0);
      const possibleMarks = topicQuestions.reduce((sum, question) => sum + question.totalMarks, 0);
      const attemptedPossibleMarks = attemptedQuestions.reduce(
        (sum, question) => sum + question.totalMarks,
        0
      );
      const attempted = attemptedQuestions.length;
      const perfect = attemptedQuestions.filter((question) => {
        const score = getQuestionScore(question);
        return score && score.earnedMarks === score.totalMarks;
      }).length;
      const total = topicQuestions.length;
      const coverage = Math.round((attempted / total) * 100);
      const mastery = attemptedPossibleMarks
        ? Math.round((earnedMarks / attemptedPossibleMarks) * 100)
        : 0;
      const score = Math.round((earnedMarks / possibleMarks) * 100);

      let label = "Weak Spot";
      if (attempted === 0) {
        label = "Untouched";
      } else if (mastery >= 75 && coverage >= 35) {
        label = "Strong";
      } else if (mastery >= 45 || coverage >= 20) {
        label = "Building";
      }

      return {
        topic,
        total,
        attempted,
        perfect,
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
      `Focused topic: ${focusedTopic.topic} (${focusedTopic.attempted}/${focusedTopic.total} attempted, ${focusedTopic.mastery}% average score).`
    );
  } else {
    summaryParts.push("Focused topic: all topics.");
  }
  if (weakest.length > 0) {
    summaryParts.push(`Weak spots: ${weakest.join(" · ")}.`);
  }
  if (strongest.length > 0) {
    summaryParts.push(`Strongest: ${strongest.join(" · ")}.`);
  }
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
    meta.textContent = `${stat.total} questions · ${stat.attempted} attempted · ${stat.perfect} full marks`;

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
          <span>Average score</span>
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
    state.hintVisible = false;
    state.answerVisible = false;
    renderCurrentQuestion();
    return;
  }

  const unseenFirst = state.filteredQuestions.filter((question) => !isAttempted(question.id));
  const source = unseenFirst.length > 0 ? unseenFirst : state.filteredQuestions;
  setCurrentQuestion(source[Math.floor(Math.random() * source.length)].id);
}

function renderScoreButtons(question) {
  elements.scoreButtons.innerHTML = "";

  for (let marks = 0; marks <= question.totalMarks; marks += 1) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "score-chip";
    button.textContent = `${marks}/${question.totalMarks}`;
    button.addEventListener("click", () => updateQuestionScore(question.id, marks));

    const score = getQuestionScore(question);
    if (score && score.earnedMarks === marks) {
      button.classList.add("score-chip--active");
    }

    elements.scoreButtons.append(button);
  }
}

function renderMarkScheme(question) {
  elements.markSchemeList.innerHTML = "";
  question.markScheme.forEach((point) => {
    const item = document.createElement("li");
    item.textContent = point;
    elements.markSchemeList.append(item);
  });
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
    elements.markSchemeList.innerHTML = "";
    elements.scoreState.textContent = "";
    elements.scoreButtons.innerHTML = "";
    elements.hintBox.classList.add("answer--hidden");
    elements.answerBox.classList.add("answer--hidden");
    return;
  }

  const score = getQuestionScore(question);

  elements.questionTopic.textContent = question.topic;
  elements.questionDifficulty.textContent = question.difficulty;
  elements.questionLikelihood.textContent = question.likelihood;
  elements.questionPrompt.textContent = question.prompt;
  elements.hintText.textContent = question.hint;
  elements.answerText.textContent = question.answer;
  renderMarkScheme(question);
  renderScoreButtons(question);
  elements.scoreState.textContent = score
    ? `Current score: ${score.earnedMarks}/${score.totalMarks}`
    : `Score yourself out of ${question.totalMarks} after checking the mark scheme.`;
  elements.hintBox.classList.toggle("answer--hidden", !state.hintVisible);
  elements.answerBox.classList.toggle("answer--hidden", !state.answerVisible);
}

function getQuestionStatusLabel(question) {
  const score = getQuestionScore(question);
  if (!score) {
    return "Unattempted";
  }

  const percentage = Math.round((score.earnedMarks / score.totalMarks) * 100);
  return `Score: ${score.earnedMarks}/${score.totalMarks} (${percentage}%)`;
}

function renderQuestionList() {
  elements.questionList.innerHTML = "";

  state.filteredQuestions.forEach((question) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "question-list__item";
    button.addEventListener("click", () => {
      setCurrentQuestion(question.id);
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
    status.textContent = getQuestionStatusLabel(question);

    button.append(meta, title, status);
    elements.questionList.append(button);
  });
}

function updateProgressUI() {
  const attempted = questions.filter((question) => isAttempted(question.id));
  const attemptedCount = attempted.length;
  const total = questions.length;
  const earnedMarks = attempted.reduce((sum, question) => {
    const score = getQuestionScore(question);
    return sum + (score ? score.earnedMarks : 0);
  }, 0);
  const possibleAttemptedMarks = attempted.reduce((sum, question) => sum + question.totalMarks, 0);
  const attemptedCoverage = total === 0 ? 0 : Math.round((attemptedCount / total) * 100);
  const averageScore =
    possibleAttemptedMarks === 0 ? 0 : Math.round((earnedMarks / possibleAttemptedMarks) * 100);

  elements.questionCount.textContent = total.toString();
  elements.attemptedCount.textContent = attemptedCount.toString();
  elements.averageScore.textContent = `${averageScore}%`;
  elements.attemptedPercent.textContent = `${attemptedCoverage}%`;
  elements.scorePercent.textContent = `${averageScore}%`;
  elements.attemptedBar.style.width = `${attemptedCoverage}%`;
  elements.scoreBar.style.width = `${averageScore}%`;
}

function bindEvents() {
  elements.hintButton.addEventListener("click", () => {
    if (state.currentQuestionId) {
      state.hintVisible = true;
      elements.hintBox.classList.remove("answer--hidden");
    }
  });

  elements.revealButton.addEventListener("click", () => {
    if (state.currentQuestionId) {
      state.answerVisible = true;
      elements.answerBox.classList.remove("answer--hidden");
    }
  });

  elements.nextButton.addEventListener("click", pickNextQuestion);
  elements.randomQuestionButton.addEventListener("click", pickNextQuestion);
  elements.shuffleFilteredButton.addEventListener("click", pickNextQuestion);

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
