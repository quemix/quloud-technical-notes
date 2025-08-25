.. _periodic:

==============================
周期性
==============================

関数 :math:`f(x)` が次の関係を満たすとき

.. math::
    f(x + a) = f(x)

\ :math:`f(x)` は周期 :math:`a` を持つという。
結晶の場合を考えると、例えば電子密度やポテンシャルなどは、任意の格子ベクトル

.. math::
    \boldsymbol{R} \equiv n_1 \boldsymbol{a}_1 + n_2 \boldsymbol{a}_2 + n_3 \boldsymbol{a}_3

に対して

.. math::
    \rho(\boldsymbol{r} + \boldsymbol{R}) = \rho(\boldsymbol{r})
    :label: periodic0

が成り立っていると考えられる。


--------------------------------
フーリエ級数表示
--------------------------------

一般に、\ :eq:`periodic0` のような周期関数は以下のフーリエ級数表示

.. math::
    \rho(\boldsymbol{r}) = \sum_{\boldsymbol{G}} \rho(\boldsymbol{G})
    \exp\left( {i\boldsymbol{G}\! \cdot\! \boldsymbol{r}} \right)

が可能である。\ :eq:`periodic0` を確かめると

.. math::
    \rho(\boldsymbol{r} + \boldsymbol{R})
    &= \sum_{\boldsymbol{G}} \rho(\boldsymbol{G})
    \exp\left( {i\boldsymbol{G}\! \cdot\! \boldsymbol{r}} \right)
    \exp\left( {i\boldsymbol{G}\! \cdot\! \boldsymbol{R}} \right) \\
    &= \sum_{\boldsymbol{G}} \rho(\boldsymbol{G})
    \exp\left( {i\boldsymbol{G}\! \cdot\! \boldsymbol{r}} \right) \\
    &= \rho(\boldsymbol{r})
