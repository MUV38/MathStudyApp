const subjects = [
  {
    id: "linear-algebra",
    name: "線形代数",
    description: "行列、ベクトル空間、線形写像、固有値",
    enabled: true,
    sections: [
      {
        id: "vectors",
        title: "1. ベクトルと一次独立",
        description: "ベクトル空間の言葉に慣れ、一次独立・基底・次元を確認します。"
      },
      {
        id: "matrices",
        title: "2. 行列と基本計算",
        description: "行列式、階数、可逆性など、行列計算の基礎を扱います。"
      },
      {
        id: "linear-maps",
        title: "3. 線形写像",
        description: "核、像、行列表示を通して写像としての線形代数を学びます。"
      },
      {
        id: "eigenvalues",
        title: "4. 固有値と対角化",
        description: "固有値、固有多項式、対角化の入口を扱います。"
      }
    ],
    problems: [
      {
        id: "la-linear-independent",
        sectionId: "vectors",
        title: "一次独立性",
        topic: "ベクトル空間",
        difficulty: "standard",
        prompt: "R^3 のベクトル v1=(1,0,1), v2=(0,1,1), v3=(1,1,2) について正しい記述はどれか。",
        choices: [
          "v1, v2, v3 は一次独立である",
          "v3 = v1 + v2 なので一次従属である",
          "v1 と v2 が比例するので一次従属である",
          "3本とも零ベクトルなので一次従属である"
        ],
        answerIndex: 1,
        explanation: "v1 + v2 = (1,1,2) = v3。非自明な線形関係があるため一次従属です。"
      },
      {
        id: "la-basis-dim",
        sectionId: "vectors",
        title: "基底と次元",
        topic: "ベクトル空間",
        difficulty: "standard",
        prompt: "P2 を2次以下の実係数多項式全体のベクトル空間とする。P2 の次元はどれか。",
        choices: ["2", "3", "4", "無限次元"],
        answerIndex: 1,
        explanation: "任意の元は a + bx + cx^2 と書けます。基底 {1, x, x^2} を持つので次元は3です。"
      },
      {
        id: "la-det-2x2",
        sectionId: "matrices",
        title: "2次正方行列の行列式",
        topic: "行列式",
        difficulty: "basic",
        prompt: "A = [[2, 3], [1, 4]] とする。det(A) の値はどれか。",
        choices: ["5", "8", "11", "-1"],
        answerIndex: 0,
        explanation: "2次行列 [[a,b],[c,d]] の行列式は ad - bc。今回は 2*4 - 3*1 = 5 です。"
      },
      {
        id: "la-rank",
        sectionId: "matrices",
        title: "行列の階数",
        topic: "階数",
        difficulty: "basic",
        prompt: "行列 B = [[1, 2, 3], [2, 4, 6], [1, 1, 1]] の階数として正しいものはどれか。",
        choices: ["1", "2", "3", "0"],
        answerIndex: 1,
        explanation: "第2行は第1行の2倍なので独立ではありません。第1行と第3行は比例しないため、階数は2です。"
      },
      {
        id: "la-invertible",
        sectionId: "matrices",
        title: "可逆性の判定",
        topic: "行列",
        difficulty: "standard",
        prompt: "正方行列 A について、A が可逆であることと同値な条件はどれか。",
        choices: [
          "det(A)=0",
          "A の列ベクトルが一次独立である",
          "A のすべての成分が正である",
          "A が必ず対称行列である"
        ],
        answerIndex: 1,
        explanation: "正方行列では、可逆性、det(A) != 0、列ベクトルの一次独立性、階数が n であることが同値です。"
      },
      {
        id: "la-kernel",
        sectionId: "linear-maps",
        title: "線形写像の核",
        topic: "線形写像",
        difficulty: "standard",
        prompt: "T:R^2 -> R^2, T(x,y)=(x+y, x+y) とする。ker(T) はどれか。",
        choices: [
          "{(t, -t) | t in R}",
          "{(t, t) | t in R}",
          "R^2 全体",
          "{(0, 1)}"
        ],
        answerIndex: 0,
        explanation: "T(x,y)=(0,0) となる条件は x+y=0。よって (x,y)=(t,-t) です。"
      },
      {
        id: "la-eigenvalue-diagonal",
        sectionId: "eigenvalues",
        title: "対角行列の固有値",
        topic: "固有値",
        difficulty: "basic",
        prompt: "D = diag(2, -1, 5) の固有値の組として正しいものはどれか。",
        choices: ["2, -1, 5", "2, 1, 5", "6 のみ", "-10 のみ"],
        answerIndex: 0,
        explanation: "対角行列の固有値は対角成分そのものです。したがって 2, -1, 5 です。"
      },
      {
        id: "la-characteristic",
        sectionId: "eigenvalues",
        title: "固有多項式",
        topic: "固有値",
        difficulty: "advanced",
        prompt: "A = [[0, 1], [-2, 3]] の固有値はどれか。",
        choices: ["1 と 2", "-1 と -2", "0 と 3", "重解 3"],
        answerIndex: 0,
        explanation: "det(lambda I - A)=det([[lambda,-1],[2,lambda-3]])=lambda^2-3lambda+2=(lambda-1)(lambda-2) です。"
      }
    ]
  },
  {
    id: "calculus",
    name: "微積分",
    description: "今後追加予定",
    enabled: false,
    sections: [],
    problems: []
  },
  {
    id: "abstract-algebra",
    name: "抽象代数",
    description: "今後追加予定",
    enabled: false,
    sections: [],
    problems: []
  }
];

const storageKey = "math-study-app-progress-v1";
const difficultyLabels = {
  basic: "基本",
  standard: "標準",
  advanced: "発展"
};

const state = {
  subjectId: "linear-algebra",
  sectionId: "vectors",
  mode: "practice",
  difficulty: "all",
  currentProblemId: null,
  selectedChoice: null,
  answered: false,
  progress: loadProgress()
};

const els = {
  totalAttempts: document.querySelector("#totalAttempts"),
  accuracyRate: document.querySelector("#accuracyRate"),
  reviewCount: document.querySelector("#reviewCount"),
  subjectList: document.querySelector("#subjectList"),
  sectionList: document.querySelector("#sectionList"),
  currentSubjectLabel: document.querySelector("#currentSubjectLabel"),
  currentSectionLabel: document.querySelector("#currentSectionLabel"),
  modeTitle: document.querySelector("#modeTitle"),
  difficultyFilter: document.querySelector("#difficultyFilter"),
  resetDataButton: document.querySelector("#resetDataButton"),
  practiceView: document.querySelector("#practiceView"),
  reviewView: document.querySelector("#reviewView"),
  historyView: document.querySelector("#historyView"),
  problemSection: document.querySelector("#problemSection"),
  problemTopic: document.querySelector("#problemTopic"),
  problemDifficulty: document.querySelector("#problemDifficulty"),
  problemTitle: document.querySelector("#problemTitle"),
  problemPrompt: document.querySelector("#problemPrompt"),
  answerChoices: document.querySelector("#answerChoices"),
  submitAnswerButton: document.querySelector("#submitAnswerButton"),
  nextProblemButton: document.querySelector("#nextProblemButton"),
  feedback: document.querySelector("#feedback"),
  reviewList: document.querySelector("#reviewList"),
  historyTotal: document.querySelector("#historyTotal"),
  historyCorrect: document.querySelector("#historyCorrect"),
  historyStreak: document.querySelector("#historyStreak"),
  historyList: document.querySelector("#historyList")
};

function loadProgress() {
  const empty = { attempts: [], reviewQueue: [] };
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (!saved || !Array.isArray(saved.attempts) || !Array.isArray(saved.reviewQueue)) {
      return empty;
    }
    return saved;
  } catch {
    return empty;
  }
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(state.progress));
}

function getSubject() {
  return subjects.find((subject) => subject.id === state.subjectId);
}

function getSection(sectionId = state.sectionId) {
  return getSubject().sections.find((section) => section.id === sectionId);
}

function getAllProblems() {
  return subjects.flatMap((subject) =>
    subject.problems.map((problem) => {
      const section = subject.sections.find((item) => item.id === problem.sectionId);
      return {
        ...problem,
        subjectId: subject.id,
        subjectName: subject.name,
        sectionTitle: section?.title ?? "未分類"
      };
    })
  );
}

function getProblem(problemId) {
  return getAllProblems().find((problem) => problem.id === problemId);
}

function getFilteredProblems() {
  const subject = getSubject();
  let problems = subject.problems.filter((problem) => problem.sectionId === state.sectionId);
  if (state.difficulty !== "all") {
    problems = problems.filter((problem) => problem.difficulty === state.difficulty);
  }
  return problems;
}

function getLatestAttempt(problemId) {
  for (let index = state.progress.attempts.length - 1; index >= 0; index -= 1) {
    if (state.progress.attempts[index].problemId === problemId) {
      return state.progress.attempts[index];
    }
  }
  return null;
}

function pickProblem(preferNext = false) {
  const problems = getFilteredProblems();
  if (problems.length === 0) {
    state.currentProblemId = null;
    state.selectedChoice = null;
    state.answered = false;
    return;
  }

  if (preferNext && state.currentProblemId) {
    const currentIndex = problems.findIndex((problem) => problem.id === state.currentProblemId);
    state.currentProblemId = problems[(currentIndex + 1 + problems.length) % problems.length].id;
  } else {
    const incomplete = problems.find((problem) => getLatestAttempt(problem.id)?.correct !== true);
    state.currentProblemId = (incomplete ?? problems[0]).id;
  }

  state.selectedChoice = null;
  state.answered = false;
}

function getSectionStats(sectionId) {
  const problems = getSubject().problems.filter((problem) => problem.sectionId === sectionId);
  const solved = problems.filter((problem) => getLatestAttempt(problem.id)?.correct === true).length;
  const mistakes = problems.filter((problem) => state.progress.reviewQueue.includes(problem.id)).length;
  const mastery = problems.length === 0 ? 0 : Math.round((solved / problems.length) * 100);
  return { total: problems.length, solved, mistakes, mastery };
}

function renderSubjects() {
  els.subjectList.innerHTML = "";
  subjects.forEach((subject) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `subject-button${subject.id === state.subjectId ? " active" : ""}`;
    button.disabled = !subject.enabled;
    button.innerHTML = `<strong>${subject.name}</strong><span>${subject.description}</span>`;
    button.addEventListener("click", () => {
      state.subjectId = subject.id;
      state.sectionId = subject.sections[0]?.id ?? "";
      pickProblem();
      render();
    });
    els.subjectList.append(button);
  });
}

function renderSections() {
  els.sectionList.innerHTML = "";
  const subject = getSubject();
  subject.sections.forEach((section) => {
    const stats = getSectionStats(section.id);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `section-button${section.id === state.sectionId ? " active" : ""}`;
    button.innerHTML = `
      <strong>${section.title}</strong>
      <span>${section.description}</span>
      <div class="mastery-meter" aria-label="習得率 ${stats.mastery}%">
        <span style="--mastery: ${stats.mastery}%"></span>
      </div>
      <small>習得率 ${stats.mastery}% ・${stats.solved}/${stats.total} 完了${stats.mistakes ? ` ・復習 ${stats.mistakes}` : ""}</small>
    `;
    button.addEventListener("click", () => {
      state.sectionId = section.id;
      pickProblem();
      render();
    });
    els.sectionList.append(button);
  });
}

function renderMode() {
  document.querySelectorAll(".mode-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === state.mode);
  });

  els.practiceView.classList.toggle("active", state.mode === "practice");
  els.reviewView.classList.toggle("active", state.mode === "review");
  els.historyView.classList.toggle("active", state.mode === "history");

  const titles = {
    practice: "問題演習",
    review: "間違った問題の復習",
    history: "学習記録"
  };
  els.modeTitle.textContent = titles[state.mode];
}

function renderSummary() {
  const attempts = state.progress.attempts;
  const correct = attempts.filter((attempt) => attempt.correct).length;
  const rate = attempts.length === 0 ? 0 : Math.round((correct / attempts.length) * 100);
  els.totalAttempts.textContent = attempts.length;
  els.accuracyRate.textContent = `${rate}%`;
  els.reviewCount.textContent = state.progress.reviewQueue.length;
  els.historyTotal.textContent = attempts.length;
  els.historyCorrect.textContent = correct;
  els.historyStreak.textContent = getCurrentStreak();
}

function getCurrentStreak() {
  let streak = 0;
  for (let index = state.progress.attempts.length - 1; index >= 0; index -= 1) {
    if (!state.progress.attempts[index].correct) {
      break;
    }
    streak += 1;
  }
  return streak;
}

function renderProblem() {
  const problem = getProblem(state.currentProblemId);
  if (!problem) {
    els.problemSection.textContent = getSection()?.title ?? "";
    els.problemTopic.textContent = "";
    els.problemDifficulty.textContent = "";
    els.problemTitle.textContent = "問題がありません";
    els.problemPrompt.textContent = "この条件に合う問題はまだ登録されていません。";
    els.answerChoices.innerHTML = "";
    els.feedback.className = "feedback hidden";
    els.submitAnswerButton.disabled = true;
    return;
  }

  els.problemSection.textContent = problem.sectionTitle;
  els.problemTopic.textContent = problem.topic;
  els.problemDifficulty.textContent = difficultyLabels[problem.difficulty];
  els.problemTitle.textContent = problem.title;
  els.problemPrompt.textContent = problem.prompt;
  els.answerChoices.innerHTML = "";
  els.feedback.className = "feedback hidden";
  els.feedback.textContent = "";
  els.submitAnswerButton.disabled = state.answered;

  problem.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button";
    button.textContent = choice;
    if (state.selectedChoice === index) {
      button.classList.add("selected");
    }
    if (state.answered && index === problem.answerIndex) {
      button.classList.add("correct");
    }
    if (state.answered && state.selectedChoice === index && index !== problem.answerIndex) {
      button.classList.add("incorrect");
    }
    button.addEventListener("click", () => {
      if (state.answered) return;
      state.selectedChoice = index;
      renderProblem();
    });
    els.answerChoices.append(button);
  });
}

function submitAnswer() {
  const problem = getProblem(state.currentProblemId);
  if (!problem || state.selectedChoice === null || state.answered) {
    return;
  }

  const correct = state.selectedChoice === problem.answerIndex;
  state.answered = true;
  state.progress.attempts.push({
    problemId: problem.id,
    subjectId: state.subjectId,
    sectionId: problem.sectionId,
    selectedChoice: state.selectedChoice,
    correct,
    answeredAt: new Date().toISOString()
  });

  if (correct) {
    state.progress.reviewQueue = state.progress.reviewQueue.filter((id) => id !== problem.id);
  } else if (!state.progress.reviewQueue.includes(problem.id)) {
    state.progress.reviewQueue.unshift(problem.id);
  }

  saveProgress();
  renderProblem();
  renderSummary();
  renderSections();

  els.feedback.className = `feedback ${correct ? "correct" : "incorrect"}`;
  els.feedback.textContent = correct
    ? `正解です。${problem.explanation}`
    : `不正解です。正解は「${problem.choices[problem.answerIndex]}」。${problem.explanation}`;
}

function renderReview() {
  els.reviewList.innerHTML = "";
  const queue = state.progress.reviewQueue
    .map(getProblem)
    .filter(Boolean)
    .filter((problem) => problem.subjectId === state.subjectId && problem.sectionId === state.sectionId);

  if (queue.length === 0) {
    els.reviewList.innerHTML = '<div class="empty-state">このセクションで復習待ちの問題はありません。</div>';
    return;
  }

  queue.forEach((problem) => {
    const item = document.createElement("article");
    item.className = "review-item";
    item.innerHTML = `
      <div class="item-meta"><span>${problem.sectionTitle}</span><span>${problem.topic}</span><span>${difficultyLabels[problem.difficulty]}</span></div>
      <h3>${problem.title}</h3>
      <p>${problem.prompt}</p>
      <button class="review-action" type="button">この問題を解く</button>
    `;
    item.querySelector("button").addEventListener("click", () => {
      state.mode = "practice";
      state.sectionId = problem.sectionId;
      state.currentProblemId = problem.id;
      state.selectedChoice = null;
      state.answered = false;
      render();
    });
    els.reviewList.append(item);
  });
}

function renderHistory() {
  els.historyList.innerHTML = "";
  const attempts = [...state.progress.attempts].reverse();
  if (attempts.length === 0) {
    els.historyList.innerHTML = '<div class="empty-state">まだ学習記録がありません。まずは1問解いてみましょう。</div>';
    return;
  }

  attempts.slice(0, 30).forEach((attempt) => {
    const problem = getProblem(attempt.problemId);
    if (!problem) return;
    const item = document.createElement("article");
    item.className = "history-item";
    const answeredAt = new Date(attempt.answeredAt).toLocaleString("ja-JP");
    item.innerHTML = `
      <div class="item-meta">
        <span>${answeredAt}</span>
        <span>${problem.subjectName}</span>
        <span>${problem.sectionTitle}</span>
        <span>${attempt.correct ? "正解" : "不正解"}</span>
      </div>
      <h3>${problem.title}</h3>
      <p>選択: ${problem.choices[attempt.selectedChoice]}</p>
    `;
    els.historyList.append(item);
  });
}

function render() {
  const subject = getSubject();
  const section = getSection();
  els.currentSubjectLabel.textContent = subject.name;
  els.currentSectionLabel.textContent = section?.title ?? "";
  els.difficultyFilter.value = state.difficulty;
  renderSubjects();
  renderSections();
  renderMode();
  renderSummary();
  renderProblem();
  renderReview();
  renderHistory();
}

document.querySelectorAll(".mode-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.mode = button.dataset.mode;
    render();
  });
});

els.difficultyFilter.addEventListener("change", () => {
  state.difficulty = els.difficultyFilter.value;
  pickProblem();
  render();
});

els.submitAnswerButton.addEventListener("click", submitAnswer);
els.nextProblemButton.addEventListener("click", () => {
  pickProblem(true);
  render();
});

els.resetDataButton.addEventListener("click", () => {
  const accepted = window.confirm("学習記録と復習リストをすべて削除しますか？");
  if (!accepted) return;
  state.progress = { attempts: [], reviewQueue: [] };
  saveProgress();
  pickProblem();
  render();
});

pickProblem();
render();
