.. _bandstructure:

==============================
バンド構造
==============================

------------------------------------
概要
------------------------------------

孤立した原子中の電子は、原子軌道の離散的なエネルギーをもつ。しかし２つの原子が近接すると、各々の原子軌道が重なり、電子のエネルギー準位が２つに分裂する。固体中に含まれている原子の数を :math:`N` とすると、 :math:`N` 個の原子軌道が重なり、電子のエネルギー準位は :math:`N` 個に分裂する。 :math:`N` は非常に大きな数（ :math:`N\,\sim\,10^{22}` ）なので、エネルギー準位の間隔は非常に狭くなる（ :math:`\sim 10^{-22}\,\mathrm{eV}` ）。これを連続的な分布と見なしたものがエネルギーバンドである。エネルギーの高い外殻電子は、原子軌道の重なりが大きいため、エネルギーバンドへの寄与が大きい。一方、エネルギーの低い内殻電子は、原子軌道の重なりが小さいため、エネルギーバンドへの寄与が小さい。
 
半導体や絶縁体においては、フェルミ準位の下にあるバンドを価電子帯、上にあるバンドを伝導帯と呼び、その間のエネルギー差をバンドギャップと呼ぶ。バンドギャップが小さいほど、電気伝導性が高いと言える。バンドギャップがおよそ :math:`3\,\mathrm{eV}` より小さい場合は半導体、それより大きい場合は絶縁体となる。

------------------------------------
半導体の電気伝導性
------------------------------------

半導体は、熱や光により励起された電子が、価電子帯から伝導帯に移動し、自由電子となることにより導電性を示す。電気伝導率は、価電子帯のキャリア（正孔）と伝導帯のキャリア（自由電子）の電気伝導率の和であり、

.. math::
  \sigma
  =
  n_{\mathrm{e}}\,e\,\mu_{\mathrm{e}}+n_{\mathrm{h}}\,e\,\mu_{\mathrm{h}}
  =
  e(n_{\mathrm{e}}\,\mu_{\mathrm{e}}+n_{\mathrm{h}}\,\mu_{\mathrm{h}})
  :label: conductivity

と表される。ここで、 :math:`n_{\mathrm{e}},\,n_{\mathrm{h}}` はそれぞれ自由電子と正孔の濃度、 :math:`\mu_{\mathrm{e}},\,\mu_{\mathrm{h}}` はそれぞれ自由電子と正孔の易動度、 :math:`e` は電気素量を表す。

自由電子が一様な電場 :math:`E` の中で運動しているものとし、ドリフト速度を :math:`v_{\mathrm{de}}` とすると、

.. math::
  v_{\mathrm{de}}
  =
  -\mu_{\mathrm{e}}\,E
  :label: v(de)

の関係が成り立つ。電子の有効質量を :math:`m^*_{\mathrm{e}}` とし、原子核による散乱に起因する外力を摩擦力と考えると、電子の運動方程式は

.. math::
  m^*_{\mathrm{e}}\frac{\mathrm{d}v}{\mathrm{d}t}
  =
  -eE-\frac{m^*_{\mathrm{e}}v}{\tau_{\mathrm{e}}}
  :label: equation_of_motion

となる。ここで、 :math:`\tau_{\mathrm{e}}` は電子の速度が十分に減速されるのに必要な時間で、緩和時間と呼ぶ。電子の運動が定常状態に落ち着いたときの速度がドリフト速度 :math:`v_{\mathrm{de}}` なので、

.. math::
  v_{\mathrm{de}}
  =
  -\frac{e\,\tau_{\mathrm{e}}}{m^*_{\mathrm{e}}}E
  :label: v(de)_2

となる。(7.2)式と(7.4)式を比較すると、

.. math::
  \mu_{\mathrm{e}}
  =
  \frac{e\,\tau_{\mathrm{e}}}{m^*_{\mathrm{e}}}
  :label: mu(e)

が得られる。正孔についても同様に、ドリフト速度を

.. math::
  v_{\mathrm{dh}}
  =
  \mu_{\mathrm{h}}\,E
  :label: v(dh)

とし、有効質量を :math:`m^*_{\mathrm{h}}` 、緩和時間を :math:`\tau_{\mathrm{h}}` とすると、

.. math::
  \mu_{\mathrm{e}}
  =
  \frac{e\,\tau_{\mathrm{h}}}{m^*_{\mathrm{h}}}
  :label: mu(h)

が得られる。

伝導帯の電子の濃度（密度） :math:`n_{\mathrm{e}}` は、

.. math::
  n_{\mathrm{e}}
  =
  \int_{E\mathrm{c}}^{\infty}g_{\mathrm{c}}(E)f(E)\mathrm{d}E
  :label: n(e)

と表される。ここで、 :math:`E_{\mathrm{c}}` は伝導帯のエネルギーである。 :math:`g_{\mathrm{c}}(E)` は伝導帯の状態密度で、

.. math::
  g_{\mathrm{c}}(E)
  =
  \frac{\sqrt{2}{{m^*_{\mathrm{e}}}^{3/2}}}{\pi^2\hbar^3}(E-E_{\mathrm{c}})^{1/2}
  :label: g_c(E)

である。 :math:`\hbar` は換算プランク定数である。 :math:`f(E)` は、エネルギーが :math:`E` である準位を占有する電子の個数の統計的期待値の分布を与える関数で、フェルミ・ディラック分布関数

.. math::
  f(E)
  =
  \frac{1}{1+\exp\Big(\displaystyle\frac{E-E_{\mathrm{f}}}{k_{\mathrm{B}}T}\Big)}
  :label: f(E)

で与えられる。ここで、 :math:`E_{\mathrm{f}}` はフェルミ準位、 :math:`k_{\mathrm{B}}` はボルツマン定数、 :math:`T` は温度である。伝導帯のような高エネルギー領域では、 :math:`E-E_{\mathrm{f}}\,\gg\,k_{\mathrm{B}}T` と仮定できるため、

.. math::
  f(E)
  \approx
  \exp\Big(-\displaystyle\frac{E-E_{\mathrm{f}}}{k_{\mathrm{B}}T}\Big)
  :label: f(E)_2

というボルツマン近似で置き換えられる。伝導帯の電子密度 :math:`n_{\mathrm{e}}` は、(7.8)式の積分を実行することにより得られ、

.. math::
  n_{\mathrm{e}}
  =
  N_{\mathrm{c}}\exp\Big(-\displaystyle\frac{E_{\mathrm{c}}-E_{\mathrm{f}}}{k_{\mathrm{B}}T}\Big)
  :label: n(e)_2

となる。ここで、 :math:`N_{\mathrm{c}}=2\Big(\displaystyle\frac{m^*_{\mathrm{e}}k_{\mathrm{B}}T}{2\pi\hbar^2}\Big)^{3/2}` である。

次に、価電子帯の正孔密度 :math:`n_{\mathrm{h}}` は、

.. math::
  n_{\mathrm{h}}
  =
  \int_{-\infty}^{E\mathrm{v}}g_{\mathrm{v}}(E)(1-f(E))\mathrm{d}E
  :label: n(h)

と表される。ここで、 :math:`E_{\mathrm{h}}` は価電子帯のエネルギーである。 :math:`g_{\mathrm{v}}(E)` は価電子帯の状態密度で、

.. math::
  g_{\mathrm{v}}(E)
  =
  \frac{\sqrt{2}{{m^*_{\mathrm{h}}}^{3/2}}}{\pi^2\hbar^3}(E_{\mathrm{v}}-E)^{1/2}
  :label: g_v(E)

である。また、エネルギーが :math:`E` である準位を占有する正孔の個数の統計的期待値の分布は、占有していない電子の期待値分布に等しく、 :math:`1-f(E)` となる。価電子帯のような低エネルギー領域では、 :math:`E-E_{\mathrm{f}}\,\ll\,-k_{\mathrm{B}}T` と仮定できるため、

.. math::
  f(E)
  \approx
  1-\exp\Big(-\displaystyle\frac{E_{\mathrm{f}}-E}{k_{\mathrm{B}}T}\Big)
  :label: f(E)_3

と近似でき、

.. math::
  1-f(E)
  \approx
  \exp\Big(-\displaystyle\frac{E_{\mathrm{f}}-E}{k_{\mathrm{B}}T}\Big)
  :label: 1-f(E)

となる。価電子帯の正孔密度 :math:`n_{\mathrm{h}}` は、(7.13)式の積分を実行することにより得られ、

.. math::
  n_{\mathrm{h}}
  =
  N_{\mathrm{v}}\exp\Big(-\displaystyle\frac{E_{\mathrm{f}}-E_{\mathrm{v}}}{k_{\mathrm{B}}T}\Big)
  :label: n(h)_2

となる。ここで、 :math:`N_{\mathrm{v}}=2\Big(\displaystyle\frac{m^*_{\mathrm{h}}k_{\mathrm{B}}T}{2\pi\hbar^2}\Big)^{3/2}` である。

自由電子と正孔の数が等しいとすると、電荷キャリア密度 :math:`n_{\mathrm{i}}` は、

.. math::
  n_{\mathrm{i}}
  =
  \sqrt{n_{\mathrm{e}}n_{\mathrm{h}}}
  =
  \sqrt{N_{\mathrm{c}}N_{\mathrm{v}}}\exp\Big(-\displaystyle\frac{E_{\mathrm{c}}-E_{\mathrm{v}}}{2k_{\mathrm{B}}T}\Big)
  =
  \sqrt{N_{\mathrm{c}}N_{\mathrm{v}}}\exp\Big(-\displaystyle\frac{E_{\mathrm{g}}}{2k_{\mathrm{B}}T}\Big)
  :label: n(i)

となる。ここで、 :math:`E_{\mathrm{g}}=E_{\mathrm{c}}-E_{\mathrm{v}}` はバンドギャップである。(7.1)式の :math:`n_{\mathrm{e}},\,n_{\mathrm{h}}` を :math:`n_{\mathrm{i}}` で置き換えることにより、

.. math::
  \sigma
  =
  e\,n_{\mathrm{i}}(\mu_{\mathrm{e}}+\mu_{\mathrm{h}})
  =
  \sqrt{N_{\mathrm{c}}N_{\mathrm{v}}}\,e\,(\mu_{\mathrm{e}}+\mu_{\mathrm{h}})\exp\Big(-\displaystyle\frac{E_{\mathrm{g}}}{2k_{\mathrm{B}}T}\Big)
  =
  2\Big(\displaystyle\frac{k_{\mathrm{B}}T}{2\pi\hbar^2}\Big)^{3/2}\,(m^*_{\mathrm{e}}\,m^*_{\mathrm{h}})^{3/4}\,e\,(\mu_{\mathrm{e}}+\mu_{\mathrm{h}})\exp\Big(-\displaystyle\frac{E_{\mathrm{g}}}{2k_{\mathrm{B}}T}\Big)
  :label: conductivity_2

となり、さらに(7.5)式と(7.7)式を代入すると、

.. math::
  \sigma
  =
  2\Big(\displaystyle\frac{k_{\mathrm{B}}T}{2\pi\hbar^2}\Big)^{3/2}\,(m^*_{\mathrm{e}}\,m^*_{\mathrm{h}})^{3/4}\,e^2\,\Big(\displaystyle\frac{\tau_{\mathrm{e}}}{m^*_{\mathrm{e}}}+\frac{\tau_{\mathrm{h}}}{m^*_{\mathrm{h}}}\Big)\exp\Big(-\displaystyle\frac{E_{\mathrm{g}}}{2k_{\mathrm{B}}T}\Big)
  :label: conductivity_3

と導かれる。