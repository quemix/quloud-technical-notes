.. _peierls-instability:

Peierls不安定性
===============

1次元の\ :ref:`半充填<half-filling>`\ の鎖を例に、原子の変位によって\ :ref:`バンドギャップ<valence-conduction-band-gap>`\ が開き、格子が自発的に
変形する仕組みを見ます。原子核を固定した鎖に現れる結合次数波との違いも扱います。

格子の二量化とバンドギャップ
----------------------------

等間隔に並んだ原子の間隔が長短交互になる変形を考える。この変形を二量化と呼ぶ。
鎖の周期は2倍になり、隣接原子間のホッピングも交替する。\ :ref:`SSH模型<tb-ssh>`\ では、
この交替によって元の鎖のフェルミ波数にギャップが開く（式 :eq:`tb-ssh-gap`）。
:numref:`fig-tightbinding-ssh-bulk-gap`\ の右では、二量化後のゾーン境界にギャップが開いている。
半充填では下側のバンドが占有され、占有状態のエネルギーが下がる。

格子を変形させるには弾性エネルギーが必要である。電子エネルギーの低下が弾性エネルギーの
増加を上回ると、全エネルギーが下がり、鎖は自発的に二量化する。これが1次元鎖の
**Peierls不安定性** である [Heeger1988]_。

.. _peierls-bond-order-wave:

原子を固定した鎖の結合次数波
----------------------------

原子核を等間隔に固定しても、電子状態の側で結合の強弱が交替することがある。
この状態を **結合次数波** （bond-order wave, BOW）と呼ぶ。Peierls歪みには
原子変位が伴うので、計算結果を読むときは、結合次数の交替と原子間隔の交替を区別する。

:numref:`fig-peierls-dimerization-and-bond-order`\ で、原子の位置が動く二量化と、
原子を固定したまま結合次数が交替する場合を見比べる。

.. figure:: images/peierls_dimerization_and_bond_order.svg
   :name: fig-peierls-dimerization-and-bond-order
   :alt: 上段は等間隔鎖。中段は原子間隔が短・長に交替する二量化。下段は原子位置を等間隔に保ったまま結合の強弱が交替する結合次数波。
   :width: 100%
   :align: center

   黒丸は原子位置、太い実線と細い破線は交替する結合の強・弱を示す。
   縦の点線は、原子を固定した鎖での位置の目安である。

Hartree–Fock法などの平均場計算で結合次数波が現れる場合、\ :ref:`結合次数<bond_order>`\ を表す
隣接原子間の密度行列要素の交替が、交換項を通じて有効ハミルトニアンの隣接要素の交替を
生む。それがまた結合次数の交替を支えるという自己無撞着な関係になっている。
SSH模型ではホッピングの交替を与えた上で、その結果として生じるギャップを記述する。

参考文献
--------

.. [Heeger1988] A. J. Heeger, S. Kivelson, J. R. Schrieffer, and W.-P. Su,
   “Solitons in conducting polymers,” *Reviews of Modern Physics* **60**, 781–850 (1988),
   `doi:10.1103/RevModPhys.60.781 <https://doi.org/10.1103/RevModPhys.60.781>`_.
