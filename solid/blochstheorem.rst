.. _blochstheorem:

==============================
ブロッホの定理
==============================

------------------------------------
ブロッホの定理
------------------------------------

３つの基本格子ベクトル :math:`\boldsymbol{a}_1,\,\boldsymbol{a}_2,\,\boldsymbol{a}_3` を用いて、実格子における並進ベクトル :math:`\boldsymbol{R} = n_1\boldsymbol{a}_1 + n_2\boldsymbol{a}_2 + n_3\boldsymbol{a}_3` （ :math:`n_1,\,n_2,\,n_3` は整数）を生成する。実空間において、結晶中の電子のポテンシャルエネルギー :math:`V(\boldsymbol{r})` は、

.. math::
  V(\boldsymbol{r + R}) 
  =
  V(\boldsymbol{r}) 
  :label: V(r+R)

という周期性をもつ。電子の波動関数を :math:`\psi(\boldsymbol{r})` 、ハミルトニアンを :math:`H` 、全エネルギーを :math:`E` とすると、電子の従うシュレーディンガー方程式は、

.. math::
  H\,\psi(\boldsymbol{r})
  =
  E\,\psi(\boldsymbol{r})
  :label: Schrodinger

となる。ハミルトニアンの中身は、電子の質量を :math:`m` 、換算プランク定数を :math:`\hbar` とすると、

.. math::
  H
  =
  -\frac{\hbar^2}{2m}\nabla^2 + V(\boldsymbol{r})
  :label: Hamiltonian

である。このとき、電子の波動関数 :math:`\psi(\boldsymbol{r})` の並進操作について、

.. math::
  \psi(\boldsymbol{r + R}) 
  =
  \exp(i\boldsymbol{k} \cdot \boldsymbol{R})\,\psi(\boldsymbol{r}) 
  :label: Bloch

の関係を満たす波数ベクトル :math:`\boldsymbol{k}` が少なくとも１つ存在する。つまり、並進操作では固有状態は変化せず、位相が :math:`\boldsymbol{k} \cdot \boldsymbol{R}` だけずれることになる。これをブロッホの定理と呼ぶ。