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
      },
      {
        id: "cal-continuity-ivT",
        sectionId: "limits-continuity",
        title: "中間値の定理",
        topic: "連続関数の性質",
        difficulty: "standard",
        prompt: "f が [a,b] で連続で、f(a)<0, f(b)>0 とする。必ず言えることはどれか。",
        choices: ["ある c in (a,b) で f(c)=0", "f は単調増加である", "f'(c)=0 となる c がある", "f は最大値を持たない"],
        answerIndex: 0,
        explanation: "連続関数は端点値の間のすべての値を取ります。0 は f(a) と f(b) の間にあるため、f(c)=0 となる点が存在します。"
      },
      {
        id: "cal-limit-sin-over-x",
        sectionId: "limits-continuity",
        title: "三角関数の基本極限",
        topic: "基本極限",
        difficulty: "basic",
        type: "calculation",
        prompt: "lim x->0 sin(x)/x の値はどれか。",
        choices: ["1", "0", "存在しない", "infty"],
        answerIndex: 0,
        explanation: "微積分で基本極限として用いる lim x->0 sin(x)/x は 1 です。"
      },
      {
        id: "cal-one-sided-limit",
        sectionId: "limits-continuity",
        title: "片側極限",
        topic: "片側極限",
        difficulty: "standard",
        prompt: "関数 f の x=a における左極限と右極限が異なるとき、lim x->a f(x) について正しいものはどれか。",
        choices: ["存在しない", "必ず 0 である", "必ず f(a) と等しい", "必ず無限大である"],
        answerIndex: 0,
        explanation: "両側極限が存在するには、左極限と右極限が一致する必要があります。"
      },
      {
        id: "cal-epsilon-delta-continuity",
        sectionId: "limits-continuity",
        title: "イプシロン・デルタによる連続性",
        topic: "厳密な定義",
        difficulty: "advanced",
        prompt: "f が a で連続であることを表す記述として正しいものはどれか。",
        choices: ["lim x->a f(x)=f(a)", "lim x->a f(x)=0", "f'(a)=0", "f(a) が最大値である"],
        answerIndex: 0,
        explanation: "点 a での連続性は、関数値 f(a) が存在し、x が a に近づくと f(x) が f(a) に近づくことです。"
      },
      {
        id: "cal-bounded-monotone-sequence",
        sectionId: "limits-continuity",
        title: "単調有界数列",
        topic: "数列の極限",
        difficulty: "advanced",
        prompt: "単調増加で上に有界な数列について正しいものはどれか。",
        choices: ["収束する", "必ず発散する", "必ず 0 に収束する", "極限は存在しない"],
        answerIndex: 0,
        explanation: "実数の完備性により、単調増加で上に有界な数列は上限に収束します。"
      },
      {
        id: "cal-product-rule",
        sectionId: "differentiation",
        title: "積の微分法",
        topic: "微分法",
        difficulty: "basic",
        type: "calculation",
        prompt: "f(x)=x^2 e^x の導関数はどれか。",
        choices: ["e^x(x^2+2x)", "2x e^x", "x^2 e^x", "e^x(x^2-2x)"],
        answerIndex: 0,
        explanation: "(x^2)'e^x+x^2(e^x)'=2x e^x+x^2 e^x=e^x(x^2+2x) です。"
      },
      {
        id: "cal-quotient-rule",
        sectionId: "differentiation",
        title: "商の微分法",
        topic: "微分法",
        difficulty: "standard",
        type: "calculation",
        prompt: "f(x)=1/x の導関数はどれか。",
        choices: ["-1/x^2", "1/x^2", "ln(x)", "x"],
        answerIndex: 0,
        explanation: "1/x=x^(-1) なので、べき関数の微分より f'(x)=-x^(-2)=-1/x^2 です。"
      },
      {
        id: "cal-implicit-differentiation",
        sectionId: "differentiation",
        title: "陰関数の微分",
        topic: "陰関数",
        difficulty: "advanced",
        type: "calculation",
        prompt: "x^2+y^2=1 で y を x の関数とみる。dy/dx はどれか。",
        choices: ["-x/y", "x/y", "-y/x", "2x+2y"],
        answerIndex: 0,
        explanation: "両辺を x で微分すると 2x+2y dy/dx=0 です。したがって dy/dx=-x/y です。"
      },
      {
        id: "cal-lhopital",
        sectionId: "differentiation",
        title: "ロピタルの定理",
        topic: "不定形",
        difficulty: "advanced",
        type: "calculation",
        prompt: "lim x->0 (e^x-1)/x の値はどれか。",
        choices: ["1", "0", "e", "存在しない"],
        answerIndex: 0,
        explanation: "0/0 型なので分子分母を微分すると e^x/1 です。x->0 で 1 になります。"
      },
      {
        id: "cal-second-derivative-concavity",
        sectionId: "differentiation",
        title: "二階導関数と凹凸",
        topic: "増減と凹凸",
        difficulty: "standard",
        prompt: "区間で f''(x)>0 が成り立つとき、グラフについて正しいものはどれか。",
        choices: ["下に凸である", "上に凸である", "必ず減少する", "必ず直線である"],
        answerIndex: 0,
        explanation: "二階導関数が正なら導関数が増加し、グラフは下に凸になります。"
      },
      {
        id: "cal-substitution-integral",
        sectionId: "integration",
        title: "置換積分",
        topic: "置換積分",
        difficulty: "standard",
        type: "calculation",
        prompt: "int 2x cos(x^2) dx はどれか。",
        choices: ["sin(x^2)+C", "cos(x^2)+C", "2sin(x)+C", "x^2 sin(x^2)+C"],
        answerIndex: 0,
        explanation: "u=x^2 とおくと du=2x dx です。int cos(u) du=sin(u)+C より sin(x^2)+C です。"
      },
      {
        id: "cal-improper-integral",
        sectionId: "integration",
        title: "広義積分",
        topic: "広義積分",
        difficulty: "advanced",
        type: "calculation",
        prompt: "int_1^infty 1/x^2 dx の値はどれか。",
        choices: ["1", "infty", "0", "2"],
        answerIndex: 0,
        explanation: "原始関数は -1/x です。上端を R として -1/R-(-1) を考え、R->infty とすると 1 です。"
      },
      {
        id: "cal-area-between-curves",
        sectionId: "integration",
        title: "曲線で囲まれた面積",
        topic: "面積",
        difficulty: "standard",
        type: "calculation",
        prompt: "0<=x<=1 で y=x と y=x^2 に囲まれる面積はどれか。",
        choices: ["1/6", "1/3", "1/2", "2/3"],
        answerIndex: 0,
        explanation: "0 から 1 では x>=x^2 です。面積は int_0^1 (x-x^2) dx = 1/2-1/3=1/6 です。"
      },
      {
        id: "cal-partial-fractions-integral",
        sectionId: "integration",
        title: "部分分数分解と積分",
        topic: "有理関数の積分",
        difficulty: "advanced",
        type: "calculation",
        prompt: "int 1/(x(x+1)) dx はどれか。",
        choices: ["ln|x|-ln|x+1|+C", "ln|x+1|+C", "1/(x+1)+C", "x/(x+1)+C"],
        answerIndex: 0,
        explanation: "1/(x(x+1))=1/x-1/(x+1) と分解できるので、積分は ln|x|-ln|x+1|+C です。"
      },
      {
        id: "cal-arc-length",
        sectionId: "integration",
        title: "曲線の長さ",
        topic: "応用",
        difficulty: "advanced",
        prompt: "y=f(x), a<=x<=b の曲線の長さを表す式はどれか。",
        choices: ["int_a^b sqrt(1+(f'(x))^2) dx", "int_a^b f(x) dx", "f(b)-f(a)", "int_a^b f'(x) dx"],
        answerIndex: 0,
        explanation: "曲線 y=f(x) の弧長は、微小変位の長さを積分して int_a^b sqrt(1+(f'(x))^2) dx で表されます。"
      },
      {
        id: "cal-comparison-test",
        sectionId: "sequences-series",
        title: "比較判定法",
        topic: "収束判定",
        difficulty: "standard",
        prompt: "0<=a_n<=b_n かつ sum b_n が収束するとき、正しい結論はどれか。",
        choices: ["sum a_n も収束する", "sum a_n は必ず発散する", "sum a_n は必ず sum b_n と等しい", "判定不能"],
        answerIndex: 0,
        explanation: "非負項級数では、大きい方の級数が収束すれば、小さい方の級数も収束します。"
      },
      {
        id: "cal-ratio-test",
        sectionId: "sequences-series",
        title: "比判定法",
        topic: "収束判定",
        difficulty: "standard",
        prompt: "級数 sum a_n で lim |a_{n+1}/a_n|=L とする。L<1 のとき正しい結論はどれか。",
        choices: ["絶対収束する", "発散する", "判定不能", "条件収束する"],
        answerIndex: 0,
        explanation: "比判定法では L<1 なら絶対収束、L>1 なら発散、L=1 なら判定不能です。"
      },
      {
        id: "cal-alternating-series",
        sectionId: "sequences-series",
        title: "交代級数判定",
        topic: "収束判定",
        difficulty: "standard",
        prompt: "a_n が単調減少して 0 に収束する正項数列のとき、sum (-1)^(n-1) a_n について正しいものはどれか。",
        choices: ["収束する", "必ず発散する", "必ず絶対収束する", "部分和が定義できない"],
        answerIndex: 0,
        explanation: "交代級数判定により、項の大きさが単調に 0 へ近づく交代級数は収束します。"
      },
      {
        id: "cal-taylor-series-exp",
        sectionId: "sequences-series",
        title: "指数関数のテイラー級数",
        topic: "テイラー級数",
        difficulty: "basic",
        prompt: "e^x のマクローリン級数として正しいものはどれか。",
        choices: ["sum_{n=0}^infty x^n/n!", "sum_{n=1}^infty x^n", "1/(1-x)", "sin(x)"],
        answerIndex: 0,
        explanation: "e^x はすべての階数の導関数が 0 で 1 なので、e^x=sum_{n=0}^infty x^n/n! です。"
      },
      {
        id: "cal-absolute-conditional",
        sectionId: "sequences-series",
        title: "絶対収束と条件収束",
        topic: "級数の性質",
        difficulty: "advanced",
        prompt: "sum |a_n| が収束するとき、sum a_n について正しいものはどれか。",
        choices: ["絶対収束する", "条件収束するとは限らないが必ず発散する", "必ず発散する", "判定不能である"],
        answerIndex: 0,
        explanation: "sum |a_n| が収束することを絶対収束と呼び、このとき元の級数 sum a_n も収束します。"
      },
      {
        id: "cal-total-differential",
        sectionId: "multivariable-differentiation",
        title: "全微分",
        topic: "全微分",
        difficulty: "standard",
        prompt: "z=f(x,y) の全微分 dz として正しいものはどれか。",
        choices: ["f_x dx + f_y dy", "f_x + f_y", "f_x f_y dx dy", "dx+dy"],
        answerIndex: 0,
        explanation: "2変数関数の一次近似は dz=f_x dx+f_y dy で表されます。"
      },
      {
        id: "cal-directional-derivative",
        sectionId: "multivariable-differentiation",
        title: "方向微分",
        topic: "方向微分",
        difficulty: "standard",
        type: "calculation",
        prompt: "grad f(1,2)=(2,4), 単位ベクトル u=(1,0) の方向微分はどれか。",
        choices: ["2", "4", "6", "0"],
        answerIndex: 0,
        explanation: "方向微分は grad f dot u です。(2,4) dot (1,0)=2 です。"
      },
      {
        id: "cal-tangent-plane",
        sectionId: "multivariable-differentiation",
        title: "接平面",
        topic: "接平面",
        difficulty: "advanced",
        prompt: "z=f(x,y) の点 (a,b) における接平面の一次近似として正しいものはどれか。",
        choices: ["z=f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b)", "z=f_x(a,b)+f_y(a,b)", "z=f(a,b)(x-a)(y-b)", "z=x+y"],
        answerIndex: 0,
        explanation: "多変数関数の接平面は、点での値と偏微分による一次近似で表されます。"
      },
      {
        id: "cal-lagrange-multiplier",
        sectionId: "multivariable-differentiation",
        title: "ラグランジュ未定乗数法",
        topic: "制約付き極値",
        difficulty: "advanced",
        prompt: "制約 g(x,y)=0 のもとで f(x,y) が極値を持つ候補点の条件として正しいものはどれか。",
        choices: ["grad f = lambda grad g", "f_x=f_y=0 のみ", "g_x=g_y=0 のみ", "f=g"],
        answerIndex: 0,
        explanation: "制約曲線上の極値候補では、f の勾配と制約 g の勾配が平行になり、grad f=lambda grad g と書けます。"
      },
      {
        id: "cal-mixed-partials",
        sectionId: "multivariable-differentiation",
        title: "混合偏導関数",
        topic: "高階偏微分",
        difficulty: "standard",
        prompt: "f_xy と f_yx が一致するための標準的な十分条件はどれか。",
        choices: ["2階偏導関数が近傍で連続である", "f が有界である", "f が一次関数である", "f_x=0 である"],
        answerIndex: 0,
        explanation: "Clairaut の定理により、2階偏導関数が連続なら混合偏導関数の順序を入れ替えられます。"
      },
      {
        id: "cal-triple-integral-box",
        sectionId: "multiple-integrals",
        title: "直方体上の三重積分",
        topic: "三重積分",
        difficulty: "basic",
        type: "calculation",
        prompt: "0<=x<=1, 0<=y<=2, 0<=z<=3 で int int int 1 dV の値はどれか。",
        choices: ["6", "3", "2", "1"],
        answerIndex: 0,
        explanation: "被積分関数が 1 の三重積分は体積です。直方体の体積は 1*2*3=6 です。"
      },
      {
        id: "cal-line-integral",
        sectionId: "multiple-integrals",
        title: "線積分の基本",
        topic: "線積分",
        difficulty: "advanced",
        type: "calculation",
        prompt: "F=(y,x), C: r(t)=(t,t), 0<=t<=1 とする。int_C F dot dr はどれか。",
        choices: ["1", "0", "2", "1/2"],
        answerIndex: 0,
        explanation: "F(r(t))=(t,t), r'(t)=(1,1) なので内積は 2t です。int_0^1 2t dt=1 です。"
      },
      {
        id: "cal-green-theorem",
        sectionId: "multiple-integrals",
        title: "Green の定理",
        topic: "ベクトル解析",
        difficulty: "advanced",
        prompt: "正向き単純閉曲線 C と領域 D に対し、Green の定理の形として正しいものはどれか。",
        choices: ["int_C P dx+Q dy = int int_D (Q_x-P_y) dA", "int_C P dx+Q dy = P+Q", "int int_D P dx = 0", "Q_x=P_y が常に必要"],
        answerIndex: 0,
        explanation: "Green の定理は平面上の線積分を領域上の二重積分 int int_D (Q_x-P_y) dA に変換します。"
      },
      {
        id: "cal-divergence-curl",
        sectionId: "multiple-integrals",
        title: "発散と回転",
        topic: "ベクトル解析",
        difficulty: "standard",
        prompt: "2次元ベクトル場 F=(P,Q) の発散 div F として正しいものはどれか。",
        choices: ["P_x+Q_y", "Q_x-P_y", "P_y+Q_x", "P+Q"],
        answerIndex: 0,
        explanation: "発散は各成分を対応する変数で微分して足したものです。2次元では div F=P_x+Q_y です。"
      },
      {
        id: "cal-change-order-integration",
        sectionId: "multiple-integrals",
        title: "積分順序の交換",
        topic: "累次積分",
        difficulty: "advanced",
        prompt: "0<=y<=x<=1 の領域を y を外側にして表すとどれか。",
        choices: ["0<=y<=1, y<=x<=1", "0<=x<=1, 0<=y<=1", "0<=y<=x, 0<=x<=y", "1<=y<=x"],
        answerIndex: 0,
        explanation: "領域は三角形です。y を固定すると y は 0 から 1、x は y から 1 まで動きます。"
      }
    ]
  },
  {
    id: "vector-calculus",
    name: "ベクトル解析",
    description: "ベクトル場、線積分、面積分、Green・Stokes・Gauss の定理を多変数微積分と線形代数の延長として学びます。",
    enabled: true,
    sections: [
      {
        id: "vector-fields",
        title: "1. ベクトル場と微分演算子",
        description: "スカラー場、ベクトル場、勾配、発散、回転、ラプラシアンを確認します。"
      },
      {
        id: "line-integrals",
        title: "2. 曲線と線積分",
        description: "曲線のパラメータ表示、スカラー場の線積分、ベクトル場の仕事積分を扱います。"
      },
      {
        id: "surface-integrals",
        title: "3. 曲面と面積分",
        description: "曲面のパラメータ表示、法線ベクトル、面素、フラックスを計算します。"
      },
      {
        id: "conservative-fields",
        title: "4. 保存場とポテンシャル",
        description: "経路独立性、ポテンシャル関数、完全微分、単連結領域での判定を学びます。"
      },
      {
        id: "integral-theorems",
        title: "5. 積分定理",
        description: "Green の定理、Stokes の定理、Gauss の発散定理を結びつけて理解します。"
      },
      {
        id: "curvilinear-coordinates",
        title: "6. 曲線座標と応用",
        description: "極座標、円柱座標、球座標、ヤコビアン、対称性を使う積分を扱います。"
      }
    ],
    problems: [
      {
        id: "vc-scalar-vector-field",
        sectionId: "vector-fields",
        title: "スカラー場とベクトル場",
        topic: "場の種類",
        difficulty: "basic",
        prompt: "各点 (x,y) にベクトル (x,-y) を対応させるものはどれか。",
        choices: ["ベクトル場", "スカラー場", "数列", "行列式"],
        answerIndex: 0,
        explanation: "点ごとに数ではなくベクトルを対応させるのでベクトル場です。"
      },
      {
        id: "vc-gradient-basic",
        sectionId: "vector-fields",
        title: "勾配の計算",
        topic: "勾配",
        difficulty: "basic",
        type: "calculation",
        prompt: "f(x,y,z)=x^2+yz の勾配 grad f はどれか。",
        choices: ["(2x,z,y)", "(x^2,z,y)", "(2x,y,z)", "(2x,0,z)"],
        answerIndex: 0,
        explanation: "各変数で偏微分すると f_x=2x, f_y=z, f_z=y なので grad f=(2x,z,y) です。"
      },
      {
        id: "vc-divergence-basic",
        sectionId: "vector-fields",
        title: "発散の計算",
        topic: "発散",
        difficulty: "basic",
        type: "calculation",
        prompt: "F=(x^2, y^2, z^2) の div F はどれか。",
        choices: ["2x+2y+2z", "x^2+y^2+z^2", "(2x,2y,2z)", "0"],
        answerIndex: 0,
        explanation: "div F は各成分を対応する変数で微分して足すので 2x+2y+2z です。"
      },
      {
        id: "vc-curl-basic",
        sectionId: "vector-fields",
        title: "回転の計算",
        topic: "回転",
        difficulty: "standard",
        type: "calculation",
        prompt: "F=(-y,x,0) の curl F はどれか。",
        choices: ["(0,0,2)", "(0,0,0)", "(1,-1,0)", "(-x,-y,0)"],
        answerIndex: 0,
        explanation: "curl F=(R_y-Q_z, P_z-R_x, Q_x-P_y) です。ここでは第3成分が 1-(-1)=2 になります。"
      },
      {
        id: "vc-laplacian",
        sectionId: "vector-fields",
        title: "ラプラシアン",
        topic: "ラプラシアン",
        difficulty: "standard",
        type: "calculation",
        prompt: "f(x,y)=x^2-y^2 のラプラシアン Delta f はどれか。",
        choices: ["0", "2", "-2", "x-y"],
        answerIndex: 0,
        explanation: "Delta f=f_xx+f_yy です。f_xx=2, f_yy=-2 なので Delta f=0 です。"
      },
      {
        id: "vc-grad-direction",
        sectionId: "vector-fields",
        title: "勾配の向き",
        topic: "勾配の意味",
        difficulty: "standard",
        prompt: "勾配ベクトル grad f が表す性質として正しいものはどれか。",
        choices: ["f が最も増加する方向を向く", "常に曲線の接線方向を向く", "常にゼロベクトルである", "面積要素を表す"],
        answerIndex: 0,
        explanation: "grad f は方向微分を最大にする方向を向き、その大きさが最大増加率を表します。"
      },
      {
        id: "vc-curve-param",
        sectionId: "line-integrals",
        title: "曲線の速度ベクトル",
        topic: "パラメータ表示",
        difficulty: "basic",
        type: "calculation",
        prompt: "r(t)=(t,t^2,0) の速度ベクトル r'(t) はどれか。",
        choices: ["(1,2t,0)", "(t,2t,0)", "(1,t,0)", "(0,2t,0)"],
        answerIndex: 0,
        explanation: "各成分を t で微分して r'(t)=(1,2t,0) です。"
      },
      {
        id: "vc-arc-length-element",
        sectionId: "line-integrals",
        title: "弧長要素",
        topic: "弧長",
        difficulty: "standard",
        prompt: "曲線 r(t) に沿うスカラー場の線積分で ds に対応するものはどれか。",
        choices: ["|r'(t)| dt", "r'(t) dt", "grad f dt", "dt/|r'(t)|"],
        answerIndex: 0,
        explanation: "弧長要素は曲線の速度の大きさを使って ds=|r'(t)|dt と表されます。"
      },
      {
        id: "vc-line-integral-scalar",
        sectionId: "line-integrals",
        title: "スカラー場の線積分",
        topic: "線積分",
        difficulty: "standard",
        type: "calculation",
        prompt: "f(x,y)=x, C: r(t)=(t,0), 0<=t<=2 とする。int_C f ds はどれか。",
        choices: ["2", "1", "4", "0"],
        answerIndex: 0,
        explanation: "f(r(t))=t, |r'(t)|=1 なので int_0^2 t dt=2 です。"
      },
      {
        id: "vc-line-integral-vector",
        sectionId: "line-integrals",
        title: "仕事積分",
        topic: "ベクトル場の線積分",
        difficulty: "standard",
        type: "calculation",
        prompt: "F=(x,y), C: r(t)=(t,t), 0<=t<=1 とする。int_C F dot dr はどれか。",
        choices: ["1", "2", "1/2", "0"],
        answerIndex: 0,
        explanation: "F(r(t))=(t,t), r'(t)=(1,1) なので内積は 2t。int_0^1 2t dt=1 です。"
      },
      {
        id: "vc-orientation-line",
        sectionId: "line-integrals",
        title: "向きと線積分",
        topic: "曲線の向き",
        difficulty: "standard",
        prompt: "ベクトル場の線積分 int_C F dot dr で曲線の向きを逆にすると値はどうなるか。",
        choices: ["符号が反対になる", "常に同じになる", "必ず 0 になる", "2倍になる"],
        answerIndex: 0,
        explanation: "dr の向きが反転するため、同じ経路を逆向きにたどる仕事積分は符号が反対になります。"
      },
      {
        id: "vc-fundamental-line-integral",
        sectionId: "line-integrals",
        title: "線積分の基本定理",
        topic: "保存場",
        difficulty: "advanced",
        prompt: "F=grad phi のとき、点 A から点 B への線積分 int_C F dot dr はどれか。",
        choices: ["phi(B)-phi(A)", "phi(A)+phi(B)", "0 に限る", "経路の長さ"],
        answerIndex: 0,
        explanation: "勾配場の線積分はポテンシャルの端点値の差で決まり、経路に依存しません。"
      },
      {
        id: "vc-surface-param",
        sectionId: "surface-integrals",
        title: "曲面の接ベクトル",
        topic: "曲面のパラメータ表示",
        difficulty: "basic",
        type: "calculation",
        prompt: "r(u,v)=(u,v,u+v) の r_u と r_v はどれか。",
        choices: ["(1,0,1), (0,1,1)", "(u,0,1), (0,v,1)", "(1,1,0), (0,0,1)", "(u,v,1), (1,1,0)"],
        answerIndex: 0,
        explanation: "u と v でそれぞれ偏微分して r_u=(1,0,1), r_v=(0,1,1) です。"
      },
      {
        id: "vc-surface-normal",
        sectionId: "surface-integrals",
        title: "法線ベクトル",
        topic: "外積",
        difficulty: "standard",
        type: "calculation",
        prompt: "r(u,v)=(u,v,0) に対し r_u x r_v はどれか。",
        choices: ["(0,0,1)", "(0,0,-1)", "(1,1,0)", "(u,v,0)"],
        answerIndex: 0,
        explanation: "r_u=(1,0,0), r_v=(0,1,0) なので外積は (0,0,1) です。"
      },
      {
        id: "vc-surface-area-element",
        sectionId: "surface-integrals",
        title: "面積要素",
        topic: "面積分",
        difficulty: "standard",
        prompt: "パラメータ表示 r(u,v) の曲面で面積要素 dS に対応するものはどれか。",
        choices: ["|r_u x r_v| du dv", "r_u dot r_v du dv", "|r_u+r_v| du dv", "du+dv"],
        answerIndex: 0,
        explanation: "接ベクトルが張る微小平行四辺形の面積は外積の大きさで表されます。"
      },
      {
        id: "vc-flux-plane",
        sectionId: "surface-integrals",
        title: "平面を通るフラックス",
        topic: "フラックス",
        difficulty: "standard",
        type: "calculation",
        prompt: "F=(0,0,3)、S は xy 平面上の単位正方形、上向き法線とする。int_S F dot n dS はどれか。",
        choices: ["3", "1", "0", "-3"],
        answerIndex: 0,
        explanation: "上向き単位法線は (0,0,1) なので F dot n=3。面積が 1 のためフラックスは 3 です。"
      },
      {
        id: "vc-orientation-surface",
        sectionId: "surface-integrals",
        title: "曲面の向き",
        topic: "向き付け",
        difficulty: "standard",
        prompt: "向き付けられた曲面の法線を反対向きにするとフラックス積分はどうなるか。",
        choices: ["符号が反対になる", "常に同じになる", "必ず正になる", "面積分が定義できなくなる"],
        answerIndex: 0,
        explanation: "法線ベクトル n が -n に変わるため、F dot n dS の符号が反転します。"
      },
      {
        id: "vc-closed-surface",
        sectionId: "surface-integrals",
        title: "閉曲面の標準的な向き",
        topic: "閉曲面",
        difficulty: "basic",
        prompt: "閉曲面のフラックスで通常用いる正の向きはどれか。",
        choices: ["外向き法線", "内向き法線", "任意の接線方向", "z 軸正方向だけ"],
        answerIndex: 0,
        explanation: "閉曲面では領域から外へ向かう外向き法線を正の向きとして使うのが標準です。"
      },
      {
        id: "vc-conservative-definition",
        sectionId: "conservative-fields",
        title: "保存場の定義",
        topic: "保存場",
        difficulty: "basic",
        prompt: "ベクトル場 F が保存場であることの説明として正しいものはどれか。",
        choices: ["あるスカラー関数 phi が存在して F=grad phi と書ける", "発散が常に 1 である", "回転が常に無限大である", "曲面上でだけ定義される"],
        answerIndex: 0,
        explanation: "保存場とはポテンシャル関数 phi の勾配として表せるベクトル場です。"
      },
      {
        id: "vc-potential-basic",
        sectionId: "conservative-fields",
        title: "ポテンシャルの計算",
        topic: "ポテンシャル",
        difficulty: "standard",
        type: "calculation",
        prompt: "F=(2x,2y) のポテンシャル phi として正しいものはどれか。",
        choices: ["x^2+y^2", "2x+2y", "xy", "x^2-y^2"],
        answerIndex: 0,
        explanation: "grad(x^2+y^2)=(2x,2y) なので phi=x^2+y^2 がポテンシャルです。"
      },
      {
        id: "vc-path-independence",
        sectionId: "conservative-fields",
        title: "経路独立性",
        topic: "経路独立",
        difficulty: "standard",
        prompt: "保存場の線積分について正しいものはどれか。",
        choices: ["端点だけで決まり経路に依存しない", "曲線の長さだけで決まる", "必ず正である", "閉曲線上では必ず 1 になる"],
        answerIndex: 0,
        explanation: "保存場では線積分がポテンシャルの端点値の差に等しいため、経路に依存しません。"
      },
      {
        id: "vc-curl-free-test",
        sectionId: "conservative-fields",
        title: "保存場の判定",
        topic: "回転なし",
        difficulty: "advanced",
        prompt: "単連結領域で滑らかな 3次元ベクトル場 F が保存場であるための代表的な判定条件はどれか。",
        choices: ["curl F=0", "div F=1", "F が定数でない", "F dot F=0"],
        answerIndex: 0,
        explanation: "単連結領域では、滑らかなベクトル場について curl F=0 が保存場であることと同値になります。"
      },
      {
        id: "vc-closed-loop-conservative",
        sectionId: "conservative-fields",
        title: "閉曲線上の線積分",
        topic: "保存場",
        difficulty: "standard",
        prompt: "保存場 F に対して任意の閉曲線 C 上の int_C F dot dr はどれか。",
        choices: ["0", "1", "曲線の長さ", "面積"],
        answerIndex: 0,
        explanation: "閉曲線では始点と終点が一致するため、ポテンシャルの差は 0 になります。"
      },
      {
        id: "vc-green-theorem",
        sectionId: "integral-theorems",
        title: "Green の定理",
        topic: "Green の定理",
        difficulty: "standard",
        prompt: "平面領域 D の正向き境界 C に対する Green の定理として正しいものはどれか。",
        choices: ["int_C P dx+Q dy = int int_D (Q_x-P_y) dA", "int_C P dx+Q dy = int int_D (P_x+Q_y) dA", "int_C P dx = P+Q", "int int_D Q_x dA = 0"],
        answerIndex: 0,
        explanation: "Green の定理は境界上の線積分を領域上の回転成分 Q_x-P_y の二重積分に変換します。"
      },
      {
        id: "vc-green-area",
        sectionId: "integral-theorems",
        title: "Green の定理と面積",
        topic: "面積公式",
        difficulty: "advanced",
        prompt: "正向き単純閉曲線 C が囲む面積 A を表す式として正しいものはどれか。",
        choices: ["A=1/2 int_C x dy-y dx", "A=int_C x dx+y dy", "A=int_C ds", "A=int_C x dy+y dx"],
        answerIndex: 0,
        explanation: "P=-y/2, Q=x/2 と置くと Q_x-P_y=1 となり、Green の定理から面積公式が得られます。"
      },
      {
        id: "vc-stokes-theorem",
        sectionId: "integral-theorems",
        title: "Stokes の定理",
        topic: "Stokes の定理",
        difficulty: "advanced",
        prompt: "曲面 S の境界を C とするとき、Stokes の定理として正しいものはどれか。",
        choices: ["int_C F dot dr = int_S curl F dot n dS", "int_S F dot n dS = int_V div F dV", "int_C F dot dr = int_S div F dS", "int_S grad F dS = 0"],
        answerIndex: 0,
        explanation: "Stokes の定理は境界曲線上の循環を、曲面上の回転のフラックスに変換します。"
      },
      {
        id: "vc-divergence-theorem",
        sectionId: "integral-theorems",
        title: "Gauss の発散定理",
        topic: "発散定理",
        difficulty: "advanced",
        prompt: "閉曲面 S が囲む立体 V に対する発散定理として正しいものはどれか。",
        choices: ["int_S F dot n dS = int_V div F dV", "int_C F dot dr = int_S F dS", "int_V curl F dV = int_S div F dS", "int_S F dot n dS = 0 に限る"],
        answerIndex: 0,
        explanation: "Gauss の発散定理は閉曲面を通る総フラックスを、内部領域での発散の体積積分に変換します。"
      },
      {
        id: "vc-divergence-sphere",
        sectionId: "integral-theorems",
        title: "発散定理の計算",
        topic: "発散定理",
        difficulty: "advanced",
        type: "calculation",
        prompt: "F=(x,y,z)、S は半径 1 の球面外向きとする。int_S F dot n dS はどれか。",
        choices: ["4pi", "3", "4pi/3", "0"],
        answerIndex: 0,
        explanation: "div F=3 です。単位球の体積は 4pi/3 なので、発散定理より 3*(4pi/3)=4pi です。"
      },
      {
        id: "vc-polar-jacobian",
        sectionId: "curvilinear-coordinates",
        title: "極座標のヤコビアン",
        topic: "極座標",
        difficulty: "basic",
        prompt: "極座標 x=r cos(theta), y=r sin(theta) の面積要素はどれか。",
        choices: ["r dr dtheta", "dr dtheta", "r^2 dr dtheta", "1/r dr dtheta"],
        answerIndex: 0,
        explanation: "極座標ではヤコビアンの絶対値が r なので dA=r dr dtheta です。"
      },
      {
        id: "vc-cylindrical-volume",
        sectionId: "curvilinear-coordinates",
        title: "円柱座標の体積要素",
        topic: "円柱座標",
        difficulty: "basic",
        prompt: "円柱座標 (r,theta,z) の体積要素 dV として正しいものはどれか。",
        choices: ["r dr dtheta dz", "dr dtheta dz", "r^2 sin(phi) dr dtheta dz", "dz/r"],
        answerIndex: 0,
        explanation: "xy 平面の極座標部分でヤコビアン r が現れるため、dV=r dr dtheta dz です。"
      },
      {
        id: "vc-spherical-volume",
        sectionId: "curvilinear-coordinates",
        title: "球座標の体積要素",
        topic: "球座標",
        difficulty: "standard",
        prompt: "球座標 (rho,theta,phi) で dV として正しいものはどれか。ただし phi は z 軸からの角とする。",
        choices: ["rho^2 sin(phi) d rho dtheta dphi", "rho d rho dtheta dphi", "sin(theta) d rho dtheta dphi", "rho^2 d rho dtheta dphi"],
        answerIndex: 0,
        explanation: "球座標のヤコビアンは rho^2 sin(phi) です。"
      },
      {
        id: "vc-disk-area-polar",
        sectionId: "curvilinear-coordinates",
        title: "極座標での面積",
        topic: "極座標積分",
        difficulty: "standard",
        type: "calculation",
        prompt: "半径 2 の円板の面積を極座標で計算するとどれか。",
        choices: ["4pi", "2pi", "pi", "8pi"],
        answerIndex: 0,
        explanation: "int_0^{2pi} int_0^2 r dr dtheta = 2pi*2 = 4pi です。"
      },
      {
        id: "vc-radial-symmetry",
        sectionId: "curvilinear-coordinates",
        title: "対称性の利用",
        topic: "対称性",
        difficulty: "standard",
        prompt: "円板上で半径 r だけに依存する関数を積分するとき有効な座標はどれか。",
        choices: ["極座標", "直交座標だけ", "斜交座標だけ", "座標変換は使えない"],
        answerIndex: 0,
        explanation: "円板と半径だけに依存する関数は回転対称なので、極座標にすると領域と被積分関数が簡単になります。"
      }
    ]
  },
  {
    id: "abstract-algebra",
    name: "抽象代数",
    description: "群、環、体、加群、群作用、商構造、ガロア理論まで抽象代数の標準範囲を学びます。",
    enabled: true,
    sections: [
      {
        id: "groups",
        title: "1. 群と部分群",
        description: "群の公理、部分群、巡回群、位数、剰余類、共役類、Sylow 定理を確認します。"
      },
      {
        id: "homomorphisms",
        title: "2. 群準同型と商群",
        description: "準同型、核、像、正規部分群、商群、同型定理、自己同型、単純群を扱います。"
      },
      {
        id: "rings",
        title: "3. 環とイデアル",
        description: "環の定義、単元、零因子、部分環、イデアル、剰余環、素イデアル、CRT を学びます。"
      },
      {
        id: "polynomials-fields",
        title: "4. 多項式環と体",
        description: "ユークリッド整域、PID、UFD、既約多項式、体、有限体、拡大体の基本を扱います。"
      },
      {
        id: "modules-actions",
        title: "5. 加群と群作用",
        description: "加群、完全列、線形代数との対応、群作用、軌道、固定部分群を確認します。"
      },
      {
        id: "galois-intro",
        title: "6. ガロア理論の入口",
        description: "体拡大、正規性、分離性、自己同型、分解体、ガロア群、基本定理を学びます。"
      }
    ],
    problems: [
      {
        id: "aa-group-axioms",
        sectionId: "groups",
        title: "群の公理",
        topic: "群",
        difficulty: "basic",
        prompt: "集合 G と演算 * が群であるために必要な条件の組として正しいものはどれか。",
        choices: ["結合法則、単位元、逆元、閉性", "交換法則、分配法則、零元、順序", "極限、連続性、微分可能性", "基底、次元、内積"],
        answerIndex: 0,
        explanation: "群では演算について閉じており、結合法則、単位元の存在、各元の逆元の存在が必要です。交換法則は一般には不要です。"
      },
      {
        id: "aa-integer-additive-group",
        sectionId: "groups",
        title: "整数の加法群",
        topic: "群",
        difficulty: "basic",
        prompt: "整数全体 Z はどの演算について群になるか。",
        choices: ["加法", "乗法", "除法", "最大値を取る演算"],
        answerIndex: 0,
        explanation: "Z は加法について閉じており、単位元は 0、a の逆元は -a です。乗法では 2 の逆元が整数にありません。"
      },
      {
        id: "aa-subgroup-test",
        sectionId: "groups",
        title: "部分群判定",
        topic: "部分群",
        difficulty: "standard",
        prompt: "群 G の空でない部分集合 H が部分群であることを示す十分な判定として正しいものはどれか。",
        choices: ["任意の a,b in H について ab^{-1} in H", "任意の a,b in H について a+b in H", "H が有限集合である", "H が G と同じ濃度を持つ"],
        answerIndex: 0,
        explanation: "部分群判定法では、空でない H が ab^{-1} で閉じていれば、単位元、逆元、積について閉じていることが従います。"
      },
      {
        id: "aa-cyclic-group-order",
        sectionId: "groups",
        title: "巡回群の元の位数",
        topic: "巡回群",
        difficulty: "standard",
        type: "calculation",
        prompt: "加法群 Z/12Z で 8 の位数はどれか。",
        choices: ["3", "4", "8", "12"],
        answerIndex: 0,
        explanation: "加法群で 8 の位数は 12/gcd(12,8)=12/4=3 です。実際に 3*8=24 は 12 で 0 になります。"
      },
      {
        id: "aa-lagrange-theorem",
        sectionId: "groups",
        title: "ラグランジュの定理",
        topic: "部分群",
        difficulty: "standard",
        prompt: "有限群 G の部分群 H について、ラグランジュの定理が述べることはどれか。",
        choices: ["|H| は |G| を割り切る", "|G| は必ず素数である", "H は必ず正規部分群である", "G は必ず可換群である"],
        answerIndex: 0,
        explanation: "G は H の左剰余類に分割され、各剰余類の大きさは |H| と等しいため、|G|=[G:H]|H| です。"
      },
      {
        id: "aa-permutation-sign",
        sectionId: "groups",
        title: "置換の符号",
        topic: "置換群",
        difficulty: "advanced",
        type: "calculation",
        prompt: "S3 の置換 (123) の符号はどれか。",
        choices: ["+1", "-1", "0", "3"],
        answerIndex: 0,
        explanation: "3サイクル (123) は互換の積 (13)(12) のように 2 個の互換で表せます。偶数個なので符号は +1 です。"
      },
      {
        id: "aa-abelian-group",
        sectionId: "groups",
        title: "アーベル群",
        topic: "可換群",
        difficulty: "basic",
        prompt: "群 G がアーベル群であるとは、どの条件を満たすことか。",
        choices: ["任意の a,b in G について ab=ba", "任意の a in G について a^2=e", "G が有限集合である", "G が部分群を持たない"],
        answerIndex: 0,
        explanation: "アーベル群は群演算が可換な群です。加法群や剰余類の加法群は代表的な例です。"
      },
      {
        id: "aa-direct-product-order",
        sectionId: "groups",
        title: "直積群の位数",
        topic: "直積",
        difficulty: "standard",
        type: "calculation",
        prompt: "|G|=6, |H|=4 の有限群について、直積群 G x H の位数はどれか。",
        choices: ["24", "10", "6", "4"],
        answerIndex: 0,
        explanation: "直積群 G x H の元は組 (g,h) なので、位数は |G||H|=6*4=24 です。"
      },
      {
        id: "aa-conjugacy-class",
        sectionId: "groups",
        title: "共役類",
        topic: "共役",
        difficulty: "standard",
        prompt: "群 G の元 a の共役類として正しいものはどれか。",
        choices: ["{gag^{-1} | g in G}", "{ga | g in G}", "{a^n | n in Z}", "{g in G | ga=ag}"],
        answerIndex: 0,
        explanation: "共役類は G の元で a を挟んで gag^{-1} と書ける元全体です。最後の選択肢は中心化群です。"
      },
      {
        id: "aa-center-of-group",
        sectionId: "groups",
        title: "群の中心",
        topic: "中心",
        difficulty: "standard",
        prompt: "群 G の中心 Z(G) はどのような元全体か。",
        choices: ["G のすべての元と可換な元全体", "位数が最大の元全体", "単位元以外の元全体", "正規部分群でない元全体"],
        answerIndex: 0,
        explanation: "中心 Z(G) は任意の g in G と可換な元 z の集合です。Z(G) は G の正規部分群になります。"
      },
      {
        id: "aa-class-equation",
        sectionId: "groups",
        title: "類方程式",
        topic: "共役類",
        difficulty: "advanced",
        prompt: "有限群の類方程式が分解する対象として正しいものはどれか。",
        choices: ["群を中心の元と非自明な共役類に分ける", "群をすべて巡回部分群に分ける", "環をイデアルに分ける", "体を基底に分ける"],
        answerIndex: 0,
        explanation: "類方程式は G の元を共役類で分割し、中心の元は 1 点共役類として扱います。p 群の中心が非自明であることの証明にも使います。"
      },
      {
        id: "aa-sylow-count",
        sectionId: "groups",
        title: "Sylow 部分群の個数",
        topic: "Sylow 定理",
        difficulty: "advanced",
        prompt: "|G|=12 の群における Sylow 3-部分群の個数 n_3 が満たす条件はどれか。",
        choices: ["n_3 は 4 を割り、n_3=1 mod 3", "n_3 は 3 を割り、n_3=0 mod 4", "n_3 は必ず 3", "n_3 は必ず 12"],
        answerIndex: 0,
        explanation: "Sylow 定理より n_p は p を除いた部分を割り、かつ n_p=1 mod p です。ここでは n_3 は 4 を割り、1 mod 3 です。"
      },
      {
        id: "aa-homomorphism-definition",
        sectionId: "homomorphisms",
        title: "群準同型の定義",
        topic: "準同型",
        difficulty: "basic",
        prompt: "写像 f:G -> H が群準同型である条件として正しいものはどれか。",
        choices: ["f(ab)=f(a)f(b)", "f(a+b)=f(a)+f(b) だけを満たす", "f は必ず全単射である", "f(a)=a^2 である"],
        answerIndex: 0,
        explanation: "群準同型は群演算を保つ写像です。加法記法なら f(a+b)=f(a)+f(b)、乗法記法なら f(ab)=f(a)f(b) と書きます。"
      },
      {
        id: "aa-kernel-normal",
        sectionId: "homomorphisms",
        title: "核の性質",
        topic: "核",
        difficulty: "standard",
        prompt: "群準同型 f:G -> H の核 ker(f) について正しいものはどれか。",
        choices: ["G の正規部分群である", "H の部分群であるが G には含まれない", "必ず G 全体である", "必ず空集合である"],
        answerIndex: 0,
        explanation: "核は H の単位元に写る G の元全体で、G の正規部分群になります。"
      },
      {
        id: "aa-injective-kernel",
        sectionId: "homomorphisms",
        title: "単射と核",
        topic: "準同型",
        difficulty: "standard",
        prompt: "群準同型 f:G -> H が単射であることと同値な条件はどれか。",
        choices: ["ker(f)={e}", "Im(f)={e}", "ker(f)=G", "H が可換群である"],
        answerIndex: 0,
        explanation: "群準同型では、単射性は核が単位元だけからなることと同値です。線形写像の核による単射判定と同じ形です。"
      },
      {
        id: "aa-quotient-group",
        sectionId: "homomorphisms",
        title: "商群が定義できる条件",
        topic: "商群",
        difficulty: "standard",
        prompt: "部分群 N による商 G/N が群になるための標準的な条件はどれか。",
        choices: ["N が G の正規部分群である", "N が空集合である", "G が無限群である", "N の元がすべて位数 2 である"],
        answerIndex: 0,
        explanation: "剰余類の積 (aN)(bN)=abN が代表元の取り方によらず定まるには、N が正規部分群であることが必要です。"
      },
      {
        id: "aa-first-isomorphism-theorem",
        sectionId: "homomorphisms",
        title: "第一同型定理",
        topic: "同型定理",
        difficulty: "advanced",
        prompt: "群準同型 f:G -> H について、第一同型定理の結論として正しいものはどれか。",
        choices: ["G/ker(f) は Im(f) と同型", "G は H と必ず同型", "ker(f) は Im(f) と同型", "G/Im(f) は ker(f) と同型"],
        answerIndex: 0,
        explanation: "第一同型定理は、準同型の核で割った商群 G/ker(f) が像 Im(f) と自然に同型になることを述べます。"
      },
      {
        id: "aa-sign-homomorphism-kernel",
        sectionId: "homomorphisms",
        title: "符号準同型の核",
        topic: "準同型",
        difficulty: "advanced",
        prompt: "符号準同型 sgn:S_n -> {1,-1} の核はどれか。",
        choices: ["交代群 A_n", "対称群 S_n 全体", "恒等置換だけ", "すべての互換"],
        answerIndex: 0,
        explanation: "sgn の核は符号 +1 の置換全体です。これは偶置換全体からなる交代群 A_n です。"
      },
      {
        id: "aa-isomorphism",
        sectionId: "homomorphisms",
        title: "同型",
        topic: "同型",
        difficulty: "basic",
        prompt: "群 G と H が同型であるとは、どのような写像が存在することか。",
        choices: ["全単射な群準同型", "任意の全単射", "核が G 全体である準同型", "像が単位元だけである準同型"],
        answerIndex: 0,
        explanation: "同型は演算を保つ全単射です。同型な群は群として同じ構造を持つと考えます。"
      },
      {
        id: "aa-automorphism",
        sectionId: "homomorphisms",
        title: "自己同型",
        topic: "自己同型",
        difficulty: "standard",
        prompt: "群 G の自己同型とはどれか。",
        choices: ["G から G への同型", "G から任意の集合への写像", "G の任意の部分集合", "G の単位元だけを保つ写像"],
        answerIndex: 0,
        explanation: "自己同型は G の構造を保つ G から G への同型写像です。自己同型全体は合成で群になります。"
      },
      {
        id: "aa-second-isomorphism-theorem",
        sectionId: "homomorphisms",
        title: "第二同型定理",
        topic: "同型定理",
        difficulty: "advanced",
        prompt: "H が G の部分群、N が G の正規部分群のとき、第二同型定理の形として正しいものはどれか。",
        choices: ["HN/N は H/(H cap N) と同型", "G/H は N と同型", "H/N は G と同型", "HN は必ず直積 H x N である"],
        answerIndex: 0,
        explanation: "第二同型定理は HN/N と H/(H cap N) の自然な同型を与えます。商構造を比較する基本定理です。"
      },
      {
        id: "aa-simple-group",
        sectionId: "homomorphisms",
        title: "単純群",
        topic: "正規部分群",
        difficulty: "advanced",
        prompt: "非自明な群 G が単純群であるとは、どのような性質を持つことか。",
        choices: ["正規部分群が {e} と G だけである", "部分群をまったく持たない", "必ず可換である", "すべての元の位数が 2 である"],
        answerIndex: 0,
        explanation: "単純群は非自明な正規部分群を持たない群です。群を正規部分群と商群で分解する理論の基本単位です。"
      },
      {
        id: "aa-ring-definition",
        sectionId: "rings",
        title: "環の定義",
        topic: "環",
        difficulty: "basic",
        prompt: "環で要求される代表的な構造として正しいものはどれか。",
        choices: ["加法が可換群で、乗法が結合的で、分配法則を満たす", "乗法だけで群になる", "順序と距離を持つ", "すべての元が微分可能である"],
        answerIndex: 0,
        explanation: "環は加法と乗法を持ち、加法について可換群、乗法について結合法則、加法と乗法を結ぶ分配法則を満たします。"
      },
      {
        id: "aa-unit-integers",
        sectionId: "rings",
        title: "整数環の単元",
        topic: "単元",
        difficulty: "basic",
        prompt: "整数環 Z の単元はどれか。",
        choices: ["1 と -1", "すべての非零整数", "素数全体", "0 だけ"],
        answerIndex: 0,
        explanation: "単元は乗法逆元を同じ環の中に持つ元です。Z では 1 と -1 だけが整数の逆元を持ちます。"
      },
      {
        id: "aa-zero-divisor-mod6",
        sectionId: "rings",
        title: "零因子",
        topic: "剰余環",
        difficulty: "standard",
        type: "calculation",
        prompt: "環 Z/6Z で 2 は零因子か。",
        choices: ["零因子である", "単元である", "0 と等しい", "体の元である"],
        answerIndex: 0,
        explanation: "2*3=6 は Z/6Z で 0 です。2 も 3 も 0 ではないので、2 は零因子です。"
      },
      {
        id: "aa-ideal-definition",
        sectionId: "rings",
        title: "イデアルの条件",
        topic: "イデアル",
        difficulty: "standard",
        prompt: "可換環 R の部分集合 I がイデアルであるための条件として正しいものはどれか。",
        choices: ["I は加法部分群で、任意の r in R, a in I について ra in I", "I は乗法について群である", "I は必ず体である", "I は有限集合である"],
        answerIndex: 0,
        explanation: "イデアルは加法で閉じ、環の任意の元を掛けても中にとどまる部分集合です。商環 R/I を作る土台になります。"
      },
      {
        id: "aa-quotient-ring-mod",
        sectionId: "rings",
        title: "剰余環の計算",
        topic: "剰余環",
        difficulty: "standard",
        type: "calculation",
        prompt: "Z/7Z で 5+6 の値はどれか。",
        choices: ["4", "11", "1", "0"],
        answerIndex: 0,
        explanation: "5+6=11 で、11 を 7 で割った余りは 4 です。したがって Z/7Z では 5+6=4 です。"
      },
      {
        id: "aa-prime-maximal-ideal",
        sectionId: "rings",
        title: "極大イデアル",
        topic: "イデアル",
        difficulty: "advanced",
        prompt: "可換環 R のイデアル M が極大であることと対応する商環の性質はどれか。",
        choices: ["R/M が体である", "R/M が零環でない限り必ず無限環である", "R/M が群でない", "R/M が順序体である"],
        answerIndex: 0,
        explanation: "単位元を持つ可換環では、M が極大イデアルであることと商環 R/M が体であることは同値です。"
      },
      {
        id: "aa-ring-hom-kernel",
        sectionId: "rings",
        title: "環準同型の核",
        topic: "環準同型",
        difficulty: "standard",
        prompt: "環準同型 f:R -> S の核 ker(f) は R の何になるか。",
        choices: ["イデアル", "体", "単元群", "順序集合"],
        answerIndex: 0,
        explanation: "環準同型の核は加法部分群で、R の任意の元を掛けても核にとどまるためイデアルです。"
      },
      {
        id: "aa-integral-domain",
        sectionId: "rings",
        title: "整域",
        topic: "整域",
        difficulty: "standard",
        prompt: "可換環 R が整域であるための条件として正しいものはどれか。",
        choices: ["0 でない零因子を持たない", "すべての元が単元である", "イデアルを持たない", "有限集合である"],
        answerIndex: 0,
        explanation: "整域は 0 でない元同士の積が 0 にならない可換環です。体は整域ですが、整域が常に体とは限りません。"
      },
      {
        id: "aa-ring-characteristic",
        sectionId: "rings",
        title: "環の標数",
        topic: "標数",
        difficulty: "standard",
        type: "calculation",
        prompt: "環 Z/9Z の標数はどれか。",
        choices: ["9", "3", "0", "1"],
        answerIndex: 0,
        explanation: "標数は 1 を何回足すと 0 になるかの最小正整数です。Z/9Z では 9*1=0 なので標数は 9 です。"
      },
      {
        id: "aa-chinese-remainder",
        sectionId: "rings",
        title: "中国剰余定理",
        topic: "CRT",
        difficulty: "advanced",
        prompt: "m と n が互いに素なとき、中国剰余定理の同型として正しいものはどれか。",
        choices: ["Z/mnZ は Z/mZ x Z/nZ と同型", "Z/mZ は Z/nZ と同型", "Z/mnZ は常に体である", "Z/mZ x Z/nZ は零環である"],
        answerIndex: 0,
        explanation: "m,n が互いに素なら、mod mn の情報は mod m と mod n の組と同値で、Z/mnZ ≅ Z/mZ x Z/nZ です。"
      },
      {
        id: "aa-prime-ideal",
        sectionId: "rings",
        title: "素イデアル",
        topic: "イデアル",
        difficulty: "advanced",
        prompt: "可換環 R のイデアル P が素イデアルであることと対応する商環の性質はどれか。",
        choices: ["R/P が整域である", "R/P が必ず体である", "R/P が必ず有限環である", "R/P が単元を持たない"],
        answerIndex: 0,
        explanation: "素イデアル P は ab in P なら a in P または b in P を満たすイデアルで、これは R/P が整域であることと同値です。"
      },
      {
        id: "aa-polynomial-division",
        sectionId: "polynomials-fields",
        title: "多項式の割り算",
        topic: "多項式環",
        difficulty: "basic",
        type: "calculation",
        prompt: "体 F 上の多項式環 F[x] で x^2-1 を x-1 で割った余りはどれか。",
        choices: ["0", "1", "x", "-1"],
        answerIndex: 0,
        explanation: "x^2-1=(x-1)(x+1) と因数分解できます。したがって x-1 で割った余りは 0 です。"
      },
      {
        id: "aa-field-definition",
        sectionId: "polynomials-fields",
        title: "体の定義",
        topic: "体",
        difficulty: "basic",
        prompt: "体の性質として正しいものはどれか。",
        choices: ["0 でないすべての元が乗法逆元を持つ可換環", "すべての元が零因子である環", "加法だけを持つ群", "順序が必ず定まる集合"],
        answerIndex: 0,
        explanation: "体は 0 でない元がすべて乗法逆元を持つ可換環です。Q, R, Z/pZ などが基本例です。"
      },
      {
        id: "aa-finite-field-prime",
        sectionId: "polynomials-fields",
        title: "素数位数の有限体",
        topic: "有限体",
        difficulty: "standard",
        prompt: "Z/nZ が体になるための n の条件はどれか。",
        choices: ["n が素数である", "n が偶数である", "n が平方数である", "n が 1 より大きければ常に体である"],
        answerIndex: 0,
        explanation: "Z/nZ が体であることは、n が素数であることと同値です。合成数なら非自明な零因子が生じます。"
      },
      {
        id: "aa-irreducible-quadratic-r",
        sectionId: "polynomials-fields",
        title: "既約多項式",
        topic: "既約性",
        difficulty: "standard",
        prompt: "R[x] において x^2+1 について正しいものはどれか。",
        choices: ["既約である", "(x+1)(x-1) に分解できる", "一次多項式である", "零多項式である"],
        answerIndex: 0,
        explanation: "実数係数では x^2+1 は実根を持たない 2 次多項式なので、一次式の積に分解できず既約です。"
      },
      {
        id: "aa-extension-degree",
        sectionId: "polynomials-fields",
        title: "体拡大の次数",
        topic: "体拡大",
        difficulty: "advanced",
        prompt: "Q(sqrt(2)) を Q 上のベクトル空間と見るとき、自然な基底はどれか。",
        choices: ["{1, sqrt(2)}", "{sqrt(2)}", "{1,2,4}", "{0,1}"],
        answerIndex: 0,
        explanation: "Q(sqrt(2)) の任意の元は a+b sqrt(2) と一意に表せます。したがって Q 上の基底は {1, sqrt(2)} です。"
      },
      {
        id: "aa-euclidean-domain",
        sectionId: "polynomials-fields",
        title: "ユークリッド整域",
        topic: "整域",
        difficulty: "advanced",
        prompt: "体 F 上の多項式環 F[x] について正しいものはどれか。",
        choices: ["次数を使って割り算ができるユークリッド整域である", "必ず体である", "すべての多項式が単元である", "加法について閉じていない"],
        answerIndex: 0,
        explanation: "F[x] では次数を測度として割り算の定理が成り立つため、ユークリッド整域です。ただし x などは逆元を持たないので体ではありません。"
      },
      {
        id: "aa-pid-ufd",
        sectionId: "polynomials-fields",
        title: "PID と UFD",
        topic: "整域",
        difficulty: "advanced",
        prompt: "単項イデアル整域 PID について正しいものはどれか。",
        choices: ["すべてのイデアルが 1 元で生成され、UFD である", "すべての元が単元である", "必ず有限体である", "零因子を必ず持つ"],
        answerIndex: 0,
        explanation: "PID では任意のイデアルが (a) の形で、さらに一意分解整域 UFD になります。Z や体上の F[x] が基本例です。"
      },
      {
        id: "aa-eisenstein",
        sectionId: "polynomials-fields",
        title: "Eisenstein の既約判定",
        topic: "既約性",
        difficulty: "advanced",
        prompt: "整数係数多項式に対する Eisenstein の判定法が主に示す性質はどれか。",
        choices: ["Q 上の既約性", "実根の個数", "導関数の次数", "係数の総和"],
        answerIndex: 0,
        explanation: "Eisenstein の判定法は、ある素数 p による係数の割り切れ方から Q 上の既約性を示す方法です。"
      },
      {
        id: "aa-finite-field-order",
        sectionId: "polynomials-fields",
        title: "有限体の位数",
        topic: "有限体",
        difficulty: "standard",
        prompt: "有限体の元の個数としてあり得るものはどれか。",
        choices: ["p^n ただし p は素数, n>=1", "任意の合成数", "6 に限る", "無限大に限る"],
        answerIndex: 0,
        explanation: "有限体の位数は必ず素数冪 p^n です。逆に各 p^n に対して位数 p^n の有限体が同型を除いて一つ存在します。"
      },
      {
        id: "aa-transcendental-element",
        sectionId: "polynomials-fields",
        title: "超越元",
        topic: "体拡大",
        difficulty: "standard",
        prompt: "体拡大 K/F の元 alpha が F 上超越的であるとはどのようなことか。",
        choices: ["alpha を根に持つ F 係数の非零多項式が存在しない", "alpha が必ず 0 である", "alpha が F に属する", "alpha の最小多項式が一次式である"],
        answerIndex: 0,
        explanation: "F 上の非零多項式で alpha を消すものがあれば代数的、なければ超越的です。"
      },
      {
        id: "aa-module-definition",
        sectionId: "modules-actions",
        title: "加群の定義",
        topic: "加群",
        difficulty: "basic",
        prompt: "環 R 上の加群を、線形代数の言葉に近い形で説明するとどれか。",
        choices: ["体の代わりに環のスカラーを許したベクトル空間の一般化", "群の部分集合だけを集めたもの", "必ず内積を持つ空間", "有限集合に順序を入れたもの"],
        answerIndex: 0,
        explanation: "加群はスカラーが体ではなく一般の環である点を除けば、加法とスカラー倍を持つベクトル空間の一般化です。"
      },
      {
        id: "aa-z-module",
        sectionId: "modules-actions",
        title: "Z 加群",
        topic: "加群",
        difficulty: "standard",
        prompt: "Z 加群と本質的に同じ構造はどれか。",
        choices: ["アーベル群", "任意の群", "体", "順序集合"],
        answerIndex: 0,
        explanation: "アーベル群 A では整数 n によるスカラー倍を n 回の加法で定められます。逆に Z 加群の加法は可換群になります。"
      },
      {
        id: "aa-group-action-definition",
        sectionId: "modules-actions",
        title: "群作用の定義",
        topic: "群作用",
        difficulty: "basic",
        prompt: "群 G が集合 X に作用するとは、各 g in G が X の何として振る舞うことか。",
        choices: ["X から X への全単射", "X の部分集合", "X 上の実数値関数", "X の順序関係"],
        answerIndex: 0,
        explanation: "群作用では各群元 g が X の変換として働きます。単位元は恒等変換、積 gh は変換の合成に対応します。"
      },
      {
        id: "aa-orbit-stabilizer",
        sectionId: "modules-actions",
        title: "軌道安定化群定理",
        topic: "群作用",
        difficulty: "standard",
        prompt: "有限群 G が X に作用し x in X とする。軌道安定化群定理の式はどれか。",
        choices: ["|G|=|Orb(x)| |Stab(x)|", "|G|=|Orb(x)|+|Stab(x)|", "|Orb(x)|=|Stab(x)|", "|G|=|X|^2"],
        answerIndex: 0,
        explanation: "G から軌道 Orb(x) への写像 g -> gx の各ファイバーの大きさが |Stab(x)| なので、|G|=|Orb(x)||Stab(x)| です。"
      },
      {
        id: "aa-burnside-lemma",
        sectionId: "modules-actions",
        title: "バーンサイドの補題",
        topic: "群作用",
        difficulty: "advanced",
        prompt: "有限群 G が有限集合 X に作用するとき、軌道数を数える公式として正しいものはどれか。",
        choices: ["各 g の固定点数の平均", "各 g の位数の積", "X の元数から |G| を引いた値", "安定化群の共通部分の元数"],
        answerIndex: 0,
        explanation: "バーンサイドの補題は、軌道数が (1/|G|) sum_{g in G} |Fix(g)| で与えられることを述べます。"
      },
      {
        id: "aa-linear-map-as-module-hom",
        sectionId: "modules-actions",
        title: "線形写像との対応",
        topic: "加群準同型",
        difficulty: "standard",
        prompt: "体 F 上のベクトル空間を F 加群と見たとき、F 加群準同型に対応するものはどれか。",
        choices: ["F 線形写像", "任意の写像", "距離を保つ写像だけ", "全単射だけ"],
        answerIndex: 0,
        explanation: "F 加群準同型は加法と F のスカラー倍を保つ写像なので、通常の F 線形写像そのものです。"
      },
      {
        id: "aa-free-module",
        sectionId: "modules-actions",
        title: "自由加群",
        topic: "加群",
        difficulty: "standard",
        prompt: "環 R 上の自由加群の説明として正しいものはどれか。",
        choices: ["ある基底を持ち、R^n のように表せる加群", "必ず体である加群", "加法が定義されない集合", "群作用を持たない加群"],
        answerIndex: 0,
        explanation: "自由加群は基底を持つ加群です。体上のベクトル空間に似ていますが、一般の加群は基底を持つとは限りません。"
      },
      {
        id: "aa-quotient-module",
        sectionId: "modules-actions",
        title: "商加群",
        topic: "加群",
        difficulty: "standard",
        prompt: "R 加群 M と部分加群 N に対して M/N の元は何か。",
        choices: ["N による剰余類 m+N", "M と N の直積の元", "N の単元", "M の基底だけ"],
        answerIndex: 0,
        explanation: "商加群 M/N の元は m+N という剰余類です。商群や商ベクトル空間と同じ構成です。"
      },
      {
        id: "aa-exact-sequence",
        sectionId: "modules-actions",
        title: "完全列",
        topic: "加群準同型",
        difficulty: "advanced",
        prompt: "加群準同型の列で「完全」であるとは、各位置で何が成り立つことか。",
        choices: ["前の写像の像が次の写像の核に等しい", "すべての写像が零写像である", "すべての加群が自由である", "各加群の階数が同じである"],
        answerIndex: 0,
        explanation: "完全列では im(f)=ker(g) が各位置で成り立ちます。核と像を通じて代数構造を追跡する基本語彙です。"
      },
      {
        id: "aa-representation",
        sectionId: "modules-actions",
        title: "群の表現",
        topic: "群作用",
        difficulty: "advanced",
        prompt: "体 F 上の群 G の線形表現とは、G からどこへの準同型か。",
        choices: ["GL(V)", "V の部分集合", "F のイデアル", "Z(G)"],
        answerIndex: 0,
        explanation: "線形表現は群の元をベクトル空間 V の可逆線形変換として実現する準同型 G -> GL(V) です。"
      },
      {
        id: "aa-field-extension",
        sectionId: "galois-intro",
        title: "体拡大",
        topic: "体拡大",
        difficulty: "basic",
        prompt: "K が F の体拡大であるとは、どのような関係か。",
        choices: ["F が K の部分体である", "K が F のイデアルである", "F と K が互いに素である", "K が F の商群である"],
        answerIndex: 0,
        explanation: "体拡大 K/F とは、F が K の部分体として含まれている状況です。このとき K は F 上のベクトル空間にもなります。"
      },
      {
        id: "aa-minimal-polynomial",
        sectionId: "galois-intro",
        title: "最小多項式",
        topic: "代数拡大",
        difficulty: "standard",
        prompt: "sqrt(2) の Q 上の最小多項式はどれか。",
        choices: ["x^2-2", "x-2", "x^2+2", "x^2-4"],
        answerIndex: 0,
        explanation: "sqrt(2) は x^2-2 の根です。この多項式は Q 上既約なので、sqrt(2) の最小多項式です。"
      },
      {
        id: "aa-splitting-field",
        sectionId: "galois-intro",
        title: "分解体",
        topic: "分解体",
        difficulty: "standard",
        prompt: "体 F 上の多項式 f の分解体とはどれか。",
        choices: ["f が一次式の積に分解し、その根をすべて含む最小の体拡大", "f の係数をすべて 0 にする体", "f の次数を下げる商群", "f の導関数だけを含む集合"],
        answerIndex: 0,
        explanation: "分解体は、多項式が完全に一次因子へ分解するために必要な根をすべて加えた最小の体拡大です。"
      },
      {
        id: "aa-galois-group-basic",
        sectionId: "galois-intro",
        title: "ガロア群",
        topic: "ガロア群",
        difficulty: "standard",
        prompt: "体拡大 K/F のガロア群 Gal(K/F) の元は何か。",
        choices: ["F の各元を固定する K の体自己同型", "K の任意の部分集合", "F から K への任意の写像", "K のイデアル"],
        answerIndex: 0,
        explanation: "Gal(K/F) は、F の元を動かさない K の体自己同型全体です。合成を演算として群になります。"
      },
      {
        id: "aa-conjugates-sqrt2",
        sectionId: "galois-intro",
        title: "共役元",
        topic: "体自己同型",
        difficulty: "advanced",
        prompt: "Q(sqrt(2))/Q の Q 自己同型で sqrt(2) が写り得る先はどれか。",
        choices: ["sqrt(2) または -sqrt(2)", "2 のみ", "0 のみ", "任意の有理数"],
        answerIndex: 0,
        explanation: "自己同型は最小多項式 x^2-2 の根を根へ写します。したがって sqrt(2) の行き先は sqrt(2) または -sqrt(2) です。"
      },
      {
        id: "aa-fundamental-theorem-galois",
        sectionId: "galois-intro",
        title: "ガロア対応",
        topic: "基本定理",
        difficulty: "advanced",
        prompt: "有限ガロア拡大 K/F の基本定理が対応させるものはどれか。",
        choices: ["中間体と Gal(K/F) の部分群", "イデアルと素数", "ベクトルと行列", "極限と導関数"],
        answerIndex: 0,
        explanation: "ガロア理論の基本定理は、中間体 F <= E <= K とガロア群の部分群を包含関係を反転して対応させます。"
      },
      {
        id: "aa-tower-law",
        sectionId: "galois-intro",
        title: "次数公式",
        topic: "体拡大",
        difficulty: "standard",
        prompt: "体拡大 F <= E <= K が有限次のとき、次数公式として正しいものはどれか。",
        choices: ["[K:F]=[K:E][E:F]", "[K:F]=[K:E]+[E:F]", "[K:F]=[E:F]-[K:E]", "[K:F]=[K:E]/[E:F]"],
        answerIndex: 0,
        explanation: "体拡大をベクトル空間として見たとき、基底を掛け合わせることで [K:F]=[K:E][E:F] が成り立ちます。"
      },
      {
        id: "aa-normal-extension",
        sectionId: "galois-intro",
        title: "正規拡大",
        topic: "正規性",
        difficulty: "advanced",
        prompt: "代数拡大 K/F が正規拡大であることの説明として適切なものはどれか。",
        choices: ["F 上既約多項式が K に根を持てば K で完全に分解する", "K が必ず有限体である", "K/F の次数が必ず 1 である", "K が環でない"],
        answerIndex: 0,
        explanation: "正規拡大では、F 上既約な多項式が K に一つ根を持つなら、その共役根もすべて K に含まれます。"
      },
      {
        id: "aa-separable-extension",
        sectionId: "galois-intro",
        title: "分離拡大",
        topic: "分離性",
        difficulty: "advanced",
        prompt: "代数拡大が分離的であるとは、各元の最小多項式がどのような性質を持つことか。",
        choices: ["重根を持たない", "必ず一次式である", "係数がすべて整数である", "導関数が 0 である"],
        answerIndex: 0,
        explanation: "分離的とは最小多項式が重根を持たないことです。標数 0 の体上の代数拡大はすべて分離的です。"
      },
      {
        id: "aa-galois-extension",
        sectionId: "galois-intro",
        title: "ガロア拡大",
        topic: "ガロア拡大",
        difficulty: "advanced",
        prompt: "有限次代数拡大 K/F がガロア拡大であるための標準的な条件はどれか。",
        choices: ["正規かつ分離的である", "正規だが分離的でない", "必ず次数 2 である", "K が F と同じ体でないことだけ"],
        answerIndex: 0,
        explanation: "有限次の場合、K/F がガロア拡大であることは正規かつ分離的であることと同値です。"
      }
    ]
  },
  {
    id: "probability-statistics",
    name: "確率統計学",
    description: "確率、数え上げ、確率変数、分布、極限定理、標本分布、推定、検定、回帰と相関",
    enabled: true,
    sections: [
      {
        id: "probability-basics",
        title: "1. 確率の基本",
        description: "標本空間、事象、条件付き確率、独立性、ベイズの定理を確認します。"
      },
      {
        id: "combinatorics-counting",
        title: "2. 組合せと数え上げ",
        description: "順列、組合せ、包除原理、重複組合せ、超幾何分布への入口を確認します。"
      },
      {
        id: "random-variables",
        title: "3. 確率変数と期待値",
        description: "離散・連続確率変数、期待値、分散、共分散を扱います。"
      },
      {
        id: "distributions",
        title: "4. 代表的な確率分布",
        description: "二項分布、幾何分布、ポアソン分布、一様分布、指数分布、正規分布を学びます。"
      },
      {
        id: "limit-theorems",
        title: "5. 極限定理",
        description: "大数の法則、中心極限定理、正規近似、標本平均の漸近分布を扱います。"
      },
      {
        id: "sampling-distributions",
        title: "6. 標本分布",
        description: "標本平均、標本比率、t 分布、カイ二乗分布、F 分布を確認します。"
      },
      {
        id: "descriptive-statistics",
        title: "7. 記述統計",
        description: "平均、中央値、分散、標準偏差、四分位範囲、相関係数を確認します。"
      },
      {
        id: "estimation",
        title: "8. 推定",
        description: "点推定、不偏性、一致性、標本平均、信頼区間、最尤推定を扱います。"
      },
      {
        id: "hypothesis-testing",
        title: "9. 仮説検定",
        description: "帰無仮説、対立仮説、有意水準、p値、第1種・第2種の誤りを学びます。"
      },
      {
        id: "advanced-inference",
        title: "10. 発展的な統計的推測",
        description: "カイ二乗検定、分散分析、ベイズ推定、モデル選択の入口を扱います。"
      },
      {
        id: "regression-correlation",
        title: "11. 回帰と相関",
        description: "散布図、相関係数、単回帰、重回帰、最小二乗法、決定係数を確認します。"
      }
    ],
    problems: [
      {
        id: "ps-sample-space",
        sectionId: "probability-basics",
        title: "標本空間",
        topic: "標本空間",
        difficulty: "basic",
        prompt: "1個のサイコロを1回投げる試行の標本空間として正しいものはどれか。",
        choices: ["{1,2,3,4,5,6}", "{表,裏}", "{0,1}", "{偶数,奇数}"],
        answerIndex: 0,
        explanation: "標本空間は起こり得る基本結果をすべて集めた集合です。サイコロでは 1 から 6 までの目が基本結果です。"
      },
      {
        id: "ps-addition-rule-disjoint",
        sectionId: "probability-basics",
        title: "排反事象の和",
        topic: "確率の加法法則",
        difficulty: "basic",
        type: "calculation",
        prompt: "A と B が排反で P(A)=0.3, P(B)=0.2 のとき、P(A union B) はどれか。",
        choices: ["0.5", "0.1", "0.6", "0.06"],
        answerIndex: 0,
        explanation: "排反なら同時に起こらないので P(A union B)=P(A)+P(B)=0.3+0.2=0.5 です。"
      },
      {
        id: "ps-conditional-probability",
        sectionId: "probability-basics",
        title: "条件付き確率",
        topic: "条件付き確率",
        difficulty: "standard",
        type: "calculation",
        prompt: "P(A cap B)=0.12, P(B)=0.3 のとき、P(A|B) はどれか。",
        choices: ["0.4", "0.036", "0.18", "2.5"],
        answerIndex: 0,
        explanation: "P(A|B)=P(A cap B)/P(B)=0.12/0.3=0.4 です。"
      },
      {
        id: "ps-independence",
        sectionId: "probability-basics",
        title: "独立性の判定",
        topic: "独立性",
        difficulty: "standard",
        prompt: "事象 A と B が独立であるための条件として正しいものはどれか。",
        choices: ["P(A cap B)=P(A)P(B)", "P(A cap B)=0", "P(A)+P(B)=1", "A と B は同じ事象である"],
        answerIndex: 0,
        explanation: "独立性は、一方が起きたことが他方の確率を変えないことです。これは P(A cap B)=P(A)P(B) と同値です。"
      },
      {
        id: "ps-bayes-theorem",
        sectionId: "probability-basics",
        title: "ベイズの定理",
        topic: "ベイズの定理",
        difficulty: "advanced",
        type: "calculation",
        prompt: "P(A)=0.2, P(B|A)=0.9, P(B)=0.3 のとき、P(A|B) はどれか。",
        choices: ["0.6", "0.18", "0.24", "1.5"],
        answerIndex: 0,
        explanation: "ベイズの定理より P(A|B)=P(B|A)P(A)/P(B)=0.9*0.2/0.3=0.6 です。"
      },
      {
        id: "ps-discrete-expectation",
        sectionId: "random-variables",
        title: "離散確率変数の期待値",
        topic: "期待値",
        difficulty: "basic",
        type: "calculation",
        prompt: "X が 0,1 をそれぞれ確率 0.4,0.6 で取るとき、E[X] はどれか。",
        choices: ["0.6", "0.4", "1.0", "0.24"],
        answerIndex: 0,
        explanation: "E[X]=0*0.4+1*0.6=0.6 です。"
      },
      {
        id: "ps-variance-definition",
        sectionId: "random-variables",
        title: "分散の定義",
        topic: "分散",
        difficulty: "basic",
        prompt: "確率変数 X の分散 Var(X) として正しいものはどれか。",
        choices: ["E[(X-E[X])^2]", "E[X]^2", "E[X^2]^2", "E[X-E[X]]"],
        answerIndex: 0,
        explanation: "分散は平均からのずれの2乗の期待値で、Var(X)=E[(X-E[X])^2] です。"
      },
      {
        id: "ps-variance-shortcut",
        sectionId: "random-variables",
        title: "分散の計算公式",
        topic: "分散",
        difficulty: "standard",
        type: "calculation",
        prompt: "E[X]=2, E[X^2]=7 のとき、Var(X) はどれか。",
        choices: ["3", "5", "9", "11"],
        answerIndex: 0,
        explanation: "Var(X)=E[X^2]-E[X]^2=7-2^2=3 です。"
      },
      {
        id: "ps-linearity-expectation",
        sectionId: "random-variables",
        title: "期待値の線形性",
        topic: "期待値",
        difficulty: "standard",
        type: "calculation",
        prompt: "E[X]=3 のとき、E[2X+5] はどれか。",
        choices: ["11", "10", "13", "16"],
        answerIndex: 0,
        explanation: "期待値の線形性より E[2X+5]=2E[X]+5=2*3+5=11 です。"
      },
      {
        id: "ps-covariance-zero",
        sectionId: "random-variables",
        title: "共分散",
        topic: "共分散",
        difficulty: "advanced",
        prompt: "確率変数 X と Y が独立で、分散が有限であるとき、Cov(X,Y) について正しいものはどれか。",
        choices: ["0 である", "必ず 1 である", "必ず正である", "定義できない"],
        answerIndex: 0,
        explanation: "独立なら E[XY]=E[X]E[Y] なので Cov(X,Y)=E[XY]-E[X]E[Y]=0 です。"
      },
      {
        id: "ps-binomial-mean",
        sectionId: "distributions",
        title: "二項分布の平均",
        topic: "二項分布",
        difficulty: "basic",
        type: "calculation",
        prompt: "X ~ Bin(10, 0.3) のとき、E[X] はどれか。",
        choices: ["3", "0.3", "7", "2.1"],
        answerIndex: 0,
        explanation: "二項分布 Bin(n,p) の平均は np です。10*0.3=3 です。"
      },
      {
        id: "ps-binomial-probability",
        sectionId: "distributions",
        title: "二項分布の確率",
        topic: "二項分布",
        difficulty: "standard",
        type: "calculation",
        prompt: "X ~ Bin(3, 1/2) のとき、P(X=2) はどれか。",
        choices: ["3/8", "1/8", "1/2", "2/3"],
        answerIndex: 0,
        explanation: "P(X=2)=C(3,2)(1/2)^2(1/2)^1=3/8 です。"
      },
      {
        id: "ps-poisson-variance",
        sectionId: "distributions",
        title: "ポアソン分布の分散",
        topic: "ポアソン分布",
        difficulty: "basic",
        prompt: "X ~ Poisson(lambda) の分散として正しいものはどれか。",
        choices: ["lambda", "lambda^2", "sqrt(lambda)", "1/lambda"],
        answerIndex: 0,
        explanation: "ポアソン分布では平均も分散も lambda です。"
      },
      {
        id: "ps-standard-normal",
        sectionId: "distributions",
        title: "標準正規分布",
        topic: "正規分布",
        difficulty: "standard",
        prompt: "標準正規分布 N(0,1) の特徴として正しいものはどれか。",
        choices: ["平均 0、分散 1", "平均 1、分散 0", "平均 0、分散 0", "平均 1、分散 1"],
        answerIndex: 0,
        explanation: "標準正規分布は平均 0、分散 1 の正規分布です。"
      },
      {
        id: "ps-standardization",
        sectionId: "distributions",
        title: "正規分布の標準化",
        topic: "正規分布",
        difficulty: "advanced",
        type: "calculation",
        prompt: "X ~ N(10, 4) のとき、X=14 に対応する標準化値 z はどれか。ただし第2引数は分散とする。",
        choices: ["2", "1", "4", "8"],
        answerIndex: 0,
        explanation: "標準偏差は sqrt(4)=2 です。z=(14-10)/2=2 です。"
      },
      {
        id: "ps-sample-mean",
        sectionId: "descriptive-statistics",
        title: "標本平均",
        topic: "平均",
        difficulty: "basic",
        type: "calculation",
        prompt: "データ 2, 4, 6, 8 の標本平均はどれか。",
        choices: ["5", "4", "6", "20"],
        answerIndex: 0,
        explanation: "標本平均は合計を個数で割ります。(2+4+6+8)/4=5 です。"
      },
      {
        id: "ps-median",
        sectionId: "descriptive-statistics",
        title: "中央値",
        topic: "代表値",
        difficulty: "basic",
        type: "calculation",
        prompt: "データ 1, 3, 9, 10, 12 の中央値はどれか。",
        choices: ["9", "7", "3", "10"],
        answerIndex: 0,
        explanation: "データを小さい順に並べたとき中央にある値が中央値です。5個なので3番目の 9 です。"
      },
      {
        id: "ps-sample-variance",
        sectionId: "descriptive-statistics",
        title: "標本分散",
        topic: "分散",
        difficulty: "standard",
        type: "calculation",
        prompt: "データ 1, 3, 5 の、n で割る標本分散はどれか。",
        choices: ["8/3", "4", "2", "3"],
        answerIndex: 0,
        explanation: "平均は 3 です。偏差平方和は 4+0+4=8 なので、n=3 で割ると 8/3 です。"
      },
      {
        id: "ps-iqr",
        sectionId: "descriptive-statistics",
        title: "四分位範囲",
        topic: "四分位範囲",
        difficulty: "standard",
        prompt: "四分位範囲 IQR の説明として正しいものはどれか。",
        choices: ["第3四分位数から第1四分位数を引いた値", "最大値から最小値を引いた値", "平均から中央値を引いた値", "分散の平方根"],
        answerIndex: 0,
        explanation: "IQR は Q3-Q1 で、中央50%のデータの散らばりを表します。"
      },
      {
        id: "ps-correlation-range",
        sectionId: "descriptive-statistics",
        title: "相関係数の範囲",
        topic: "相関係数",
        difficulty: "advanced",
        prompt: "ピアソンの相関係数 r が取り得る範囲として正しいものはどれか。",
        choices: ["-1 <= r <= 1", "0 <= r <= 1", "-infty < r < infty", "r >= 1"],
        answerIndex: 0,
        explanation: "相関係数は線形関係の向きと強さを表し、常に -1 以上 1 以下です。"
      },
      {
        id: "ps-unbiased-estimator",
        sectionId: "estimation",
        title: "不偏推定量",
        topic: "点推定",
        difficulty: "basic",
        prompt: "推定量 T が母数 theta の不偏推定量であるとは、どの条件を満たすことか。",
        choices: ["E[T]=theta", "T=0", "Var(T)=theta", "P(T=theta)=1 が常に成り立つ"],
        answerIndex: 0,
        explanation: "不偏性は、推定量の期待値が推定したい母数に等しいことです。"
      },
      {
        id: "ps-sample-mean-unbiased",
        sectionId: "estimation",
        title: "標本平均の不偏性",
        topic: "点推定",
        difficulty: "standard",
        prompt: "独立同分布な標本 X1,...,Xn の母平均を mu とするとき、標本平均について正しいものはどれか。",
        choices: ["E[bar X]=mu", "E[bar X]=n mu", "E[bar X]=0", "bar X は常に mu と等しい"],
        answerIndex: 0,
        explanation: "期待値の線形性より E[bar X]=(E[X1]+...+E[Xn])/n=mu です。"
      },
      {
        id: "ps-standard-error",
        sectionId: "estimation",
        title: "標準誤差",
        topic: "標本平均",
        difficulty: "standard",
        type: "calculation",
        prompt: "母標準偏差 sigma=12、標本サイズ n=36 のとき、標本平均の標準誤差はどれか。",
        choices: ["2", "6", "12", "72"],
        answerIndex: 0,
        explanation: "標本平均の標準誤差は sigma/sqrt(n)=12/sqrt(36)=12/6=2 です。"
      },
      {
        id: "ps-confidence-interval-mean",
        sectionId: "estimation",
        title: "母平均の信頼区間",
        topic: "信頼区間",
        difficulty: "advanced",
        type: "calculation",
        prompt: "母標準偏差が既知で、95%信頼区間が bar X ± 1.96 sigma/sqrt(n) と書けるとする。bar X=50, sigma/sqrt(n)=2 の区間はどれか。",
        choices: ["[46.08, 53.92]", "[48.04, 51.96]", "[50, 53.92]", "[45, 55]"],
        answerIndex: 0,
        explanation: "誤差幅は 1.96*2=3.92 です。したがって 50±3.92、つまり [46.08,53.92] です。"
      },
      {
        id: "ps-consistency",
        sectionId: "estimation",
        title: "一致性",
        topic: "推定量の性質",
        difficulty: "advanced",
        prompt: "推定量 T_n が母数 theta に一致するとは、標本サイズ n が大きくなると何が起こることか。",
        choices: ["T_n が theta に確率収束する", "T_n が必ず 0 になる", "T_n の分散が必ず theta になる", "T_n が正規分布でなくなる"],
        answerIndex: 0,
        explanation: "一致性は、n を大きくしたとき推定量が真の母数へ確率収束する性質です。"
      },
      {
        id: "ps-null-hypothesis",
        sectionId: "hypothesis-testing",
        title: "帰無仮説",
        topic: "仮説検定",
        difficulty: "basic",
        prompt: "仮説検定で、通常まず棄却できるかを調べる基準となる仮説はどれか。",
        choices: ["帰無仮説", "対立仮説", "標本仮説", "信頼仮説"],
        answerIndex: 0,
        explanation: "検定では帰無仮説 H0 を置き、データが H0 のもとでどれほど起こりにくいかを調べます。"
      },
      {
        id: "ps-significance-level",
        sectionId: "hypothesis-testing",
        title: "有意水準",
        topic: "有意水準",
        difficulty: "basic",
        prompt: "有意水準 alpha の意味として正しいものはどれか。",
        choices: ["帰無仮説が正しいのに棄却する確率の上限", "帰無仮説が誤りなのに採択する確率", "標本平均の値", "母分散の推定値"],
        answerIndex: 0,
        explanation: "有意水準は第1種の誤り、つまり正しい帰無仮説を棄却する確率を制御する値です。"
      },
      {
        id: "ps-p-value-decision",
        sectionId: "hypothesis-testing",
        title: "p値による判断",
        topic: "p値",
        difficulty: "standard",
        prompt: "有意水準 5% の検定で p値が 0.03 のとき、通常の判断として正しいものはどれか。",
        choices: ["帰無仮説を棄却する", "帰無仮説を必ず採択する", "検定できない", "有意水準を 0.03 に変更する"],
        answerIndex: 0,
        explanation: "p値が有意水準 0.05 より小さいので、帰無仮説を棄却します。"
      },
      {
        id: "ps-type-two-error",
        sectionId: "hypothesis-testing",
        title: "第2種の誤り",
        topic: "検定の誤り",
        difficulty: "standard",
        prompt: "第2種の誤りとして正しい説明はどれか。",
        choices: ["帰無仮説が偽なのに棄却しないこと", "帰無仮説が真なのに棄却すること", "p値を計算すること", "標本サイズを増やすこと"],
        answerIndex: 0,
        explanation: "第2種の誤りは、本当は帰無仮説が誤っているのに、それを棄却できない誤りです。"
      },
      {
        id: "ps-two-sided-test",
        sectionId: "hypothesis-testing",
        title: "両側検定",
        topic: "検定の種類",
        difficulty: "advanced",
        prompt: "母平均 mu について H1: mu != mu0 を調べる検定は何と呼ばれるか。",
        choices: ["両側検定", "右片側検定", "左片側検定", "適合度検定"],
        answerIndex: 0,
        explanation: "対立仮説が mu0 より大きい場合と小さい場合の両方を含むので、両側検定です。"
      },
      {
        id: "ps-scatter-plot",
        sectionId: "regression-correlation",
        title: "散布図",
        topic: "データ可視化",
        difficulty: "basic",
        prompt: "2つの量的変数の関係を点の集まりとして見る図はどれか。",
        choices: ["散布図", "円グラフ", "箱ひげ図", "ヒストグラム"],
        answerIndex: 0,
        explanation: "散布図は、各観測値を平面上の点として描き、2変数の関係を確認する図です。"
      },
      {
        id: "ps-positive-correlation",
        sectionId: "regression-correlation",
        title: "正の相関",
        topic: "相関",
        difficulty: "basic",
        prompt: "相関係数 r=0.8 の解釈として最も適切なものはどれか。",
        choices: ["強い正の線形関係がある", "強い負の線形関係がある", "線形関係がまったくない", "因果関係が証明された"],
        answerIndex: 0,
        explanation: "r が 1 に近い正の値なので、強い正の線形関係を示します。ただし相関だけで因果関係は示せません。"
      },
      {
        id: "ps-least-squares",
        sectionId: "regression-correlation",
        title: "最小二乗法",
        topic: "回帰",
        difficulty: "standard",
        prompt: "単回帰で最小二乗法が最小にする量はどれか。",
        choices: ["残差平方和", "説明変数の合計", "目的変数の平均", "相関係数"],
        answerIndex: 0,
        explanation: "最小二乗法は、観測値と回帰直線の差である残差の2乗和を最小にします。"
      },
      {
        id: "ps-regression-prediction",
        sectionId: "regression-correlation",
        title: "回帰直線による予測",
        topic: "回帰",
        difficulty: "standard",
        type: "calculation",
        prompt: "回帰直線 y=2+3x で x=4 のときの予測値はどれか。",
        choices: ["14", "9", "12", "24"],
        answerIndex: 0,
        explanation: "x=4 を代入すると y=2+3*4=14 です。"
      },
      {
        id: "ps-r-squared",
        sectionId: "regression-correlation",
        title: "決定係数",
        topic: "回帰",
        difficulty: "advanced",
        prompt: "単回帰で決定係数 R^2 が表すものとして最も適切なものはどれか。",
        choices: ["目的変数の変動のうち回帰で説明される割合", "回帰係数そのもの", "標本サイズ", "残差の平均"],
        answerIndex: 0,
        explanation: "R^2 は、目的変数の全変動のうちモデルで説明できる割合を表します。"
      },
      {
        id: "ps-permutation",
        sectionId: "combinatorics-counting",
        title: "順列",
        topic: "数え上げ",
        difficulty: "basic",
        type: "calculation",
        prompt: "異なる 5 個のものから 3 個を順に並べる方法の数はどれか。",
        choices: ["60", "10", "15", "125"],
        answerIndex: 0,
        explanation: "順序を区別するので 5P3=5*4*3=60 です。"
      },
      {
        id: "ps-combination",
        sectionId: "combinatorics-counting",
        title: "組合せ",
        topic: "数え上げ",
        difficulty: "basic",
        type: "calculation",
        prompt: "異なる 6 個のものから 2 個を選ぶ組合せの数はどれか。",
        choices: ["15", "12", "30", "36"],
        answerIndex: 0,
        explanation: "順序を区別しないので C(6,2)=6*5/2=15 です。"
      },
      {
        id: "ps-inclusion-exclusion",
        sectionId: "combinatorics-counting",
        title: "包除原理",
        topic: "数え上げ",
        difficulty: "standard",
        type: "calculation",
        prompt: "|A|=20, |B|=15, |A cap B|=5 のとき、|A union B| はどれか。",
        choices: ["30", "35", "40", "25"],
        answerIndex: 0,
        explanation: "包除原理より |A union B|=|A|+|B|-|A cap B|=20+15-5=30 です。"
      },
      {
        id: "ps-combinations-with-repetition",
        sectionId: "combinatorics-counting",
        title: "重複組合せ",
        topic: "数え上げ",
        difficulty: "standard",
        type: "calculation",
        prompt: "3 種類の品物から重複を許して 4 個選ぶ方法の数はどれか。",
        choices: ["15", "12", "9", "81"],
        answerIndex: 0,
        explanation: "重複組合せは C(n+r-1,r) です。C(3+4-1,4)=C(6,4)=15 です。"
      },
      {
        id: "ps-hypergeometric-setup",
        sectionId: "combinatorics-counting",
        title: "非復元抽出",
        topic: "超幾何分布",
        difficulty: "advanced",
        prompt: "赤玉 4 個、白玉 6 個から戻さず 3 個引くとき、赤玉の個数が従う分布として最も適切なものはどれか。",
        choices: ["超幾何分布", "二項分布", "ポアソン分布", "指数分布"],
        answerIndex: 0,
        explanation: "有限母集団から非復元で抽出し、成功数を数えるので超幾何分布です。"
      },
      {
        id: "ps-total-probability",
        sectionId: "probability-basics",
        title: "全確率の公式",
        topic: "全確率",
        difficulty: "standard",
        type: "calculation",
        prompt: "A と A^c が標本空間を分割し、P(A)=0.4, P(B|A)=0.5, P(B|A^c)=0.2 のとき P(B) はどれか。",
        choices: ["0.32", "0.70", "0.20", "0.08"],
        answerIndex: 0,
        explanation: "P(B)=P(B|A)P(A)+P(B|A^c)P(A^c)=0.5*0.4+0.2*0.6=0.32 です。"
      },
      {
        id: "ps-complement-rule",
        sectionId: "probability-basics",
        title: "余事象",
        topic: "確率の基本性質",
        difficulty: "basic",
        type: "calculation",
        prompt: "P(A)=0.72 のとき P(A^c) はどれか。",
        choices: ["0.28", "0.72", "1.72", "0"],
        answerIndex: 0,
        explanation: "余事象の確率は P(A^c)=1-P(A)=1-0.72=0.28 です。"
      },
      {
        id: "ps-law-total-expectation",
        sectionId: "random-variables",
        title: "全期待値の公式",
        topic: "条件付き期待値",
        difficulty: "advanced",
        prompt: "全期待値の公式として正しいものはどれか。",
        choices: ["E[X]=E[E[X|Y]]", "E[X]=E[X|Y]", "E[X]=Var(X)", "E[X]=P(X|Y)"],
        answerIndex: 0,
        explanation: "条件付き期待値を Y について平均すると元の期待値に戻ります。これが全期待値の公式です。"
      },
      {
        id: "ps-correlation-definition",
        sectionId: "random-variables",
        title: "相関係数の定義",
        topic: "相関",
        difficulty: "standard",
        prompt: "確率変数 X,Y の相関係数として正しい式はどれか。",
        choices: ["Cov(X,Y)/(sd(X)sd(Y))", "E[X]+E[Y]", "Var(X)+Var(Y)", "Cov(X,Y)^2"],
        answerIndex: 0,
        explanation: "相関係数は共分散をそれぞれの標準偏差で割って無次元化した量です。"
      },
      {
        id: "ps-mgf-mean",
        sectionId: "random-variables",
        title: "モーメント母関数",
        topic: "母関数",
        difficulty: "advanced",
        prompt: "モーメント母関数 M_X(t)=E[e^{tX}] から E[X] を得る方法として正しいものはどれか。",
        choices: ["M_X'(0)", "M_X(1)", "M_X(0)", "M_X''(1)"],
        answerIndex: 0,
        explanation: "M_X(t) を t で微分して 0 を代入すると 1 次モーメント E[X] が得られます。"
      },
      {
        id: "ps-marginal-distribution",
        sectionId: "random-variables",
        title: "周辺分布",
        topic: "同時分布",
        difficulty: "standard",
        prompt: "離散同時分布 p(x,y) から X の周辺分布 p_X(x) を求める操作として正しいものはどれか。",
        choices: ["y について和を取る", "x について和を取る", "p(x,y) を二乗する", "最大値だけを取る"],
        answerIndex: 0,
        explanation: "X=x に対応するすべての y の可能性を足し合わせるので p_X(x)=sum_y p(x,y) です。"
      },
      {
        id: "ps-geometric-mean",
        sectionId: "distributions",
        title: "幾何分布の平均",
        topic: "幾何分布",
        difficulty: "standard",
        type: "calculation",
        prompt: "成功確率 p=0.25 の幾何分布で、初めて成功するまでの試行回数の平均はどれか。",
        choices: ["4", "0.25", "3", "16"],
        answerIndex: 0,
        explanation: "初成功までの試行回数で定義する幾何分布の平均は 1/p です。1/0.25=4 です。"
      },
      {
        id: "ps-uniform-continuous-mean",
        sectionId: "distributions",
        title: "一様分布の平均",
        topic: "一様分布",
        difficulty: "basic",
        type: "calculation",
        prompt: "X ~ Uniform(2, 8) の平均はどれか。",
        choices: ["5", "6", "10", "3"],
        answerIndex: 0,
        explanation: "連続一様分布 Uniform(a,b) の平均は (a+b)/2 です。(2+8)/2=5 です。"
      },
      {
        id: "ps-exponential-mean",
        sectionId: "distributions",
        title: "指数分布の平均",
        topic: "指数分布",
        difficulty: "standard",
        type: "calculation",
        prompt: "X ~ Exp(lambda) の平均として正しいものはどれか。",
        choices: ["1/lambda", "lambda", "lambda^2", "0"],
        answerIndex: 0,
        explanation: "指数分布 Exp(lambda) の平均は 1/lambda、分散は 1/lambda^2 です。"
      },
      {
        id: "ps-memoryless-property",
        sectionId: "distributions",
        title: "無記憶性",
        topic: "指数分布",
        difficulty: "advanced",
        prompt: "連続分布の中で無記憶性を持つ代表的な分布はどれか。",
        choices: ["指数分布", "正規分布", "一様分布", "t 分布"],
        answerIndex: 0,
        explanation: "指数分布は P(X>s+t | X>s)=P(X>t) を満たし、待ち時間モデルで重要です。"
      },
      {
        id: "ps-law-large-numbers",
        sectionId: "limit-theorems",
        title: "大数の法則",
        topic: "極限定理",
        difficulty: "basic",
        prompt: "独立同分布な標本の標本平均が母平均に近づくことを述べる定理はどれか。",
        choices: ["大数の法則", "ベイズの定理", "包除原理", "最小二乗法"],
        answerIndex: 0,
        explanation: "大数の法則は、標本サイズが大きくなると標本平均が母平均へ近づくことを述べます。"
      },
      {
        id: "ps-central-limit-theorem",
        sectionId: "limit-theorems",
        title: "中心極限定理",
        topic: "極限定理",
        difficulty: "standard",
        prompt: "中心極限定理の説明として最も適切なものはどれか。",
        choices: ["標本平均を標準化すると、大標本で近似的に標準正規分布に従う", "任意の確率変数が一様分布になる", "標本分散が常に 0 になる", "相関係数が必ず 1 になる"],
        answerIndex: 0,
        explanation: "独立同分布で分散が有限なら、標本平均の標準化量は大標本で標準正規分布に近づきます。"
      },
      {
        id: "ps-normal-approximation-binomial",
        sectionId: "limit-theorems",
        title: "二項分布の正規近似",
        topic: "正規近似",
        difficulty: "standard",
        prompt: "X ~ Bin(n,p) を大きな n で正規近似するとき、近似に使う平均と分散はどれか。",
        choices: ["平均 np、分散 np(1-p)", "平均 p、分散 n", "平均 n、分散 p", "平均 0、分散 1"],
        answerIndex: 0,
        explanation: "二項分布の平均は np、分散は np(1-p) なので、この正規分布で近似します。"
      },
      {
        id: "ps-clt-standard-error",
        sectionId: "limit-theorems",
        title: "標本平均の標準化",
        topic: "中心極限定理",
        difficulty: "advanced",
        prompt: "母平均 mu、母標準偏差 sigma の母集団から大きさ n の標本を取るとき、標本平均 bar X の標準化量として正しいものはどれか。",
        choices: ["(bar X-mu)/(sigma/sqrt(n))", "(bar X-mu)/sigma", "(bar X-mu)/n", "bar X/sigma"],
        answerIndex: 0,
        explanation: "標本平均の標準偏差は sigma/sqrt(n) なので、それで割って標準化します。"
      },
      {
        id: "ps-sample-mean-distribution-normal",
        sectionId: "sampling-distributions",
        title: "正規母集団の標本平均",
        topic: "標本分布",
        difficulty: "standard",
        prompt: "X_i ~ N(mu, sigma^2) が独立同分布のとき、標本平均 bar X の分布はどれか。",
        choices: ["N(mu, sigma^2/n)", "N(n mu, sigma^2)", "N(mu, sigma^2)", "t(n-1)"],
        answerIndex: 0,
        explanation: "正規母集団からの標本平均は厳密に正規分布に従い、平均 mu、分散 sigma^2/n です。"
      },
      {
        id: "ps-t-distribution-use",
        sectionId: "sampling-distributions",
        title: "t 分布",
        topic: "標本分布",
        difficulty: "standard",
        prompt: "母分散が未知の正規母集団の平均を小標本で推測するとき、主に使う分布はどれか。",
        choices: ["t 分布", "一様分布", "ポアソン分布", "幾何分布"],
        answerIndex: 0,
        explanation: "母分散を標本分散で推定するため、標準正規分布ではなく自由度 n-1 の t 分布を使います。"
      },
      {
        id: "ps-chi-square-variance",
        sectionId: "sampling-distributions",
        title: "カイ二乗分布",
        topic: "標本分布",
        difficulty: "advanced",
        prompt: "正規母集団で母分散 sigma^2 の推測に現れる統計量として正しいものはどれか。",
        choices: ["(n-1)S^2/sigma^2 は自由度 n-1 のカイ二乗分布に従う", "bar X は常にカイ二乗分布に従う", "S^2 は常に 0 である", "sigma^2 は t 分布に従う"],
        answerIndex: 0,
        explanation: "正規母集団では標本分散を標準化した (n-1)S^2/sigma^2 がカイ二乗分布に従います。"
      },
      {
        id: "ps-f-distribution",
        sectionId: "sampling-distributions",
        title: "F 分布",
        topic: "標本分布",
        difficulty: "advanced",
        prompt: "2つの独立な正規母集団の分散比の検定で主に使う分布はどれか。",
        choices: ["F 分布", "指数分布", "二項分布", "幾何分布"],
        answerIndex: 0,
        explanation: "独立なカイ二乗変数を自由度で割った比は F 分布に従い、分散比や分散分析で使われます。"
      },
      {
        id: "ps-sample-proportion-se",
        sectionId: "sampling-distributions",
        title: "標本比率の標準誤差",
        topic: "標本比率",
        difficulty: "standard",
        prompt: "母比率 p の標本比率 phat の標準誤差として正しいものはどれか。",
        choices: ["sqrt(p(1-p)/n)", "p/n", "sqrt(n p)", "p(1-p)n"],
        answerIndex: 0,
        explanation: "ベルヌーイ変数の分散は p(1-p) なので、標本平均である標本比率の標準誤差は sqrt(p(1-p)/n) です。"
      },
      {
        id: "ps-mle-definition",
        sectionId: "estimation",
        title: "最尤推定",
        topic: "最尤推定",
        difficulty: "standard",
        prompt: "最尤推定量の説明として正しいものはどれか。",
        choices: ["観測データの尤度を最大にする母数の値", "標本平均だけを常に選ぶ方法", "分散を必ず 0 にする値", "p値を最大にする仮説"],
        answerIndex: 0,
        explanation: "最尤推定は、得られたデータが最も起こりやすくなるような母数を選ぶ方法です。"
      },
      {
        id: "ps-bernoulli-mle",
        sectionId: "estimation",
        title: "ベルヌーイ分布の最尤推定",
        topic: "最尤推定",
        difficulty: "advanced",
        prompt: "ベルヌーイ分布の成功確率 p の最尤推定量として正しいものはどれか。",
        choices: ["標本比率", "標本分散", "最大値", "中央値"],
        answerIndex: 0,
        explanation: "ベルヌーイ標本の尤度を最大にする p は成功回数を標本サイズで割った標本比率です。"
      },
      {
        id: "ps-method-of-moments",
        sectionId: "estimation",
        title: "モーメント法",
        topic: "点推定",
        difficulty: "advanced",
        prompt: "モーメント法の基本的な考え方として正しいものはどれか。",
        choices: ["母モーメントと標本モーメントを対応させて母数を推定する", "p値だけで母数を決める", "標本を必ず正規分布に変換する", "帰無仮説を常に採択する"],
        answerIndex: 0,
        explanation: "モーメント法は、理論上の平均や分散などを標本の対応する量に等しいと置いて母数を求めます。"
      },
      {
        id: "ps-confidence-interval-proportion",
        sectionId: "estimation",
        title: "母比率の信頼区間",
        topic: "信頼区間",
        difficulty: "advanced",
        prompt: "大標本で母比率 p の信頼区間を作るとき、標本比率 phat の標準誤差の推定値としてよく使うものはどれか。",
        choices: ["sqrt(phat(1-phat)/n)", "phat/n", "sqrt(n/phat)", "1/n"],
        answerIndex: 0,
        explanation: "母比率 p を標本比率 phat で置き換え、sqrt(phat(1-phat)/n) を標準誤差の推定値にします。"
      },
      {
        id: "ps-one-sample-t-test",
        sectionId: "hypothesis-testing",
        title: "1標本 t 検定",
        topic: "平均の検定",
        difficulty: "standard",
        prompt: "母分散未知の正規母集団で母平均 mu=mu0 を検定するとき、1標本 t 検定で使う統計量はどれか。",
        choices: ["(bar X-mu0)/(S/sqrt(n))", "(bar X-mu0)/sigma", "S^2/mu0", "n bar X"],
        answerIndex: 0,
        explanation: "母分散未知なので標本標準偏差 S を使い、自由度 n-1 の t 分布と比較します。"
      },
      {
        id: "ps-z-test-known-variance",
        sectionId: "hypothesis-testing",
        title: "Z 検定",
        topic: "平均の検定",
        difficulty: "standard",
        prompt: "母分散 sigma^2 が既知で母平均を検定するとき、大標本または正規母集団で使う標準化量はどれか。",
        choices: ["(bar X-mu0)/(sigma/sqrt(n))", "(bar X-mu0)/(S/sqrt(n))", "S^2/sigma^2", "phat-p0"],
        answerIndex: 0,
        explanation: "母標準偏差 sigma が既知なら、標本平均を sigma/sqrt(n) で標準化して標準正規分布と比較します。"
      },
      {
        id: "ps-proportion-test",
        sectionId: "hypothesis-testing",
        title: "母比率の検定",
        topic: "比率の検定",
        difficulty: "advanced",
        prompt: "H0: p=p0 の大標本検定で、標本比率 phat の標準化に使う標準誤差はどれか。",
        choices: ["sqrt(p0(1-p0)/n)", "sqrt(phat(1-phat)/n)", "p0/n", "sqrt(n p0)"],
        answerIndex: 0,
        explanation: "帰無仮説のもとでの分布を使うため、標準誤差は sqrt(p0(1-p0)/n) です。"
      },
      {
        id: "ps-power",
        sectionId: "hypothesis-testing",
        title: "検出力",
        topic: "検定の性質",
        difficulty: "advanced",
        prompt: "検定の検出力 power として正しい説明はどれか。",
        choices: ["対立仮説が真のとき帰無仮説を棄却する確率", "帰無仮説が真のとき棄却する確率", "p値そのもの", "有意水準の逆数"],
        answerIndex: 0,
        explanation: "検出力は 1-第2種の誤りの確率で、真の効果を検出できる確率です。"
      },
      {
        id: "ps-chi-square-goodness-fit",
        sectionId: "advanced-inference",
        title: "適合度検定",
        topic: "カイ二乗検定",
        difficulty: "standard",
        prompt: "観測度数が理論分布にどの程度合っているかを調べる代表的な検定はどれか。",
        choices: ["カイ二乗適合度検定", "1標本 t 検定", "符号検定", "単回帰"],
        answerIndex: 0,
        explanation: "カテゴリごとの観測度数と期待度数のずれをカイ二乗統計量で評価します。"
      },
      {
        id: "ps-chi-square-independence",
        sectionId: "advanced-inference",
        title: "独立性の検定",
        topic: "カイ二乗検定",
        difficulty: "standard",
        prompt: "クロス集計表で2つのカテゴリ変数が独立かどうかを調べる代表的な方法はどれか。",
        choices: ["カイ二乗独立性検定", "中心極限定理", "最尤推定", "単回帰の予測"],
        answerIndex: 0,
        explanation: "クロス集計表の観測度数と独立を仮定した期待度数を比べるのがカイ二乗独立性検定です。"
      },
      {
        id: "ps-anova-purpose",
        sectionId: "advanced-inference",
        title: "分散分析",
        topic: "ANOVA",
        difficulty: "advanced",
        prompt: "一元配置分散分析 ANOVA の主な目的はどれか。",
        choices: ["3群以上の平均に差があるかを調べる", "1つの比率だけを推定する", "データを必ず正規化する", "相関係数を 1 にする"],
        answerIndex: 0,
        explanation: "ANOVA は群間変動と群内変動を比較し、複数群の平均差を検定します。"
      },
      {
        id: "ps-bayesian-posterior",
        sectionId: "advanced-inference",
        title: "事後分布",
        topic: "ベイズ推定",
        difficulty: "advanced",
        prompt: "ベイズ推定で事後分布に比例するものとして正しい組合せはどれか。",
        choices: ["尤度 * 事前分布", "p値 * 有意水準", "標本分散 * 標本サイズ", "相関係数 * 回帰係数"],
        answerIndex: 0,
        explanation: "ベイズの公式により、事後分布は正規化定数を除いて尤度と事前分布の積に比例します。"
      },
      {
        id: "ps-aic-purpose",
        sectionId: "advanced-inference",
        title: "AIC",
        topic: "モデル選択",
        difficulty: "advanced",
        prompt: "AIC の主な用途として正しいものはどれか。",
        choices: ["予測性能とモデルの複雑さのバランスでモデルを比較する", "帰無仮説を必ず棄却する", "標本平均を計算する", "確率を 1 に正規化する"],
        answerIndex: 0,
        explanation: "AIC は尤度に基づく当てはまりとパラメータ数による複雑さの罰則を組み合わせたモデル選択基準です。"
      },
      {
        id: "ps-multiple-regression",
        sectionId: "regression-correlation",
        title: "重回帰",
        topic: "回帰",
        difficulty: "standard",
        prompt: "重回帰モデルの説明として正しいものはどれか。",
        choices: ["複数の説明変数で1つの目的変数を説明するモデル", "目的変数が必ず2つあるモデル", "説明変数を使わないモデル", "相関係数だけを計算する手法"],
        answerIndex: 0,
        explanation: "重回帰は y=beta0+beta1 x1+...+betap xp+誤差 のように複数の説明変数を使います。"
      },
      {
        id: "ps-residual-definition",
        sectionId: "regression-correlation",
        title: "残差",
        topic: "回帰診断",
        difficulty: "basic",
        prompt: "回帰分析における残差として正しいものはどれか。",
        choices: ["観測値と予測値の差", "説明変数の平均", "相関係数の二乗", "標本サイズ"],
        answerIndex: 0,
        explanation: "残差は観測された y とモデルによる予測値 yhat の差で、当てはまりの確認に使います。"
      },
      {
        id: "ps-omitted-variable",
        sectionId: "regression-correlation",
        title: "交絡と欠落変数",
        topic: "回帰の解釈",
        difficulty: "advanced",
        prompt: "回帰係数を因果効果として解釈するときに特に注意すべきものはどれか。",
        choices: ["交絡変数や欠落変数の影響", "選択肢の並び順", "標本平均の単位", "グラフの色"],
        answerIndex: 0,
        explanation: "関連する変数をモデルに入れないと、推定された回帰係数にバイアスが生じることがあります。"
      }
    ]
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
