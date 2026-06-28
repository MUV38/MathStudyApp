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
      },
      {
        id: "symmetric-quadratic",
        title: "7. 対称行列と二次形式",
        description: "対称行列、直交対角化、正定値性、二次形式を扱います。"
      },
      {
        id: "canonical-forms",
        title: "8. 標準形と行列分解",
        description: "Cayley-Hamilton、最小多項式、ジョルダン形、LU分解を確認します。"
      },
      {
        id: "fundamental-decompositions",
        title: "9. 基本部分空間と応用的分解",
        description: "行空間・列空間・零空間、相似、QR/SVD、射影行列を扱います。"
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
      },
      {
        id: "la-zero-vector-dependence",
        sectionId: "vectors",
        title: "零ベクトルを含む集合",
        topic: "一次独立",
        difficulty: "basic",
        prompt: "ベクトルの集合 {v1, 0, v3} について必ず正しいものはどれか。",
        choices: ["一次従属である", "一次独立である", "基底である", "空集合である"],
        answerIndex: 0,
        explanation: "零ベクトルを含む集合は、零ベクトルの係数だけを非零にしても線形結合が0になるため一次従属です。"
      },
      {
        id: "la-dimension-subspace-r4",
        sectionId: "vectors",
        title: "部分空間の次元",
        topic: "次元",
        difficulty: "standard",
        prompt: "R^4 の部分空間 W={(x1,x2,x3,x4) | x1+x2=0, x3=0} の次元はどれか。",
        choices: ["2", "1", "3", "4"],
        answerIndex: 0,
        explanation: "条件から x2=-x1, x3=0。自由変数は x1 と x4 の2つなので次元は2です。"
      },
      {
        id: "la-basis-extension",
        sectionId: "vectors",
        title: "基底への拡張",
        topic: "基底",
        difficulty: "standard",
        prompt: "R^3 の一次独立な2本のベクトルについて正しいものはどれか。",
        choices: ["もう1本を加えて R^3 の基底に拡張できる", "必ず R^3 全体を張る", "必ず一次従属である", "零ベクトルを含む"],
        answerIndex: 0,
        explanation: "有限次元ベクトル空間では、一次独立な集合は基底へ拡張できます。"
      },
      {
        id: "la-sum-subspaces-dimension",
        sectionId: "vectors",
        title: "部分空間の和の次元",
        topic: "次元公式",
        difficulty: "advanced",
        prompt: "dim U=3, dim W=2, dim(U∩W)=1 のとき dim(U+W) はどれか。",
        choices: ["4", "5", "6", "1"],
        answerIndex: 0,
        explanation: "dim(U+W)=dim U+dim W-dim(U∩W)=3+2-1=4 です。"
      },
      {
        id: "la-change-of-basis-concept",
        sectionId: "vectors",
        title: "基底変換行列",
        topic: "基底変換",
        difficulty: "advanced",
        prompt: "基底 B の座標 [v]_B から標準座標 v へ戻す行列の列に並ぶものはどれか。",
        choices: ["基底 B の各ベクトル", "v の成分を昇順に並べたもの", "零ベクトル", "単位行列の対角成分だけ"],
        answerIndex: 0,
        explanation: "基底ベクトルを列に並べた行列 P に対して、v=P[v]_B となります。"
      },
      {
        id: "la-matrix-associative",
        sectionId: "matrices",
        title: "行列積の結合法則",
        topic: "行列計算",
        difficulty: "basic",
        prompt: "積が定義できる行列 A,B,C について一般に正しいものはどれか。",
        choices: ["(AB)C=A(BC)", "AB=BA", "A+B=AB", "A^2=A"],
        answerIndex: 0,
        explanation: "行列積は一般に非可換ですが、結合法則 (AB)C=A(BC) は成り立ちます。"
      },
      {
        id: "la-transpose-product",
        sectionId: "matrices",
        title: "積の転置",
        topic: "転置行列",
        difficulty: "standard",
        prompt: "行列積 AB の転置として正しいものはどれか。",
        choices: ["(AB)^T=B^T A^T", "(AB)^T=A^T B^T", "(AB)^T=AB", "(AB)^T=A+B"],
        answerIndex: 0,
        explanation: "積の転置では順序が反転し、(AB)^T=B^T A^T です。"
      },
      {
        id: "la-elementary-row-operation-det",
        sectionId: "matrices",
        title: "行基本変形と行列式",
        topic: "行列式",
        difficulty: "standard",
        prompt: "行列の2つの行を入れ替えると、行列式はどう変化するか。",
        choices: ["符号が反転する", "必ず0になる", "2倍になる", "変化しない"],
        answerIndex: 0,
        explanation: "2行の入れ替えは行列式の符号を反転させます。"
      },
      {
        id: "la-rank-product-inequality",
        sectionId: "matrices",
        title: "積の階数",
        topic: "階数",
        difficulty: "advanced",
        prompt: "行列積 AB について一般に正しい不等式はどれか。",
        choices: ["rank(AB) <= min(rank(A), rank(B))", "rank(AB)=rank(A)+rank(B)", "rank(AB)>rank(A)", "rank(AB)>rank(B)"],
        answerIndex: 0,
        explanation: "AB の像は A の像に含まれ、また B で失われた次元は戻らないため、この不等式が成り立ちます。"
      },
      {
        id: "la-block-diagonal-det",
        sectionId: "matrices",
        title: "ブロック対角行列",
        topic: "行列式",
        difficulty: "advanced",
        prompt: "ブロック対角行列 diag(A,B) の行列式として正しいものはどれか。",
        choices: ["det(A)det(B)", "det(A)+det(B)", "det(A)-det(B)", "0"],
        answerIndex: 0,
        explanation: "ブロック対角行列の行列式は、各対角ブロックの行列式の積です。"
      },
      {
        id: "la-system-parametric",
        sectionId: "systems",
        title: "解のパラメータ表示",
        topic: "自由変数",
        difficulty: "standard",
        prompt: "方程式 x+y+z=0 の解空間の次元はどれか。",
        choices: ["2", "1", "3", "0"],
        answerIndex: 0,
        explanation: "1本の独立な一次条件が R^3 に入るため、自由変数は2つで次元は2です。"
      },
      {
        id: "la-system-affine-solution",
        sectionId: "systems",
        title: "非同次方程式の解集合",
        topic: "解空間",
        difficulty: "standard",
        prompt: "Ax=b の1つの解を xp とし、Ax=0 の解空間を N とする。Ax=b の全解はどれか。",
        choices: ["xp+N", "N のみ", "{0} のみ", "A の列空間そのもの"],
        answerIndex: 0,
        explanation: "非同次方程式の全解は、特殊解 xp に同次方程式の解を足したアフィン空間です。"
      },
      {
        id: "la-system-pivot-columns",
        sectionId: "systems",
        title: "ピボット列",
        topic: "掃き出し法",
        difficulty: "standard",
        prompt: "階段形でピボットがある列が表すものとして正しいものはどれか。",
        choices: ["基本変数に対応する列", "自由変数に対応する列", "必ず零列", "右辺だけ"],
        answerIndex: 0,
        explanation: "ピボット列は基本変数を決める列です。ピボットのない列が自由変数に対応します。"
      },
      {
        id: "la-system-cramer",
        sectionId: "systems",
        title: "クラメルの公式",
        topic: "連立一次方程式",
        difficulty: "advanced",
        prompt: "n次正方行列 A で det(A) != 0 のとき Ax=b の解について正しいものはどれか。",
        choices: ["クラメルの公式で各成分を表せる", "解は存在しない", "必ず無数に存在する", "自由変数がn個ある"],
        answerIndex: 0,
        explanation: "det(A) != 0 なら A は可逆で一意解を持ち、クラメルの公式を適用できます。"
      },
      {
        id: "la-system-consistency-column-space",
        sectionId: "systems",
        title: "列空間と解の存在",
        topic: "列空間",
        difficulty: "advanced",
        prompt: "Ax=b が解を持つことと同値な条件はどれか。",
        choices: ["b が A の列空間に属する", "b が必ず零ベクトルである", "A が零行列である", "A が対角行列である"],
        answerIndex: 0,
        explanation: "Ax は A の列ベクトルの線形結合なので、b が列空間にあることが解の存在条件です。"
      },
      {
        id: "la-linear-map-injective",
        sectionId: "linear-maps",
        title: "単射の判定",
        topic: "核",
        difficulty: "standard",
        prompt: "線形写像 T:V -> W が単射であることと同値な条件はどれか。",
        choices: ["ker(T)={0}", "Im(T)={0}", "T(0)≠0", "rank(T)=0"],
        answerIndex: 0,
        explanation: "線形写像は、核が零ベクトルだけのとき、かつそのときに限り単射です。"
      },
      {
        id: "la-linear-map-surjective",
        sectionId: "linear-maps",
        title: "全射の判定",
        topic: "像",
        difficulty: "standard",
        prompt: "T:V -> W が全射であることと同値な条件はどれか。",
        choices: ["Im(T)=W", "ker(T)=V", "T(0)≠0", "dim V=0"],
        answerIndex: 0,
        explanation: "全射とは、終域 W のすべての元が像として現れること、つまり Im(T)=W です。"
      },
      {
        id: "la-linear-map-composition",
        sectionId: "linear-maps",
        title: "合成写像の行列",
        topic: "行列表示",
        difficulty: "standard",
        prompt: "標準基底で T の行列が A、S の行列が B のとき、S∘T の行列はどれか。",
        choices: ["BA", "AB", "A+B", "A^T B"],
        answerIndex: 0,
        explanation: "先に T を適用し、次に S を適用するので、列ベクトルに対する行列は BA です。"
      },
      {
        id: "la-linear-map-isomorphism",
        sectionId: "linear-maps",
        title: "同型写像",
        topic: "同型",
        difficulty: "advanced",
        prompt: "有限次元ベクトル空間 V,W が同型であるための十分条件として正しいものはどれか。",
        choices: ["dim V=dim W", "V が空集合である", "W が零空間でない", "任意の写像が線形である"],
        answerIndex: 0,
        explanation: "同じ体上の有限次元ベクトル空間は、次元が等しければ同型です。"
      },
      {
        id: "la-linear-functional",
        sectionId: "linear-maps",
        title: "線形汎関数",
        topic: "双対空間",
        difficulty: "advanced",
        prompt: "R^3 から R への線形写像 f(x,y,z)=2x-y+z について正しいものはどれか。",
        choices: ["線形汎関数である", "線形ではない", "値域は R^3 である", "核は空集合である"],
        answerIndex: 0,
        explanation: "スカラー値の線形写像は線形汎関数です。f は加法とスカラー倍を保ちます。"
      },
      {
        id: "la-eigen-nullspace",
        sectionId: "eigenvalues",
        title: "固有空間",
        topic: "固有空間",
        difficulty: "standard",
        prompt: "A の固有値 λ に対応する固有空間として正しいものはどれか。",
        choices: ["ker(A-λI)", "Im(A+λI)", "ker(A)+ker(I)", "A の列空間そのもの"],
        answerIndex: 0,
        explanation: "固有ベクトルは (A-λI)v=0 を満たす非零ベクトルなので、固有空間は ker(A-λI) です。"
      },
      {
        id: "la-eigen-algebraic-geometric",
        sectionId: "eigenvalues",
        title: "代数的重複度と幾何的重複度",
        topic: "重複度",
        difficulty: "advanced",
        prompt: "固有値 λ の幾何的重複度について一般に正しいものはどれか。",
        choices: ["1以上で代数的重複度以下", "必ず0", "必ず代数的重複度より大きい", "行列のサイズより大きい"],
        answerIndex: 0,
        explanation: "固有値なら固有ベクトルが存在するため幾何的重複度は1以上で、代数的重複度以下です。"
      },
      {
        id: "la-cayley-hamilton-basic",
        sectionId: "eigenvalues",
        title: "Cayley-Hamilton の定理",
        topic: "固有多項式",
        difficulty: "advanced",
        prompt: "行列 A の固有多項式を p(t) とする。Cayley-Hamilton の定理の主張はどれか。",
        choices: ["p(A)=0", "p(A)=I", "p(0)=1", "A=0"],
        answerIndex: 0,
        explanation: "Cayley-Hamilton の定理は、行列が自分の固有多項式を満たす、つまり p(A)=0 という主張です。"
      },
      {
        id: "la-diagonalization-condition",
        sectionId: "eigenvalues",
        title: "対角化の条件",
        topic: "対角化",
        difficulty: "advanced",
        prompt: "n次行列 A が対角化可能であることと同値な条件はどれか。",
        choices: ["一次独立な固有ベクトルが n 本存在する", "固有値が1つもない", "det(A)=0", "A が零行列でない"],
        answerIndex: 0,
        explanation: "対角化可能性は、空間全体を張る固有ベクトル基底が存在することと同値です。"
      },
      {
        id: "la-power-diagonalization",
        sectionId: "eigenvalues",
        title: "対角化とべき乗",
        topic: "対角化",
        difficulty: "advanced",
        prompt: "A=PDP^{-1} と対角化されるとき、A^k として正しいものはどれか。",
        choices: ["PD^kP^{-1}", "P^kDP^{-1}", "PDP^{-k}", "D^k のみ"],
        answerIndex: 0,
        explanation: "A^k=(PDP^{-1})^k=PD^kP^{-1} となり、対角行列のべき乗に帰着できます。"
      },
      {
        id: "la-cauchy-schwarz",
        sectionId: "inner-products",
        title: "Cauchy-Schwarz の不等式",
        topic: "内積",
        difficulty: "standard",
        prompt: "内積空間で常に成り立つ不等式はどれか。",
        choices: ["|<u,v>| <= ||u|| ||v||", "|<u,v>| >= ||u|| ||v||", "<u,v>=||u||+||v||", "||u+v||=||u||+||v||"],
        answerIndex: 0,
        explanation: "Cauchy-Schwarz の不等式は |<u,v>| <= ||u|| ||v|| です。"
      },
      {
        id: "la-orthogonal-complement",
        sectionId: "inner-products",
        title: "直交補空間",
        topic: "直交補",
        difficulty: "standard",
        prompt: "R^3 で W=span{(1,0,0)} の直交補 W^⊥ はどれか。",
        choices: ["{(0,y,z) | y,z in R}", "{(x,0,0) | x in R}", "R^3 全体", "{(1,1,1)}"],
        answerIndex: 0,
        explanation: "(1,0,0) と直交する条件は第1成分が0であることです。"
      },
      {
        id: "la-orthonormal-basis-coordinates",
        sectionId: "inner-products",
        title: "正規直交基底での座標",
        topic: "正規直交基底",
        difficulty: "standard",
        prompt: "{e1,e2} が正規直交基底のとき、v の e1 成分はどれか。",
        choices: ["<v,e1>", "<e1,e2>", "||v||", "<v,v>"],
        answerIndex: 0,
        explanation: "正規直交基底では、各座標は基底ベクトルとの内積で求まります。"
      },
      {
        id: "la-least-squares-normal-equation",
        sectionId: "inner-products",
        title: "最小二乗法の正規方程式",
        topic: "最小二乗",
        difficulty: "advanced",
        prompt: "Ax≈b の最小二乗解が満たす正規方程式はどれか。",
        choices: ["A^T A x=A^T b", "A x=0", "A^T x=b", "A A^T x=b"],
        answerIndex: 0,
        explanation: "残差 b-Ax が A の列空間に直交する条件から A^T(Ax-b)=0、つまり A^T A x=A^T b です。"
      },
      {
        id: "la-orthogonal-matrix",
        sectionId: "inner-products",
        title: "直交行列",
        topic: "直交行列",
        difficulty: "advanced",
        prompt: "実正方行列 Q が直交行列であることと同値な条件はどれか。",
        choices: ["Q^T Q=I", "Q^T Q=0", "Q^2=0", "det(Q)=0"],
        answerIndex: 0,
        explanation: "直交行列は列ベクトルが正規直交基底をなし、Q^T Q=I を満たします。"
      },
      {
        id: "la-symmetric-real-eigenvalues",
        sectionId: "symmetric-quadratic",
        title: "実対称行列の固有値",
        topic: "対称行列",
        difficulty: "basic",
        prompt: "実対称行列について必ず正しいものはどれか。",
        choices: ["固有値はすべて実数である", "固有値はすべて0である", "対角化できない", "行列式は必ず1である"],
        answerIndex: 0,
        explanation: "実対称行列の固有値はすべて実数で、直交対角化可能です。"
      },
      {
        id: "la-symmetric-orthogonal-diagonalization",
        sectionId: "symmetric-quadratic",
        title: "直交対角化",
        topic: "対称行列",
        difficulty: "standard",
        prompt: "実対称行列 A について成り立つ対角化の形はどれか。",
        choices: ["Q^T A Q=D", "Q A Q=D で Q は任意", "A=0 のときだけ可能", "PAP=D"],
        answerIndex: 0,
        explanation: "実対称行列は直交行列 Q により Q^T A Q=D と直交対角化できます。"
      },
      {
        id: "la-positive-definite-criterion",
        sectionId: "symmetric-quadratic",
        title: "正定値性",
        topic: "二次形式",
        difficulty: "standard",
        prompt: "実対称行列 A が正定値であることの定義として正しいものはどれか。",
        choices: ["任意の x≠0 に対して x^T A x>0", "任意の x に対して Ax=0", "det(A)=0", "A が上三角である"],
        answerIndex: 0,
        explanation: "正定値性は、非零ベクトル x に対して二次形式 x^T A x が常に正であることです。"
      },
      {
        id: "la-sylvester-criterion-2x2",
        sectionId: "symmetric-quadratic",
        title: "Sylvester の判定法",
        topic: "正定値",
        difficulty: "advanced",
        prompt: "2次実対称行列 [[a,b],[b,d]] が正定値である十分必要条件はどれか。",
        choices: ["a>0 かつ ad-b^2>0", "a<0 かつ ad-b^2>0", "ad-b^2<0", "b=0 のみ"],
        answerIndex: 0,
        explanation: "Sylvester の判定法では、先頭主座小行列式がすべて正、つまり a>0 かつ det>0 です。"
      },
      {
        id: "la-quadratic-form-diagonal",
        sectionId: "symmetric-quadratic",
        title: "二次形式の対角化",
        topic: "二次形式",
        difficulty: "advanced",
        prompt: "実対称行列 A を直交対角化すると、二次形式 x^T A x は何に分解されるか。",
        choices: ["固有値を係数に持つ平方和", "一次式の和", "常に0", "行列式そのもの"],
        answerIndex: 0,
        explanation: "直交座標変換により x^T A x は λ1 y1^2+...+λn yn^2 の形になります。"
      },
      {
        id: "la-lu-factorization",
        sectionId: "canonical-forms",
        title: "LU分解",
        topic: "行列分解",
        difficulty: "standard",
        prompt: "LU分解 A=LU において、通常 L と U はそれぞれどのような行列か。",
        choices: ["下三角行列と上三角行列", "直交行列と対角行列", "零行列と単位行列", "対称行列と交代行列"],
        answerIndex: 0,
        explanation: "LU分解は行列を下三角行列 L と上三角行列 U の積に分解する方法です。"
      },
      {
        id: "la-minimal-polynomial",
        sectionId: "canonical-forms",
        title: "最小多項式",
        topic: "標準形",
        difficulty: "advanced",
        prompt: "行列 A の最小多項式 m(t) の特徴として正しいものはどれか。",
        choices: ["m(A)=0 を満たすモニック多項式のうち次数最小", "固有多項式より必ず次数が大きい", "常に t のみ", "det(A) と同じ数"],
        answerIndex: 0,
        explanation: "最小多項式は、A を零化するモニック多項式のうち次数が最小のものです。"
      },
      {
        id: "la-jordan-block-eigenvalue",
        sectionId: "canonical-forms",
        title: "ジョルダンブロック",
        topic: "ジョルダン標準形",
        difficulty: "advanced",
        prompt: "ジョルダンブロック J=[[λ,1],[0,λ]] の固有値はどれか。",
        choices: ["λ のみ", "λ と 1", "0 と λ", "1 のみ"],
        answerIndex: 0,
        explanation: "上三角行列の固有値は対角成分なので、固有値は λ のみです。"
      },
      {
        id: "la-jordan-diagonalizable",
        sectionId: "canonical-forms",
        title: "ジョルダン形と対角化",
        topic: "ジョルダン標準形",
        difficulty: "advanced",
        prompt: "複素数体上の行列が対角化可能であることをジョルダン標準形で述べるとどれか。",
        choices: ["すべてのジョルダンブロックのサイズが1", "ジョルダンブロックが1つだけ", "固有値が1つだけ", "対角成分がすべて0"],
        answerIndex: 0,
        explanation: "対角化可能であることは、ジョルダン標準形に非自明な上隣接成分がないこと、つまりブロックサイズがすべて1であることです。"
      },
      {
        id: "la-rational-canonical-purpose",
        sectionId: "canonical-forms",
        title: "標準形の役割",
        topic: "標準形",
        difficulty: "advanced",
        prompt: "行列の標準形を学ぶ主な目的として最も適切なものはどれか。",
        choices: ["基底を変えても変わらない構造を分類するため", "行列の成分をすべて正にするため", "すべての行列を単位行列にするため", "行列式を定義しないため"],
        answerIndex: 0,
        explanation: "標準形は相似変換で変わらない線形変換の構造を見やすくし、分類するために使います。"
      },
      {
        id: "la-four-fundamental-subspaces",
        sectionId: "fundamental-decompositions",
        title: "4つの基本部分空間",
        topic: "基本部分空間",
        difficulty: "basic",
        prompt: "m×n 行列 A に対して、通常「4つの基本部分空間」に含まれないものはどれか。",
        choices: ["対角空間", "列空間", "行空間", "零空間"],
        answerIndex: 0,
        explanation: "基本部分空間は列空間、行空間、零空間、左零空間です。対角空間は通常この分類には含めません。"
      },
      {
        id: "la-column-space-definition",
        sectionId: "fundamental-decompositions",
        title: "列空間",
        topic: "列空間",
        difficulty: "basic",
        prompt: "行列 A の列空間として正しい説明はどれか。",
        choices: ["A の列ベクトルが張る空間", "A の行ベクトルが張る空間", "Ax=0 の解集合", "A の固有値の集合"],
        answerIndex: 0,
        explanation: "列空間 Col(A) は A の列ベクトルの線形結合全体です。"
      },
      {
        id: "la-row-space-definition",
        sectionId: "fundamental-decompositions",
        title: "行空間",
        topic: "行空間",
        difficulty: "basic",
        prompt: "行列 A の行空間はどの空間の部分空間か。A は m×n 行列とする。",
        choices: ["R^n", "R^m", "R^{m+n}", "R のみ"],
        answerIndex: 0,
        explanation: "A の各行は n 成分のベクトルなので、行空間は R^n の部分空間です。"
      },
      {
        id: "la-left-nullspace-definition",
        sectionId: "fundamental-decompositions",
        title: "左零空間",
        topic: "左零空間",
        difficulty: "standard",
        prompt: "m×n 行列 A の左零空間として正しいものはどれか。",
        choices: ["ker(A^T)", "ker(A)", "Col(A)", "Row(A)"],
        answerIndex: 0,
        explanation: "左零空間は A^T y=0 を満たす y の空間、つまり ker(A^T) です。"
      },
      {
        id: "la-row-null-orthogonal",
        sectionId: "fundamental-decompositions",
        title: "行空間と零空間の直交性",
        topic: "基本部分空間",
        difficulty: "standard",
        prompt: "行列 A について、行空間 Row(A) と直交補の関係にある空間はどれか。",
        choices: ["ker(A)", "Col(A)", "ker(A^T)", "A の固有空間すべて"],
        answerIndex: 0,
        explanation: "Ax=0 は A のすべての行ベクトルと x が直交することを意味するので、ker(A)=Row(A)^⊥ です。"
      },
      {
        id: "la-column-left-null-orthogonal",
        sectionId: "fundamental-decompositions",
        title: "列空間と左零空間",
        topic: "基本部分空間",
        difficulty: "standard",
        prompt: "m×n 行列 A について、Col(A)^⊥ と等しい空間はどれか。",
        choices: ["ker(A^T)", "ker(A)", "Row(A)", "R^n 全体"],
        answerIndex: 0,
        explanation: "y が列空間に直交することは、A のすべての列との内積が0、つまり A^T y=0 と同値です。"
      },
      {
        id: "la-rank-row-column",
        sectionId: "fundamental-decompositions",
        title: "行階数と列階数",
        topic: "階数",
        difficulty: "standard",
        prompt: "任意の行列 A について常に成り立つことはどれか。",
        choices: ["行階数 = 列階数", "行階数 = 行数", "列階数 = 列数", "行階数 + 列階数 = 0"],
        answerIndex: 0,
        explanation: "行階数と列階数は常に一致し、その共通値を rank(A) と呼びます。"
      },
      {
        id: "la-nullity-matrix",
        sectionId: "fundamental-decompositions",
        title: "行列の退化次数",
        topic: "階数・退化次数",
        difficulty: "standard",
        prompt: "A が 4×6 行列で rank(A)=3 のとき、ker(A) の次元はどれか。",
        choices: ["3", "1", "4", "6"],
        answerIndex: 0,
        explanation: "rank-nullity より、定義域 R^6 の次元 6 = rank 3 + nullity。したがって nullity=3 です。"
      },
      {
        id: "la-pivot-columns-basis-column-space",
        sectionId: "fundamental-decompositions",
        title: "列空間の基底",
        topic: "ピボット列",
        difficulty: "standard",
        prompt: "A を行基本変形してピボット列が1列目と3列目だと分かった。Col(A) の基底に使う列はどれか。",
        choices: ["元の A の1列目と3列目", "階段形の1列目と3列目", "元の A の2列目と4列目", "右辺ベクトルだけ"],
        answerIndex: 0,
        explanation: "列空間の基底には、元の行列 A のピボット列に対応する列を使います。"
      },
      {
        id: "la-row-equivalent-row-space",
        sectionId: "fundamental-decompositions",
        title: "行基本変形と行空間",
        topic: "行空間",
        difficulty: "advanced",
        prompt: "行列 A を行基本変形して階段形 R にした。A と R について正しいものはどれか。",
        choices: ["行空間は同じ", "列空間は必ず同じ", "零空間は必ず異なる", "階数は必ず変わる"],
        answerIndex: 0,
        explanation: "行基本変形は行ベクトルの張る空間を保つので、A と階段形 R の行空間は同じです。"
      },
      {
        id: "la-similar-matrices",
        sectionId: "fundamental-decompositions",
        title: "相似な行列",
        topic: "相似",
        difficulty: "standard",
        prompt: "A と B が相似であるとは、ある可逆行列 P によりどの形で結ばれることか。",
        choices: ["B=P^{-1}AP", "B=P+A", "B=PA", "B=A^T"],
        answerIndex: 0,
        explanation: "相似変換は基底変換に対応し、B=P^{-1}AP の形で表されます。"
      },
      {
        id: "la-similar-invariants",
        sectionId: "fundamental-decompositions",
        title: "相似で保たれる量",
        topic: "相似",
        difficulty: "standard",
        prompt: "相似な正方行列で必ず一致するものはどれか。",
        choices: ["固有多項式", "すべての成分", "各列の和", "各行のノルム"],
        answerIndex: 0,
        explanation: "相似な行列は同じ線形写像を異なる基底で表したものなので、固有多項式、跡、行列式などが一致します。"
      },
      {
        id: "la-change-basis-linear-map",
        sectionId: "fundamental-decompositions",
        title: "線形写像の基底変換",
        topic: "基底変換",
        difficulty: "advanced",
        prompt: "標準基底での行列が A、基底変換行列が P のとき、新しい基底での表現として典型的な形はどれか。",
        choices: ["P^{-1}AP", "PAP", "A+P", "P^{-1}+A"],
        answerIndex: 0,
        explanation: "同じ線形写像を新しい基底で表すと、相似変換 P^{-1}AP が現れます。"
      },
      {
        id: "la-projection-matrix-property",
        sectionId: "fundamental-decompositions",
        title: "射影行列の性質",
        topic: "射影",
        difficulty: "standard",
        prompt: "線形射影を表す行列 P が満たす代表的な性質はどれか。",
        choices: ["P^2=P", "P^2=0", "P^T=0", "det(P)=1 が必ず成り立つ"],
        answerIndex: 0,
        explanation: "一度射影したものをもう一度射影しても変わらないため、射影行列は P^2=P を満たします。"
      },
      {
        id: "la-orthogonal-projection-matrix",
        sectionId: "fundamental-decompositions",
        title: "直交射影行列",
        topic: "射影",
        difficulty: "advanced",
        prompt: "列が一次独立な行列 A の列空間への直交射影行列として正しいものはどれか。",
        choices: ["A(A^T A)^{-1}A^T", "A^T A", "AA^T A", "(A^T A)A"],
        answerIndex: 0,
        explanation: "Col(A) への直交射影行列は P=A(A^T A)^{-1}A^T です。"
      },
      {
        id: "la-qr-factorization",
        sectionId: "fundamental-decompositions",
        title: "QR分解",
        topic: "行列分解",
        difficulty: "standard",
        prompt: "QR分解 A=QR で、通常 Q と R はそれぞれどのような行列か。",
        choices: ["列が正規直交な行列と上三角行列", "下三角行列と対角行列", "零行列と単位行列", "対称行列と交代行列"],
        answerIndex: 0,
        explanation: "QR分解では、Q は正規直交な列を持ち、R は上三角行列です。"
      },
      {
        id: "la-svd-shape",
        sectionId: "fundamental-decompositions",
        title: "特異値分解",
        topic: "SVD",
        difficulty: "standard",
        prompt: "特異値分解の標準的な形はどれか。",
        choices: ["A=UΣV^T", "A=LU", "A=PDP^{-1}", "A=A^T A"],
        answerIndex: 0,
        explanation: "特異値分解は A=UΣV^T の形で、U,V は直交行列、Σ は非負対角成分を持つ行列です。"
      },
      {
        id: "la-singular-values",
        sectionId: "fundamental-decompositions",
        title: "特異値",
        topic: "SVD",
        difficulty: "advanced",
        prompt: "行列 A の特異値は何から得られるか。",
        choices: ["A^T A の固有値の非負平方根", "A の成分の総和", "det(A) のみ", "A の対角成分そのもの"],
        answerIndex: 0,
        explanation: "特異値は A^T A の固有値の非負平方根として得られます。"
      },
      {
        id: "la-low-rank-approximation",
        sectionId: "fundamental-decompositions",
        title: "低ランク近似",
        topic: "SVD",
        difficulty: "advanced",
        prompt: "SVD が低ランク近似に使われる主な理由はどれか。",
        choices: ["大きい特異値に対応する成分を残すと重要な情報を保ちやすいから", "すべての行列を零行列にするから", "行列式を必ず1にするから", "固有値を消すから"],
        answerIndex: 0,
        explanation: "SVD では特異値の大きさで成分の重要度を測り、上位成分だけで良い近似を作れます。"
      },
      {
        id: "la-pseudoinverse-purpose",
        sectionId: "fundamental-decompositions",
        title: "擬似逆行列",
        topic: "擬似逆行列",
        difficulty: "advanced",
        prompt: "Moore-Penrose 擬似逆行列が特に役立つ場面はどれか。",
        choices: ["正方でない行列や階数落ち行列を含む最小二乗問題", "行列の成分をすべて整数にする問題", "行列式だけを計算する問題", "複素数を使わない問題だけ"],
        answerIndex: 0,
        explanation: "擬似逆行列は、逆行列が存在しない場合にも最小二乗解や最小ノルム解を表すために使えます。"
      },
      {
        id: "la-condition-number",
        sectionId: "fundamental-decompositions",
        title: "条件数",
        topic: "数値線形代数",
        difficulty: "advanced",
        prompt: "行列の条件数が大きいとき、一般に何が起こりやすいか。",
        choices: ["入力や丸め誤差に対して解が敏感になる", "計算が必ず正確になる", "行列が必ず直交行列になる", "階数が必ず0になる"],
        answerIndex: 0,
        explanation: "条件数が大きい問題は悪条件で、小さな誤差が解に大きく影響することがあります。"
      },
      {
        id: "la-sparse-matrix",
        sectionId: "fundamental-decompositions",
        title: "疎行列",
        topic: "数値線形代数",
        difficulty: "basic",
        prompt: "疎行列の説明として最も適切なものはどれか。",
        choices: ["成分の多くが0である行列", "すべての成分が1である行列", "必ず正方行列である行列", "固有値を持たない行列"],
        answerIndex: 0,
        explanation: "疎行列は多くの成分が0である行列で、保存や計算を効率化できることがあります。"
      },
      {
        id: "la-markov-stochastic-matrix",
        sectionId: "fundamental-decompositions",
        title: "確率行列",
        topic: "応用",
        difficulty: "standard",
        prompt: "列確率行列の特徴として正しいものはどれか。",
        choices: ["各列の成分和が1で、成分が非負", "各列の成分和が0", "必ず対称行列", "必ず逆行列を持つ"],
        answerIndex: 0,
        explanation: "列確率行列は、各列が確率分布を表すため、成分が非負で列和が1です。"
      },
      {
        id: "la-graph-incidence-matrix",
        sectionId: "fundamental-decompositions",
        title: "グラフと接続行列",
        topic: "応用",
        difficulty: "advanced",
        prompt: "グラフの接続行列やラプラシアンで線形代数が使われる主な理由はどれか。",
        choices: ["ネットワーク構造を行列として扱い、階数や固有値で性質を調べられるから", "グラフでは数を使わないから", "すべてのグラフが対角行列だから", "固有値が常に存在しないから"],
        answerIndex: 0,
        explanation: "グラフは行列で表現でき、連結性、流れ、拡散などを階数や固有値の問題として調べられます。"
      },
      {
        id: "la-calc-vector-addition",
        sectionId: "vectors",
        title: "ベクトルの和",
        topic: "ベクトル計算",
        difficulty: "basic",
        type: "calculation",
        prompt: "(2,-1,3)+(-4,5,1) はどれか。",
        choices: ["(-2,4,4)", "(6,-6,2)", "(-2,6,4)", "(-4,4,3)"],
        answerIndex: 0,
        explanation: "成分ごとに足して、(2-4, -1+5, 3+1)=(-2,4,4) です。"
      },
      {
        id: "la-calc-scalar-combination",
        sectionId: "vectors",
        title: "線形結合の計算",
        topic: "線形結合",
        difficulty: "basic",
        type: "calculation",
        prompt: "2(1,-2)+3(0,4) はどれか。",
        choices: ["(2,8)", "(2,4)", "(2,16)", "(5,2)"],
        answerIndex: 0,
        explanation: "2(1,-2)=(2,-4), 3(0,4)=(0,12)。和は (2,8) です。"
      },
      {
        id: "la-calc-coordinate-solve",
        sectionId: "vectors",
        title: "座標表示の計算",
        topic: "座標表示",
        difficulty: "standard",
        type: "calculation",
        prompt: "b1=(1,1), b2=(1,0)。v=(5,2)=a b1+b b2 のとき (a,b) はどれか。",
        choices: ["(2,3)", "(3,2)", "(5,2)", "(2,5)"],
        answerIndex: 0,
        explanation: "a b1+b b2=(a+b,a)=(5,2)。a=2, b=3 です。"
      },
      {
        id: "la-calc-matrix-entry",
        sectionId: "matrices",
        title: "行列積の一成分",
        topic: "行列計算",
        difficulty: "basic",
        type: "calculation",
        prompt: "A=[[1,3],[2,0]], B=[[4,1],[-1,2]]。AB の (1,2) 成分はどれか。",
        choices: ["7", "5", "1", "3"],
        answerIndex: 0,
        explanation: "A の第1行と B の第2列の内積で、1*1+3*2=7 です。"
      },
      {
        id: "la-calc-det-quick",
        sectionId: "matrices",
        title: "2x2行列式の暗算",
        topic: "行列式",
        difficulty: "basic",
        type: "calculation",
        prompt: "det [[3,1],[2,5]] はどれか。",
        choices: ["13", "17", "7", "11"],
        answerIndex: 0,
        explanation: "3*5-1*2=15-2=13 です。"
      },
      {
        id: "la-calc-trace",
        sectionId: "matrices",
        title: "跡の計算",
        topic: "跡",
        difficulty: "basic",
        type: "calculation",
        prompt: "A=[[2,4,0],[1,-3,5],[7,2,6]] の trace(A) はどれか。",
        choices: ["5", "8", "11", "-1"],
        answerIndex: 0,
        explanation: "対角成分の和なので 2+(-3)+6=5 です。"
      },
      {
        id: "la-calc-triangular-det",
        sectionId: "matrices",
        title: "三角行列の行列式",
        topic: "行列式",
        difficulty: "standard",
        type: "calculation",
        prompt: "U=[[2,4,1],[0,-1,3],[0,0,6]] の det(U) はどれか。",
        choices: ["-12", "12", "8", "-6"],
        answerIndex: 0,
        explanation: "三角行列の行列式は対角成分の積です。2*(-1)*6=-12 です。"
      },
      {
        id: "la-calc-two-equations",
        sectionId: "systems",
        title: "2元連立方程式",
        topic: "連立一次方程式",
        difficulty: "basic",
        type: "calculation",
        prompt: "x+y=5, x-y=1 の解 (x,y) はどれか。",
        choices: ["(3,2)", "(2,3)", "(4,1)", "(1,4)"],
        answerIndex: 0,
        explanation: "2式を足すと 2x=6 なので x=3。y=2 です。"
      },
      {
        id: "la-calc-homogeneous-param",
        sectionId: "systems",
        title: "同次方程式の解",
        topic: "同次系",
        difficulty: "standard",
        type: "calculation",
        prompt: "x+2y=0 の解の形はどれか。",
        choices: ["(-2t,t)", "(2t,t)", "(t,-2t)", "(t,t)"],
        answerIndex: 0,
        explanation: "y=t とおくと x=-2t です。"
      },
      {
        id: "la-calc-free-variables",
        sectionId: "systems",
        title: "自由変数の暗算",
        topic: "自由変数",
        difficulty: "standard",
        type: "calculation",
        prompt: "5変数の連立一次方程式で rank(A)=3、解が存在する。自由変数は何個か。",
        choices: ["2", "3", "5", "8"],
        answerIndex: 0,
        explanation: "自由変数の数は 5-3=2 です。"
      },
      {
        id: "la-calc-linear-map-value",
        sectionId: "linear-maps",
        title: "線形写像の値",
        topic: "線形写像",
        difficulty: "basic",
        type: "calculation",
        prompt: "T(x,y)=(2x-y, x+3y)。T(1,2) はどれか。",
        choices: ["(0,7)", "(4,7)", "(0,5)", "(-1,7)"],
        answerIndex: 0,
        explanation: "(2*1-2, 1+3*2)=(0,7) です。"
      },
      {
        id: "la-calc-kernel-line",
        sectionId: "linear-maps",
        title: "核の条件計算",
        topic: "核",
        difficulty: "standard",
        type: "calculation",
        prompt: "T(x,y,z)=x-y+z。ker(T) の条件はどれか。",
        choices: ["x-y+z=0", "x+y+z=0", "x-y-z=1", "x=0 のみ"],
        answerIndex: 0,
        explanation: "核は T(x,y,z)=0 を満たす集合なので x-y+z=0 です。"
      },
      {
        id: "la-calc-rank-nullity",
        sectionId: "linear-maps",
        title: "rank-nullity の計算",
        topic: "rank-nullity",
        difficulty: "standard",
        type: "calculation",
        prompt: "dim V=7, rank(T)=4 のとき dim ker(T) はどれか。",
        choices: ["3", "4", "7", "11"],
        answerIndex: 0,
        explanation: "dim V=rank(T)+dim ker(T) なので 7=4+dim ker(T)。答えは3です。"
      },
      {
        id: "la-calc-diagonal-eigen",
        sectionId: "eigenvalues",
        title: "対角行列の固有値",
        topic: "固有値",
        difficulty: "basic",
        type: "calculation",
        prompt: "diag(-2,4,4) の固有値として正しいものはどれか。",
        choices: ["-2, 4", "-2 のみ", "4 のみ", "6"],
        answerIndex: 0,
        explanation: "対角行列の固有値は対角成分です。重複を除けば -2 と 4 です。"
      },
      {
        id: "la-calc-char-2x2",
        sectionId: "eigenvalues",
        title: "2x2固有値の計算",
        topic: "固有値",
        difficulty: "standard",
        type: "calculation",
        prompt: "A=[[2,0],[0,5]] の固有多項式はどれか。",
        choices: ["(λ-2)(λ-5)", "λ^2-7", "(λ+2)(λ+5)", "λ-10"],
        answerIndex: 0,
        explanation: "対角行列なので det(λI-A)=(λ-2)(λ-5) です。"
      },
      {
        id: "la-calc-trace-det-eigen",
        sectionId: "eigenvalues",
        title: "固有値から跡と行列式",
        topic: "固有値の性質",
        difficulty: "standard",
        type: "calculation",
        prompt: "2次行列の固有値が -1 と 6。trace と det はどれか。",
        choices: ["trace=5, det=-6", "trace=-6, det=5", "trace=7, det=6", "trace=5, det=6"],
        answerIndex: 0,
        explanation: "跡は和 -1+6=5、行列式は積 -1*6=-6 です。"
      },
      {
        id: "la-calc-dot-product",
        sectionId: "inner-products",
        title: "内積の暗算",
        topic: "内積",
        difficulty: "basic",
        type: "calculation",
        prompt: "(2,-1,3)・(4,0,-2) はどれか。",
        choices: ["2", "14", "8", "-2"],
        answerIndex: 0,
        explanation: "2*4+(-1)*0+3*(-2)=8-6=2 です。"
      },
      {
        id: "la-calc-norm",
        sectionId: "inner-products",
        title: "ノルムの暗算",
        topic: "ノルム",
        difficulty: "basic",
        type: "calculation",
        prompt: "v=(1,2,2) の ||v|| はどれか。",
        choices: ["3", "5", "9", "√5"],
        answerIndex: 0,
        explanation: "sqrt(1^2+2^2+2^2)=sqrt(9)=3 です。"
      },
      {
        id: "la-calc-orthogonal-check",
        sectionId: "inner-products",
        title: "直交判定の暗算",
        topic: "直交",
        difficulty: "standard",
        type: "calculation",
        prompt: "u=(3,1), v=(1,-3) は直交しているか。",
        choices: ["直交している", "直交していない", "平行である", "同じベクトルである"],
        answerIndex: 0,
        explanation: "内積は 3*1+1*(-3)=0 なので直交しています。"
      },
      {
        id: "la-calc-positive-definite-2x2",
        sectionId: "symmetric-quadratic",
        title: "2x2正定値判定",
        topic: "正定値",
        difficulty: "standard",
        type: "calculation",
        prompt: "A=[[2,1],[1,3]] は正定値か。",
        choices: ["正定値である", "正定値でない", "判定不能", "交代行列である"],
        answerIndex: 0,
        explanation: "先頭主座小行列式は 2>0、det(A)=6-1=5>0。よって正定値です。"
      },
      {
        id: "la-calc-quadratic-form",
        sectionId: "symmetric-quadratic",
        title: "二次形式の値",
        topic: "二次形式",
        difficulty: "basic",
        type: "calculation",
        prompt: "A=diag(2,3), x=(1,2)。x^T A x はどれか。",
        choices: ["14", "8", "10", "12"],
        answerIndex: 0,
        explanation: "2*1^2+3*2^2=2+12=14 です。"
      },
      {
        id: "la-calc-projection-idempotent",
        sectionId: "fundamental-decompositions",
        title: "射影行列の確認",
        topic: "射影",
        difficulty: "standard",
        type: "calculation",
        prompt: "P=[[1,0],[0,0]] について P^2 はどれか。",
        choices: ["P と等しい", "0 と等しい", "I と等しい", "-P と等しい"],
        answerIndex: 0,
        explanation: "P^2=[[1,0],[0,0]]=P なので射影行列の性質を満たします。"
      },
      {
        id: "la-calc-singular-value-diagonal",
        sectionId: "fundamental-decompositions",
        title: "対角行列の特異値",
        topic: "SVD",
        difficulty: "standard",
        type: "calculation",
        prompt: "A=diag(-3,2) の特異値はどれか。",
        choices: ["3, 2", "-3, 2", "1, 5", "6 のみ"],
        answerIndex: 0,
        explanation: "対角行列の特異値は対角成分の絶対値なので 3 と 2 です。"
      },
      {
        id: "la-calc-condition-number-diagonal",
        sectionId: "fundamental-decompositions",
        title: "対角行列の条件数",
        topic: "数値線形代数",
        difficulty: "advanced",
        type: "calculation",
        prompt: "A=diag(10,2) の2ノルム条件数はどれか。",
        choices: ["5", "12", "8", "20"],
        answerIndex: 0,
        explanation: "特異値は 10 と 2。条件数は最大特異値/最小特異値=10/2=5 です。"
      }
    ]
  },
  {
    id: "calculus",
    name: "微積分",
    description: "極限、微分、積分、級数、多変数微積分を大学初年級の流れで学びます。",
    enabled: true,
    sections: [
      {
        id: "limits-continuity",
        title: "1. 極限と連続性",
        description: "数列と関数の極限、連続性、はさみうち、初等関数の基本極限を確認します。"
      },
      {
        id: "differentiation",
        title: "2. 1変数関数の微分",
        description: "導関数、積・商・合成関数の微分、接線、増減、テイラー展開を扱います。"
      },
      {
        id: "integration",
        title: "3. 1変数関数の積分",
        description: "不定積分、定積分、置換積分、部分積分、面積計算を練習します。"
      },
      {
        id: "sequences-series",
        title: "4. 数列・級数",
        description: "収束判定、冪級数、テイラー級数、収束半径の基本を学びます。"
      },
      {
        id: "multivariable-differentiation",
        title: "5. 多変数関数の微分",
        description: "偏微分、勾配、全微分、連鎖律、極値判定を扱います。"
      },
      {
        id: "multiple-integrals",
        title: "6. 重積分とベクトル解析の入口",
        description: "二重積分、変数変換、ヤコビアン、線積分の基本計算を確認します。"
      }
    ],
    problems: [
      {
        id: "cal-limit-polynomial",
        sectionId: "limits-continuity",
        title: "多項式関数の極限",
        topic: "関数の極限",
        difficulty: "basic",
        type: "calculation",
        prompt: "lim x->2 (x^2+3x-1) の値はどれか。",
        choices: ["9", "5", "7", "0"],
        answerIndex: 0,
        explanation: "多項式は連続なので x=2 を代入します。2^2+3*2-1=9 です。"
      },
      {
        id: "cal-limit-quotient",
        sectionId: "limits-continuity",
        title: "因数分解による極限",
        topic: "不定形の解消",
        difficulty: "standard",
        type: "calculation",
        prompt: "lim x->1 (x^2-1)/(x-1) の値はどれか。",
        choices: ["2", "1", "0", "存在しない"],
        answerIndex: 0,
        explanation: "x^2-1=(x-1)(x+1) と因数分解し、x != 1 で x+1 に簡約できます。極限は 2 です。"
      },
      {
        id: "cal-squeeze-sine",
        sectionId: "limits-continuity",
        title: "はさみうちの原理",
        topic: "はさみうち",
        difficulty: "standard",
        prompt: "lim x->0 x sin(1/x) の値はどれか。",
        choices: ["0", "1", "-1", "存在しない"],
        answerIndex: 0,
        explanation: "-|x| <= x sin(1/x) <= |x| なので、両端が 0 に近づくことから極限は 0 です。"
      },
      {
        id: "cal-derivative-power",
        sectionId: "differentiation",
        title: "べき関数の微分",
        topic: "導関数",
        difficulty: "basic",
        type: "calculation",
        prompt: "f(x)=x^5 の導関数 f'(x) はどれか。",
        choices: ["5x^4", "x^4", "5x^5", "x^6/6"],
        answerIndex: 0,
        explanation: "べき関数の公式 d/dx x^n = n x^(n-1) より f'(x)=5x^4 です。"
      },
      {
        id: "cal-derivative-chain",
        sectionId: "differentiation",
        title: "合成関数の微分",
        topic: "連鎖律",
        difficulty: "standard",
        type: "calculation",
        prompt: "f(x)=sin(x^2) の導関数はどれか。",
        choices: ["2x cos(x^2)", "cos(2x)", "sin(2x)", "x cos(x^2)"],
        answerIndex: 0,
        explanation: "外側 sin u の微分は cos u、内側 u=x^2 の微分は 2x なので f'(x)=2x cos(x^2) です。"
      },
      {
        id: "cal-tangent-line",
        sectionId: "differentiation",
        title: "接線の方程式",
        topic: "接線",
        difficulty: "standard",
        type: "calculation",
        prompt: "y=x^2 の x=3 における接線の方程式はどれか。",
        choices: ["y=6x-9", "y=3x", "y=6x+9", "y=x+6"],
        answerIndex: 0,
        explanation: "導関数は 2x なので傾きは 6、接点は (3,9) です。y-9=6(x-3) より y=6x-9 です。"
      },
      {
        id: "cal-integral-power",
        sectionId: "integration",
        title: "べき関数の不定積分",
        topic: "不定積分",
        difficulty: "basic",
        type: "calculation",
        prompt: "int 3x^2 dx はどれか。",
        choices: ["x^3+C", "6x+C", "3x^3+C", "x^2+C"],
        answerIndex: 0,
        explanation: "x^3 の微分が 3x^2 なので、不定積分は x^3+C です。"
      },
      {
        id: "cal-definite-integral",
        sectionId: "integration",
        title: "定積分の基本",
        topic: "定積分",
        difficulty: "basic",
        type: "calculation",
        prompt: "int_0^1 2x dx の値はどれか。",
        choices: ["1", "2", "1/2", "0"],
        answerIndex: 0,
        explanation: "原始関数は x^2 です。x=1 と x=0 の値の差は 1-0=1 です。"
      },
      {
        id: "cal-integration-by-parts",
        sectionId: "integration",
        title: "部分積分",
        topic: "部分積分",
        difficulty: "standard",
        type: "calculation",
        prompt: "int x e^x dx として正しいものはどれか。",
        choices: ["(x-1)e^x+C", "(x+1)e^x+C", "x^2 e^x/2+C", "e^x+C"],
        answerIndex: 0,
        explanation: "u=x, dv=e^x dx とすると、int x e^x dx = x e^x - int e^x dx = (x-1)e^x+C です。"
      },
      {
        id: "cal-geometric-series",
        sectionId: "sequences-series",
        title: "等比級数",
        topic: "級数の和",
        difficulty: "basic",
        type: "calculation",
        prompt: "sum_{n=0}^infty (1/3)^n の和はどれか。",
        choices: ["3/2", "1/3", "2/3", "発散する"],
        answerIndex: 0,
        explanation: "|r|<1 の等比級数の和は 1/(1-r) です。r=1/3 なので 1/(2/3)=3/2 です。"
      },
      {
        id: "cal-p-series",
        sectionId: "sequences-series",
        title: "p 級数の収束",
        topic: "収束判定",
        difficulty: "standard",
        prompt: "sum_{n=1}^infty 1/n^p が収束する条件はどれか。",
        choices: ["p>1", "p>=1", "p<1", "すべての p で収束"],
        answerIndex: 0,
        explanation: "p 級数は p>1 のとき収束し、p<=1 のとき発散します。"
      },
      {
        id: "cal-radius-power-series",
        sectionId: "sequences-series",
        title: "冪級数の収束半径",
        topic: "冪級数",
        difficulty: "advanced",
        type: "calculation",
        prompt: "sum_{n=0}^infty x^n/2^n の収束半径 R はどれか。",
        choices: ["2", "1/2", "1", "無限大"],
        answerIndex: 0,
        explanation: "これは比が x/2 の等比級数です。|x/2|<1、つまり |x|<2 なので収束半径は 2 です。"
      },
      {
        id: "cal-partial-derivative",
        sectionId: "multivariable-differentiation",
        title: "偏微分の計算",
        topic: "偏微分",
        difficulty: "basic",
        type: "calculation",
        prompt: "f(x,y)=x^2 y+3y の x に関する偏微分 f_x はどれか。",
        choices: ["2xy", "x^2+3", "2xy+3", "2x+y"],
        answerIndex: 0,
        explanation: "y を定数とみなして x で微分します。x^2 y の微分は 2xy、3y の微分は 0 です。"
      },
      {
        id: "cal-gradient",
        sectionId: "multivariable-differentiation",
        title: "勾配ベクトル",
        topic: "勾配",
        difficulty: "standard",
        type: "calculation",
        prompt: "f(x,y)=x^2+y^2 の点 (1,2) における勾配はどれか。",
        choices: ["(2,4)", "(1,2)", "(2,2)", "(4,2)"],
        answerIndex: 0,
        explanation: "grad f=(2x,2y) です。点 (1,2) を代入して (2,4) になります。"
      },
      {
        id: "cal-critical-point",
        sectionId: "multivariable-differentiation",
        title: "極値判定",
        topic: "ヘッセ行列",
        difficulty: "advanced",
        prompt: "f(x,y)=x^2+y^2 は点 (0,0) でどの性質を持つか。",
        choices: ["極小", "極大", "鞍点", "判定不能"],
        answerIndex: 0,
        explanation: "f(x,y)>=0 で、(0,0) のときだけ 0 です。したがって (0,0) は極小点です。"
      },
      {
        id: "cal-double-integral-rectangle",
        sectionId: "multiple-integrals",
        title: "長方形領域の二重積分",
        topic: "二重積分",
        difficulty: "basic",
        type: "calculation",
        prompt: "領域 0<=x<=1, 0<=y<=2 で int int 1 dA の値はどれか。",
        choices: ["2", "1", "3", "4"],
        answerIndex: 0,
        explanation: "被積分関数が 1 の二重積分は領域の面積です。長方形の面積は 1*2=2 です。"
      },
      {
        id: "cal-double-integral-simple",
        sectionId: "multiple-integrals",
        title: "反復積分",
        topic: "二重積分",
        difficulty: "standard",
        type: "calculation",
        prompt: "int_0^1 int_0^1 (x+y) dy dx の値はどれか。",
        choices: ["1", "1/2", "2", "3/2"],
        answerIndex: 0,
        explanation: "内側を y で積分すると x+1/2 です。さらに 0 から 1 まで x で積分して 1/2+1/2=1 です。"
      },
      {
        id: "cal-jacobian-polar",
        sectionId: "multiple-integrals",
        title: "極座標変換のヤコビアン",
        topic: "変数変換",
        difficulty: "standard",
        prompt: "極座標変換 x=r cos(theta), y=r sin(theta) のヤコビアンの絶対値はどれか。",
        choices: ["r", "r^2", "1/r", "cos(theta)"],
        answerIndex: 0,
        explanation: "極座標変換では面積要素が dA=r dr dtheta になります。したがってヤコビアンの絶対値は r です。"
      }
    ]
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

const problemTypeLabels = {
  concept: "概念",
  calculation: "計算"
};

const state = {
  subjectId: "linear-algebra",
  sectionId: "vectors",
  mode: "practice",
  difficulty: "all",
  problemType: "all",
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
  problemTypeFilter: document.querySelector("#problemTypeFilter"),
  resetDataButton: document.querySelector("#resetDataButton"),
  practiceView: document.querySelector("#practiceView"),
  reviewView: document.querySelector("#reviewView"),
  historyView: document.querySelector("#historyView"),
  problemSection: document.querySelector("#problemSection"),
  problemTopic: document.querySelector("#problemTopic"),
  problemDifficulty: document.querySelector("#problemDifficulty"),
  problemType: document.querySelector("#problemType"),
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
  if (state.problemType !== "all") {
    problems = problems.filter((problem) => getProblemType(problem) === state.problemType);
  }
  return problems;
}

function getProblemType(problem) {
  return problem.type ?? "concept";
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function matrixLiteralToTex(literal) {
  const body = literal.slice(2, -2);
  const rows = body.split(/\],\s*\[/).map((row) =>
    row
      .replace(/^\[/, "")
      .replace(/\]$/, "")
      .split(",")
      .map((cell) => cell.trim())
      .join(" & ")
  );
  return `\\(\\begin{pmatrix}${rows.join(" \\\\ ")}\\end{pmatrix}\\)`;
}

function formatMathText(text) {
  const placeholders = [];
  const stashMath = (tex) => {
    const token = `@@MATH_${placeholders.length}@@`;
    placeholders.push(tex);
    return token;
  };

  let formatted = text.replace(/\[\[[\s\S]*?\]\]/g, (match) => {
    return stashMath(matrixLiteralToTex(match));
  });

  formatted = escapeHtml(formatted);

  const replacements = [
    [/\bR\^(\d+)\b/g, (_match, dim) => `\\(R^${dim}\\)`],
    [/\bP(\d+)\b/g, (_match, dim) => `\\(P_${dim}\\)`],
    [/\bdet\(([^)]+)\)/g, (_match, value) => `\\(\\det(${value})\\)`],
    [/\brank\(([^)]+)\)/g, (_match, value) => `\\(\\operatorname{rank}(${value})\\)`],
    [/\btrace\(([^)]+)\)/g, (_match, value) => `\\(\\operatorname{trace}(${value})\\)`],
    [/\bker\(([^)]+)\)/g, (_match, value) => `\\(\\ker(${value})\\)`],
    [/\bIm\(([^)]+)\)/g, (_match, value) => `\\(\\operatorname{Im}(${value})\\)`],
    [/\bdiag\(([^)]+)\)/g, (_match, value) => `\\(\\operatorname{diag}(${value})\\)`],
    [/\bdim ([A-Z][A-Za-z0-9]*)/g, (_match, value) => `\\(\\dim ${value}\\)`],
    [/\bCol\(([^)]+)\)/g, (_match, value) => `\\(\\operatorname{Col}(${value})\\)`],
    [/\bRow\(([^)]+)\)/g, (_match, value) => `\\(\\operatorname{Row}(${value})\\)`],
    [/\bsqrt\(([^)]+)\)/g, (_match, value) => `\\(\\sqrt{${value}}\\)`],
    [/\blim\s+([a-z])->([^ ]+)\s+([^。]+)/g, (_match, variable, target, value) => `\\(\\lim_{${variable}\\to ${target}} ${value}\\)`],
    [/\bint_([^ ]+)\s+([^。]+?)\s+d([a-zA-Z]+)/g, (_match, range, value, variable) => `\\(\\int_{${range}} ${value}\\,d${variable}\\)`],
    [/\bint\s+([^。]+?)\s+d([a-zA-Z]+)/g, (_match, value, variable) => `\\(\\int ${value}\\,d${variable}\\)`],
    [/\bsum_\{([^}]+)\}\^([A-Za-z0-9]+)\s+([^。]+)/g, (_match, lower, upper, value) => `\\(\\sum_{${lower}}^{${upper}} ${value}\\)`],
    [/\bgrad ([A-Za-z][A-Za-z0-9]*)/g, (_match, value) => `\\(\\nabla ${value}\\)`],
    [/\|\|([^|]+)\|\|/g, (_match, value) => `\\(\\lVert ${value} \\rVert\\)`],
    [/([A-Za-zλΣ]+)\^\{?(-?1|T|k|\d+)\}?/g, (_match, base, exp) => `\\(${base}^{${exp}}\\)`],
    [/\(([+-]?\d+(?:\/\d+)?|[a-zA-Z]\d?)(?:,\s*([+-]?\d+(?:\/\d+)?|[a-zA-Z]\d?)){1,5}\)/g, (match) => `\\(${match}\\)`],
    [/([A-Za-zλΣ][A-Za-z0-9λΣ]*)=([A-Za-z0-9λΣ+\-*/^{}()]+)/g, (_match, left, right) => `\\(${left}=${right}\\)`],
    [/([xyz](?:[+\-][xyz])*)=([+-]?\d+)/g, (_match, left, right) => `\\(${left}=${right}\\)`]
  ];

  replacements.forEach(([pattern, toTex]) => {
    formatted = formatted.replace(pattern, (...args) => stashMath(toTex(...args)));
  });

  placeholders.forEach((value, index) => {
    formatted = formatted.replaceAll(`@@MATH_${index}@@`, value);
  });

  return formatted;
}

function setMathContent(element, text) {
  element.innerHTML = formatMathText(text);
}

function queueMathTypeset() {
  if (!window.MathJax?.typesetPromise) return;
  window.MathJax.typesetPromise([document.body]).catch(() => {});
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
    els.problemType.textContent = "";
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
  els.problemType.textContent = problemTypeLabels[getProblemType(problem)];
  els.problemTitle.textContent = problem.title;
  setMathContent(els.problemPrompt, problem.prompt);
  els.answerChoices.innerHTML = "";
  els.feedback.className = "feedback hidden";
  els.feedback.textContent = "";
  els.submitAnswerButton.disabled = state.answered;

  problem.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button";
    button.innerHTML = formatMathText(choice);
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
  queueMathTypeset();
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
  setMathContent(
    els.feedback,
    correct
      ? `正解です。${problem.explanation}`
      : `不正解です。正解は「${problem.choices[problem.answerIndex]}」。${problem.explanation}`
  );
  queueMathTypeset();
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
      <div class="item-meta"><span>${problem.sectionTitle}</span><span>${problem.topic}</span><span>${difficultyLabels[problem.difficulty]}</span><span>${problemTypeLabels[getProblemType(problem)]}</span></div>
      <h3>${problem.title}</h3>
      <p>${formatMathText(problem.prompt)}</p>
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
      <p>選択: ${formatMathText(problem.choices[attempt.selectedChoice])}</p>
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
  els.problemTypeFilter.value = state.problemType;
  renderSubjects();
  renderSections();
  renderMode();
  renderSummary();
  renderProblem();
  renderReview();
  renderHistory();
  queueMathTypeset();
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

els.problemTypeFilter.addEventListener("change", () => {
  state.problemType = els.problemTypeFilter.value;
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
