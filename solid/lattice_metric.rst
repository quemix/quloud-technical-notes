.. _lattice-parameters:

==============
格子定数と計量
==============

単位胞の形と大きさは、3本の辺の長さと3つの角で決まる。ここでは、これらの格子定数から
原子間の距離、角度、胞の体積を求める計量行列を導入する。続いて、格子ベクトルの9成分のうち
胞の形を決めるのは6つで、残りの3つは空間での向きであることを示す。最後に、格子定数から
直交座標の格子ベクトルを組み立てる。

**前提知識**: :ref:`格子行列<lattice-translations>` :math:`A`、:ref:`分率座標<coordinates>`。

.. _lattice-metric:

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

格子ベクトルの独立な成分
------------------------

式 :eq:`avec` は9つの成分を持っているが、単位胞の形と大きさを指定するだけなら6つの値で足りる。残りの3つは、格子全体を空間でどの向きに置くかという回転の自由度である。原点の移動は格子ベクトルの成分を変えないので、自由度を減らさない。
例えば結晶構造データの国際的なフォーマットであるCIF（Crystallographic Information File）では

.. code-block::

  _cell_length_a   3.84928
  _cell_length_b   3.84928
  _cell_length_c   3.84928
  _cell_angle_alpha   60.00000
  _cell_angle_beta    60.00000
  _cell_angle_gamma   60.00000

のように、格子ベクトルの長さと、それぞれのベクトルのなす角度を記録する。この6項目から、胞の形と大きさが分かる。式 :eq:`avec` との対応を明示すれば

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

と決まる。格子全体を直交行列 :math:`Q` で回した :math:`QA` も :math:`(QA)^\top QA=A^\top A=G` を与えるので、:math:`G` からは向きが決まらない。これが除いた3自由度に当たる。格子定数から直交座標での格子ベクトルを組み立てるには、\ :ref:`軸の向きを一つ選ぶ<cell-parameters-cartesian>`。

.. _cell-parameters-cartesian:

格子定数から格子ベクトルを求める
--------------------------------

直交座標での向きは自由に選べるので、右手系の配置を一つ決める。:math:`\boldsymbol a=\boldsymbol a_1` を :math:`x` 軸に、:math:`\boldsymbol b=\boldsymbol a_2` を :math:`xy` 面に置き、:math:`\boldsymbol c=\boldsymbol a_3` の :math:`z` 成分を正にとれば

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
