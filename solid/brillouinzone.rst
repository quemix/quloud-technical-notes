.. _brillouinzone:

==============================
ブリルアンゾーン
==============================

.. _first-brillouin-zone:

------------------------------------------------
第1ブリルアンゾーンとウィグナー・ザイツ胞
------------------------------------------------

:ref:`periodic_boundary` で見るように、逆格子ベクトル :math:`\boldsymbol G`
だけ異なる波数 :math:`\boldsymbol k` と :math:`\boldsymbol k+\boldsymbol G`
は格子並進に対して同じ位相を与える。そこで、逆格子並進で等価な波数の組から
一つずつ代表を取れる領域を選ぶ。

第1ブリルアンゾーンは、逆空間で原点の逆格子点に最も近い点を集めた領域である。
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

ここで :math:`\delta` はディラックのデルタ関数である。全体の状態密度は対象とする
バンドとスピンの寄与を足す。電子の占有数まで求めるときは、この状態密度に
:ref:`fermi-level-and-occupation` で導入する分布を掛ける。BZ積分を有限個のk点の
和で近似する方法は、:ref:`kpoint_sampling` で説明する。

--------------
参考資料
--------------

* MIT Materials Science, `Lecture 7 <https://wikis.mit.edu/confluence/display/MSEDG/Lecture%2B7>`_.
