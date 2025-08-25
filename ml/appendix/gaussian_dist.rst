.. _gaussian_dist:

------------------------------------
ガウス分布関数
------------------------------------

一次元

.. math::
  \mathcal{N}(x|\mu, \sigma^2)
  = \frac{1}{\sqrt{2\pi\sigma^2}}
  \exp{\left( -\frac{(x-\mu)^2}{2\sigma^2} \right)}
  :label: gd1

N次元

.. math::
  \mathcal{N}(\boldsymbol{x}|\boldsymbol{\mu}, \boldsymbol{\Sigma})
  =
  \frac{1}{\sqrt{(2\pi)^N\left|\boldsymbol{\Sigma}\right|}}
  \exp{\left(
  -\frac{1}{2}(\boldsymbol{x}-\boldsymbol{\mu})^\top
  \boldsymbol{\Sigma}^{-1}
  (\boldsymbol{x}-\boldsymbol{\mu})
  \right)}
  :label: gd2

