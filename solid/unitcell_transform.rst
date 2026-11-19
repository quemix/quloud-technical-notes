.. _lt-cell-transform:

単位胞の変換と超胞
==================

FCCの慣用単位胞と基本単位胞を例に、単位胞を取り直したときに原子位置、結晶方向、
回折指数がどう変わるかを確認する。続いて、超胞での周期像の扱いと、
辺の形が異なる単位胞で同じ並進格子を表す例を見る。

**前提知識**: :ref:`lattice-transform` の基底変換・逆格子の変換則と、
:ref:`unitcell` の格子系・中心並進。

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

F中心慣用単位胞には、原点に加えて分率座標 :math:`(0,1/2,1/2)`、:math:`(1/2,0,1/2)`、:math:`(1/2,1/2,0)` の格子点がある。したがって慣用立方胞の3辺だけを並進ベクトルと見なすと、面心並進を落とす。単原子FCCでは慣用単位胞に4格子点、基本単位胞に1格子点が含まれる。

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

.. _lt-fcc-reciprocal:

FCCの逆格子と反射条件
---------------------

慣用単位胞の辺ベクトルを双対化した :math:`B_{\rm c}=2\pi A_{\rm c}^{-\mathsf T}` と、結晶全体の真の逆格子点集合は区別が必要である。F中心立方格子では :math:`A_{\rm c}` の辺だけでは全並進を生成しないため、整数の慣用指数 :math:`\boldsymbol h_{\rm c}` に対しても :math:`B_{\rm c}\boldsymbol h_{\rm c}` が必ず逆格子点になるわけではない。基本並進ベクトルの組との関係は

.. math::

   \boldsymbol h_{\rm p}=P_{\rm F}^{\mathsf T}\boldsymbol h_{\rm c},
   \qquad B_{\rm c}\boldsymbol h_{\rm c}=B_{\rm p}\boldsymbol h_{\rm p}.

真の逆格子点となる条件は :math:`\boldsymbol h_{\rm p}` が整数であること、すなわち慣用指数 :math:`(hkl)` がすべて偶数またはすべて奇数であること。このF中心化の反射条件は、格子並進による構造因子の消滅条件でもある（`IUCrの反射条件 <https://dictionary.iucr.org/Reflection_conditions>`_）。4つのF中心並進による寄与は

.. math::

   S_{\rm F}(hkl)=1+(-1)^{k+l}+(-1)^{h+l}+(-1)^{h+k}.

例えば :math:`(100)_{\rm c}` は :math:`\boldsymbol h_{\rm p}=(0,1/2,1/2)` で逆格子点でなく、:math:`S_{\rm F}=0` となって消滅する。一方 :math:`(200)_{\rm c}` は :math:`\boldsymbol h_{\rm p}=(0,1,1)` で逆格子点となり、:math:`S_{\rm F}=4` でF中心化の条件では許される（原子基底による追加の消滅はありうる）。

.. _lt-supercell:

超胞（スーパーセル）と周期像
------------------------------------------

整数行列 :math:`M` で

.. math::

   A_{\rm sup}=AM

とすると、:math:`|\det M|=N` の超胞は元の胞の体積の :math:`N` 倍の胞となる。同じ周期構造を表すには、元の胞内の各原子について :math:`\mathbb Z^3/M\mathbb Z^3` の剰余類代表に対応する :math:`N` 個の周期像を作り、超胞へ折り畳む。例えば、対角行列 :math:`M=\mathrm{diag}(2,3,2)` なら :math:`N=12` で、原子数も12倍になる。

超胞は元の格子と同じ周期点集合を持つが、超胞ベクトルが生成する格子点は疎になる（元の格子の部分格子となる）。したがって「結晶の物理的な周期性は同じ」と「選んだ周期境界の並進格子が同じ」は区別する。非対角 :math:`M` でも行列式の絶対値が胞数を与えるが、周期像の列挙は対角ケースの単純な3重ループでは一般に足りない。

.. _lt-special-cells:

特殊な単位胞表現とBravais格子型
-------------------------------------------

単位胞の辺の形と、中心並進を含む格子点集合のBravais格子型は区別する（基本単位胞・慣用単位胞・中心並進の定義は :ref:`lattice`、14の格子型は :ref:`unitcell`）。異なる胞でも中心の格子点や周期像を含めれば同じ並進格子を表せる。一方、辺長や角度を特殊な値へ\ **変形**\ すると格子の対称性が高まり、Bravais格子型自体が変わることがある。このような格子型間の特殊関係は `Grimmer (2015) <https://doi.org/10.1107/S2053273314027351>`_ が整理している。

.. _lt-rhombohedral-hexagonal:

R格子の菱面体基本単位胞と六方軸表示
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

三方晶系のR格子は、菱面体基本単位胞を使う表示と、R中心化された六方軸の胞を使う表示の両方がある。六方軸で書いても六方P格子になるわけではない。IUCr International Tables for Crystallography, Volume A はR格子の菱面体基本単位胞と体積が3倍のR中心化六方軸セルを区別し、Bravais格子型を格子系ごとに定義している（`§1.3.2.4 <https://it.iucr.org/Ac/ch1o3v0001/sec1o3o2o4.pdf>`_, `§1.3.4.4.3 <https://it.iucr.org/Ac/ch1o3v0001/sec1o3o4o4o3.pdf>`_）。

菱面体基本単位胞の列格子行列を :math:`A_R=(\boldsymbol a_1,\boldsymbol a_2,\boldsymbol a_3)` とし、各ベクトルの長さを :math:`a_R`、共通角を :math:`\alpha_R` とする。次の軸を選ぶ。

.. math::

   \begin{aligned}
   \boldsymbol a_{R,H}&=\boldsymbol a_1-\boldsymbol a_2,\\
   \boldsymbol b_{R,H}&=\boldsymbol a_2-\boldsymbol a_3,\\
   \boldsymbol c_{R,H}&=\boldsymbol a_1+\boldsymbol a_2+\boldsymbol a_3.
   \end{aligned}

すると :math:`A_{R,H}=A_RP_{R,H}` で、

.. math::

   P_{R,H}=\begin{pmatrix}
   1&0&1\\-1&1&1\\0&-1&1
   \end{pmatrix},\qquad \det P_{R,H}=3.

:math:`q=\cos\alpha_R` とすれば、六方軸胞の格子定数と角度は

.. math::

   a_{R,H}=b_{R,H}=a_R\sqrt{2(1-q)},\qquad
   c_{R,H}=a_R\sqrt{3(1+2q)},

.. math::

   \alpha_{R,H}=\beta_{R,H}=90^\circ,\qquad \gamma_{R,H}=120^\circ.

この胞の体積は菱面体基本単位胞の3倍で、分率座標 :math:`(0,0,0)` に加えて :math:`(2/3,1/3,1/3)` と :math:`(1/3,2/3,2/3)` にR中心並進による格子点を持つ。したがって、六方軸表示を六方P格子と読み替えると格子点を取り落とす。

.. _lt-hexagonal-orthogonal:

六方P格子を直交C中心化胞で表す
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

底面の長さが :math:`a`、角が :math:`120^\circ` の六方P格子の基本並進ベクトルの組 :math:`A_{\rm hexP}` から、次の胞を作る。

.. math::

   \begin{aligned}
   \boldsymbol a_o&=\boldsymbol a_1+\boldsymbol a_2,\\
   \boldsymbol b_o&=-\boldsymbol a_1+\boldsymbol a_2,\\
   \boldsymbol c_o&=\boldsymbol a_3.
   \end{aligned}

.. math::

   A_o=A_{\rm hexP}M_{\rm hexP},\qquad
   M_{\rm hexP}=\begin{pmatrix}
   1&-1&0\\1&1&0\\0&0&1
   \end{pmatrix},\qquad \det M_{\rm hexP}=2.

ここで :math:`A_{\rm hexP}` は直前のR格子の六方軸セルとは異なり、六方P格子の\ **基本単位胞**\ である。新しい辺は直交し、長さは :math:`a_o=a`、:math:`b_o=\sqrt3a`、:math:`c_o=c`。旧格子ベクトル :math:`\boldsymbol a_2` は新胞の分率座標 :math:`(1/2,1/2,0)` に来るため、この胞はC中心化している。胞の体積は2倍で、中心の格子点と周期像を含めれば六方Pと同じ格子点集合を表す。したがって、直交形状だけを根拠に直交P格子として扱ってはならない。

.. _lt-fcc-tetragonal:

FCC格子を体心正方胞で表す
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

一辺 :math:`a` のFCC慣用単位胞 :math:`A_c=aI` に対し、次の辺を選ぶ。

.. math::

   \begin{aligned}
   \boldsymbol a_t&=\tfrac a2(1,1,0),\\
   \boldsymbol b_t&=\tfrac a2(-1,1,0),\\
   \boldsymbol c_t&=a(0,0,1).
   \end{aligned}

.. math::

   A_t=A_cP_{F,t},\qquad
   P_{F,t}=\begin{pmatrix}
   1/2&-1/2&0\\1/2&1/2&0\\0&0&1
   \end{pmatrix},\qquad \det P_{F,t}=1/2.

この胞は :math:`a_t=b_t=a/\sqrt2`、:math:`c_t=a`、したがって :math:`c_t/a_t=\sqrt2` の体心正方形状である。FCCの面心並進 :math:`\tfrac a2(0,1,1)` は新しい胞の分率座標 :math:`(1/2,1/2,1/2)_t` に移る。体心点を含めれば、FCC慣用単位胞の半分の体積で同じFCC格子を表せる。この特殊な軸比ではBravais格子型は立方Fである。

一般の体心正方格子では :math:`c_t/a_t=1` が立方I（BCC）、:math:`c_t/a_t=\sqrt2` が立方F（FCC）に対応する。一般の体心正方格子をこれらの比へ\ **変形**\ することは、単位胞の表現を変えるだけではない。

.. _lt-rhombohedral-cubic:

菱面体形状の基本単位胞から立方格子を見分ける
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

等長の3ベクトルが等しい相互角で張る菱面体形状は、三方晶R格子に限らない。角度が特別な値なら、より高い立方対称性を持つ基本単位胞にもなる。

.. list-table:: 菱面体形状の基本単位胞と対応する立方Bravais格子
   :name: lt-rhombohedral-cubic-table
   :header-rows: 1
   :widths: 40 60

   * - 基本並進ベクトル間の角度
     - Bravais格子型
   * - :math:`60^\circ`
     - 立方F（FCC）
   * - :math:`90^\circ`
     - 立方P（単純立方）
   * - :math:`\arccos(-1/3)\simeq109.47^\circ`
     - 立方I（BCC）

例えば :ref:`lt-fcc-cell` で求めた基本並進ベクトルは互いに :math:`60^\circ` で、菱面体形状を持つが、Bravais格子型は三方Rではなく立方Fである。一般のR格子からこの角度条件へ計量を変える場合は、同一格子の基底変換ではなく格子の特殊化となる。

以上の例では、胞の形が直交・六方・菱面体・体心正方に見えることだけでBravais格子型は決まらない。中心並進を含む格子点集合を調べ、単位胞の取り直しと計量を変える格子変形を区別する。さらに、原子配置を含む結晶の空間群は格子型だけでは決まらない。

関連ノート
----------

* :ref:`lt-structure-input` — 格子還元と結晶学的標準化。
* :ref:`periodic_boundary` — 超胞によるブリルアンゾーンとバンドの変化。

.. _lt-cell-references:

参考資料
------------

* IUCr, `Reflection conditions <https://dictionary.iucr.org/Reflection_conditions>`_.
* IUCr, *International Tables for Crystallography*, Vol. A, §§1.3.2.4 and 1.3.4.4.3, `Section 1.3.2.4 <https://it.iucr.org/Ac/ch1o3v0001/sec1o3o2o4.pdf>`_, `Section 1.3.4.4.3 <https://it.iucr.org/Ac/ch1o3v0001/sec1o3o4o4o3.pdf>`_.
* H. Grimmer, “Partial order among the 14 Bravais types of lattices: basics and applications,” *Acta Crystallographica A* **71**, 143–149 (2015), `doi:10.1107/S2053273314027351 <https://doi.org/10.1107/S2053273314027351>`_.
