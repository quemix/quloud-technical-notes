.. _lt-cell-transform:

FCCで見る単位胞の取り直し
=========================

FCCの慣用単位胞と基本単位胞を例に、単位胞を取り直したときに原子位置、結晶方向、
反射指数がどう変わるかを確認し、NumPyで検算する。同じ指数の方向と面法線が基底によっては平行でなくなることも見る。
胞の形だけではブラベー格子型が決まらない例は、次の「\ :ref:`lt-cell-shape-bravais`\ 」で扱う。

**前提知識**: :ref:`格子の基底変換<lt-primitive-basis>`、:ref:`超胞<lt-supercell>`、
:ref:`逆格子の変換則<lt-reciprocal-transform>`、
:ref:`中心並進<centring-translation>`、:ref:`中心並進のある胞の逆格子<centred-reciprocal-lattice>`、
:ref:`方向と格子面<crystal-directions-planes>`。

**学習目標**:

* FCCの慣用単位胞と基本単位胞の間で、原子位置・方向指数・反射指数を変換する。
* 同じ指数の方向と面法線が、基底によっては平行にならないことを確かめる。
* 単位胞の変換と超胞を数値で検算する。

.. _lt-fcc-cell:

FCCの慣用単位胞と基本単位胞
---------------------------------------

一辺 :math:`a` の立方慣用単位胞をCartesian軸に沿って置くと :math:`A_{\rm c}=aI` である。FCC（F中心立方）格子の基本並進ベクトルの組の一例は

.. math::

   A_{\rm p}=A_{\rm c}P_{\rm F},\qquad
   P_{\rm F}=\frac12
   \begin{pmatrix}
   0&1&1\\
   1&0&1\\
   1&1&0
   \end{pmatrix}.

この列はそれぞれ :math:`\frac a2(0,1,1)`、:math:`\frac a2(1,0,1)`、:math:`\frac a2(1,1,0)` である。:math:`\det P_{\rm F}=1/4` なので :math:`V_{\rm c}=a^3`、:math:`V_{\rm p}=a^3/4`。3本の基本並進ベクトルの長さは :math:`a/\sqrt2`、相互の角度は :math:`60^\circ` である。

F中心慣用単位胞には、原点に加えて分率座標 :math:`(0,1/2,1/2)`、:math:`(1/2,0,1/2)`、:math:`(1/2,1/2,0)` の格子点がある（\ :ref:`中心並進<centring-translation>`）。単原子FCCでは慣用単位胞に4格子点、基本単位胞に1格子点が含まれる。

.. figure:: images/fcc_conventional_primitive.svg
   :name: lt-fcc-cell-figure
   :alt: FCCの慣用立方胞と菱面体基本単位胞を同じCartesian軸上に重ねた図
   :width: 92%
   :align: center

   青線は慣用立方胞（破線は奥の辺）、赤線は同じFCC格子を張る基本単位胞。黒丸は立方体の頂点、白丸は6つの面心の格子点で、基本単位胞の頂点 :math:`\boldsymbol a_1+\boldsymbol a_2` などは反対側の面心に一致する。表示は三次元構造の正射影である。

.. |fcc-positions-and-directions| replace:: FCCの原子位置と結晶方向の変換

|fcc-positions-and-directions|
------------------------------

慣用単位胞の面心位置を基本単位胞座標へ移す例では

.. math::

   P_{\rm F}^{-1}\begin{pmatrix}0\\1/2\\1/2\end{pmatrix}
   =\begin{pmatrix}1\\0\\0\end{pmatrix}
   \equiv\begin{pmatrix}0\\0\\0\end{pmatrix}
   \pmod{\mathbb Z^3}.

原点と整数格子並進だけ異なるため、基本単位胞内では同じ格子点に重なる。胞を小さくする際にはこの周期同値性を用いて重複を除く。

方向の指数も基底に依存する。慣用立方軸に沿う方向 :math:`[001]_{\rm c}` の旧基底成分は :math:`\boldsymbol u_{\rm c}=(0,0,1)^{\mathsf T}` であり、基本並進ベクトルの組では

.. math::

   \boldsymbol u_{\rm p}=P_{\rm F}^{-1}\boldsymbol u_{\rm c}
   =(1,1,-1)^{\mathsf T}.

すなわち :math:`[001]_{\rm c}` は :math:`[11\bar{1}]_{\rm p}` である。これは方向そのものが変わったのではなく、同じ方向ベクトルを異なる格子基底の係数で書いた結果である。Cartesian :math:`z` 軸と慣用軸が揃うこの例では :math:`[001]_{\rm c}` は :math:`z_{\rm Cartesian}` に平行だが、基本並進ベクトルの組の :math:`[001]_{\rm p}` とは平行でない。

.. figure:: images/fcc_directions.svg
   :name: lt-fcc-direction-figure
   :alt: 慣用基底の[001]方向、Cartesianのz軸、基本並進ベクトルの組の[001]方向の違い
   :width: 80%
   :align: center

   青矢印は :math:`[001]_{\rm c}` で、Cartesian :math:`z` 軸に平行。基本並進ベクトルの組では :math:`\boldsymbol a_1+\boldsymbol a_2-\boldsymbol a_3`\ （灰色の破線）と書けるので :math:`[11\bar{1}]_{\rm p}` である。赤矢印の :math:`[001]_{\rm p}=\boldsymbol a_3=\frac a2(1,1,0)` は別の方向を指す。

同じ指数の方向と面法線は、基底によっては平行にならない（\ :ref:`方向と面法線が平行になる条件<direction-and-plane-normal>`）。
立方晶の直交慣用基底では、:math:`[001]_{\rm c}` と、FCCの格子面の組 :math:`(002)_{\rm c}`\ （\ :ref:`指数の共通因子<index-common-factor>`）の法線はともに :math:`z` 軸を向く。
一方、基本並進ベクトルの組では、:math:`[11\bar{1}]_{\rm p}` が :math:`z` 軸を向くのに対し、
:math:`(11\bar{1})_{\rm p}` の法線は :math:`(-1,-1,3)` の向きで、なす角の余弦は :math:`3/\sqrt{11}\simeq0.905` である。

.. _lt-fcc-reciprocal:

FCCの反射指数と基本単位胞
--------------------------

:ref:`中心並進のある胞の逆格子<centred-reciprocal-lattice>`\ では、FCCの慣用指数 :math:`\boldsymbol h_{\rm c}` が逆格子ベクトルに対応する条件を、面心並進の分率座標から導いた。基本並進ベクトルの組へ移すと、同じ条件が指数の整数性として現れる。\ :ref:`逆格子の変換則<lt-reciprocal-transform>` :math:`B'=BP^{-\mathsf T}` から

.. math::

   \boldsymbol h_{\rm p}=P_{\rm F}^{\mathsf T}\boldsymbol h_{\rm c},
   \qquad B_{\rm c}\boldsymbol h_{\rm c}=B_{\rm p}\boldsymbol h_{\rm p}.

:math:`B_{\rm p}` の整数結合が逆格子なので、:math:`B_{\rm c}\boldsymbol h_{\rm c}` が逆格子ベクトルとなるのは :math:`\boldsymbol h_{\rm p}` が整数のとき、すなわち慣用指数 :math:`(hkl)` がすべて偶数またはすべて奇数のときで、条件 :eq:`centred-reciprocal-condition` と一致する。例えば :math:`(100)_{\rm c}` は :math:`\boldsymbol h_{\rm p}=(0,1/2,1/2)` で条件を満たさず、:math:`(200)_{\rm c}` は :math:`\boldsymbol h_{\rm p}=(0,1,1)` で条件を満たす。


.. |numerical-check| replace:: 数値での確認

.. _lt-numerical-check:

|numerical-check|
-----------------

次の短いNumPy例は、FCC変換、回転、超胞と、逆格子が\ :ref:`双対基底<reciprocal-basis>`\ になっていることをまとめて検算する。格子ベクトルは基底変換の式と同様に\ **列**\ で保持し、原子座標も列ベクトルとする。格子ベクトルを行に並べるAPIへ渡すときは、\ :ref:`配列規約<lt-array-conventions>`\ のとおり転置する。

.. code-block:: python

   from itertools import product
   import numpy as np

   a = 4.0  # Angstrom
   A = a * np.eye(3)
   P = 0.5 * np.array([[0, 1, 1], [1, 0, 1], [1, 1, 0]])
   Ap = A @ P
   assert np.isclose(np.linalg.det(A), 64.0)
   assert np.isclose(abs(np.linalg.det(Ap)), 16.0)

   # 基本並進ベクトルの長さと相互の角度
   G = Ap.T @ Ap
   assert np.allclose(np.sqrt(np.diag(G)), 2 * np.sqrt(2))
   assert np.isclose(np.degrees(np.arccos(G[0, 1] / G[0, 0])), 60.0)

   # 面心位置と方向の基本並進ベクトルの組表示
   s_primitive = np.linalg.solve(P, np.array([0.0, 0.5, 0.5]))
   u_primitive = np.linalg.solve(P, np.array([0.0, 0.0, 1.0]))
   assert np.allclose(s_primitive, [1, 0, 0])
   assert np.allclose(u_primitive, [1, 1, -1])

   # 逆格子と、同じ指数の方向・面法線のなす角
   Bp = 2 * np.pi * np.linalg.inv(Ap).T
   assert np.allclose(Ap.T @ Bp, 2 * np.pi * np.eye(3))
   d, n = Ap @ [1, 1, -1], Bp @ [1, 1, -1]
   assert np.isclose(d @ n / np.linalg.norm(d) / np.linalg.norm(n), 3 / np.sqrt(11))

   # z軸まわりの任意角の回転
   theta = 0.37
   Q = np.array([[np.cos(theta), -np.sin(theta), 0],
                 [np.sin(theta),  np.cos(theta), 0],
                 [0, 0, 1]])
   assert np.allclose(Q.T @ Q, np.eye(3))
   assert np.allclose((Q @ Ap).T @ (Q @ Ap), G)

   # 超胞: 12個の周期像と、周期境界込みの最短原子間距離
   M = np.diag([2, 3, 2])
   As = Ap @ M
   assert np.isclose(abs(np.linalg.det(As)), 12 * 16.0)
   S = [np.linalg.solve(M, n) for n in product(range(2), range(3), range(2))]
   assert len(S) == 12
   d_min = min(np.linalg.norm(As @ (sj - si + np.array(n)))
               for i, si in enumerate(S) for j, sj in enumerate(S)
               for n in product(range(-1, 2), repeat=3)
               if not (i == j and n == (0, 0, 0)))
   assert np.isclose(d_min, 2 * np.sqrt(2))

行列式から慣用単位胞 :math:`64\,\mathrm{\mathring{A}}^3`、基本単位胞 :math:`16\,\mathrm{\mathring{A}}^3`、超胞 :math:`192\,\mathrm{\mathring{A}}^3` を得る。FCC基本並進ベクトル長は :math:`4/\sqrt2=2\sqrt2\,\mathrm{\mathring{A}}`、相互の角度は :math:`60^\circ`、面心点は基本単位胞の分率座標 :math:`(1,0,0)`、方向は :math:`(1,1,-1)` となる。任意角（例では :math:`\theta=0.37` rad）の回転で計量行列は変わらず、逆格子は :math:`A_{\rm p}^{\mathsf T}B_{\rm p}=2\pi I` を満たす。:math:`[11\bar1]_{\rm p}` と :math:`(11\bar1)_{\rm p}` の法線のなす角の余弦は :math:`3/\sqrt{11}` である。12個の周期像を作ると原子数が12倍になり、超胞周期境界も含めた最短原子間距離は :math:`2\sqrt2\,\mathrm{\mathring{A}}` で元のFCC最近接距離と一致する。

この例は代数恒等式を検算するものであり、特定の計算コードのファイル読込や、任意の非対角超胞での周期像列挙までは検証しない。実計算に接続するときは、原子種・占有率・単位・境界条件も含む構造全体で照合する。

.. _lt-cell-related:

関連資料
----------

* :ref:`lt-cell-shape-bravais` — 胞の形だけではブラベー格子型が決まらない例。
* :ref:`pseudocubic-cell` — 歪んだ結晶を高対称相の軸で表す。
* :ref:`lt-structure-input` — 格子還元と結晶学的標準化。
* :ref:`periodic_boundary` — 超胞によるブリルアンゾーンとバンドの変化。

.. _lt-cell-references:

参考文献
------------

* IUCr, `Reflection conditions <https://dictionary.iucr.org/Reflection_conditions>`_.

.. raw:: html

   <script src="../_static/js/legacy-anchors.js" defer></script>
