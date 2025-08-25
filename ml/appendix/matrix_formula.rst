.. _matrix_formula:

------------------------------------
行列および行列式の公式
------------------------------------

.. _matform1:

=========================
逆行列の公式（１）
=========================

.. math::
  \boldsymbol{I} - \left( \boldsymbol{A} + \boldsymbol{B} \right)^{-1} \boldsymbol{A}
  =  \left( \boldsymbol{A} + \boldsymbol{B} \right)^{-1}
  \left( \boldsymbol{A} + \boldsymbol{B} - \boldsymbol{A} \right)
  = \left( \boldsymbol{A} + \boldsymbol{B} \right)^{-1} \boldsymbol{B}
  :label: mat1


.. _matform_block:

==============================
ブロック行列の逆行列 [#mf1]_
==============================

.. math::
    \begin{pmatrix}
    \boldsymbol{A} & \boldsymbol{B} \\
    \boldsymbol{C} & \boldsymbol{D} \\
    \end{pmatrix}^{-1}
    =
    \begin{pmatrix}
    \boldsymbol{M} & -\boldsymbol{MBD}^{-1} \\
    \boldsymbol{-D}^{-1}\boldsymbol{CM} & \boldsymbol{D}^{-1}+\boldsymbol{D}^{-1}\boldsymbol{CMBD}^{-1} \\
    \end{pmatrix}

.. math::
    \boldsymbol{M}
    =
    \left( \boldsymbol{A} - \boldsymbol{BD}^{-1}\boldsymbol{C}
    \right)^{-1}

上記の公式を用いて、ガウス分布の共分散行列の計算で現れるケースを示しておく

.. math::
    \boldsymbol{R}
    =
    \begin{pmatrix}
    \boldsymbol{\Lambda} + \boldsymbol{A}^\top \boldsymbol{LA} &
    -\boldsymbol{A}^\top\boldsymbol{L} \\
    \boldsymbol{-LA} &
    \boldsymbol{L}
    \end{pmatrix}

.. math::
    \boldsymbol{R}^{-1}
    =
    \begin{pmatrix}
    \boldsymbol{\Lambda}^{-1} &
    \boldsymbol{\Lambda}^{-1} \boldsymbol{A}^\top \\
    \boldsymbol{A}\boldsymbol{\Lambda}^{-1} &
    \boldsymbol{L}^{-1} + \boldsymbol{A} \boldsymbol{\Lambda}^{-1}\boldsymbol{A}^\top \\
    \end{pmatrix}

.. [#mf1] C. M. ビショップ, パターン認識と機械学習, 丸善出版 2012.


.. _matform_blockdet:

==============================
ブロック行列の行列式
==============================

:math:`\boldsymbol{A}, \boldsymbol{D}` を正方行列とする。このとき、 :math:`\boldsymbol{A}`
が正則であれば

.. math::
    \begin{vmatrix}
    \boldsymbol{A} & \boldsymbol{B} \\
    \boldsymbol{C} & \boldsymbol{D} \\
    \end{vmatrix}
    =
    \begin{vmatrix}
    \boldsymbol{A}
    \end{vmatrix}
    \begin{vmatrix}
    \boldsymbol{D-CA^{-1}B}
    \end{vmatrix}

:math:`\boldsymbol{D}` が正則であれば

.. math::
    \begin{vmatrix}
    \boldsymbol{A} & \boldsymbol{B} \\
    \boldsymbol{C} & \boldsymbol{D} \\
    \end{vmatrix}
    =
    \begin{vmatrix}
    \boldsymbol{D}
    \end{vmatrix}
    \begin{vmatrix}
    \boldsymbol{A-BD^{-1}C}
    \end{vmatrix}

となる。

ガウス分布の周辺分布の計算で現れる以下のケースを示しておく。

.. math::
    \begin{vmatrix}
    \boldsymbol{S}^{-1}_{1} & -\beta\boldsymbol{\Phi}^\top \\
    -\beta\boldsymbol{\Phi} & \beta\boldsymbol{I} \\
    \end{vmatrix}
    &=
    \begin{vmatrix}
    \boldsymbol{S}^{-1}_{1}
    \end{vmatrix}
    \begin{vmatrix}
    \beta\boldsymbol{I} - \beta^2\boldsymbol{\Phi} \boldsymbol{S}_{1} \boldsymbol{\Phi}^\top
    \end{vmatrix}\\
    &=
    \begin{vmatrix}
    \beta\boldsymbol{I}
    \end{vmatrix}
    \begin{vmatrix}
    \boldsymbol{S}^{-1}_0 + \beta\boldsymbol{\Phi}^\top\boldsymbol{\Phi}
    - \beta\boldsymbol{\Phi}^\top \beta^{-1} \beta\boldsymbol{\Phi}
    \end{vmatrix}
    =
    \beta^N 
    \begin{vmatrix}
    \boldsymbol{S}^{-1}_0
    \end{vmatrix}

ここで

.. math::
    \boldsymbol{S}^{-1}_{1}
    =
    \boldsymbol{S}^{-1}_0 + \beta\boldsymbol{\Phi}^\top\boldsymbol{\Phi}

である。


.. _matform_penrose:

==============================
一般化逆行列
==============================
