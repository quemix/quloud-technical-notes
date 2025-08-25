.. _gaussian_intg:

------------------------------------
ガウス積分
------------------------------------

一次元

.. math::
  \int_{-\infty}^{\infty} dx
  \exp{\left(
  -\alpha x^2
  \right)}
  =
  \sqrt{
  \frac{\pi}{\alpha}
  }
  :label: gi1

N次元

.. math::
  \int d\boldsymbol{x}
  \exp{\left(
  -\alpha \boldsymbol{x}^\top \boldsymbol{x}
  \right)}
  =
  \sqrt{\left(
  \frac{\pi}{\alpha}
  \right)^N}
  :label: gi2

以下は、多次元ガウス分布関数の計算でよく現れる上式の一般形である（指数部に正値対称行列 :math:`\boldsymbol{K}` を含む）。

.. math::
  \int d\boldsymbol{x}
  \exp{\left(
  -\alpha \boldsymbol{x}^\top \boldsymbol{K} \boldsymbol{x}
  \right)}
  =
  \sqrt{\left|\boldsymbol{K}^{-1}\right|}
  \sqrt{\left(
  \frac{\pi}{\alpha}
  \right)^N}
  :label: gi3

導出は容易で、 :math:`\boldsymbol{K}` のコレスキー分解を作って変数変換を行い、
積分の外に出たヤコビアンを行列式の簡単な性質を使って処理すればよい。

