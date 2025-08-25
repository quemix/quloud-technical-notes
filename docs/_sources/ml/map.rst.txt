.. _map:

---------------------------------------------
MAP推定と正則化最小二乗法
---------------------------------------------

MAP は *Maximum A Posteriori* の頭字語で、日本語では「最大事後確率」と呼ばれる。
すなわちMAP推定は、実測データが得られた事後の確率分布を考える、\ :ref:`ベイズの定理<bayes_theorem>`\ を応用した手法となる。

いま、回帰関数 :eq:`pgp1`

.. math::
  y(\boldsymbol{x},\boldsymbol{w})
  =
  \boldsymbol{w}^\top \boldsymbol{\phi}(\boldsymbol{x})


のパラメータ :math:`\boldsymbol{w}` に関して何らかの事前知識があり、それを確率分布の形で表せるという状況を考える。
とりあえずの出発点として、\ :ref:`ガウス分布<gaussian_dist>`\ に従うとしておくのは一つの常套手段である [#map1]_

.. math::
    p(\boldsymbol{w})
    =
    \mathcal{N}(\boldsymbol{w} | \boldsymbol{0}, \sigma_\boldsymbol{w}^2\boldsymbol{I})
    =
    \frac{1}{\sqrt{(2\pi)^M(\sigma_\boldsymbol{w}^2)^M}}
    \exp{\left(-\frac{\boldsymbol{w}^\top\boldsymbol{w}}{2\sigma_\boldsymbol{w}^2}\right)} .
    :label: map1

\ :math:`\boldsymbol{w}`\ （と入力\ :math:`\boldsymbol{X}`\ ）が与えられたときに出力
:math:`\boldsymbol{t}` を得る確率のモデル（\ :ref:`尤度関数<likelihood_function>`\ ）として、式 :eq:`ml3`

.. math::
  p(\boldsymbol{t} | \boldsymbol{X}, \boldsymbol{w})
  =
  \frac{1}{\sqrt{(2\pi)^N(\sigma_\varepsilon^2)^N}}
  \exp{\left(
  -\frac{1}{2\sigma_\varepsilon^2}
  (\boldsymbol{t}-\boldsymbol{\Phi}\boldsymbol{w})^\top (\boldsymbol{t}-\boldsymbol{\Phi}\boldsymbol{w})
  \right)}


を採用する。このとき、 :math:`\boldsymbol{w}` の事後確率分布は\ :ref:`ベイズの定理<bayes_theorem>`\ より次のようになる

.. math::
    p(\boldsymbol{w} | \boldsymbol{X}, \boldsymbol{t})
    = \frac{
    p(\boldsymbol{t} | \boldsymbol{X}, \boldsymbol{w})
    p(\boldsymbol{w})
    }{C} ,
    :label: map2

.. math::
  C
  =
  p(\boldsymbol{t} | \boldsymbol{X})
  =
  \int p(\boldsymbol{t} | \boldsymbol{X}, \boldsymbol{w})
  p(\boldsymbol{w})d\boldsymbol{w} .
  :label: map3

式 :eq:`map2` の対数をとる

.. math::
    \ln{p(\boldsymbol{w} | \boldsymbol{X}, \boldsymbol{t})}
    =
    - \frac{1}{2\sigma_\varepsilon^2} \sum_{n=1}^N (t_n - y(\boldsymbol{x_n},\boldsymbol{w}) )^2
    - \frac{1}{2\sigma_\boldsymbol{w}^2} \boldsymbol{w}^\top\boldsymbol{w}
    - N\ln2\pi
    - \frac{N\ln\sigma_\varepsilon^2}{2}
    - \frac{N\ln\sigma_\boldsymbol{w}^2}{2}
    - \ln{C} .
    :label: map4

上式右辺を最大化するには、次式を :math:`\boldsymbol{w}` について最小化すればよい

.. math::
    L(\boldsymbol{w})
    =
    \frac{1}{\sigma_\varepsilon^2}
    \left(
    \frac{1}{2} \sum_{n=1}^N (t_n - y(\boldsymbol{x}_n,\boldsymbol{w}) )^2
    + \frac{\lambda}{2} \boldsymbol{w}^\top\boldsymbol{w}
    \right),
    \qquad
    \lambda
    =
    \frac{\sigma_\varepsilon^2}{\sigma_\boldsymbol{w}^2} .
    :label: map5

これは、二次正則化項付きの最小二乗法（リッジ回帰）に他ならない。
また、式 :eq:`map4` に対しても、\ :ref:`hyp_opt`\ を実行することが可能である。

.. [#map1] データ数 :math:`N` とパラメータ数 :math:`M` の違いに注意する。
