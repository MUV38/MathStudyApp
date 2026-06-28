const subjects = [
  {
    id: "linear-algebra",
    name: "線形代数",
    description: "ベクトル、行列、連立一次方程式、線形写像、固有値、直交性",
    enabled: true,
    sections: [
      {
        id: "vectors",
        title: "1. ベクトル空間と一次独立",
        description: "線形結合、張る空間、一次独立、基底、次元を確認します。"
      },
      {
        id: "matrices",
        title: "2. 行列と基本計算",
        description: "行列積、行列式、逆行列、階数、基本変形を扱います。"
      },
      {
        id: "systems",
        title: "3. 連立一次方程式",
        description: "拡大係数行列、解の存在、一意性、自由変数を学びます。"
      },
      {
        id: "linear-maps",
        title: "4. 線形写像",
        description: "核、像、階数・退化次数定理、行列表示を扱います。"
      },
      {
        id: "eigenvalues",
        title: "5. 固有値と対角化",
        description: "固有値、固有ベクトル、固有多項式、対角化を確認します。"
      },
      {
        id: "inner-products",
        title: "6. 内積と直交性",
        description: "内積、ノルム、直交射影、グラム・シュミットを扱います。"
      }
    ],
    problems: [
      {
        id: "la-vector-linear-combination",
        sectionId: "vectors",
        title: "線形結合の係数",
        topic: "線形結合",
        difficulty: "basic",
        prompt: "v1=(1,0), v2=(0,1) とする。(3,-2) を a v1 + b v2 と表すとき、(a,b) はどれか。",
        choices: ["(3,-2)", "(-2,3)", "(1,1)", "(0,0)"],
        answerIndex: 0,
        explanation: "a(1,0)+b(0,1)=(a,b) なので、(a,b)=(3,-2) です。"
      },
      {
        id: "la-span-r2",
        sectionId: "vectors",
        title: "張る空間",
        topic: "生成系",
        difficulty: "basic",
        prompt: "R^2 のベクトル (1,0), (1,1) が張る部分空間として正しいものはどれか。",
        choices: ["R^2 全体", "x軸のみ", "直線 y=x のみ", "零ベクトルのみ"],
        answerIndex: 0,
        explanation: "(0,1)=(1,1)-(1,0) も作れるので、標準基底を生成でき、R^2 全体を張ります。"
      },
      {
        id: "la-linear-independent",
        sectionId: "vectors",
        title: "一次独立性",
        topic: "一次独立",
        difficulty: "standard",
        prompt: "R^3 の v1=(1,0,1), v2=(0,1,1), v3=(1,1,2) について正しい記述はどれか。",
        choices: [
          "v1, v2, v3 は一次独立である",
          "v3 = v1 + v2 なので一次従属である",
          "v1 と v2 が比例するので一次従属である",
          "3本とも零ベクトルなので一次従属である"
        ],
        answerIndex: 1,
        explanation: "v1+v2=(1,1,2)=v3。非自明な線形関係があるため一次従属です。"
      },
      {
        id: "la-basis-dim",
        sectionId: "vectors",
        title: "基底と次元",
        topic: "基底",
        difficulty: "standard",
        prompt: "P2 を2次以下の実係数多項式全体のベクトル空間とする。P2 の次元はどれか。",
        choices: ["2", "3", "4", "無限次元"],
        answerIndex: 1,
        explanation: "任意の元は a+bx+cx^2 と書けます。基底 {1,x,x^2} を持つので次元は3です。"
      },
      {
        id: "la-subspace-test",
        sectionId: "vectors",
        title: "部分空間の判定",
        topic: "部分空間",
        difficulty: "standard",
        prompt: "R^2 の部分集合 W={(x,y) | x+y=0} について正しいものはどれか。",
        choices: ["部分空間である", "零ベクトルを含まない", "加法で閉じていない", "スカラー倍で閉じていない"],
        answerIndex: 0,
        explanation: "W は直線 y=-x で、零ベクトルを含み、加法とスカラー倍で閉じています。"
      },
      {
        id: "la-coordinate-basis",
        sectionId: "vectors",
        title: "基底に関する座標",
        topic: "座標表示",
        difficulty: "advanced",
        prompt: "b1=(1,1), b2=(1,-1) を基底とする。v=(4,2) のこの基底に関する座標はどれか。",
        choices: ["(3,1)", "(1,3)", "(2,4)", "(4,2)"],
        answerIndex: 0,
        explanation: "a b1 + b b2=(a+b,a-b)=(4,2)。a+b=4, a-b=2 から a=3, b=1 です。"
      },
      {
        id: "la-matrix-product",
        sectionId: "matrices",
        title: "行列積",
        topic: "行列計算",
        difficulty: "basic",
        prompt: "A=[[1,2],[0,1]], B=[[2,0],[3,1]] とする。AB の (1,1) 成分はどれか。",
        choices: ["8", "2", "3", "5"],
        answerIndex: 0,
        explanation: "AB の (1,1) 成分は第1行と第1列の内積で、1*2+2*3=8 です。"
      },
      {
        id: "la-det-2x2",
        sectionId: "matrices",
        title: "2次正方行列の行列式",
        topic: "行列式",
        difficulty: "basic",
        prompt: "A=[[2,3],[1,4]] とする。det(A) の値はどれか。",
        choices: ["5", "8", "11", "-1"],
        answerIndex: 0,
        explanation: "2次行列 [[a,b],[c,d]] の行列式は ad-bc。今回は 2*4-3*1=5 です。"
      },
      {
        id: "la-inverse-2x2",
        sectionId: "matrices",
        title: "2次行列の逆行列",
        topic: "逆行列",
        difficulty: "standard",
        prompt: "A=[[1,2],[3,4]] の逆行列として正しいものはどれか。",
        choices: [
          "[[-2,1],[3/2,-1/2]]",
          "[[4,-2],[-3,1]]",
          "[[1,3],[2,4]]",
          "逆行列は存在しない"
        ],
        answerIndex: 0,
        explanation: "det(A)=4-6=-2。A^{-1}=1/(-2)[[4,-2],[-3,1]]=[[-2,1],[3/2,-1/2]] です。"
      },
      {
        id: "la-rank",
        sectionId: "matrices",
        title: "行列の階数",
        topic: "階数",
        difficulty: "basic",
        prompt: "B=[[1,2,3],[2,4,6],[1,1,1]] の階数として正しいものはどれか。",
        choices: ["1", "2", "3", "0"],
        answerIndex: 1,
        explanation: "第2行は第1行の2倍です。第1行と第3行は比例しないため、階数は2です。"
      },
      {
        id: "la-invertible",
        sectionId: "matrices",
        title: "可逆性の判定",
        topic: "可逆行列",
        difficulty: "standard",
        prompt: "n次正方行列 A について、A が可逆であることと同値な条件はどれか。",
        choices: [
          "det(A)=0",
          "A の列ベクトルが一次独立である",
          "A のすべての成分が正である",
          "A が対称行列である"
        ],
        answerIndex: 1,
        explanation: "正方行列では、可逆性、det(A) != 0、列ベクトルの一次独立性、rank(A)=n が同値です。"
      },
      {
        id: "la-determinant-triangular",
        sectionId: "matrices",
        title: "三角行列の行列式",
        topic: "行列式",
        difficulty: "standard",
        prompt: "上三角行列 U=[[2,1,0],[0,-3,4],[0,0,5]] の行列式はどれか。",
        choices: ["-30", "30", "8", "0"],
        answerIndex: 0,
        explanation: "三角行列の行列式は対角成分の積です。2*(-3)*5=-30 です。"
      },
      {
        id: "la-system-unique",
        sectionId: "systems",
        title: "一意解の条件",
        topic: "連立一次方程式",
        difficulty: "basic",
        prompt: "n変数の連立一次方程式 Ax=b が任意の b に対して一意解を持つ条件はどれか。",
        choices: ["A が可逆である", "A=0 である", "det(A)=0 である", "b=0 のときだけ考える"],
        answerIndex: 0,
        explanation: "正方行列 A が可逆なら x=A^{-1}b が一意に定まります。"
      },
      {
        id: "la-system-inconsistent",
        sectionId: "systems",
        title: "解なしの拡大係数行列",
        topic: "拡大係数行列",
        difficulty: "basic",
        prompt: "行基本変形後の拡大係数行列に [0 0 | 1] という行が現れた。正しい結論はどれか。",
        choices: ["解なし", "一意解あり", "無数に解あり", "必ず零解のみ"],
        answerIndex: 0,
        explanation: "0x+0y=1 という矛盾を表すため、連立方程式は解を持ちません。"
      },
      {
        id: "la-system-free-variable",
        sectionId: "systems",
        title: "自由変数の数",
        topic: "自由変数",
        difficulty: "standard",
        prompt: "3変数の連立一次方程式で係数行列の階数が2、解が存在するとする。自由変数の数はどれか。",
        choices: ["1", "2", "3", "0"],
        answerIndex: 0,
        explanation: "自由変数の数は 変数の数 - 階数 = 3-2=1 です。"
      },
      {
        id: "la-homogeneous",
        sectionId: "systems",
        title: "同次方程式",
        topic: "同次系",
        difficulty: "standard",
        prompt: "同次方程式 Ax=0 について必ず正しいものはどれか。",
        choices: ["少なくとも零解を持つ", "必ず非零解を持つ", "解を持たないことがある", "必ず一意解を持つ"],
        answerIndex: 0,
        explanation: "x=0 は必ず Ax=0 を満たすため、同次方程式は少なくとも零解を持ちます。"
      },
      {
        id: "la-rank-augmented",
        sectionId: "systems",
        title: "解の存在条件",
        topic: "階数条件",
        difficulty: "advanced",
        prompt: "Ax=b が解を持つための階数条件として正しいものはどれか。",
        choices: ["rank(A)=rank([A|b])", "rank(A)=0", "rank([A|b])=0", "rank(A)>rank([A|b])"],
        answerIndex: 0,
        explanation: "係数行列と拡大係数行列の階数が等しいとき、かつそのときに限り Ax=b は解を持ちます。"
      },
      {
        id: "la-linear-map-definition",
        sectionId: "linear-maps",
        title: "線形写像の定義",
        topic: "線形性",
        difficulty: "basic",
        prompt: "写像 T が線形であるために必要な性質として正しいものはどれか。",
        choices: ["T(u+v)=T(u)+T(v), T(cu)=cT(u)", "T(u+v)=T(u)T(v)", "T(0)=1", "T(u)=u+1"],
        answerIndex: 0,
        explanation: "加法とスカラー倍を保つことが線形写像の定義です。"
      },
      {
        id: "la-kernel",
        sectionId: "linear-maps",
        title: "線形写像の核",
        topic: "核",
        difficulty: "standard",
        prompt: "T:R^2 -> R^2, T(x,y)=(x+y,x+y) とする。ker(T) はどれか。",
        choices: [
          "{(t,-t) | t in R}",
          "{(t,t) | t in R}",
          "R^2 全体",
          "{(0,1)}"
        ],
        answerIndex: 0,
        explanation: "T(x,y)=(0,0) となる条件は x+y=0。よって (x,y)=(t,-t) です。"
      },
      {
        id: "la-image",
        sectionId: "linear-maps",
        title: "像の記述",
        topic: "像",
        difficulty: "standard",
        prompt: "T:R^2 -> R^2, T(x,y)=(x,0) の像 Im(T) はどれか。",
        choices: ["{(t,0) | t in R}", "{(0,t) | t in R}", "R^2 全体", "{(0,0)}"],
        answerIndex: 0,
        explanation: "出力は常に第2成分が0で、任意の第1成分 t は x=t として作れます。"
      },
      {
        id: "la-rank-nullity",
        sectionId: "linear-maps",
        title: "階数・退化次数定理",
        topic: "rank-nullity",
        difficulty: "standard",
        prompt: "T:V -> W で dim V=5, dim ker(T)=2 とする。rank(T) はどれか。",
        choices: ["3", "2", "5", "7"],
        answerIndex: 0,
        explanation: "dim V = rank(T)+nullity(T) なので、5=rank(T)+2。rank(T)=3 です。"
      },
      {
        id: "la-matrix-representation",
        sectionId: "linear-maps",
        title: "標準基底での行列表示",
        topic: "行列表示",
        difficulty: "advanced",
        prompt: "T:R^2 -> R^2, T(x,y)=(2x+y, 3y) の標準基底に関する行列はどれか。",
        choices: ["[[2,1],[0,3]]", "[[2,0],[1,3]]", "[[1,2],[3,0]]", "[[3,0],[1,2]]"],
        answerIndex: 0,
        explanation: "T(e1)=(2,0), T(e2)=(1,3) が列になるので [[2,1],[0,3]] です。"
      },
      {
        id: "la-eigenvalue-diagonal",
        sectionId: "eigenvalues",
        title: "対角行列の固有値",
        topic: "固有値",
        difficulty: "basic",
        prompt: "D=diag(2,-1,5) の固有値の組として正しいものはどれか。",
        choices: ["2, -1, 5", "2, 1, 5", "6 のみ", "-10 のみ"],
        answerIndex: 0,
        explanation: "対角行列の固有値は対角成分そのものです。"
      },
      {
        id: "la-eigenvector",
        sectionId: "eigenvalues",
        title: "固有ベクトルの判定",
        topic: "固有ベクトル",
        difficulty: "basic",
        prompt: "A=[[2,0],[0,3]] に対して (1,0) はどの固有値の固有ベクトルか。",
        choices: ["2", "3", "5", "0"],
        answerIndex: 0,
        explanation: "A(1,0)=(2,0)=2(1,0) なので、固有値2の固有ベクトルです。"
      },
      {
        id: "la-characteristic",
        sectionId: "eigenvalues",
        title: "固有多項式",
        topic: "固有値",
        difficulty: "standard",
        prompt: "A=[[0,1],[-2,3]] の固有値はどれか。",
        choices: ["1 と 2", "-1 と -2", "0 と 3", "重解 3"],
        answerIndex: 0,
        explanation: "det(lambda I-A)=lambda^2-3lambda+2=(lambda-1)(lambda-2) です。"
      },
      {
        id: "la-diagonalizable-distinct",
        sectionId: "eigenvalues",
        title: "対角化可能性",
        topic: "対角化",
        difficulty: "standard",
        prompt: "2次正方行列が相異なる2つの固有値を持つとき、正しい結論はどれか。",
        choices: ["対角化可能である", "必ず零行列である", "必ず対称行列である", "固有ベクトルを持たない"],
        answerIndex: 0,
        explanation: "n次行列が n 個の相異なる固有値を持てば、対応する固有ベクトルは一次独立で対角化可能です。"
      },
      {
        id: "la-trace-det-eigen",
        sectionId: "eigenvalues",
        title: "跡と行列式",
        topic: "固有値の性質",
        difficulty: "advanced",
        prompt: "2次行列の固有値が 2 と 5 である。跡と行列式の組として正しいものはどれか。",
        choices: ["trace=7, det=10", "trace=10, det=7", "trace=3, det=10", "trace=7, det=-10"],
        answerIndex: 0,
        explanation: "固有値の和は跡、積は行列式です。2+5=7, 2*5=10 です。"
      },
      {
        id: "la-dot-product",
        sectionId: "inner-products",
        title: "内積の計算",
        topic: "内積",
        difficulty: "basic",
        prompt: "R^3 の u=(1,2,-1), v=(3,0,4) について u・v はどれか。",
        choices: ["-1", "7", "3", "0"],
        answerIndex: 0,
        explanation: "u・v=1*3+2*0+(-1)*4=3-4=-1 です。"
      },
      {
        id: "la-norm",
        sectionId: "inner-products",
        title: "ノルム",
        topic: "ノルム",
        difficulty: "basic",
        prompt: "v=(3,4) のユークリッドノルム ||v|| はどれか。",
        choices: ["5", "7", "25", "1"],
        answerIndex: 0,
        explanation: "||v||=sqrt(3^2+4^2)=5 です。"
      },
      {
        id: "la-orthogonal",
        sectionId: "inner-products",
        title: "直交判定",
        topic: "直交",
        difficulty: "standard",
        prompt: "u=(1,2), v=(2,-1) について正しいものはどれか。",
        choices: ["直交している", "平行である", "同じベクトルである", "内積は4である"],
        answerIndex: 0,
        explanation: "u・v=1*2+2*(-1)=0 なので直交しています。"
      },
      {
        id: "la-projection",
        sectionId: "inner-products",
        title: "直線への射影",
        topic: "直交射影",
        difficulty: "standard",
        prompt: "v=(2,3) を a=(1,0) が張る直線へ直交射影したベクトルはどれか。",
        choices: ["(2,0)", "(0,3)", "(2,3)", "(0,0)"],
        answerIndex: 0,
        explanation: "x軸への射影なので第2成分を落とし、(2,0) になります。"
      },
      {
        id: "la-gram-schmidt",
        sectionId: "inner-products",
        title: "グラム・シュミット",
        topic: "正規直交化",
        difficulty: "advanced",
        prompt: "u1=(1,0), u2=(1,1) にグラム・シュミットを適用する。2本目から u1 方向を除いたベクトルはどれか。",
        choices: ["(0,1)", "(1,0)", "(1,1)", "(-1,1)"],
        answerIndex: 0,
        explanation: "u2 から u1 への射影 (1,0) を引くと (1,1)-(1,0)=(0,1) です。"
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
