.. _lattice:

====================
格子と格子ベクトル
====================

格子と格子点
------------

結晶構造において、原子の種類や配置といったことをいったん忘れ、その周期性だけに着目してみる。この時、その周期性は、格子（並進格子、lattice）という、点の集まりで記述される。
格子は、その中の任意の2点を結ぶベクトルに沿って全体を平行移動すると、全ての点が元通りに重なるような点の集合である。
どの点から見ても周囲の点の並びが同じに見える、と言い換えてもよい。集合の各点を格子点（lattice point）と呼ぶ。格子点は周期の基準点であり、原子の位置と一致するとは限らない。

周期的に並んだ点の集合が、すべて格子であるわけではない。例えば一次元で、点の間隔が短・長と交互に繰り返す配列を考える。短い間隔の2点を結ぶ並進で全体をずらすと、重ならない点が出る。この配列は格子ではなく、短・長1組の長さを間隔とする格子の各格子点に2つの点を置いたものと見なせる。

結晶構造も同じように、格子の各格子点に同じ原子の配置を置いて表す。この繰り返される原子の配置を単位構造（motif）と呼ぶ。結晶構造は格子と単位構造の組で決まり、格子だけでは原子の種類や位置は決まらない。

格子並進と基本並進ベクトル
--------------------------

3次元の格子では、互いに独立な3本のベクトル :math:`\boldsymbol a_1,\boldsymbol a_2,\boldsymbol a_3` をうまく選ぶと、格子点の1つを原点としたとき、すべての格子点を整数 :math:`n_i` を用いて :math:`n_1\boldsymbol a_1+n_2\boldsymbol a_2+n_3\boldsymbol a_3` と過不足なく表せる。このような3本を基本並進ベクトル（primitive translation vectors）と呼び、その組を格子の基底という（原子の単位構造を「基底」と呼ぶ文献もあるので、両者を混同しないよう注意する）。直交座標の成分で書くと

.. math::
  \boldsymbol{a}_1 =
  \begin{pmatrix}
  a_{1}^x \\
  a_{1}^y \\
  a_{1}^z
  \end{pmatrix}
  , \quad
  \boldsymbol{a}_2 =
  \begin{pmatrix}
  a_{2}^x \\
  a_{2}^y \\
  a_{2}^z
  \end{pmatrix}
  , \quad
  \boldsymbol{a}_3 =
  \begin{pmatrix}
  a_{3}^x \\
  a_{3}^y \\
  a_{3}^z
  \end{pmatrix}
  :label: avec

である。これらを列に並べた3×3行列

.. math::
  A \equiv
  (\boldsymbol a_1,\boldsymbol a_2,\boldsymbol a_3)
  =
  \begin{pmatrix}
  a_{1}^x & a_{2}^x & a_{3}^x \\
  a_{1}^y & a_{2}^y & a_{3}^y \\
  a_{1}^z & a_{2}^z & a_{3}^z
  \end{pmatrix}
  :label: amat

を格子行列と呼ぶ。:math:`A` を用いれば、格子点の位置ベクトル全体は

.. math::
  \Lambda(A)=\{A\boldsymbol n\mid\boldsymbol n\in\mathbb Z^3\}
  :label: translation-lattice

と書ける。:math:`A\boldsymbol n` は格子全体を自分自身に重ねる並進も表すので、格子並進ベクトル（単に格子ベクトルとも）と呼ぶ。本ノートでは格子ベクトルを :math:`A` の列に置く規約を用いる。

基本並進ベクトルの選び方は一意ではない。例えば :math:`\boldsymbol a_1,\ \boldsymbol a_1+\boldsymbol a_2,\ \boldsymbol a_3` も同じ格子を生成する（:ref:`lattice-transform`）。

基本単位胞と慣用単位胞
----------------------

3本の独立な格子ベクトルを辺とする平行六面体は、辺の整数結合だけ平行移動した複製で、空間を隙間も重なりもなく埋める。このように繰り返しの単位となる領域を単位胞（unit cell）と呼ぶ。以下では平行六面体の単位胞を扱う。

基本並進ベクトルを辺とする平行六面体は、格子点を1個だけ含む。頂点の8個の格子点はそれぞれ隣接する8つの胞に共有されるので、:math:`8\times1/8=1` 個と数える。格子点を1個だけ含む単位胞を基本単位胞（primitive cell）と呼ぶ。基本胞、原始胞、原始単位胞ともいう。基本単位胞の体積は単位胞の中で最小である。平行六面体でない基本単位胞もあり、Wigner–Seitz胞がその例である。

一方、格子の対称性が見やすい軸を辺に選んだ、より大きな単位胞を慣用単位胞（conventional cell）と呼ぶ。体心立方（BCC）格子と面心立方（FCC）格子では立方体を慣用単位胞とし、それぞれ2個と4個の格子点を含む。体積は基本単位胞の2倍と4倍である。

.. _coordinates:

格子座標（分率座標）
--------------------

結晶中の位置は、直交座標（Cartesian座標、XYZ座標）の成分

.. math::
  \boldsymbol{r}
  =
  \begin{pmatrix}
  x \\
  y \\
  z
  \end{pmatrix}
  :label: rpos

で表すほか、格子ベクトルを基底にとって

.. math::
  \boldsymbol{r}
  =
  s_1 \boldsymbol{a}_1 +
  s_2 \boldsymbol{a}_2 +
  s_3 \boldsymbol{a}_3
  :label: rlat

とも表せる。係数 :math:`s_i` を格子座標または分率座標（fractional coordinates）と呼ぶ。列ベクトル :math:`\boldsymbol{s}=(s_1,s_2,s_3)^\top` にまとめれば、格子行列 :eq:`amat` を使って

.. math::
  \boldsymbol r=A\boldsymbol s,\qquad
  \boldsymbol s=A^{-1}\boldsymbol r
  :label: fractional-cartesian-matrix

である。本ノートでは分率座標を列ベクトルで表す。格子ベクトルを行に格納するソフトウェアAPIとの対応は :ref:`lt-array-conventions` で扱う。

格子ベクトルだけ離れた点どうしは周期性により同等なので、同等な点の中から単位胞内の代表を1つ選ぶときは、\ :math:`s_i` を

.. math::
  0 \leq s_i < 1
  :label: alpha

の半開区間にとる。\ :math:`s_i = 1` の点は :math:`s_i = 0` の点から :math:`\boldsymbol a_i` だけずれた同等な点なので、範囲から除く。

分率座標の値は、どの単位胞の辺を基準にするかで変わる。:math:`A` の代わりに慣用単位胞の辺を並べた行列を使えば、慣用単位胞に対する分率座標が得られる。

中心並進
--------

BCC格子の立方慣用単位胞には、8つの頂点に加えて体心にも格子点がある。慣用単位胞の辺を :math:`\boldsymbol c_1,\boldsymbol c_2,\boldsymbol c_3` とすると、頂点から体心へのベクトル

.. math::
  \boldsymbol t=\tfrac12(\boldsymbol c_1+\boldsymbol c_2+\boldsymbol c_3)

も格子ベクトルであり、この並進で格子全体は自分自身に重なる。しかし :math:`\boldsymbol t` は :math:`\boldsymbol c_i` の整数結合では書けない。このように、慣用単位胞の辺の整数結合に含まれない格子並進を中心並進（centring translation）と呼ぶ。:math:`A_{\rm c}=(\boldsymbol c_1,\boldsymbol c_2,\boldsymbol c_3)` とし、原点と中心並進を慣用単位胞の分率座標で書いた集合を :math:`T` とすれば、格子は

.. math::
  \Lambda=\{A_{\rm c}(\boldsymbol n+\boldsymbol\tau)\mid\boldsymbol n\in\mathbb Z^3,\ \boldsymbol\tau\in T\}
  :label: centred-lattice

と表せる。BCCでは :math:`T=\{(0,0,0),(1/2,1/2,1/2)\}`、FCCでは :math:`T=\{(0,0,0),(0,1/2,1/2),(1/2,0,1/2),(1/2,1/2,0)\}` で、FCCには3つの面心並進がある。:math:`T` の要素数が慣用単位胞内の格子点の数である。慣用単位胞の辺だけを並進とみなすと中心の格子点を落とすが、基本並進ベクトルを選び直せば式 :eq:`translation-lattice` の形に戻り、中心並進を別に考える必要はない。

中心並進は格子点についての性質である。単位胞の中心に原子があるだけでは中心並進にならず、結晶構造全体がその並進で重なる必要がある。例えばCsCl型構造では立方体の頂点にCs、体心にClがあり、体心への並進はCsをClに移すので結晶構造を保たない。この構造の格子は単純立方である。

格子定数と計量行列
------------------

単位胞の辺の長さ :math:`a,b,c` と辺のなす角 :math:`\alpha,\beta,\gamma` を格子定数と呼ぶ。角は :math:`\alpha=\angle(\boldsymbol a_2,\boldsymbol a_3)`、:math:`\beta=\angle(\boldsymbol a_3,\boldsymbol a_1)`、:math:`\gamma=\angle(\boldsymbol a_1,\boldsymbol a_2)` と定める。

原子の位置を分率座標で表したとき、2点の分率座標の差 :math:`\Delta\boldsymbol s` から距離 :math:`d` を求めると

.. math::
  d^2=|A\Delta\boldsymbol s|^2=\Delta\boldsymbol s^\top A^\top A\,\Delta\boldsymbol s
  =\Delta\boldsymbol s^\top G\,\Delta\boldsymbol s

となり、格子ベクトルどうしの内積を並べた行列

.. math::
  G=A^\top A,\qquad G_{ij}=\boldsymbol a_i\cdot\boldsymbol a_j,
  \qquad V=|\det A|=\sqrt{\det G}
  :label: lattice-metric-volume

だけで決まる。この :math:`G` を計量行列（metric tensor）と呼ぶ。対角成分は辺の長さの2乗、非対角成分は辺どうしの角度を表し、単位胞の体積 :math:`V` も :math:`G` から求まる。:math:`A` に慣用単位胞の辺を使えば、:math:`V` は慣用単位胞の体積であり、基本単位胞の体積ではない。

.. _lattice-dof:

------------------------------------
格子ベクトルの独立な成分
------------------------------------

式 :eq:`avec` は9つの成分を持っているが、単位胞の形と大きさを指定するだけなら6つの値で足りる。残りの3つは、格子全体を空間でどの向きに置くかという回転の自由度である。原点の移動は格子ベクトルの成分を変えないので、自由度を減らさない。
例えば結晶構造データの国際的なフォーマットであるCIF（Crystallographic Information File）では

.. code-block::

  _cell_length_a   3.84928
  _cell_length_b   3.84928
  _cell_length_c   3.84928
  _cell_angle_alpha   60.00000
  _cell_angle_beta    60.00000
  _cell_angle_gamma   60.00000

のように、格子ベクトルの長さと、それぞれのベクトルのなす角度、という情報だけが記録されている。式 :eq:`avec` との対応を明示すれば

.. math::
  a = \|\boldsymbol{a}_1\|
  , \quad
  b = \|\boldsymbol{a}_2\|
  , \quad
  c = \|\boldsymbol{a}_3\|

.. math::
  \alpha = \arccos\left(\frac{\boldsymbol{a}_2\cdot\boldsymbol{a}_3}{\|\boldsymbol{a}_2\|\|\boldsymbol{a}_3\|}\right)
  , \quad
  \beta = \arccos\left(\frac{\boldsymbol{a}_3\cdot\boldsymbol{a}_1}{\|\boldsymbol{a}_3\|\|\boldsymbol{a}_1\|}\right)
  , \quad
  \gamma = \arccos\left(\frac{\boldsymbol{a}_1\cdot\boldsymbol{a}_2}{\|\boldsymbol{a}_1\|\|\boldsymbol{a}_2\|}\right)
  :label: len_and_ang

となる。逆に6つの格子定数から、計量行列 :eq:`lattice-metric-volume` は

.. math::
  G=
  \begin{pmatrix}
  a^2 & ab\cos\gamma & ac\cos\beta \\
  ab\cos\gamma & b^2 & bc\cos\alpha \\
  ac\cos\beta & bc\cos\alpha & c^2
  \end{pmatrix}

と決まる。格子全体を直交行列 :math:`Q` で回した :math:`QA` も :math:`(QA)^\top QA=A^\top A=G` を与えるので、:math:`G` からは向きが決まらない。これが除いた3自由度に当たる。直交座標での置き方の一例は :ref:`lattice-transform` で示す。


逆格子ベクトル
--------------

結晶中の波や回折を扱うときには、実空間の格子に対応する逆格子（reciprocal lattice）を使う。基本並進ベクトルに対し、逆格子の基本並進ベクトルを次の外積で定める。本ノートでは固体物理で一般的な :math:`2\pi` を含む規約を使う（結晶学では :math:`2\pi` を含めない定義も使われる）。

.. math::
  \boldsymbol{b}_1 = 2\pi\frac{\boldsymbol{a}_2\times\boldsymbol{a}_3}
  {\boldsymbol{a}_1\cdot \left(\boldsymbol{a}_2\times\boldsymbol{a}_3\right)}
  , \quad
  \boldsymbol{b}_2 = 2\pi\frac{\boldsymbol{a}_3\times\boldsymbol{a}_1}
  {\boldsymbol{a}_1\cdot \left(\boldsymbol{a}_2\times\boldsymbol{a}_3\right)}
  , \quad
  \boldsymbol{b}_3 = 2\pi\frac{\boldsymbol{a}_1\times\boldsymbol{a}_2}
  {\boldsymbol{a}_1\cdot \left(\boldsymbol{a}_2\times\boldsymbol{a}_3\right)}
  :label: bvec

格子ベクトルと逆格子ベクトルは、次の直交関係を満たす。

.. math::
  \boldsymbol{a}_i \cdot \boldsymbol{b}_j = 2\pi\delta_{ij}
  :label: ortho

逆格子ベクトルも、式 :eq:`amat` の :math:`A` と同じように列に並べて

.. math::
  B \equiv
  (\boldsymbol b_1,\boldsymbol b_2,\boldsymbol b_3)
  =
  \begin{pmatrix}
  b_{1}^x & b_{2}^x & b_{3}^x \\
  b_{1}^y & b_{2}^y & b_{3}^y \\
  b_{1}^z & b_{2}^z & b_{3}^z
  \end{pmatrix}
  :label: bmat

とおく。式 :eq:`ortho` の直交性から、行列の積として

.. math::
  A^\top B
  =
  \begin{pmatrix}
  a_{1}^x & a_{1}^y & a_{1}^z \\
  a_{2}^x & a_{2}^y & a_{2}^z \\
  a_{3}^x & a_{3}^y & a_{3}^z \\
  \end{pmatrix}
  \begin{pmatrix}
  b_{1}^x & b_{2}^x & b_{3}^x \\
  b_{1}^y & b_{2}^y & b_{3}^y \\
  b_{1}^z & b_{2}^z & b_{3}^z \\
  \end{pmatrix}
  = 2\pi I
  :label: abortho

となることがわかる。これから、\ :math:`A, B` の逆行列は、互いの転置行列を :math:`2\pi` で割ったものとなることがわかる。

.. math::
  A^{-1} = \frac{1}{2\pi}B^\top
  , \quad
  B^{-1} = \frac{1}{2\pi}A^\top
  :label: inverse

すなわち :math:`B=2\pi A^{-\top}` である。式 :eq:`fractional-cartesian-matrix` の分率座標も、:math:`\boldsymbol s=A^{-1}\boldsymbol r=B^\top\boldsymbol r/2\pi`、すなわち :math:`s_i=\boldsymbol b_i\cdot\boldsymbol r/2\pi` と逆格子ベクトルから求まる。逆格子の基本並進ベクトルの整数結合 :math:`\boldsymbol g=B\boldsymbol h`\ （:math:`\boldsymbol h\in\mathbb Z^3`）を逆格子ベクトルと呼び、その全体が逆格子である。:math:`\boldsymbol g` と格子ベクトル :math:`\boldsymbol R=A\boldsymbol n` の内積は

.. math::
  \boldsymbol g\cdot\boldsymbol R=\boldsymbol h^\top B^\top A\,\boldsymbol n=2\pi\,\boldsymbol h^\top\boldsymbol n

で :math:`2\pi` の整数倍なので、すべての格子ベクトルについて :math:`e^{i\boldsymbol g\cdot\boldsymbol R}=1` となる。このため、格子と同じ周期を持つ関数は平面波 :math:`e^{i\boldsymbol g\cdot\boldsymbol r}` の重ね合わせで表せる。慣用単位胞の辺から同じ式で作るベクトルと真の逆格子の違いは :ref:`lattice-transform` を参照。

関連するノートは :ref:`unitcell`、:ref:`lattice-transform` を参照。
