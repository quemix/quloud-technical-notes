.. _problem_gp:

------------------------------------
問題設定
------------------------------------

======================
線形回帰
======================

:math:`\{\phi_0(\boldsymbol{x}), \cdots, \phi_{M-1}(\boldsymbol{x})\}` を与えられた基底関数のセットとして、
つぎの線形回帰問題を考える

.. math::
  y(\boldsymbol{x},\boldsymbol{w})
  =
  \sum_{i=0}^{M-1} w_i \phi_i(\boldsymbol{x})
  =
  \boldsymbol{w}^\top \boldsymbol{\phi}(\boldsymbol{x}) .
  :label: pgp1

実測データ :math:`t` （ :math:`=y_{\rm true}(\boldsymbol{x})` ）を集めてパラメータ :math:`\boldsymbol{w}` を決めるのだが、
その値には :math:`y(\boldsymbol{x},\boldsymbol{w})` で捉えきれない不確定な要素（ノイズ）があるとして、
以下の形で問題を考えることにする

.. math::
  t
  =
  y(\boldsymbol{x},\boldsymbol{w}) + \varepsilon .
  :label: pgp2

いま、実測データとして :math:`N` 個の入出力セットが得られているとする

.. math::
  \boldsymbol{D}
  \equiv
  \{(\boldsymbol{x}_1, t_1), \; (\boldsymbol{x}_2, t_2),
  \; \dots \; (\boldsymbol{x}_N, t_N) \} .
  :label: pgp3

また入力だけ、出力だけをまとめたものを以下のように表すことにする

.. math::
  \boldsymbol{X} \equiv \{\boldsymbol{x}_1, \boldsymbol{x}_2, \dots, \boldsymbol{x}_N\} ,
  :label: pgp4

.. math::
  \boldsymbol{t} \equiv \{t_1, t_2, \dots, t_N\} .
  :label: pgp5

\ :eq:`pgp1` についても、 :math:`N` データ分まとめたものを以下のように表すことにする

.. math::
  \boldsymbol{y}
  \equiv
  \begin{pmatrix}
  y_1 \\
  y_2 \\
  \vdots \\
  y_N
  \end{pmatrix}
  =
  \begin{pmatrix}
  \phi_0(\boldsymbol{x}_1) & \phi_1(\boldsymbol{x}_1) & \cdots & \phi_{M-1}(\boldsymbol{x}_1) \\
  \phi_0(\boldsymbol{x}_2) & \phi_1(\boldsymbol{x}_2) & \cdots & \phi_{M-1}(\boldsymbol{x}_2) \\
  \vdots & \cdots & \cdots & \vdots \\
  \phi_0(\boldsymbol{x}_N) & \phi_1(\boldsymbol{x}_N) & \cdots & \phi_{M-1}(\boldsymbol{x}_N) \\
  \end{pmatrix}
  \begin{pmatrix}
  w_0 \\
  w_1 \\
  \vdots \\
  w_{M-1}
  \end{pmatrix}
  \equiv
  \boldsymbol{\Phi}\boldsymbol{w} .
  :label: pgp6


.. _likelihood_function:

==================================
データ分布のモデル：尤度関数
==================================

式 :eq:`pgp2` のノイズ :math:`\varepsilon` が次の\ :ref:`ガウス分布<gaussian_dist>`\ に従うとしたとき

.. math::
  p(\varepsilon)
  =
  \mathcal{N}(\varepsilon | 0,\sigma_\varepsilon^2)
  =
  \frac{1}{\sqrt{2\pi\sigma_\varepsilon^2}}
  \exp{\left(
  -\frac{\varepsilon^2}{2\sigma_\varepsilon^2}
  \right)}
  :label: ml1

出力 :math:`t` もまた\ :ref:`ガウス分布<gaussian_dist>`\ になる

.. math::
  p(t | \boldsymbol{x}, \boldsymbol{w})
  =
  \mathcal{N}(t | y(\boldsymbol{x},\boldsymbol{w}), \sigma_\varepsilon^2)
  =
  \frac{1}{\sqrt{2\pi\sigma_\varepsilon^2}}
  \exp{\left(
  -\frac{\left(
  t - y(\boldsymbol{x},\boldsymbol{w})
  \right)^2}{2\sigma_\varepsilon^2}
  \right)} .
  :label: ml2

上記の設定は、 :math:`t` というデータの生成機構に対する１つのモデル（仮定）であり、
実測データに基づいてパラメータ :math:`\boldsymbol{w}` を調整するために使われる。
式\ :eq:`ml2` のような確率分布関数において、パラメータ :math:`\boldsymbol{w}` の方を変数とみなす場合、これを尤度関数と呼ぶ。

複数の :math:`t` が、式\ :eq:`ml2` に従って、互いに独立に得られたとすると、
その同時分布もやはり\ :ref:`ガウス分布<gaussian_dist>`\ となる

.. math::
  p(\boldsymbol{t} | \boldsymbol{X}, \boldsymbol{w})
  =
  \prod_{n=1}^N \mathcal{N}(t_n | y(\boldsymbol{x_n},\boldsymbol{w}), \sigma_\varepsilon^2)
  &=
  \frac{1}{\sqrt{(2\pi)^N(\sigma_\varepsilon^2)^N}}
  \exp{\left(
  -\frac{1}{2\sigma_\varepsilon^2}
  (\boldsymbol{t}-\boldsymbol{y})^\top (\boldsymbol{t}-\boldsymbol{y})
  \right)} \\
  &=
  \frac{1}{\sqrt{(2\pi)^N(\sigma_\varepsilon^2)^N}}
  \exp{\left(
  -\frac{1}{2\sigma_\varepsilon^2}
  (\boldsymbol{t}-\boldsymbol{\Phi}\boldsymbol{w})^\top (\boldsymbol{t}-\boldsymbol{\Phi}\boldsymbol{w})
  \right)} .
  :label: ml3

以降の議論においても、多くの場面で、式\ :eq:`ml3` を尤度関数として採用する。
