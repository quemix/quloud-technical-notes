.. _likelihood:

------------------------------------
最尤推定と最小二乗法
------------------------------------

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
最尤推定法と最小二乗法の等価性
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

出力データの生成モデル（\ :ref:`尤度関数<likelihood_function>`\ ）として、式 :eq:`ml3`

.. math::
  p(\boldsymbol{t} | \boldsymbol{X}, \boldsymbol{w})
  =
  \frac{1}{\sqrt{(2\pi)^N(\sigma_\varepsilon^2)^N}}
  \exp{\left(
  -\frac{1}{2\sigma_\varepsilon^2}
  (\boldsymbol{t}-\boldsymbol{\Phi}\boldsymbol{w})^\top (\boldsymbol{t}-\boldsymbol{\Phi}\boldsymbol{w})
  \right)}

を採用し、実測データの発生確率を上げるように分布関数の未知パラメータを決める最尤推定を実行しよう。
上式の対数をとる

.. math::
    \ln{p(\boldsymbol{t} | \boldsymbol{X}, \boldsymbol{w})}
    =
    - \frac{N\ln2\pi}{2} - \frac{N\ln\sigma_\varepsilon^2}{2}
    - \frac{1}{2\sigma_\varepsilon^2} \sum_{n=1}^N (t_n - y(\boldsymbol{x_n},\boldsymbol{w}) )^2 .
    :label: ml4

これを最大化するには、次式を :math:`\boldsymbol{w}` について最小化すればよい

.. math::
    L(\boldsymbol{w}) = \frac{1}{2} \sum_{n=1}^N (t_n - y(\boldsymbol{x_n},\boldsymbol{w}) )^2 .
  :label: lsq

これは最小二乗問題に他ならない。

.. _hyp_opt:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
ハイパーパラメータについての最尤推定
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

式 :eq:`ml4` において、 :math:`\sigma_\varepsilon^2` についての最大化を考えることもできる。微分してゼロとおくと

.. math::
    - \frac{N}{2\sigma_\varepsilon^2}
    + \frac{1}{\left(\sigma_\varepsilon^2\right)^2} L(\boldsymbol{w})
    = 0

.. math::
    \therefore
    \sigma_\varepsilon^2
    =
    \frac{2 L(\boldsymbol{w})}{N}
    :label: ml5

が得られる。

