.. _structure-optimization:

構造最適化
==========

構造最適化は、原子の位置やセルを動かし、指定した条件のもとで
エネルギーが低くなる構造を求める計算である。原子に働く力は位置を動かす
手がかりになり、セルに生じる応力は格子の形や体積を変える手がかりになる。
どの自由度を動かすかによって、得られる構造の意味が変わる。

前提は\ :ref:`格子ベクトルの独立な成分<lattice-dof>`\ と
:ref:`構造ごとの電子状態計算<kohn-sham-dft>`\ である。
単点計算、固定セル緩和、可変セル最適化を使い分け、結果の収束を判断する。

単点計算と固定セル緩和
----------------------

**単点計算** では、セルも原子座標も固定し、その構造でエネルギーや力などを
求める。特定の原子を少しずつずらしてエネルギー曲線を作る場合、
各点の変位を保つために単点計算を使う。変位させるたびに同じ極小へ緩和すると、
指定した変位におけるエネルギーが得られなくなる。

**固定セル緩和** では、セルの大きさと形を固定し、原子位置を動かす。
原子配置のエネルギーを :math:`E`、原子 :math:`i` の位置を
:math:`\boldsymbol r_i`、セルを表す格子行列を :math:`A` とする。
力 :math:`\boldsymbol F_i` と位置の微小変化
:math:`\delta\boldsymbol r_i` に対するエネルギー変化は

.. math::
   :label: structure-force-variation

   \boldsymbol F_i=-\left.\frac{\partial E}{\partial\boldsymbol r_i}\right|_A,
   \qquad
   \delta E=-\sum_i\boldsymbol F_i\cdot\delta\boldsymbol r_i

となる。力の方向へ十分小さく動かすと、一次のエネルギー変化は負になる。
指定した方向だけを動かすときは、その方向への力の成分を用いる。
緩和後に応力が残っていれば、固定したセルを変えたときにエネルギーが
まだ変わることを示す。

スメアリングを使う電子状態計算では、
:ref:`力と応力に対応する自由エネルギー<smearing-and-free-energy>`\ を
最小化する。以降の :math:`E` は、最適化に用いるエネルギーを表す。

.. _variable-cell-optimization:

可変セル最適化と外圧
--------------------

**可変セル最適化** では、セルの形や大きさを変える。内部座標も自由に
した場合は、セルの変形に伴って原子位置も緩和する。体積を :math:`V`、
セルの微小な対称ひずみを :math:`\delta\varepsilon_{ab}` とする。
原子の分率座標を固定したセル変形でのエネルギー変化を、引張を正とした
応力 :math:`\sigma_{ab}` を用いて書くと [OptNielsenMartin1985]_、

.. math::
   :label: structure-stress-variation

   \delta E=V\sum_{a,b}\sigma_{ab}\,\delta\varepsilon_{ab},
   \qquad
   \delta V=V\sum_a\delta\varepsilon_{aa}

となる。ここで :math:`a,b` は直交座標の成分で、対称なテンソルの
両方の添字について和を取る。体積の式は、ひずみの一次では
セルを変形する行列の行列式の変化が対角成分の和になることから得られる。

一定の静水圧 :math:`P_{\rm ext}` のもとでは、:math:`H=E+P_{\rm ext}V`
を最小化する。:eq:`structure-stress-variation`\ の二式を代入すると、
セル変形に対する :math:`H` の変化は

.. math::
   :label: structure-enthalpy-variation

   \delta H
     = V\sum_{a,b}(\sigma_{ab}+P_{\rm ext}\delta_{ab})\,
        \delta\varepsilon_{ab}

となる。:math:`\delta_{ab}` は :math:`a=b` で1、それ以外で0である。
セルのひずみがすべて自由なら、収束時の内部応力は外圧とつり合い、
:math:`\sigma_{ab}=-P_{\rm ext}\delta_{ab}` になる。
許すセル変形を限定すると、その変形方向の成分だけが収束の判定に入る。
圧縮を正とした内部圧力は :math:`P=-\operatorname{tr}(\sigma)/3` である。
プログラムが圧縮を正とする符号で応力成分を出す場合、ここで使う
引張を正とした成分とは符号が逆になる。外圧との差を調べる前に、
出力の対角成分と圧力の符号をこの関係でそろえる。

.. _symmetry-constrained-relaxation:

対称性を保つ格子と原子座標の拘束
--------------------------------

各相を同じ条件で比較したいときは、想定する相の格子を保つように
セルの自由度を選ぶ。次の表は、辺の長さ :math:`a,b,c` と格子角
:math:`\alpha,\beta,\gamma` を使った典型的な設定である。菱面体格子は
菱面体軸を選んだ場合を示す。

.. list-table::
   :header-rows: 1
   :widths: 25 49 26

   * - 格子の形
     - 保つ関係
     - 独立な量
   * - 立方
     - :math:`a=b=c`、格子角はすべて90°
     - 共通の辺長
   * - 正方
     - :math:`a=b`、格子角はすべて90°
     - :math:`a,c`
   * - 直方（斜方）
     - 格子角はすべて90°
     - :math:`a,b,c`
   * - 菱面体
     - :math:`a=b=c`、:math:`\alpha=\beta=\gamma`
     - 共通の辺長と角度

格子の条件はセルの形を定める。結晶全体の対称性は原子配置にも依存するので、
相の対称性を保つには、等価な原子同士の関係が保たれるように内部座標の
自由度も選ぶ。分率座標を固定してセルを変える場合、原子の絶対位置は
セルとともに動く。こうした計算は、格子の変化と内部座標の緩和の影響を
切り分けるときに使える。

`BaTiO₃の格子定数 <https://example.quloud-platform.quemix.com/BaTiO3/lattice-constant.html>`__
と `安定基底状態 <https://example.quloud-platform.quemix.com/BaTiO3/stability.html>`__
では、相ごとの格子を求めた後、その格子を固定して原子座標を緩和している。
この順序で計算すると、指定した格子上での相対エネルギーを比較できる。
セルと原子座標の変化が強く結び付く場合は、両方の自由度を許したときに
結果がどう変わるかも調べられる。

最適化アルゴリズムと収束判定
----------------------------

最適化アルゴリズムは、エネルギーとその勾配をもとに次の構造を選ぶ。
BFGSなどの準Newton法では、位置を動かしたときの勾配の変化を使って、
エネルギーの曲率を表す行列やその逆行列の近似を更新する。
曲率が大きい方向と小さい方向で変位の大きさを変えられるため、
全方向に同じ尺度で進むより効率よく極小に近づける場合がある [OptFletcher1970]_。

原子緩和は、動かせる方向の残留力が設定した許容値に入ったかで判断する。
可変セルでは、許された変形に対応する応力と外圧の差も見る。
エネルギーの変化が小さくても、更新幅が小さいだけなら力や応力は残る。
電子状態の収束誤差や\ :ref:`基底の打ち切り<basis-set-cutoff>`\ でも
力や応力は変わりうるため、比較に必要な精度まで数値条件を収束させる。

力が消えた構造は、指定した自由度についての停留点である。
拘束を解くと、元の計算では動かせなかった方向にエネルギーが下がることがある。
高対称構造では力が対称性で打ち消し合うこともあるため、\ :ref:`動的安定性<imaginary-frequency>`\ まで調べるには、
原子変位に対するエネルギー曲率をフォノンなどで調べる。

.. _opt-coupled-cell-example:

説明用の事例：力が消えてもセルに応力が残る場合
----------------------------------------------

固定セルで原子に働く力が消えても、セルを動かす余地は残る。
変位を :math:`x`、基準体積を :math:`V_0`、相対的な体積変化を
:math:`\eta=(V-V_0)/V_0` とする。体積を変えると
原子が落ち着く位置もずれる模型を考える。

.. math::
   :label: structure-coupled-cell-model

   E(x,\eta)=\frac{k}{2}(x-x_0-\lambda\eta)^2
       +\frac{BV_0}{2}(\eta-\eta_0)^2.

:math:`k` は原子変位の曲率、:math:`B` は体積変化に対する剛性を表す
パラメータである。:math:`x_0` は基準体積での平衡位置、
:math:`\lambda` は体積の変化と原子位置を結びつける係数、
:math:`\eta_0` はエネルギーが最小になる体積変化である。

:math:`V=V_0` に固定すると\ :eq:`structure-force-variation`\ から
:math:`F=-k(x-x_0)` なので、緩和後は :math:`x=x_0` となる。
この点では\ :eq:`structure-coupled-cell-model`\ の第1項はゼロになる。
第2項を :math:`V` で微分すると、:math:`d\eta/dV=1/V_0` なので
:math:`dE/dV=B(\eta-\eta_0)` となる。等方変形では
:eq:`structure-stress-variation`\ の2式から、:math:`dE/dV` は
引張を正とした各対角応力に等しい。固定セルの緩和後に残る対角応力は
:math:`-B\eta_0` である。

.. list-table:: 外圧ゼロで固定セルと可変セルを比べる例
   :header-rows: 1
   :widths: 28 18 18 18 18

   * - 条件
     - 原子位置 (Å)
     - 体積 (Å³)
     - エネルギー (eV)
     - 対角応力 (eV/Å³)
   * - 固定セル
     - 0.10
     - 100
     - 0.020
     - −0.020
   * - 可変セル
     - 0.12
     - 102
     - 0
     - 0

表では :math:`V_0=100\,\text{Å}^3`、:math:`B=1\,\mathrm{eV}/\text{Å}^3`、
:math:`k=2\,\mathrm{eV}/\text{Å}^2`、:math:`x_0=0.10\,\text{Å}`、
:math:`\lambda=1.0\,\text{Å}`、:math:`\eta_0=0.02` とした。
外圧ゼロでは\ :eq:`structure-enthalpy-variation`\ により応力ゼロが
体積が自由な場合の条件となる。:math:`\eta=\eta_0` まで変形させれば、
原子の平衡位置も :math:`x_0+\lambda\eta_0=0.12\,\text{Å}` に変わる。

.. _opt-quadratic-example:

説明用の事例：曲率の違いと最適化の進み方
----------------------------------------

曲率が方向によって大きく異なると、最急降下法は狭い谷をジグザグに横切る。
二つの無次元座標を :math:`p,q` とし、無次元のエネルギーを

.. math::
   :label: structure-anisotropic-quadratic

   e(p,q)=\frac{p^2+100q^2}{2}

とする。初期点 :math:`(1,0.01)` では、勾配
:math:`\boldsymbol g=(p,100q)` の2成分は同じ1である。最急降下法では
:math:`-\boldsymbol g` 方向に進み、その直線上の極小を選ぶ。
座標を :math:`\boldsymbol x=(p,q)` とする。方向 :math:`\boldsymbol d` に進むときのステップは、
:math:`e(\boldsymbol x+\alpha\boldsymbol d)` を
:math:`\alpha` で微分してゼロとおくと得られる。

.. math::
   :label: structure-quadratic-line-minimum

   \alpha=-\frac{\boldsymbol g^{\mathsf T}\boldsymbol d}
                 {\boldsymbol d^{\mathsf T} A_{\mathrm H}\boldsymbol d},
   \qquad A_{\mathrm H}=\operatorname{diag}(1,100).

BFGSでも直線上の極小を求める。最初は逆Hessianの近似に単位行列を使うため、
最初の方向は最急降下法と一致する。BFGSは1ステップでの位置の変化と勾配の
変化を使い、逆Hessianの近似を更新する。これにより2回目の探索の方向が
最急降下法と異なり、この二次形式では極小に届く。

.. list-table:: 初期エネルギーで割った値の比較
   :header-rows: 1
   :widths: 30 35 35

   * - 更新回数
     - 最急降下法
     - BFGS
   * - 1
     - 0.96079
     - 0.96079
   * - 2
     - 0.92311
     - ほぼ0
   * - 10
     - 0.67031
     - 収束済み

初回は値が同じなので、違いは直線探索の精度から生じたものではない。
この比較ではBFGSが1回目に得た曲率の情報を使うことで、2回目の更新から差が出る。

.. _opt-interpretation-limits:

解釈と限界
----------

* **収束の対象。** 固定セルの力の収束は、そのセルで原子配置が停留点に
  達したことを示す。可変セルで同じ判断をするには、許されたセル変形に
  対する残留応力も判定する。対称性で拘束した方向の安定性には別の評価が要る。
* **反復回数。** 上の比較は、二次形式で直線上の極小を毎回正確に
  求めた場合の値である。実材料では曲率が途中で変わり、エネルギーや
  勾配にも数値誤差がある。反復回数だけで手法を比べず、最後の力や応力と
  目的の構造量が一致するかを比べる。
* **局所構造と相安定性。** 異なる初期構造が異なる極小に落ちる材料では、
  一つの最適化で見つけた構造だけから全体の最安定相は決まらない。
  複数の相を比較するときは、拘束、外圧、エネルギーの基準をそろえる。
  有限温度の相安定性を求めるには、熱による自由エネルギーの寄与も要る。

関連資料
--------

* :ref:`lattice-dof`
* :ref:`energy-reference`
* `BaTiO₃の二重井戸ポテンシャルの単点計算 <https://example.quloud-platform.quemix.com/BaTiO3/total-energy-DFT-MLIP.html>`__

参考文献
--------

.. [OptNielsenMartin1985] O. H. Nielsen and R. M. Martin, *Phys. Rev. B* **32**,
   3780–3791 (1985). `doi:10.1103/PhysRevB.32.3780 <https://doi.org/10.1103/PhysRevB.32.3780>`_.
.. [OptFletcher1970] R. Fletcher, *Comput. J.* **13**, 317–322 (1970).
   `doi:10.1093/comjnl/13.3.317 <https://doi.org/10.1093/comjnl/13.3.317>`_.
