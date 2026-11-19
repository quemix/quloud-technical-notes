.. _brillouinzone:

==============================
ブリルアンゾーン
==============================

.. _first-brillouin-zone:

------------------------------------------------
第1ブリルアンゾーンとウィグナー・ザイツ胞
------------------------------------------------

式 :eq:`Bloch` によると、格子並進 :math:`\boldsymbol R` で波動関数に掛かる位相因子は
:math:`e^{i\boldsymbol k\cdot\boldsymbol R}` である。逆格子ベクトル
:math:`\boldsymbol G` に対して :math:`e^{i\boldsymbol G\cdot\boldsymbol R}=1` なので、
:math:`\boldsymbol k` と :math:`\boldsymbol k+\boldsymbol G` は同じ位相因子を与える。
そこで、逆格子並進で等価な波数の組から一つずつ代表を取れる領域を選ぶ。

第1ブリルアンゾーンは、他のどの逆格子点よりも原点に近い波数と、その境界からなる領域である。
これは逆格子のウィグナー・ザイツ胞（Wigner–Seitz cell）にあたり、

.. math::

   |\boldsymbol k|\leq |\boldsymbol k-\boldsymbol G|
   \quad \text{for all }\boldsymbol G\ne\boldsymbol 0

で定まる。つまり、各逆格子点と原点の間の垂直二等分面を考え、それぞれで原点側を
取る。境界にある点どうしが逆格子ベクトルだけ異なる場合は、一方だけを代表とする。
例えば格子定数 :math:`a` の1次元格子なら、最も近い逆格子点は
:math:`G=\pm 2\pi/a` なので、第1ブリルアンゾーンを :math:`-\pi/a<k\leq\pi/a`
と取れる。

逆格子の基本並進ベクトル :math:`\boldsymbol b_1,\boldsymbol b_2,\boldsymbol b_3`
で張る平行六面体も逆格子の基本単位胞である。形は一般に第1ブリルアンゾーンと
異なるが、どちらも逆格子並進で空間を隙間なく埋め、体積は同じである。
実格子の基本単位胞の体積を :math:`\Omega` とすると、

.. math::
   :label: OmegaBZ

   \Omega_{\mathrm{BZ}}=
   \left|\boldsymbol b_1\cdot(\boldsymbol b_2\times\boldsymbol b_3)\right|
   =\frac{(2\pi)^3}{\Omega}

となる。逆格子並進に対して周期的な量については、第1ブリルアンゾーンの各部分を
逆格子並進で移して集めれば平行六面体を構成できるため、どちらで積分しても同じ値になる。

.. _density-of-states:
.. _id3:

------------------------------------
状態数と状態密度（DOS）
------------------------------------

1バンド・1スピンについて、エネルギー :math:`E` 以下にある状態数を単位胞あたりで
数える。バンドのエネルギーを :math:`\varepsilon(\boldsymbol k)` とすると、

.. math::
   :label: n(E)

   n(E)=\frac{1}{\Omega_{\mathrm{BZ}}}
        \int_{\mathrm{BZ}}\Theta(E-\varepsilon(\boldsymbol k))\,\mathrm d\boldsymbol k

となる。:math:`\Theta` は単位ステップ関数である。すべての波数で
:math:`\varepsilon(\boldsymbol k)<E` なら、積分は :math:`\Omega_{\mathrm{BZ}}`
になり、単位胞あたりの状態数は1になる。

状態密度（density of states, DOS）は、単位エネルギー幅あたりの状態数である。
上の状態数をエネルギーで微分して求める。

.. math::
   :label: rho(E)

   \rho(E)=\frac{\mathrm dn(E)}{\mathrm dE}
   =\frac{1}{\Omega_{\mathrm{BZ}}}
    \int_{\mathrm{BZ}}\delta(E-\varepsilon(\boldsymbol k))\,\mathrm d\boldsymbol k

ここで :math:`\delta` はディラックのデルタ関数である。式 :eq:`rho(E)` の
:math:`\rho(E)` は1バンド・1スピン・単位胞あたりの状態密度である。
複数のバンドやスピンを扱うときは、それぞれの寄与を足す。

:ref:`fermi-level-and-occupation` の :math:`f(E)` は、エネルギー :math:`E` の
1状態に電子が入る平均占有数である。:math:`f(E)\rho(E)` は占有された状態の
エネルギーあたりの密度を与える。これをエネルギーで積分すると、同じ規格化での電子数
が得られる。BZ積分を有限個のk点の和で近似する方法は :ref:`kpoint_sampling` で説明する。

--------------
参考資料
--------------

* MIT Materials Science, `Lecture 7 <https://wikis.mit.edu/confluence/display/MSEDG/Lecture%2B7>`_.
