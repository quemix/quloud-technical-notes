.. _bond_order:

結合次数
========

**結合次数** は、原子間の化学結合の程度を表す指標である。化学結合の基本的な
分類では、単結合、二重結合、三重結合にそれぞれ1、2、3を対応させる。電子状態
計算から評価した結合次数は整数とは限らず、その定義も複数ある。本稿では、
分子軌道の電子数による定義から出発し、密度行列の非対角要素による定義
（Coulson結合次数）とそのエネルギー上の意味、Wiberg・Mayerの結合指数との関係を
式で追う。

**前提知識**: :ref:`タイト・バインディング近似<tightbinding>`、
:ref:`Löwdin解析<lowdin>` の密度行列。

**学習目標**:

* 結合性・反結合性軌道の電子数から結合次数を求める。
* 密度行列の非対角要素が結合次数になることを、二原子分子で確かめる。
* 結合次数がホッピングに対するエネルギーの微分であることを導く。
* 一様な半充填鎖の結合次数 :math:`2/\pi` と、有限鎖の端による交替を導く。
* Wiberg・Mayer結合指数との関係と、指標の限界を説明する。

分子軌道の電子数による定義
--------------------------

二原子分子では、2つの原子軌道から結合性軌道と反結合性軌道ができる。それぞれに
入る電子数を :math:`N_{\mathrm{bonding}}`、:math:`N_{\mathrm{antibonding}}` とすると、

.. math::
   :label: bo-mo

   b=\frac{N_{\mathrm{bonding}}-N_{\mathrm{antibonding}}}{2}

を結合次数とする。電子対1組が1本の結合に対応するように2で割っている。例えば
水素分子の基底状態では、結合性軌道に電子が2個入り、反結合性軌道は空なので
:math:`b=1` である。He\ :sub:`2`\ では両方に2個ずつ入るので :math:`b=0` となり、
安定な結合をつくらないことと対応する。

この定義は、軌道を結合性・反結合性に分類できる簡単な分子でしか使えない。
多原子系に一般化するには、軌道の分類ではなく、原子間の密度行列要素を使う。

密度行列による定義（Coulson結合次数）
--------------------------------------

各原子に1つずつ直交した軌道 :math:`|r\rangle` を置き、分子軌道を
:math:`\psi_i=\sum_r c_{ri}|r\rangle`\ （係数は実数）と展開する。Coulsonは
π電子系に対して、原子 :math:`r` と :math:`s` の間の結合次数を

.. math::
   :label: bo-coulson

   p_{rs}=\sum_i n_i\,c_{ri}\,c_{si}

と定義した [Coulson1939]_。ここで :math:`n_i` は軌道 :math:`i` の占有数である。
これは直交基底での密度行列の非対角要素 :math:`P_{rs}` そのものである。

二原子分子でこの定義が :eq:`bo-mo` と一致することを確かめる。結合性軌道と
反結合性軌道の係数は :math:`(1,1)/\sqrt2` と :math:`(1,-1)/\sqrt2` なので、

.. math::

   p_{12}=N_{\mathrm{bonding}}\cdot\frac{1}{\sqrt2}\cdot\frac{1}{\sqrt2}
   +N_{\mathrm{antibonding}}\cdot\frac{1}{\sqrt2}\cdot\left(-\frac{1}{\sqrt2}\right)
   =\frac{N_{\mathrm{bonding}}-N_{\mathrm{antibonding}}}{2}

となる。結合性軌道の電子は :math:`p_{rs}` を増やし、反結合性軌道の電子は減らす。
:eq:`bo-coulson` は、この寄与をすべての占有軌道について足し合わせたものである。

基底関数が直交していない第一原理計算では、:ref:`Löwdin直交化<lowdin>` した
密度行列 :math:`P^{\mathrm L}=S^{1/2}DS^{1/2}` の非対角要素を使うのが一つの方法である。
1原子1基底関数の場合、隣接原子 :math:`i`、:math:`i+1` の間の量

.. math::
   :label: bo-lowdin

   B_i=P^{\mathrm L}_{i,i+1}

はCoulson結合次数を非直交基底に拡張したものと見なせる。:math:`B_i` の符号は
基底関数の位相の取り方に依存するので、比較するときは位相を揃えておく。

エネルギーとの関係
------------------

Coulson結合次数には、エネルギー上の明確な意味がある。電子間相互作用を含まない
タイト・バインディング模型で、ハミルトニアンの行列要素を :math:`h_{rs}` とすると、
全エネルギーは

.. math::

   E=\sum_i n_i\langle\psi_i|\hat H|\psi_i\rangle
   =\sum_i n_i\sum_{rs}c_{ri}h_{rs}c_{si}
   =\sum_{rs}h_{rs}P_{rs}

と密度行列で書ける。1次元鎖でオンサイトエネルギーを :math:`\varepsilon_0`、
:math:`i` 番目の結合のホッピングを :math:`h_{i,i+1}=-t_i` とすると、
:math:`P_{rs}=P_{sr}` より

.. math::
   :label: bo-energy

   E=\varepsilon_0\sum_rP_{rr}-2\sum_it_i\,B_i

となる。占有数を固定してホッピング :math:`t_i` を少し変えるとき、
Hellmann–Feynmanの定理により固有ベクトルの変化はエネルギーの1次の変化に寄与しない。
したがって

.. math::

   \frac{\partial E}{\partial t_i}=-2B_i

である。結合次数が大きい結合ほど、ホッピングを強めたときにエネルギーが大きく下がる。
この意味で、:math:`B_i` は各結合が全エネルギーに寄与する重みを表す。

一様な鎖の結合次数
------------------

すべてのホッピングが等しい最近接タイト・バインディング鎖を半充填にした場合の
結合次数を求める。周期鎖の固有状態は :math:`c_n(k)=e^{ikna}/\sqrt N` であり、
占有されるのは :math:`|k|<\pi/(2a)` の状態である。:eq:`bo-coulson` の和を積分に
置き換え、:math:`\theta=ka` とおくと、

.. math::

   P_{n,n+m}=2\sum_{|k|<\pi/2a}\frac{e^{-ikma}}{N}
   =\frac{2}{2\pi}\int_{-\pi/2}^{\pi/2}e^{-im\theta}\,d\theta
   =\frac{2\sin(m\pi/2)}{m\pi}

となる。先頭の2はスピンの縮重度である。隣接原子間（:math:`m=1`）では

.. math::
   :label: bo-uniform

   B=\frac{2}{\pi}\approx0.637

を得る。:math:`B` は1より小さい。1原子1電子の鎖では、各原子の電子が左右の
両隣と結合を分け合い、さらに遠い原子との相関（:math:`m=3,5,\ldots`）にも分配される
ためである。偶数の :math:`m\ne0` では :math:`P_{n,n+m}=0` となる。
この値は :math:`t` によらない。一様な鎖の固有ベクトルは :math:`t` の大きさに
依存しないからである。

両端が開いた有限鎖では、:ref:`タイト・バインディング近似<tightbinding>` で求めた
固有ベクトル :math:`\phi_j(i)=\sqrt{2/(N+1)}\sin\bigl(ij\pi/(N+1)\bigr)` を使って

.. math::
   :label: bo-open-chain

   B_i=2\sum_{j=1}^{N/2}\phi_j(i)\,\phi_j(i+1)

を計算する。ホッピングが一様でも端の影響で :math:`B_i` は1本おきに強弱を繰り返し、
その振幅は鎖の中央に向かって小さくなる。鎖の中央での交替の振幅は
:math:`N=16,32,64` でそれぞれ約0.065、0.031、0.016であり、おおむね :math:`1/N` で
減少して、:math:`N\to\infty` では一様な値 :eq:`bo-uniform` に近づく。

価数の和則
----------

閉殻の単一行列式では、直交基底での密度行列が :math:`P^2=2P` を満たす
（:ref:`Löwdin解析<lowdin>` で見たように :math:`P/2` は射影である）。
その :math:`(r,r)` 成分を取ると

.. math::

   \sum_sP_{rs}^2=2P_{rr}

となる。1原子1軌道で :math:`P_{rr}=1` のとき、

.. math::
   :label: bo-valence

   \sum_{s\ne r}P_{rs}^2=1

を得る。各原子が他の原子と結合に使える総量は一定であり、それが相手の原子に
分配されることを表す。水素分子では :math:`P_{12}^2=1` で1本の単結合になる。
一様な無限鎖では、最近接の2本で :math:`2(2/\pi)^2\approx0.81`、残りは遠い原子との
:math:`m=3,5,\ldots` の項が担い、:math:`\sum_{m\,\mathrm{odd}}8/(m\pi)^2=1` で和則が
満たされる。

Wiberg結合指数とMayer結合次数
-----------------------------

直交基底での密度行列を使い、原子 :math:`A` と :math:`B` の間の結合指数を

.. math::
   :label: bo-wiberg

   W_{AB}=\sum_{\mu\in A}\sum_{\nu\in B}P_{\mu\nu}^2

と定義したものが **Wiberg結合指数** である [Wiberg1968]_。1原子1軌道では
:math:`W_{i,i+1}=B_i^2` となる。2乗しているので位相の取り方に依存せず、1原子に
複数の基底関数がある場合も原子の組ごとにまとめられる。:eq:`bo-valence` は、
Wiberg指数の和が原子の価数になるという関係の特別な場合である。

Mayerは、非直交基底のまま使える形として、閉殻では

.. math::

   B^{\mathrm{Mayer}}_{AB}=\sum_{\mu\in A}\sum_{\nu\in B}(DS)_{\mu\nu}(DS)_{\nu\mu}

を提案した [Mayer1983]_。直交基底（:math:`S=I`）ではWiberg指数に一致する。
スピン分極した系では、スピンごとの密度行列を使った

.. math::

   B^{\mathrm{Mayer}}_{AB}=2\sum_{\mu\in A}\sum_{\nu\in B}
   \left[(D^\alpha S)_{\mu\nu}(D^\alpha S)_{\nu\mu}
   +(D^\beta S)_{\mu\nu}(D^\beta S)_{\nu\mu}\right]

が使われ、閉殻（:math:`D^\alpha=D^\beta=D/2`）では上の式に戻る。

:eq:`bo-lowdin` の :math:`B_i` のような密度行列要素そのものと、それを2乗した
Wiberg・Mayer型の指数は、同じ結合に対しても値が異なる。どの定義を使ったかを
明記し、同じ定義・同じ計算条件の中で比較する。

説明用の事例：水素原子鎖
------------------------

`水素原子を並べると電子バンドは生まれるのか <https://example.quloud-platform.quemix.com/hydrogen_chain/band_formation.html>`_
では、STO-3G基底（水素1原子あたり1個の基底関数）で計算した有限水素原子鎖
（原子間隔1.8 Å、Psi4 1.10）について、:eq:`bo-lowdin` の :math:`B_i` を鎖に沿って
比べている。次の表は、例題の再現用データから、鎖の中央の隣り合う2本の結合の値と、
中央8本の結合を1本おきの2組に分けたときの平均値の差の半分（交替振幅）を
まとめたものである。比較のため、同じ定義で :eq:`bo-open-chain` から求めた一様な
最近接タイト・バインディング（TB）模型の値も示す。

.. list-table:: 鎖の中央の結合次数 :math:`B_i` と交替振幅
   :header-rows: 1
   :widths: 16 28 28 28

   * - :math:`N`
     - 一様TB模型
     - RKS-PBE
     - RHF
   * - 16
     - 0.697 / 0.579（0.065）
     - 0.696 / 0.581（0.063）
     - 0.865 / 0.375（0.247）
   * - 32
     - 0.667 / 0.607（0.031）
     - 0.666 / 0.608（0.030）
     - 0.862 / 0.378（0.242）
   * - 64
     - 0.652 / 0.621（0.016）
     - 0.651 / 0.622（0.015）
     - 0.862 / 0.378（0.242）

RKS-PBEの値は、パラメータを含まない一様TB模型の値と小数点以下2〜3桁まで一致し、
中央8本の平均は0.637で :eq:`bo-uniform` の :math:`2/\pi` に等しい。したがって、
RKS-PBEで見える交替は有限鎖の端による効果として理解でき、:math:`N` とともに
小さくなる。一方、RHFの交替振幅は :math:`N` を増やしてもほとんど変わらず、
端の効果では説明できない結合の強弱、すなわち結合次数波（BOW）が鎖の中央に
残っている（:ref:`tb-ssh` を参照）。

スピン非制限計算（:math:`N=32`）では、スピン和の密度行列から求めた :math:`B_i` は
ほぼ一様になり、UHFで0.312、UKS-PBEで0.531と、スピン制限計算の平均値より小さい。
α電子とβ電子が1つおきの原子に分かれて局在すると、隣接原子間で同じスピンの
電子を共有する程度が下がり、スピン和の密度行列の非対角要素も小さくなる。

解釈と限界
----------

結合次数は観測量ではなく、定義と基底関数に依存する指標である。結合エネルギーや
結合の長さとは異なる量であり、相関はあっても一対一には対応しない。
:eq:`bo-energy` のようなエネルギーとの関係は、電子間相互作用のない模型で成り立つ
ものであり、自己無撞着な平均場計算や相関のある計算では、そのままの形では成り立たない。

非直交基底での結合次数は、直交化や分割の方法によって値が変わる。1原子に多くの
基底関数がある場合や、広がった基底関数を使う場合は特に注意する。

関連項目
--------

* :ref:`lowdin`
* :ref:`tightbinding`
* :ref:`spin_restriction`
* `水素原子を並べると電子バンドは生まれるのか <https://example.quloud-platform.quemix.com/hydrogen_chain/band_formation.html>`_

参考資料
--------

* `ORCA Manual: Population Analysis <https://orca-manual.mpi-muelheim.mpg.de/contents/spectroscopyproperties/population.html>`_

.. [Coulson1939] C. A. Coulson, “The electronic structure of some polyenes and
   aromatic molecules. VII. Bonds of fractional order by the molecular orbital method,”
   *Proceedings of the Royal Society of London A* **169**, 413–428 (1939),
   `doi:10.1098/rspa.1939.0006 <https://doi.org/10.1098/rspa.1939.0006>`_.
.. [Wiberg1968] K. B. Wiberg, “Application of the Pople-Santry-Segal CNDO method to the
   cyclopropylcarbinyl and cyclobutyl cation and to bicyclobutane,”
   *Tetrahedron* **24**, 1083–1096 (1968),
   `doi:10.1016/0040-4020(68)88057-3 <https://doi.org/10.1016/0040-4020(68)88057-3>`_.
.. [Mayer1983] I. Mayer, “Charge, bond order and valence in the ab initio SCF theory,”
   *Chemical Physics Letters* **97**, 270–274 (1983),
   `doi:10.1016/0009-2614(83)80005-0 <https://doi.org/10.1016/0009-2614(83)80005-0>`_.
