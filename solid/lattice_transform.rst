.. _lattice-transform:

==================================
格子基底と座標系の変換
==================================

結晶構造は、並進周期を表す格子と、単位胞内の原子配置で記述される。同じ結晶でも、基本単位胞と慣用単位胞、異なる基底、座標、原点をとれば、格子ベクトルや原子座標の数値は変わる。ここでは、格子基底の変更、Cartesian座標の回転、原点移動を行列で表し、分率座標・逆格子ベクトル・方向と面の指数がどう変わるかを確認する。

**前提知識**: 3次元線形代数、:ref:`格子行列<lattice-translations>` :math:`A`、
:ref:`逆格子行列<reciprocal-lattice>` :math:`B`、:ref:`分率座標<coordinates>`、
:ref:`計量行列<lattice-metric>` :math:`G`。

**学習目標**:

* 同じ格子を保つ基本並進ベクトルの取り直しの条件を導く。
* Cartesian回転や原点移動に伴う座標の変換を求める。
* 逆格子ベクトル、結晶方向、Miller指数の変換を区別する。

構造の記述を変えるときの主な操作を下表にまとめる。変換した構造を計算に使うときは、
:ref:`超胞と周期像<lt-supercell>`\ の関係や、入力先の\ :ref:`格子ベクトルの配列規約<lt-array-conventions>`\ が必要になる。

.. list-table:: 構造の記述を変えたときの主な量
   :name: lt-transform-summary
   :header-rows: 1
   :widths: 24 36 40

   * - 操作
     - 変換する量
     - 条件と保存されるもの
   * - 基本並進ベクトルの組の変更 :math:`A'=AP`
     - :math:`\boldsymbol s'=P^{-1}\boldsymbol s`, :math:`B'=BP^{-\mathsf T}`
     - :math:`P\in GL(3,\mathbb Z)` なら並進格子、体積、距離を保つ。
   * - 慣用単位胞から基本単位胞への変更
     - 格子、原子座標、周期的に等価な原子の整理
     - 同じ結晶をより小さい胞で表す。単位胞当たりの原子数は変わる。
   * - 超胞 :math:`A_{\rm sup}=AM`
     - 原子の周期像と座標
     - :math:`M` が整数なら元の周期構造を再現するが、選んだ胞の体積・原子数は :math:`|\det M|` 倍。
   * - Cartesian回転 :math:`A'=QA`
     - Cartesian位置とベクトルも :math:`Q` で回す
     - :math:`Q^{\mathsf T}Q=I` なら長さ・角度・体積を保つ。
   * - 原点移動
     - 原子の分率座標
     - 原子間変位と格子は保つ。分率座標の数値は変わる。
   * - 対称性への理想化
     - 格子や原子座標を許容差に基づき調整する場合がある
     - 入力と厳密に同じ数値構造とは限らない。許容差と設定を記録する。

格子基底の変更、胞の拡大・縮小、Cartesian空間全体の回転、対称性を使った構造の理想化は別の操作である。これらを一つの「座標変換」として扱わないことが、誤入力や物理量の向きの取り違えを防ぐ。

.. _lt-primitive-basis:

基本並進ベクトルの取り直し
---------------------------------------

正則行列 :math:`P` を用いて格子行列 :eq:`amat` を

.. math::

   A'=AP

のように変換することを考える。\ :math:`A`\ 系でのカルテシアン座標 :math:`A\boldsymbol{s}` が、
:math:`A'`\ 系で :math:`A'\boldsymbol{s'}` と書けるとすると :math:`\boldsymbol s \rightarrow \boldsymbol s'` の変換は

.. math::

   A\boldsymbol s=A'\boldsymbol s'
   \quad\Longrightarrow\quad
   \boldsymbol s'=P^{-1}\boldsymbol s,

となり、計量行列と体積は

.. math::

   G'=P^{\mathsf T}GP,\qquad V'=|\det P|V

に変わる。

.. |same-lattice-condition| replace:: ユニモジュラ変換と格子の保存

|same-lattice-condition|
------------------------

:math:`A` を基本並進ベクトルの組とする。:math:`A'=AP` も同じ格子の基本並進ベクトルの
組となるには、:math:`P` が整数行列で :math:`\det P=\pm1` であることが必要十分である。
このような行列をユニモジュラ行列（:math:`P\in GL(3,\mathbb Z)`）と呼ぶ。

:math:`P` が整数なら、新しい基底ベクトルは古い基底ベクトルの整数結合になる。
同じ格子を保つには、逆に古い基底ベクトルも新しい基底ベクトルの整数結合で書ける必要がある。
そのため、:math:`P^{-1}` も整数行列でなければならない。整数行列の逆行列が整数になるのは
:math:`\det P=\pm1` のときである。このとき整数の組 :math:`\boldsymbol n` と
:math:`P^{-1}\boldsymbol n` が一対一に対応し、格子点の集合と胞体積が保たれる。

この条件は、変換の前後がともに基本並進ベクトルの組である場合に限る。基本単位胞と
中心並進を持つ慣用単位胞や超胞を相互に変換すると、胞の体積が変わる。
:math:`|\det P|` は新しい胞と元の胞の体積の比であり、この場合は1にならない。例えば
:ref:`FCCの慣用単位胞から基本単位胞への変換<lt-fcc-cell>` :math:`P_{\rm F}` の行列式は
:math:`1/4` である。

また :math:`\det P=-1` なら、基底ベクトルの向き（右手系・左手系）は反転する。体積は絶対値で同じだが、右手系を要求する入力形式では、さらに1本の軸の符号を反転するなどして右手系へ戻す。

例えば2次元正方格子で :math:`\boldsymbol a'_1=\boldsymbol a_1`、:math:`\boldsymbol a'_2=\boldsymbol a_1+\boldsymbol a_2` としても格子点は同じである。基本平行四辺形の形だけが変わる。

.. figure:: images/lattice_basis_2d.svg
   :name: lt-basis-figure
   :alt: 2次元正方格子の同じ格子点を表す標準基底とユニモジュラ変換後の基底
   :width: 80%
   :align: center

   基底を :math:`P=\begin{pmatrix}1&1\\0&1\end{pmatrix}` で変えても、格子点の集合は変わらない。平行四辺形は選んだ基底が囲む胞を示す。

一般の正則行列 :math:`P` は同じ格子を表すとは限らない。整数行列で :math:`|\det P|>1` なら、元の格子の部分格子を生成する\ :ref:`超胞<lt-supercell>`\ になる。

.. _lt-cartesian-rotation:

Cartesian座標の回転
------------------------

右手系のまま向きの異なるCartesian座標系へ移り、Cartesian成分を回転行列 :math:`Q\in SO(3)` で変換するとき

.. math::

   A'=QA,\qquad \boldsymbol r'=Q\boldsymbol r.

座標軸のほうを回転 :math:`R` で回すと見るなら成分の変換は :math:`Q=R^{\mathsf T}` で、物体を :math:`R` で回すと見るなら :math:`Q=R` である。どちらの見方でも、以下の関係は成分を変換する行列 :math:`Q` で書ける。

同じ基底番号を保つなら分率座標は変わらない。直交性 :math:`Q^{\mathsf T}Q=I` により :math:`G'=A'^{\mathsf T}A'=G` で、長さ・角度・体積が保たれる。Cartesian成分で表す磁化、磁場、電場、力、速度などのベクトルも :math:`\boldsymbol v'=Q\boldsymbol v` とする。2階テンソルは座標表現として :math:`T'=QTQ^{\mathsf T}` と変換する。

これは結晶と、全てのベクトル・テンソルを一緒に回して座標軸を取り替える場合である。実験室で、外部磁場を固定したまま結晶だけを回す操作では、相対方向が変わり、同じ物理条件とは見なせなくなる。

.. |cell-parameters-to-cartesian| replace:: 格子定数から格子ベクトルを求める

.. _cell-parameters-cartesian:

|cell-parameters-to-cartesian|
------------------------------

CIFなどに記録された3つの長さと3つの角度は、Cartesian空間での絶対的な向きを定めない（\ :ref:`格子ベクトルの独立な成分<lattice-dof>`\ ）。右手系の一つの配置として :math:`\boldsymbol a` を :math:`x` 軸、:math:`\boldsymbol b` を :math:`xy` 面に置けば

.. math::

   \begin{aligned}
   \boldsymbol a&=(a,0,0),\\
   \boldsymbol b&=(b\cos\gamma,b\sin\gamma,0),\\
   c_x&=c\cos\beta,\\
   c_y&=c\frac{\cos\alpha-\cos\beta\cos\gamma}{\sin\gamma},\\
   \boldsymbol c&=(c_x,c_y,c_z),\qquad
   c_z=\sqrt{c^2-c_x^2-c_y^2}>0.
   \end{aligned}

これは非退化な計量と :math:`\sin\gamma\ne0` を仮定した座標選択であり、測定された絶対方位ではない。

.. _lt-origin-shift:

原点移動と原子座標
---------------------------

新しい原点を旧基底の分率座標 :math:`\boldsymbol t` に置き、同時に基底を :math:`A'=AP` にする。新しい位置座標は

.. math::

   \boldsymbol s'=P^{-1}(\boldsymbol s-\boldsymbol t).

必要なら各成分から整数を引き、:math:`[0,1)` に折り返す（wrap）。原点移動は原子間変位や格子を変えないが、原子の分率座標は変える。基本単位胞への縮約では周期同値な原子の重複同定、超胞化では周期像の生成が必要なので、原子を単にwrapするだけでは不十分である。

原点移動後にCartesian回転 :math:`Q` も施すと、

.. math::

   A'=QAP,\qquad \boldsymbol r'=Q(\boldsymbol r-A\boldsymbol t),\qquad
   \boldsymbol s'=P^{-1}(\boldsymbol s-\boldsymbol t).

原点位置を回転後の座標系で定義する場合は平行移動ベクトルの書き方が変わるため、変換の順序と原点の定義を明記する。

.. _lt-reciprocal-transform:

逆格子行列の変換
------------------------------

逆格子行列を :math:`B=2\pi A^{-\mathsf T}` とすると :math:`A^{\mathsf T}B=2\pi I`。基底変換 :math:`A'=AP` に対して

.. math::

   B'=B P^{-\mathsf T}.

Cartesian回転も含めれば :math:`B'=QBP^{-\mathsf T}` である。

.. |direction-and-plane-indices| replace:: 結晶方向と面指数の変換

.. _lt-index-transform:

|direction-and-plane-indices|
-----------------------------

実空間方向を基底ベクトルの係数 :math:`\boldsymbol u` で表すと、同じCartesian方向を保つ係数変換は

.. math::

   \boldsymbol u'=P^{-1}\boldsymbol u.

一方、逆格子ベクトル（面法線）を :math:`\boldsymbol g=B\boldsymbol h` と書けば、同じ :math:`\boldsymbol g` を保つ指数は

.. math::

   \boldsymbol h'=P^{\mathsf T}\boldsymbol h.

方向は基底ベクトルの係数、面指数は双対基底での係数であり、変換則が逆向きになる。得られた方向や指数を整数表記にする際は、分母の有無や共通因子を別に処理する。

指数の共通因子は、何を保つかで扱いが異なる。方向指数は向きだけを示すなら最大公約数で約分できるが、対応するベクトルの長さは変わる。Miller指数も法線の向きだけなら約分できる一方、面間隔は変わる。回折指数は逆格子ベクトルそのもの :math:`\boldsymbol g=B\boldsymbol h` を指定するので、例えば :math:`(100)` と :math:`(200)` は同じ法線方向でも波数の大きさが異なる。基底変換後に同じ :math:`\boldsymbol g` を表す :math:`\boldsymbol h'=P^{\mathsf T}\boldsymbol h` は、分数成分を含む場合も含めてそのまま保ち、共通因子で約分してはならない。

.. |equivalent-direction-families| replace:: 等価な方向と面の族

.. _equivalent-directions:

|equivalent-direction-families|
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

ここまでの :math:`[uvw]` は1本の方向、:math:`(hkl)` は1組の平行な格子面を指す。結晶の対称操作で互いに移り合う2つの方向に沿って見ると、原子の並びは同じなので、その方向に沿って測る物性も等しい。例えば立方晶では、:math:`z` 軸まわりの90度回転が :math:`[100]` を :math:`[010]` へ移す。このような方向や面の集まりを族と呼び、ひとまとめにした記号で書く（:numref:`lt-index-brackets`。International Tables for Crystallography, Vol. A (2006), `§1.1.4 <https://it.iucr.org/Ab/ch1o1v0001/sec1o1o4.pdf>`__）。

.. list-table:: 方向と面の指数の括弧
   :name: lt-index-brackets
   :header-rows: 1
   :widths: 18 82

   * - 表記
     - 指すもの
   * - :math:`[uvw]`
     - 1本の方向。格子ベクトル :math:`A\boldsymbol u` の向き
   * - :math:`\langle uvw\rangle`
     - :math:`[uvw]` と対称操作で移り合う方向の集まり
   * - :math:`(hkl)`
     - 1組の平行な格子面。法線は逆格子ベクトル :math:`B\boldsymbol h`
   * - :math:`\{hkl\}`
     - :math:`(hkl)` と対称操作で移り合う面の集まり

どの方向が等価かは、結晶の\ :ref:`点群<crystal-point-group>`\ で決まる。対称操作 :math:`\{Q\mid\boldsymbol t\}` の線形部分を格子基底で表した行列を :math:`W=A^{-1}QA`\ （:eq:`crystal-symmetry-fractional`）とする。方向と面法線は2点の差で決まるベクトルなので、並進 :math:`\boldsymbol t` は作用しない。方向は :math:`QA\boldsymbol u=A(W\boldsymbol u)` に移る。:math:`Q` は直交行列なので :math:`Q=Q^{-\mathsf T}=A^{-\mathsf T}W^{-\mathsf T}A^{\mathsf T}` と書ける。これを使うと、面法線は :math:`QB\boldsymbol h=2\pi A^{-\mathsf T}W^{-\mathsf T}\boldsymbol h=B(W^{-\mathsf T}\boldsymbol h)` に移る。点群の操作の行列の集合を :math:`\mathcal P` と書けば、

.. math::
   :label: equivalent-direction-family

   \langle uvw\rangle=\{\,W\boldsymbol u\mid W\in\mathcal P\,\},\qquad
   \{hkl\}=\{\,W^{-\mathsf T}\boldsymbol h\mid W\in\mathcal P\,\}.

方向に :math:`W`、面指数に :math:`W^{-\mathsf T}` が掛かる形は、基底変換と同じである。基底変換の :math:`\boldsymbol u'=P^{-1}\boldsymbol u` と :math:`\boldsymbol h'=P^{\mathsf T}\boldsymbol h` も、:math:`M=P^{-1}` と置けば :math:`\boldsymbol u'=M\boldsymbol u`、:math:`\boldsymbol h'=M^{-\mathsf T}\boldsymbol h` と書ける。ただし基底変換は同じベクトルを別の基底で書き直す操作で、:math:`W` は同じ基底のまま別の方向へ移す操作である。また並進部分は方向に作用しないので、らせん軸や映進面は、対応する回転や鏡映と同じ族を作る。

族に含まれる方向の数は点群によって変わる。立方晶の点群 :math:`m\bar3m`\ （48個の操作）は、立方慣用単位胞の基底で、成分の並べ替えと符号の反転をすべて含む。このため :math:`\langle100\rangle` は :math:`\pm[100]`、:math:`\pm[010]`、:math:`\pm[001]` の6方向、:math:`\langle110\rangle` は12方向、:math:`\langle111\rangle` は8方向になる。正方晶の点群 :math:`4/mmm`\ （16個）には :math:`c` 軸を :math:`a` 軸へ移す操作が無い。:math:`\langle100\rangle` は :math:`\pm[100]` と :math:`\pm[010]` の4方向だけで、:math:`\pm[001]` は別の族 :math:`\langle001\rangle` になる。極性の点群 :math:`4mm`\ （8個）には :math:`c` 軸を反転する操作も無く、:math:`[001]` と :math:`[00\bar1]` は等価でない。:math:`[uvw]` と :math:`[\bar u\bar v\bar w]` が同じ族に入るのは、反転のように :math:`\boldsymbol u` を :math:`-\boldsymbol u` へ移す操作が点群にあるときに限る（\ :ref:`反転対称性と自発分極<inversion-and-polarization>`\ ）。

族の要素は、数字の並べ替えと符号の反転とは限らない。立方慣用単位胞の直交基底では :math:`W` が直交行列で :math:`W^{-\mathsf T}=W` なので、:math:`\langle uvw\rangle` と :math:`\{uvw\}` は同じ指数の組を並べる。六方晶の基底（:math:`\gamma=120^\circ`）では、:math:`c` 軸まわりの60度回転が :math:`\boldsymbol a_1` を :math:`\boldsymbol a_1+\boldsymbol a_2` へ移す。点群 :math:`6/mmm` の :math:`\langle100\rangle` は :math:`\pm[100]`、:math:`\pm[010]`、:math:`\pm[110]` の6方向、:math:`\{100\}` は :math:`\pm(100)`、:math:`\pm(010)`、:math:`\pm(1\bar10)` の6組になる。

相転移で対称性が下がった結晶では、高温相の軸で指数を書く慣習がある。ペロブスカイトの\ :ref:`擬立方格子<pseudocubic-cell>`\ で書いた「擬立方の :math:`\langle100\rangle`」は、立方晶の点群 :math:`m\bar3m` で等価だった6方向の名前であり、低温相での等価性を表さない。正方晶相（点群 :math:`4mm`）では、6方向は極性軸の向き :math:`[001]`、その逆向き :math:`[00\bar1]`、残りの4方向という3つの族に分かれる。強誘電体の分極が「擬立方の :math:`\langle100\rangle` を向く」とは、6方向のうち1つが選ばれた状態をいう。分極の向きがそろった領域を分域（ドメイン）といい、隣り合う分域では6方向のうち別の方向が選ばれている。

.. |direction-and-plane-normal| replace:: 結晶方向と面法線が平行になる条件

|direction-and-plane-normal|
----------------------------

同じ指数 :math:`\boldsymbol u=(u,v,w)^{\mathsf T}` を方向 :math:`[uvw]` と面 :math:`(uvw)` に用いたとき、方向ベクトル :math:`A\boldsymbol u` と面法線 :math:`B\boldsymbol u=2\pi A G^{-1}\boldsymbol u` が平行になる条件は、:math:`\boldsymbol u` が計量行列 :math:`G` の固有ベクトルであること。:math:`G\propto I` なら任意の指数について平行だが、特定の指数では :math:`G\not\propto I` でも平行になりうる。これは晶系名だけでは決まらず、基底と指数の組による。立方晶の直交慣用基底では任意の同じ指数が平行になる一方、:ref:`FCC基本単位胞<lt-fcc-cell>` では例えば :math:`[11\bar{1}]_{\rm p}` と :math:`(11\bar{1})_{\rm p}` の法線は平行でなく、なす角の余弦は約0.905である。

:numref:`fig-crystal-direction-and-plane-normal`\ の二次元の例では、横方向の
:math:`[10]` を保ったまま基底のもう一方を傾けると、:math:`(10)` の向きとその法線が変わる。

.. figure:: images/crystal_direction_and_plane_normal.svg
   :name: fig-crystal-direction-and-plane-normal
   :alt: 正方格子では方向[10]と(10)の法線が平行。斜めの基底では方向[10]は右を向き、法線は斜め下を向く。
   :width: 100%
   :align: center

   灰色の破線は :math:`(10)` にあたる線、:math:`\boldsymbol g_{10}` はその法線を表す。
   :math:`[10]` の矢印は格子ベクトル :math:`\boldsymbol a_1` の全長で描き、
   法線の長さは模式的に示した。

.. _lt-transform-related:

関連ノート
---------------

* :ref:`lattice` — 格子・逆格子ベクトル、分率座標と計量。
* :ref:`unitcell` — ブラベー（Bravais）格子型と結晶系。
* :ref:`brillouinzone` — 逆格子とブリルアンゾーン。
* :ref:`lt-cell-transform` — 慣用単位胞と基本単位胞の変換、超胞、反射条件。
* :ref:`lt-structure-input` — 構造の標準化、ファイル形式、配列規約。

.. raw:: html

   <script src="../_static/js/lattice-transform-redirects.js" defer></script>
