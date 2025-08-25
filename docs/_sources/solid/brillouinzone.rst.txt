.. _brillouinzone:

==============================
ブリルアンゾーン
==============================

------------------------------------
逆空間とブリルアンゾーン
------------------------------------

３つの基本逆格子ベクトル :math:`\boldsymbol{b}_1,\,\boldsymbol{b}_2,\,\boldsymbol{b}_3` で張られる、平行六面体の領域をブリルアンゾーンと呼ぶ。実空間においては、結晶構造の繰り返し単位は単位胞であるが、それを逆空間に移したときの繰り返し単位がブリルアンゾーンである。ブリルアンゾーンの体積は、単位胞の体積を :math:`\Omega` とすると、

.. math::
  \Omega_{\mathrm{BZ}}
  =
  \boldsymbol{b}_1 \cdot (\boldsymbol{b}_2 \times \boldsymbol{b}_3)
  =
  \frac{(2\pi)^3}{\Omega}
  :label: OmegaBZ

と表される。

ブリルアンゾーンは、３つの基本逆格子ベクトルの垂直二等分面で囲まれる領域でつくることもできる。これを逆格子におけるウィグナー・ザイツセル（Wigner-Seitz cell）と呼ぶ。

------------------------------------
ブリルアンゾーン内での積分
------------------------------------

物質中の、エネルギー値が :math:`-\infty` から :math:`E` までの電子の状態数 :math:`n(E)` は、

.. math::
  n(E)
  =
  \frac{1}{\Omega_{\mathrm{BZ}}}\int_{\mathrm{BZ}} \Theta(E-E(\boldsymbol{k}))\mathrm{d}\boldsymbol{k}
  :label: n(E)

と表される。ここで、:math:`\Theta(E-E(\boldsymbol{k}))` は単位ステップ関数である。

また、エネルギー値が :math:`E` から :math:`E+\mathrm{d}E` までの電子の状態密度 :math:`\rho(E)` は、状態数をエネルギーで微分したもので、

.. math::
  \rho(E)
  =
  \frac{\mathrm{d}n(E)}{\mathrm{d}E}
  =
  \frac{1}{\Omega_{\mathrm{BZ}}}\int_{\mathrm{BZ}} \delta(E-E(\boldsymbol{k}))\mathrm{d}\boldsymbol{k}
  :label: rho(E)

と表される。ここで、:math:`\delta(E-E(\boldsymbol{k}))` はディラックのデルタ関数である。