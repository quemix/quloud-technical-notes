.. _lowdin:

Löwdin解析
==========

**Löwdin解析** は、電子状態計算で得られた電子を原子ごとに割り当て、
原子の電子数やスピンの分布を評価する方法の一つである。原子に中心を置いた
基底関数は一般に互いに重なっているため、重なりの部分にある電子をどの原子に
数えるかには任意性がある。Löwdin解析では、元の基底をできるだけ変えないように
直交化した基底に密度行列を書き直し、その対角成分で電子を数える [Lowdin1950]_。
このように電子を原子や基底関数に割り当てる解析を **ポピュレーション解析**
（population analysis）と総称する。

**前提知識**: 基底関数による軌道の展開（LCAO）、対称行列の固有値分解、
:ref:`スピン制限計算とスピン非制限計算<spin_restriction>` の密度行列。

**学習目標**:

* 非直交基底での電子数が :math:`\mathrm{Tr}(DS)` で与えられることを導く。
* 対称直交化 :math:`S^{-1/2}` の定義と性質を説明する。
* Löwdin密度行列 :math:`S^{1/2}DS^{1/2}` を導き、Mulliken解析との違いを説明する。
* 原子ごとの電子数と原子スピン密度を評価し、その解釈の限界を理解する。

非直交基底での電子数
--------------------

基底関数を :math:`\chi_\mu`\ （:math:`\mu=1,\ldots,K`）、重なり行列を
:math:`S_{\mu\nu}=\langle\chi_\mu|\chi_\nu\rangle` とする。以下では基底関数と
展開係数を実数とする。分子軌道を

.. math::

   \psi_i(\boldsymbol r)=\sum_\mu\chi_\mu(\boldsymbol r)\,C_{\mu i}

と展開し、軌道 :math:`i` の占有数を :math:`n_i` とすると、電子密度は

.. math::

   \rho(\boldsymbol r)=\sum_i n_i\,|\psi_i(\boldsymbol r)|^2
   =\sum_{\mu\nu}D_{\mu\nu}\,\chi_\mu(\boldsymbol r)\chi_\nu(\boldsymbol r),
   \qquad
   D_{\mu\nu}=\sum_i n_i\,C_{\mu i}C_{\nu i}

と書ける。:math:`D` を基底関数表示の **密度行列** と呼ぶ。スピンごとに
:math:`D^\alpha`、:math:`D^\beta` を定義すれば、スピン和は
:math:`D=D^\alpha+D^\beta` である。全空間で積分すると、電子数は

.. math::
   :label: lw-trace

   N=\int\rho(\boldsymbol r)\,d\boldsymbol r
   =\sum_{\mu\nu}D_{\mu\nu}S_{\nu\mu}=\mathrm{Tr}(DS)

となる。基底が直交していれば :math:`S=I` で、:math:`N` は :math:`D` の対角成分の
和になる。非直交基底では、:math:`\mu\ne\nu` の項 :math:`D_{\mu\nu}S_{\nu\mu}` が
2つの基底関数の重なり部分にある電子を表し、これを原子に分ける方法が一意に
決まらない。

**Mulliken解析** [Mulliken1955]_ は、:eq:`lw-trace` の対角和を基底関数ごとに分け、

.. math::

   N_A^{\mathrm{Mulliken}}=\sum_{\mu\in A}(DS)_{\mu\mu}

とする。これは重なりの電子 :math:`2D_{\mu\nu}S_{\nu\mu}` を2つの基底関数に半分ずつ
割り当てることに相当する。計算は簡単だが、:math:`(DS)_{\mu\mu}` は負になったり、
1軌道に入りうる電子数2を超えたりすることがあり、広がった基底関数を加えると
値が大きく変わる。

対称直交化
----------

:math:`S` は実対称な正定値行列なので、直交行列 :math:`U` と正の固有値の対角行列
:math:`s` を使って :math:`S=UsU^{\mathsf T}` と分解でき、その平方根と逆平方根を

.. math::

   S^{1/2}=Us^{1/2}U^{\mathsf T},\qquad S^{-1/2}=Us^{-1/2}U^{\mathsf T}

で定義できる。これを使って新しい基底

.. math::
   :label: lw-sym-orth

   \lambda_\nu=\sum_\mu\chi_\mu\,(S^{-1/2})_{\mu\nu}

を作ると、

.. math::

   \langle\lambda_\mu|\lambda_\nu\rangle
   =\bigl(S^{-1/2}SS^{-1/2}\bigr)_{\mu\nu}=\delta_{\mu\nu}

なので :math:`\{\lambda_\nu\}` は正規直交系になる。これを **対称直交化**
（Löwdin直交化）という。

直交化の方法はGram–Schmidt法など他にもあるが、Gram–Schmidt法の結果は基底関数を
並べる順序に依存する。対称直交化はすべての基底関数を対等に扱い、しかも
すべての正規直交系の中で :math:`\sum_\mu\|\lambda_\mu-\chi_\mu\|^2` を最小にする
[CK1957]_。つまり :math:`\lambda_\mu` は、元の :math:`\chi_\mu` に最も近い直交化された
関数であり、:math:`\chi_\mu` と同じ原子に属すると見なすことが比較的自然である。

Löwdin密度行列と原子の電子数
----------------------------

:eq:`lw-sym-orth` を逆に解くと :math:`\chi_\mu=\sum_\nu\lambda_\nu(S^{1/2})_{\nu\mu}`
なので、分子軌道は

.. math::

   \psi_i=\sum_\mu\chi_\mu C_{\mu i}
   =\sum_\nu\lambda_\nu\,C^{\mathrm L}_{\nu i},
   \qquad C^{\mathrm L}=S^{1/2}C

と書き直せる。直交化した基底での密度行列は

.. math::
   :label: lw-density

   P^{\mathrm L}=C^{\mathrm L}\,n\,C^{\mathrm L\mathsf T}=S^{1/2}DS^{1/2}

となる（:math:`n` は占有数を並べた対角行列）。この基底は直交しているので、
電子数は対角成分の和で与えられ、実際に

.. math::

   \mathrm{Tr}\,P^{\mathrm L}=\mathrm{Tr}\bigl(S^{1/2}DS^{1/2}\bigr)
   =\mathrm{Tr}(DS)=N

が成り立つ。Löwdin解析では、原子 :math:`A` に属する元の基底関数に対応する
対角成分を合計し、

.. math::
   :label: lw-population

   N_A=\sum_{\mu\in A}P^{\mathrm L}_{\mu\mu}

をその原子に割り当てられる電子数とする。

閉殻の単一行列式では、Löwdin電子数が物理的に妥当な範囲に収まることが保証される。
分子軌道の正規直交性 :math:`C^{\mathsf T}SC=I` は :math:`C^{\mathrm L\mathsf T}C^{\mathrm L}=I`
と同じなので、:math:`Q=P^{\mathrm L}/2` は占有軌道の空間への直交射影である。
射影の対角成分は :math:`Q_{\mu\mu}=\|Qe_\mu\|^2\le1` を満たすから、

.. math::

   0\le P^{\mathrm L}_{\mu\mu}\le2

となる。スピン非制限の場合は、スピンごとに
:math:`P^{\mathrm L\sigma}=S^{1/2}D^\sigma S^{1/2}` を作れば
:math:`0\le P^{\mathrm L\sigma}_{\mu\mu}\le1` が成り立つ。Mulliken電子数にはこのような
保証がない。

原子スピン密度
--------------

スピンごとのLöwdin密度行列から、原子 :math:`A` の **原子スピン密度** （spin population）を

.. math::
   :label: lw-spin

   m_A=\sum_{\mu\in A}\bigl(P^{\mathrm L\alpha}-P^{\mathrm L\beta}\bigr)_{\mu\mu}

と定義する。これは原子 :math:`A` に割り当てたα電子数とβ電子数の差であり、
:ref:`スピン密度<spin_restriction>` :math:`\rho_{\mathrm s}(\boldsymbol r)` を原子ごとに分けた量に当たる。全原子の和は
:math:`\sum_Am_A=N_\alpha-N_\beta` になる。上の不等式から、1原子1基底関数の場合は
:math:`|m_A|\le1` である。スピン制限の閉殻計算では :math:`D^\alpha=D^\beta` なので、
すべての原子で :math:`m_A=0` となる。

簡単な例：最小基底の水素分子
----------------------------

2つの水素原子に1s基底関数 :math:`\chi_1`、:math:`\chi_2` を1つずつ置き、重なりを
:math:`s` とする。基底状態では結合性軌道
:math:`\sigma_g=(\chi_1+\chi_2)/\sqrt{2(1+s)}` に電子が2個入るので、

.. math::

   S=\begin{pmatrix}1&s\\s&1\end{pmatrix},\qquad
   D=\frac{1}{1+s}\begin{pmatrix}1&1\\1&1\end{pmatrix}

である。:math:`DS` の対角成分はどちらも1なので、Mulliken電子数は各原子1になる。
一方、:math:`S` の固有ベクトルは :math:`(1,1)/\sqrt2` と :math:`(1,-1)/\sqrt2`、
固有値は :math:`1+s` と :math:`1-s` なので、:math:`S^{1/2}` は :math:`(1,1)` 方向に
:math:`\sqrt{1+s}` を掛ける。したがって

.. math::

   C^{\mathrm L}=S^{1/2}\frac{1}{\sqrt{2(1+s)}}\begin{pmatrix}1\\1\end{pmatrix}
   =\frac{1}{\sqrt2}\begin{pmatrix}1\\1\end{pmatrix},\qquad
   P^{\mathrm L}=\begin{pmatrix}1&1\\1&1\end{pmatrix}

となり、Löwdin電子数も各原子1である。等価な2原子では、どちらの方法でも対称性から
電子が半分ずつ分けられる。2つの方法の違いが現れるのは、原子が等価でない場合や、
基底関数の広がりが原子ごとに大きく異なる場合である。

:math:`P^{\mathrm L}` の非対角成分 :math:`P^{\mathrm L}_{12}=1` は、直交化した基底で見た
2原子間の電子の共有の程度を表し、:ref:`結合次数<bond_order>` の指標として使われる。

説明用の事例：水素原子鎖
------------------------

`水素原子を並べると電子バンドは生まれるのか <https://example.quloud-platform.quemix.com/hydrogen_chain/band_formation.html>`_
では、STO-3G基底（水素1原子あたり1個の基底関数）で計算した有限水素原子鎖
（原子間隔1.8 Å、Psi4 1.10）にLöwdin解析を用いている。スピン制限計算では、
各原子のLöwdin電子数はほぼ1で、例えば :math:`N=16` のRHFでは鎖の端の原子でも
0.994程度である。

スピン非制限計算では、:math:`N=32` の鎖の中央で原子スピン密度 :eq:`lw-spin` が
UHFで :math:`\pm0.895`、UKS-PBEで :math:`\pm0.614` と原子ごとに符号を変える。
1原子1基底関数での上限 :math:`|m_A|\le1` と比べると、UHFではα電子とβ電子が
1つおきの原子にほぼ完全に分かれていることがわかる。全原子の和は
:math:`N_\alpha=N_\beta` を反映して0になる。

解釈と限界
----------

電子を原子に分配する方法は一意ではなく、Löwdin電子数は観測量ではない。値は基底関数の
選び方に依存し、特に広がった基底関数を含む基底では、ある原子の基底関数が別の原子の
周りの電子を表すようになるため、原子への割り当ての意味が薄れる。Mulliken解析、
Löwdin解析のほかに、電子密度の空間分割に基づくBader解析やHirshfeld解析、
自然軌道に基づく自然ポピュレーション解析（NPA）なども用いられる。

したがって、Löwdin電子数や原子スピン密度は、同じ手法・同じ基底で得た結果を比較し、
電子状態の傾向を読み取るための指標として扱う。

関連項目
--------

* :ref:`spin_restriction`
* :ref:`bond_order`
* `水素原子を並べると電子バンドは生まれるのか <https://example.quloud-platform.quemix.com/hydrogen_chain/band_formation.html>`_

参考資料
--------

* `ORCA Manual: Population Analysis <https://orca-manual.mpi-muelheim.mpg.de/contents/spectroscopyproperties/population.html>`_
* 密度行列とポピュレーション解析の教科書的な説明は [Szabo1996]_ の3章にある。

.. [Lowdin1950] P.-O. Löwdin, “On the Non-Orthogonality Problem Connected with the
   Use of Atomic Wave Functions in the Theory of Molecules and Crystals,”
   *Journal of Chemical Physics* **18**, 365–375 (1950),
   `doi:10.1063/1.1747632 <https://doi.org/10.1063/1.1747632>`_.
.. [Mulliken1955] R. S. Mulliken, “Electronic Population Analysis on LCAO–MO Molecular
   Wave Functions. I,” *Journal of Chemical Physics* **23**, 1833–1840 (1955),
   `doi:10.1063/1.1740588 <https://doi.org/10.1063/1.1740588>`_.
.. [CK1957] B. C. Carlson and J. M. Keller, “Orthogonalization Procedures and the
   Localization of Wannier Functions,” *Physical Review* **105**, 102–103 (1957),
   `doi:10.1103/PhysRev.105.102 <https://doi.org/10.1103/PhysRev.105.102>`_.
