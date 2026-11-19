.. _crystal-symmetry-operations:

結晶の対称操作
==============

結晶に回転や並進を施したとき、同じ種類の原子が同じ位置を占める配置に戻れば、
その変換は結晶の対称操作である。ここでは :ref:`lattice` で導入した格子行列
:math:`A` と分率座標を使い、対称操作で原子がどこへ移るかを求める。

回転・鏡映・反転・並進
----------------------

Cartesian座標では位置 :math:`\boldsymbol r` への操作を
直交行列 :math:`Q` と並進ベクトル :math:`\boldsymbol t` の組で表す。

.. math::
   :label: crystal-symmetry-affine

   g=\{Q\mid\boldsymbol t\},\qquad
   g\boldsymbol r=Q\boldsymbol r+\boldsymbol t

:math:`Q^{\mathsf T}Q=I` なので、操作を受けた2点の距離は変わらない。
原点を通る :math:`z` 軸のまわりの90度回転は :math:`(x,y,z)\mapsto(-y,x,z)`、
:math:`xy` 面での鏡映は :math:`(x,y,z)\mapsto(x,y,-z)` である。
原点を中心とする反転は :math:`Q=-I`、純粋な並進は :math:`Q=I` に対応する。
軸や中心の位置が原点からずれているときは、同じ線形部分を持つ操作でも
:math:`\boldsymbol t` が加わる。例えば :math:`\boldsymbol c` を中心とする反転は
:math:`\boldsymbol r\mapsto 2\boldsymbol c-\boldsymbol r` である。

操作の合成と逆操作
------------------

:math:`g_2` のあとに :math:`g_1` を施すと、後から行う線形変換は
先に行った並進にも作用する。式 :eq:`crystal-symmetry-affine` を順に適用すると、

.. math::
   :label: crystal-symmetry-composition

   g_1g_2=\{Q_1Q_2\mid Q_1\boldsymbol t_2+\boldsymbol t_1\},\qquad
   g^{-1}=\{Q^{-1}\mid -Q^{-1}\boldsymbol t\}

を得る。逆操作では並進を取り消してから :math:`Q^{-1}` を作用させる。
結晶を保つ操作を合成しても結晶は保たれ、どの操作にも逆操作がある。
この性質を :ref:`point-and-space-groups` で使う。

分率座標での対称操作
--------------------

分率座標 :math:`\boldsymbol s` では :math:`\boldsymbol r=A\boldsymbol s` である。
式 :eq:`crystal-symmetry-affine` に代入すると、

.. math::
   :label: crystal-symmetry-fractional

   \boldsymbol s'=W\boldsymbol s+\boldsymbol u,\qquad
   W=A^{-1}QA,\qquad
   \boldsymbol u=A^{-1}\boldsymbol t

となる。基本並進ベクトルを列にもつ :math:`A` を使う場合、対称操作の線形部分は
格子の並進をまた格子の並進に移すので、:math:`W` の列は整数である。逆操作についても
同じことが言え、:math:`\det W=\pm1` になる。また、計量行列 :math:`G=A^{\mathsf T}A` に
対して :math:`W^{\mathsf T}GW=G` が成り立つ。この条件で格子を保つ候補を絞り、
式 :eq:`crystal-symmetry-fractional` で原子を移して、元素ごとの配置が周期像まで含めて
重なるかを確かめる。

例えば立方慣用単位胞の分率座標で、:math:`z` 軸まわりの90度回転を
:math:`(1/4,1/2,0)` に施すと :math:`(-1/2,1/4,0)` になる。第1成分に整数の1を足せば
:math:`(1/2,1/4,0)` となる。この位置に同じ元素の原子があり、他の原子も同様に対応する
とき、その回転は原子配置の対称操作である。

参考資料
--------

* IUCr, `Definition of symmetry elements in space groups and point groups <https://www.iucr.org/who-we-are/commissions/commission-on-crystallographic-nomenclature/published-reports/symel>`_.
* IUCr, `The structure of space groups <https://it.iucr.org/Ac/ch1o3v0001/sec1o3o3/>`_.
